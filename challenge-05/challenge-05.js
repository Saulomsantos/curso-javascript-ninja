/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [1, true, { prop1: 'string' }, 'saulo', null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array){
    return array;
    };

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myVar)[1]);      // true

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(array, int){
    return array[int];
    };

console.log(
    myFunction2(myVar, 1)               // true
);

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar2 = [1, true, { prop1: 'string' }, 'saulo', undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(myVar2, 0));    // 1
console.log(myFunction2(myVar2, 1));    // true
console.log(myFunction2(myVar2, 2));    // { prop1: 'string' }
console.log(myFunction2(myVar2, 3));    // 'saulo'
console.log(myFunction2(myVar2, 4));    // undefined

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
    var livros = {
            'livro1' : {
                quantidadePaginas : 100,
                autor : 'autor1',
                editora : 'editora1'
            },
            'livro2' : {
                quantidadePaginas : 200,
                autor : 'autor2',
                editora : 'editora2'
            },
            'livro3' : {
                quantidadePaginas : 300,
                autor : 'autor3',
                editora : 'editora3'
            }
        };

        return nomeLivro ? livros[nomeLivro] : livros;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(
    book()
);

// {    
//      livro1: { quantidadePaginas: 100, autor: 'autor1', editora: 'editora1' },
//      livro2: { quantidadePaginas: 200, autor: 'autor2', editora: 'editora2' },
//      livro3: { quantidadePaginas: 300, autor: 'autor3', editora: 'editora3' }
// }

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'livro1'
console.log( 'O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do ' + bookName + ' é ' + book(bookName).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.');
