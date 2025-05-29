//7. Mapeamento e Ordenação

const produtos = [
  { nome: "Produto A", preco: 10.99 },
  { nome: "Produto B", preco: 5.99 },
  { nome: "Produto C", preco: 15.99 },
  { nome: "Produto D", preco: 8.99 },
];

function getNomesOrdenadosPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map((produto) => produto.nome);
}

const nomesOrdenados = getNomesOrdenadosPorPreco(produtos);

console.log(nomesOrdenados);




//8. Agrupamento por Propriedade
const vendas = [
  { cliente: "João", total: 100 },
  { cliente: "Maria", total: 200 },
  { cliente: "João", total: 50 },
  { cliente: "Pedro", total: 150 },
  { cliente: "Maria", total: 300 },
];

const totalPorCliente = vendas.reduce((acc, venda) => {
  if (!acc[venda.cliente]) {
    acc[venda.cliente] = 0;
  }
  acc[venda.cliente] += venda.total;
  return acc;
}, {});

console.log(totalPorCliente);


//9. Conversão Entre Formatos

function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

// Exemplos de uso:
const pares = [
  ["nome", "João"],
  ["idade", 30],
  ["cidade", "São Paulo"],
];

const obj = paresParaObjeto(pares);
console.log(obj);
// Saída: { nome: "João", idade: 30, cidade: "São Paulo" }

const paresNovamente = objetoParaPares(obj);
console.log(paresNovamente);
// Saída: [["nome", "João"], ["idade", 30], ["cidade", "São Paulo"]]

