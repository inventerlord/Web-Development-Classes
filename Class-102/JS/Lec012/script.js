class UI{

    static message(target,text,timTime){
        let targetContainer = document.querySelector(target);
        let para = document.createElement('p');
         para.innerHTML = text;
         targetContainer.appendChild(para);

        setTimeout(function () {
            para.remove();
        },timTime);
        
    }

    
}

class Car{

    constructor(model,company){
        this.model = model;
        this.company = company
    }
}
