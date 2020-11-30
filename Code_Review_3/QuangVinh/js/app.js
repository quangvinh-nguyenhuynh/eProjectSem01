// VALIDATE LOGIN
document.getElementById('loginForm').addEventListener('submit', validateAccount);

function validateAccount(e){
    e.preventDefault();
     let error=0;

    const name = document.getElementById('loginUsername');
    const namecheck = "fptaptech123";
    const password = document.getElementById('loginPassword');
    const passwordcheck = "@thebest";
    
    
    if(name.value!=namecheck || password.value!=passwordcheck){
        alert("Your username or password is incorrect!");
        error=1;
    } else {alert("Welcome! Have a good reading day!");
        $("#loginModal").modal('hide');
}
    }



// DONATE US
document.getElementById('donateForm').addEventListener('submit', thankyouMessagage);

function thankyouMessagage(e){
    e.preventDefault();
     let error=0;
        
    const donatorName = document.getElementById('donatorName');

    const donatorEmail = document.getElementById('donatorEmail');
    
    var donateAmount = "";
    var donateMethod="";
    var thankyoumessage="";
    
    
        var donateValue = document.getElementsByName('donateAmount'); 
          
        for(i = 0; i < donateValue.length; i++) { 
            if(donateValue[i].checked) {
           donateAmount = donateValue[i].value; 
        }
        }

        var paymentMethod = document.getElementsByName('paymentMethod');
        for(j = 0; j < paymentMethod.length; j++) { 
            if(paymentMethod[j].checked) {
                donateMethod = paymentMethod[j].value; 
        }
        }

        thankyoumessage = "Thank you " + donatorName.value + "! You have just donated " + donateAmount + " to us via " + donateMethod + "! " + "A recognition certificate has been sent to your email at " + donatorEmail.value + "!"

        alert(thankyoumessage);
        
    }
    


//VALIDATE GET-IN-TOUCH
document.getElementById('contactForm').addEventListener('submit', sendMessage);

function sendMessage(e){
    e.preventDefault();
    document.getElementById('contactName').addEventListener('blur', validatecontactName);
    document.getElementById('contactEmail').addEventListener('blur', validatecontactEmail);
    document.getElementById('contactMessage').addEventListener('blur', validatecontactMessage);
    
    function validatecontactName() {
      const contactName = document.getElementById('contactName');
      const checkcontactName = /^[a-zA-Z]{2,30}$/;
    
      if(!checkcontactName.test(contactName.value)){
        contactName.classList.add('is-invalid');
      } else {
        contactName.classList.remove('is-invalid');
      }
    }

    
    function validatecontactEmail() {
      const contactemail = document.getElementById('contactEmail');
      const checkcontactEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
      if(!checkcontactEmail.test(contactEmail.value)){
        contactEmail.classList.add('is-invalid');
      } else {
        contactEmail.classList.remove('is-invalid');
      }
    }

    function validatecontactMessage() {
        const contactName = document.getElementById('contactMessage');
        const checkcontactMessage = /^[a-zA-Z]{1,1000}$/;
      
        if(!checkcontactMessage.test(contactMessage.value)){
            contactMessage.classList.add('is-invalid');
        } else {
            contactMessage.classList.remove('is-invalid');
        }
      }

      alert("Thank you for your message! We will contact you shortly!");
    }
    
    





