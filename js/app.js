const moment = require('moment');
const fs = require('fs');
const petshop = "PETSHOP DH";
const nomeArquivo = 'js/pets.json';

let petsJSON = fs.readFileSync(nomeArquivo);
let arquivoPets = JSON.parse(petsJSON);

const atualizarJson = () => {
    let listaJson = JSON.stringify(arquivoPets);
    fs.writeFileSync(nomeArquivo, listaJson, 'utf-8');
};


const listarPets = (listaDePets) => {
    for (pet of listaDePets) {
        console.log(pet);
    }
};

const vacinarPet = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        atualizarJson();
        console.log("Seu pet foi vacinado");
    } else {
        console.log("Pet já vacinado");
    }
};

const campanhaVacina = (listaPets) => {
    let totalVacinados = 0;
    for (let i = 0; i < listaPets.length; i++) {
        if (!listaPets[i].vacinado) {
            listaPets[i].vacinado = true;
            totalVacinados++;
        }
    }
    atualizarJson();
    console.log(`Parabéns, ${totalVacinados} pets foram vacinados nessa campanha!`);
};

const adicionarPet = (infoPet) => {
    arquivoPets.pets.push(infoPet);
    atualizarJson();
    console.log(`${infoPet.nome} está cadastrado no nosso sistema`);
};

const darBanhoPet = (pet) => {
    if (!pet.servicos.indexOf('banho')) {
        pet.servicos.push("banho");
        atualizarJson();
    } else {
        console.log(`${pet.nome} já está cheirose`);
    }
};

const buscarPet = (nomePet) => {
    const petEncontrado = arquivoPets.pets.find((pet) => {
        return pet.nome == nomePet;
    });
    return petEncontrado;
};

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);
    servico(pet);
    console.log('Até mais!');
};

const addInfoCastrado = (listarPets) => {
    let listaAtualizada = listarPets.map((pet) => {
        pet.castrado = true;
        return pet;
    });

    arquivoPets.pets = listaAtualizada;
    atualizarJson();
}

console.log(arquivoPets.pets);