package br.maua;

import org.apache.zookeeper.*;
import org.apache.zookeeper.data.Stat;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

public class EleicaoDeLider {
    private static final String ZNODE_TESTE_WATCHER = "/teste_watch";
    private static final String HOST = "10.2.131.164";
    private static final String PORTA = "2181";
    private static final int TIMEOUT = 5000;
    private static final String NAMESPACE_ELEICAO = "/eleicao";;
    private String nomeDoZNodeDesseProcesso;
    private ZooKeeper zooKeeper;

//    private class TesteWatcher implements Watcher {
//        @Override
//        public void process(WatchedEvent event) {
//
//        }
//    }

    public void registrarWatcher(){
        try{
            //Watcher watcher = new TesteWatcher();
            Watcher watcher = (event) -> {
                //NodeCreated
                //NodeDeleted
                System.out.println(event);
                switch(event.getType()){
                    case NodeCreated -> System.out.println("ZNode criado");
                    case NodeDeleted -> System.out.println("ZNode deletado");
                    case NodeDataChanged -> System.out.println("Dados do ZNode alterados");
                    case NodeChildrenChanged -> System.out.println("Evento envolvendo filhos");
                }
                registrarWatcher();
            };
            Stat stat = zooKeeper.exists(ZNODE_TESTE_WATCHER, watcher);
            //se o ZNode existe
            if (stat != null){
                byte [] bytes =
                    zooKeeper.getData(ZNODE_TESTE_WATCHER, watcher, stat);
                var dados = new String(bytes);
                System.out.println("Dados: " + dados);
                List<String> filhos = zooKeeper.getChildren(ZNODE_TESTE_WATCHER, watcher);
                System.out.println("Filhos: " + filhos);
            }
        }
        catch(KeeperException | InterruptedException e){
            e.printStackTrace();
        }

    }


    public static void main( String[] args ) throws Exception {
        System.out.printf( "Método main executando na thread: %s\n", Thread.currentThread().getName() );
        //operador de inferência de tipo: Java 10+
        var eleicaoDeLider = new EleicaoDeLider();
        eleicaoDeLider.conectar();
        eleicaoDeLider.realizarCandidatura();
        eleicaoDeLider.elegerOLider();
        eleicaoDeLider.registrarWatcher();
        eleicaoDeLider.executar();
        eleicaoDeLider.fechar();
        //Thread.sleep( 16000 );
    }

    public void conectar () throws IOException {
        zooKeeper  = new ZooKeeper(
            String.format("%s:%s", HOST, PORTA),
            TIMEOUT,
//            expressão lambda, Java 8+
            (event) -> {
                if(event.getType() == Watcher.Event.EventType.None){
                    if(event.getState() == Watcher.Event.KeeperState.SyncConnected){
                        System.out.println("Conectou");
                        System.out.printf("Evento aconteceu na thread: %s\n", Thread.currentThread().getName());
                    }
                    else if(event.getState() == Watcher.Event.KeeperState.Disconnected){
                        synchronized (zooKeeper){
                            System.out.println("Desconectado");
                            System.out.printf("Evento aconteceu na thread: %s\n", Thread.currentThread().getName());
                            zooKeeper.notify();
                        }
                    }
                }
            }
        );
    }

    public void executar() throws Exception{
        synchronized (zooKeeper){
            zooKeeper.wait();
            System.out.println("Depois do wait, thread notificada...");
        }
    }

    public void fechar() throws Exception{
        zooKeeper.close();
    }

    public void realizarCandidatura() throws InterruptedException, KeeperException {
        // /eleicao/cand_
        var prefixo = String.format("%s/cand_", NAMESPACE_ELEICAO);
        var pathInteiro = zooKeeper.create(
            prefixo,
            new byte[]{},
            ZooDefs.Ids.OPEN_ACL_UNSAFE,
            CreateMode.EPHEMERAL_SEQUENTIAL
        );
        System.out.println("Candidatura: " + pathInteiro);
        this.nomeDoZNodeDesseProcesso = pathInteiro.replace(
            String.format("%s/", NAMESPACE_ELEICAO),
            ""
        );
    }

    public void elegerOLider() throws Exception{
        List<String> candidatos = zooKeeper.getChildren(NAMESPACE_ELEICAO, false);
        Collections.sort(candidatos);
        var oMenor = candidatos.get(0);
        if(nomeDoZNodeDesseProcesso.equals(oMenor)){
            System.out.printf("Me chamo %s e sou o líder\n", nomeDoZNodeDesseProcesso);
        }
        else{
            System.out.printf(
                "Me chamo %s e não sou o líder. O líder é o %s\n",
                nomeDoZNodeDesseProcesso,
                oMenor
            );
        }
    }
}
