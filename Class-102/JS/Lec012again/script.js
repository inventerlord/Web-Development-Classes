class Car{
    //here
    constructor(model,manufacture,color){
        this.model = model;
        this.comp = manufacture;
        this.color = color;
    }
    printCarInfo(){
        console.log(`Car Model = ${this.model}\nCar Manufacture = ${this.comp}\nColor = ${this.color}\n`);
    }
}

class UI{
    static pritnHtml(car,targettag){
        let para = document.createElement("p");
        para.innerHTML = `Model = ${car.model}<br>Manufacture = ${car.comp}<br>Color = ${car.color}<br>`;
        let target = document.querySelector(targettag);
        target.appendChild(para);

    }
}


