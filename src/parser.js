//cheerio es una biblioteca que sirve para extraer datos de una pagina web
const  cheerio  = require("cheerio");

function parse(html){
const $ = cheerio.load(html)
const lista = []
$("span.titleline a").each((i,a)=>{
    const titulo = $(a).text()
    const link = $(a).attr("href")
    lista.push({titulo,link})
    
})
return lista
}
module.exports = {parse};
