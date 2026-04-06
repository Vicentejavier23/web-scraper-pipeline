const { get } = require  ("./src/scraper")
const { parse } = require ("./src/parser")
//se utilizo axios porque es mas robusto que fetch y sirve para obtener el html
// directo con response.data
async function main() {
   const html =  await get()
   const lista = parse(html)
   console.log(lista)
}
main()