class Name{
    constructor(name){
        this.name = name
    }
}

class Store{
    static saveData(name){
        let newName = new Name(name)
        sessionStorage.setItem('names',newName.name)
    }
    static getData(){
        let name = sessionStorage.getItem('names');
        return name;
    }
}

function addName(){
    Store.saveData("Mustafa");
}
function getName(){
    document.getElementById("getVal").innerHTML = Store.getData();
}