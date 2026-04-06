//para realizar un exportacion de la funcion
module.exports={get}
const axios = require("axios")

async function get() {
    const response = await axios.get("https://news.ycombinator.com/");
    return response.data
}