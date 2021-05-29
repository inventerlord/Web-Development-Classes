



let regForm = document.getElementById('myform');
let uname = document.getElementById('name');
let uemail = document.getElementById('email');
let upassword = document.getElementById('pass');
let ucpassword = document.getElementById('cpass');

//errors
let nameError = document.getElementById('nameerr');
let errors = [0,0,0,0];
function checkName(){
    if(uname.value == ""){
        nameError.style.display = "block";
        nameError.setAttribute('class','error')
        errors[0] = 1;
        nameError.innerHTML = "Name Cannot be empty";
        // uname.className = "error-border";
        uname.setAttribute("class","error-border")
    }
    else if(uname.value.length < 3 ){
        alert(uname.value.length);
        nameError.style.display = "block";
        nameError.setAttribute('class','error')
        errors[0] = 1;
        nameError.innerHTML = "Name should greater than 3 character";
        // uname.className = "error-border";
        uname.setAttribute("class","error-border")
    }
    else{
        nameError.style.display = "none";
        nameError.setAttribute('class','success')
        errors[0] = 0;
        uname.className = "success-border";
       // uname.setAttribute('class','success-border')
    }
}
regForm.addEventListener('submit',function(e){
    let errors = [0,0,0,0];
    e.preventDefault();

    checkName();
    

});