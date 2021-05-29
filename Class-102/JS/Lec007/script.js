function createImage(){

}


let app = document.getElementById('app');

let namefield = document.createElement('input');
namefield.setAttribute('type','file');
namefield.setAttribute('class','active');

let lab = document.createElement('label');
lab.innerHTML = "Hi I am A programmer";

app.appendChild(lab);

app.appendChild(namefield)