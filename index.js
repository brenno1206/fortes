//BÁSICOS - COMUNS A TODOS

const campo = document.querySelector("div#tabela");
const tabela = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

//CABEÇALHO 1

const tr_cab1 = document.createElement("tr");
const itens = ["Nome", "Formação", "Função", "Carga Horária Semanal"];

for (const item of itens) {
    const th = document.createElement("th");
    th.innerHTML = item;
    tr_cab1.appendChild(th);
}
function func() {

    thead.appendChild(tr_cab1);
    tabela.appendChild(thead);
    var nome = document.querySelector("#unico > input:nth-child(1)").value;
    var form = document.querySelector("#unico > input:nth-child(3)").value;
    var func = document.querySelector("#unico > input:nth-child(5)").value;
    var carghor = document.querySelector("#unico > input:nth-child(7)").value;

    const tr_func = document.createElement("tr");

    const dados = [nome, form, func, carghor];

    for (const dado of dados) {
        const td = document.createElement("td");
        td.innerHTML = dado;
        tr_func.appendChild(td);
    }
    tbody.appendChild(tr_func);
    tabela.appendChild(tbody);
    campo.appendChild(tabela);


}

// CABEÇALHO 2

const tr_cab2 = document.createElement("tr");
const babados = ["Etapa", "Valor", "Início", "Término"];

for (const babado of babados) {
    const th = document.createElement("th");
    th.innerHTML = babado;
    tr_cab2.appendChild(th);
}

function crono() {
    
    thead.appendChild(tr_cab2);
    tabela.appendChild(thead);
    var etapa = document.querySelector("#unico > input:nth-child(1)").value;
    var valor = document.querySelector("#unico > input:nth-child(3)").value;
    var inicio = document.querySelector("#unico > input:nth-child(5)").value;
    var fim = document.querySelector("#unico > input:nth-child(7)").value;

    const tr_cro = document.createElement("tr");

    const leros = [etapa, valor, inicio, fim];

    for (const lero of leros) {
        const td = document.createElement("td");
        td.innerHTML = lero;
        tr_cro.appendChild(td);
    }
    tbody.appendChild(tr_cro);
    tabela.appendChild(tbody);
    campo.appendChild(tabela);

}

// CABEÇALHO 3


const tr_cab3 = document.createElement("tr");
const apples = ["Especificação", "Unidade", "Quantidade", "Valor Unitário", "Valor Adicional"];

for (const apple of apples) {
    const th = document.createElement("th");
    th.innerHTML = apple;
    tr_cab3.appendChild(th);
}

function mat() {
    thead.appendChild(tr_cab3);
    tabela.appendChild(thead);
    var espec = document.querySelector("#unico > input:nth-child(1)").value;
    var uni = document.querySelector("#unico > input:nth-child(3)").value;
    var qnd = document.querySelector("#unico > input:nth-child(5)").value;
    var valu = document.querySelector("#unico > input:nth-child(7)").value;
    var vala = document.querySelector("#unico > input:nth-child(9)").value;
    const tr_eq = document.createElement("tr");

    const fionas = [espec, uni, qnd, valu, vala];

    for (const fiona of fionas) {
        const td = document.createElement("td");
        td.innerHTML = fiona;
        tr_eq.appendChild(td);
    }
    tbody.appendChild(tr_eq);
    tabela.appendChild(tbody);
    campo.appendChild(tabela);
}