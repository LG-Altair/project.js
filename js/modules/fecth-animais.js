import initAnimaNumeros from './anima-numeros.js';

export default function initanimaisNumeros(){
  async function fecthAnimais(url){
    try{
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();
    const numerosGrid = document.querySelector('.numeros-grid');
    
    animaisJSON.forEach(animal => {
      const divAnimal = creatAnimal(animal);
    numerosGrid.appendChild(divAnimal);
    });
    initAnimaNumeros();
  } catch(erro){
    console.log(Error(erro));
  }
    }
    
    function creatAnimal(animal){
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
    }
    
    fecthAnimais('./animais.json');
}

