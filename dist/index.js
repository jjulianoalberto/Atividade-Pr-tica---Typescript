"use strict";
// Exercicio 1
Object.defineProperty(exports, "__esModule", { value: true });
function calcularMedia(n1, n2) {
    const media = (n1 + n2) / 2;
    return {
        media,
        aprovado: media >= 6,
    };
}
console.log(calcularMedia(8, 9));
function calcularMediaPonderada(listaNotas) {
    const somaNotasPesadas = listaNotas.reduce((acc, { nota, peso }) => acc + nota * peso, 0);
    const somaPesos = listaNotas.reduce((acc, { peso }) => acc + peso, 0);
    return somaNotasPesadas / somaPesos;
}
console.log(calcularMediaPonderada([{ nota: 7, peso: 2 }, { nota: 5, peso: 1 }, { nota: 10, peso: 4 }]));
function criarCarteira() {
    return {
        saldo: 0,
        transacoes: [],
    };
}
function adicionarTransacao(carteira, tipo, valor) {
    if (tipo === 'saida' && valor > carteira.saldo) {
        throw new Error('Saldo insuficiente');
    }
    if (tipo === 'entrada') {
        carteira.saldo += valor;
    }
    else {
        carteira.saldo -= valor;
    }
    carteira.transacoes.push({ tipo, valor });
}
const carteira = criarCarteira();
adicionarTransacao(carteira, 'entrada', 150);
adicionarTransacao(carteira, 'saida', 130);
console.log(carteira);
const produtos = [];
function cadastrarProduto(produto) {
    produtos.push(produto);
}
function listarProdutos() {
    return produtos;
}
function excluirProduto(id) {
    const index = produtos.findIndex(produto => produto.id === id);
    if (index > -1) {
        produtos.splice(index, 1);
    }
    else {
        throw new Error('Produto não encontrado');
    }
}
const produto1 = { id: 1, nome: 'Produto', preco: 50 };
cadastrarProduto(produto1);
const produto2 = { id: 2, nome: 'Produto2', preco: 20 };
cadastrarProduto(produto2);
console.log(listarProdutos());
excluirProduto(1);
console.log(listarProdutos());
function mostrarInformacoesUsuario(usuario) {
    return `${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, salário ${usuario.salario !== undefined ? `R$ ${usuario.salario}` : 'N/A'}`;
}
const user = { nome: 'Juliano', idade: 38, ocupacao: 'Estudante FullStack', salario: 5000 };
console.log(mostrarInformacoesUsuario(user));
function mostrarInformacoesDiretor(diretor) {
    return `Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, salário ${diretor.salario !== undefined ? `R$ ${diretor.salario}` : 'N/A'}`;
}
const diretor = { nome: 'Juliano', idade: 38, nivelComissionamento: 3, salario: 5000 };
console.log(mostrarInformacoesDiretor(diretor));
function mostrarInformacoes(pessoas) {
    pessoas.forEach(pessoa => {
        if ('nivelComissionamento' in pessoa) {
            console.log(mostrarInformacoesDiretor(pessoa));
        }
        else {
            console.log(mostrarInformacoesUsuario(pessoa));
        }
    });
}
const pessoas = [user, diretor];
mostrarInformacoes(pessoas);
