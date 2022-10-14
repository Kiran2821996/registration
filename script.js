let page1 = document.querySelector(".part1")
let page2 = document.querySelector(".part2")
let page3 = document.querySelector(".part3")
let pag1btn = document.querySelector(".pag1btn")
let pag2btn = document.querySelector(".pag2btn")
let pag3btn = document.querySelector(".pag3btn")


pag1btn.addEventListener("click",()=>{
 
    page1.classList.add('page1-n')
    page2.classList.remove('page2-n')
 
   
    console.log("first")
})
pag2btn.addEventListener("click",()=>{
    page2.classList.add('page2-n')
    page3.classList.remove('page3-n')
    console.log("second")
})
pag3btn.addEventListener("click",()=>{
    page3.classList.add('page3-n')
    page1.classList.remove('page1-n')
    alert("Registered Succuessfully !!!")
    console.log("third")
})

function formValidation1() {
    var name =
        document.forms.RegForm.Name.value;
    var email =
        document.forms.RegForm.EMail.value;
    var phone =
        document.forms.RegForm.Telephone.value;
    var what =
        document.forms.RegForm.Subject.value;
    var password =
        document.forms.RegForm.Password.value;
    var address =
        document.forms.RegForm.Address.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regPhone=/^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
    var regName = /\d+$/g;                                    // Javascript reGex for Name validation

    if (name == "" || regName.test(name)) {
        window.alert("Please enter your name properly.");
        name.focus();
        return false;
    }

    if (address == "") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }
     
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
      
    if (password == "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }

    if(password.length <6){
        alert("Password should be atleast 6 character long");
        password.focus();
        return false;

    }
    if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }

    if (what.selectedIndex == -1) {
        alert("Please enter your course.");
        what.focus();
        return false;
    }

    return true;
}