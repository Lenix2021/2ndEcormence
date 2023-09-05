///Getting the id of the input tags from the html page
let signup=document.getElementById("sign");
let close = document.getElementById("close");
let password =document.getElementById("pwd");
let confirm_password=document.getElementById("pwdc");
let signingup = document.getElementById("snup");
let chck =document.getElementById("chk");
let check_confirm=document.getElementById("chkc");
let email=document.getElementById("em");
let sidebar_menubar = document.getElementById("menu-icon");
let close_sidebar=document.getElementById("close-menusidebar")

/////////////////For the signup button////////////////////
signup.addEventListener("click",()=>{
    let sig=document.querySelector(".signup");
    sig.style.visibility="visible";
    const bodyoverlay = document.createElement("div")
    bodyoverlay.classList.add("overlay")
    setTimeout(() => {
        document.querySelector("body").append(bodyoverlay)
        document.querySelector("body").style.userSelect="none";
    }, 1000);
})

///////////this is to close and make sure the signup form dissappear////
close.addEventListener("click",()=>{
    let sig=document.querySelector(".signup")
    sig.style.visibility="hidden";
    const overlay=document.querySelector(".overlay")
    document.querySelector("body").removeChild(overlay);
    document.querySelector("body").style.userSelect="none"
})


/////////////this is to save the details of the person/////
signingup.addEventListener("click",(e)=>{
    e.preventDefault();
    let p1 = password.value;
    let p2 = confirm_password.value;
    if (p1==="" && p2==="" && email==="") {
        alert("Please the fileds cannot be empty")
    }
    else if (!(p1===p2)) {
        alert("Password does not match")
    } else {
        alert("Please your data has been recieved sucessfully")
        let sig =document.querySelector(".signup")
        sig.style.visibility="hidden";
        const overlay=document.querySelector(".overlay")
        document.querySelector("body").removeChild(overlay)
        password.value="";
        signingup.value="";
        chck.value="";
        email.value="";
    } 
})

///////this is to show the password to the user in text form///////////////////
chck.onchange=(e)=>{
    password.type=chck.checked ? "text" : "Password";
}
check_confirm.onchange=(e)=>{
    confirm_password.type=check_confirm.checked ?"text":"Password";
}

sidebar_menubar.addEventListener("click",()=> {
    let side=document.getElementById("menu-sidebar")
    side.style.visibility="visible"
    let overlay=document.createElement("div");
    overlay.classList.add("overlay");
    setTimeout(() => {
        document.querySelector("body").append(overlay);
        document.querySelector("body").style.userSelect="none";
    }, 300);
})

close_sidebar.addEventListener("click",()=>{
    let side=document.getElementById("menu-sidebar")
    side.style.visibility="hidden";
    const over=document.querySelector(".overlay");
    document.querySelector("body").removeChild(over)
    document.querySelector("body").style.userSelect="all";
})




