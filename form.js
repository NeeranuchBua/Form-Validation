document.getElementById(
    "form",
    addEventListener("submit",(e) =>{
        e.preventDefault();
        const firstname = document.getElementById("fname").value;
        const lastname = document.getElementById("lname").value;
        const username = document.getElementById("uname").value;
        const password = document.getElementById("pass").value;
        const age = document.getElementById("age").value;
        const country = document.getElementById("country").value;
        const email = document.getElementById("mail").value;
        console.log('test');
        if(!username || !password || !firstname || !lastname || !age || !country || !email){
            return alert("Please fill all required fields!");
        }
        // if(validateUsername(username)){
        //     return alert("User must be more at least 5 characters (can 0-9 ,-,_)");
        // }
        // if(validatePassword(password)){
        //     return alert("Password must be at least 8 characters,containing **A-Z a-z 0-9 and symbols**");
        // }
        // if(validateFirstname(firstname)){
        //     return alert("Fill your firstname");
        // }
        // if(validateLastname(lastname)){
        //     return alert("Fill your lastname");
        // }
        // if(validateAge(age)){
        //     return alert("Select your age");
        // }
       
        // if(validateEmail(email)){
        //     return alert("Email must be of the form abc@def.ghi");
        // }
        window.location.href = "test.html";
        return alert("Successful");
    })
);

// function validateAge(age){
//     if (age >17){
//     return false;
//     }
   
// }

// function validateUsername(username){
//     if (username.length > 4){
//     return false;
//     }
   
// }

// function validatePassword(password){
//     var regex =  /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{7,8}$/;
//     if(password.match(regex)){

//     //if (RegExp("^(?=.*[A-Za-z])(?=.#d)[A-Za-zd]{8,}$", password)){
//         return true;
//     }
   
// }
// function ValidateEmail(email) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
// }

function ValidateForm(e) {
     e.preventDefault()
    let x = document.forms["fname"]["lname"]["mail"]["uname"]["pass"]["age"]["country"].value;
    
    let firstname = document.forms["fname"]
        if (firstname.length > 1){
            alert("Fill your firstname");
        return false;
        }


    let lastname = document.forms["lname"]
        if (lastname.length > 1){
            alert("Fill your lastname");
        return false;
        }  


    let username = document.forms["uname"]
        var regex =  /^(?=.[a-zA-Z0-9]){,5}$/;
        if(username.match(regex)){
            alert("User must be more at least 5 characters (can 0-9 ,-,_)");
        return false;
        }
        

    let password = document.forms["pass"]    
        var regex =  /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{7,15}$/;
        if(password.match(regex)){
            alert("Password must be at least 8 characters,containing **A-Z a-z 0-9 and symbols**");
        return false;
    }
   
    
    let age = document.forms["age"]
        if (age > 17)
        {
            alert("Select your age");
        return false;
        }  
    // let country = document.forms["country"]
    //     if (country=1)
    //     {
    //     return false;
    //     }  
    let email = document.forms["mail"]
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

         if (email.match(validRegex)) {
            alert("Email must be of the form abc@def.ghi");
  
      return false;
      }
      
    window.location.href="test.html";
    if (x == "") {
      alert("Please fill all required fields!");
      return false;
    }else{
        window.location.href = 'test.html';
        console.log('else in here')

    }
  }