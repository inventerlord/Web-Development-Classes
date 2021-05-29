



let regForm = document.getElementById('myform');
let uname = document.getElementById('name');
let uemail = document.getElementById('email');
let upassword = document.getElementById('pass');
let ucpassword = document.getElementById('cpass');


regForm.addEventListener('submit',function(e){
    e.preventDefault();

    if(uname.value == ""){
        alert('name should not be empty');
    }

});