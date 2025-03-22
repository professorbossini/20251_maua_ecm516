const q = 'Itu'
const appid = 'ef0b0973b783e0614ac87612ec04344b'
const cnt = '2'
const units = 'metric'
const baseURL = 'api.openweathermap.org/data/2.5/forecast'
const lang = 'pt_br'
const url = `https://${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`
console.log(url)