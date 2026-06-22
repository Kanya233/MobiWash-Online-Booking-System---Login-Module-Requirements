function validateLogin(){

    // STOP FORM REFRESH (IMPORTANT FIX)
    event.preventDefault();


    let username = document.getElementById("uname").value;
    let password = document.getElementById("pwd").value;


    if(username === correctUsername && password === correctPassword){

        window.location.href = "index.html";

    }
    else{

        document.querySelector(".modal").style.display = "block";

    }

    return false;
}

function toggleNav(){

    let sidebar = document.querySelector(".nav-sidebar");
    let button = document.querySelector(".btn-toggle-nav");

    sidebar.classList.toggle("open");
    button.classList.toggle("rotate");

}// LOGIN DETAILS
let correctUsername = "Kanya";
let correctPassword = "24689";


// LOGIN FUNCTION (called from onclick)
function validateLogin(){

    // Stop page refresh (IMPORTANT FIX)
    event.preventDefault();

    let username = document.getElementById("uname").value;
    let password = document.getElementById("pwd").value;

    if(username === correctUsername && password === correctPassword){

        // go to home page
        window.location.href = "index.html";

    }
    else{

        document.querySelector(".modal").style.display = "block";

    }

    return false;
}


// CLOSE MODAL
function dismissModal(){

    document.querySelector(".modal").style.display = "none";

}