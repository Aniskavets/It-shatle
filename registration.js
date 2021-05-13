const users = [];

document.getElementById("registration").onclick = function () {

    const email = document.getElementById("e-mail").value;
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("rePassword").value; 

    if (password == rePassword) {

        if(users.find((element) =>  element.email === email)){
            alert("Иди, подмойся");
            return;
        }

        users.push(new User(email, password));
            
       
     
    }
    
    console.log(users);

    
        
};