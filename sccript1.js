function validateForm()                                    
{ 
    var name = document.getElementById("name");               
    var email=document.getElementById("_email");
    var msg=document.getElementById("msg");
   
    if (!isNaN(name.value)||name.value == ""||email.value == ""||msg.value =="")                                  
    { 
      
        document.getElementById("name1").style.backgroundColor="rgb(201, 194, 194)";
        if (name.value == ""||isNaN(name.value)==false)    
        {    document.getElementById("name1").innerHTML="Veuillez remplir le champ de <strong> Nom </strong>!!";
             name.focus(); 
            document.getElementById("name").style.backgroundColor="wheat";
            return false; 
        }
        else
        {        if (email.value=="")                                  
                  {   document.getElementById("name1").innerHTML="Veuillez remplir le champ de <strong> email </strong>!!";
                  email.focus(); 
                document.getElementById("email").style.backgroundColor="wheat";
                 return false; 
                 }
                 else
                 {
                    if (msg.value =="")    
                     {  document.getElementById("name1").innerHTML="Veuillez remplir le champ de <strong> message </strong>!!";
                     msg.focus(); 
                     document.getElementById("msg").style.backgroundColor="wheat";
                     return false;
                      } 
                        }
                 }  
          }
        return false; 
    }
  
  
    const cookieContainer = document.querySelector(".cookie-container");
    const cookieButton = document.querySelector(".cookie-btn");
    cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});
setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);


function retourner(){
  window.close("traitement.html");
  window.open("index.html");
}
