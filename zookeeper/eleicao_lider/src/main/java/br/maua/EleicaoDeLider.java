package br.maua;

import org.apache.zookeeper.WatchedEvent;
import org.apache.zookeeper.Watcher;
import org.apache.zookeeper.ZooKeeper;

import java.io.IOException;

public class EleicaoDeLider {
    private static final String HOST = "localhost";
    private static final String PORTA = "2181";
    private static final int TIMEOUT = 5000;
    private ZooKeeper zooKeeper;
    public static void main( String[] args ) throws Exception {
        System.out.printf( "Método main executando na thread: %s\n", Thread.currentThread().getName() );
        //operador de inferência de tipo: Java 10+
        var eleicaoDeLider = new EleicaoDeLider();
        eleicaoDeLider.conectar();
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
}
