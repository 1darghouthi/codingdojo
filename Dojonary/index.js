function signIn(element){
    // console.log("Hellooo");
    // if (element.innerText === "Register"){
    //     var userName = prompt("Please Enter You Name")
    //     var userEmail = prompt("Please Enter You Email")
    //     var userPassword = prompt("Please Enter You Password")
    //     alert("Thank you " + userName)

        // target the login button
        var login = document.getElementById("login") 
        login.innerHTML = "Logout"
        // change the inner text of the register button to show the "username"
        element.innerText = userName

    }
    if(element.innerText === "Login"){
        alert("Try to Register Please 👈⏮◀⬅↩")
    }


