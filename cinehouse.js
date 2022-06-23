let cinema = 'CineHouse'
let catalogo = require ('./database/catalogo.json');
console.log(catalogo)

function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) {
  const novoFilme = {
    codigo:codigo,
    titulo: titulo,
    duracao: duracao,
    atores: atores,
    anoDeLancamento: anoDeLancamento,
    emCartaz: emCartaz,
    }

  catalogo.filmes.push(novoFilme)
}

//adicionarFilme(3, "A Origem", 3, "Leonardo DiCaprio", 2010, true)
//console.log(catalogo)


function buscarFilme (codigo) {
    for (let i=0; i<catalogo.length; i++) {
        if (catalogo[i].codigo == codigo) {
            return catalogo[i];
        }
    }
    return undefined;
}

function alterarStatusEmCartaz(codigo, emCartaz) {
    for (let i = 0; i < catalogo.length; i++) {
        if (catalogo[i].codigo == codigo) {
            catalogo[i].emCartaz = emCartaz;
            console.log(`Filme com código: ${codigo} teve sua propriedade "Em cartaz" alterada`)
        }
    }
}

//alterarStatusEmCartaz(1, false) 
