const dataContainer = document.querySelector('.infolist');
const generateButton = document.querySelector('.genbtn');
const imgContainer = document.querySelector('.cardimg');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


buildHTML = async function(id,name,status,species,gender,image,origin){
    const imghtml = `<img src=${image}>`
    const list = `<li>ID: ${id}</li>
    <li>Name: ${name}</li>
    <li>Status: ${status} ${(status == 'Alive')? '🌱':((status == 'Dead')?'💀': '❓')}</li>
    <li>Species: ${species}</li>
    <li>Gender: ${gender}</li>
    <li>Origin: ${origin.name}</li>`;
    dataContainer.innerHTML = list;
    imgContainer.innerHTML = imghtml;
}


const loadCharacter = async function(id){
    console.log("Generating...")
    let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    let data = await response.json();
    const {name,status,species,gender,image,origin} = data;
    await buildHTML(id,name,status,species,gender,image,origin);
}

generateButton.addEventListener('click',()=> loadCharacter(getRndInteger(1,826)));