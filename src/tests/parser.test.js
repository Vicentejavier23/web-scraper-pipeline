const { parse } = require("../parser")

test("primer test ",() =>{
    const html = `
    <span class="titleline">
    <a href="https://htmldeprueba.com"> mi titulo falso</a>
    </span>
    `
    const lista = parse(html)
    expect(lista.length).toBe(1) //tobe()realiza que el valor contenga 1 elemento
})
test("segundo test ",() =>{
    const html1= `
    <span class="titleline">
    <a> mi titulo falso</a>
    </span>
    `
    const lista1 = parse(html1)
    expect(lista1.length).toBe(1)
})
