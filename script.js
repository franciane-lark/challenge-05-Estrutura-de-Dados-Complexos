// Crie um array que receba 5 itens e exiba no console.
let nomes = ["chapéu", "vassoura","varinha","caldeirão","magia"];

for(let itens = 0; itens < nomes.length; itens++){
    console.log(`O elemento de index ${itens} tem o nome ${nomes[itens]}`);
}
//ou
console.log(nomes);

// Utilize um método para adicionar um nome ao inicio do array.
const novosNomes = nomes.unshift("bruxaria","ritual");
console.log(nomes);

// Utilize um método para remover o último nome do array.
const retirarNomes = nomes.pop();
console.log(nomes);

// Utilize um método para adicionar dois nomes ao fim do array
const adicionarNomes = nomes.push("cálice","pedra");
console.log(nomes);

// Utilize um método para remover o primeiro nome do array.
const removerNome = nomes.shift();
console.log(nomes);

// Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort();
console.log(numbers);
