document.getElementById("form").reset();
const emailInput = document.getElementById("email");
const btnSubmit = document.getElementById("submit");

const form = document.getElementById("form");

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const expReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailInput.value.match(expReg)) {
        // console.log("correct");
        form.classList.remove("error");
    } else {
        // console.log("error");
        form.classList.add("error");
    }
});


// GetAccess form 
document.getElementById("formAccess").reset();
const eInput = document.getElementById("emailSub");
const btnSub = document.getElementById("submitEmail");

const formAcc = document.getElementById("formAccess");

btnSub.addEventListener("click", (event) => {
    event.preventDefault();
    const expReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (eInput.value.match(expReg)) {
        // console.log("correct");
        formAcc.classList.remove("error");
    } else {
        // console.log("error");
        formAcc.classList.add("error");
    }
});