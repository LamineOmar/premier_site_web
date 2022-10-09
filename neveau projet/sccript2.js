

function blink(a){
    if(a.style.visibility == "visible")
    {a.style.visibility = "hidden";}
    else{a.style.visibility = "visible";}
}
    setInterval('blink(vi)',3000);
    setInterval('blink(name7)',500);
//valide
    function valide(){
        var name=document.getElementById('name');
        var email=document.getElementById('email');
        var dn=document.getElementById('dn');
        var ln=document.getElementById('ln');
        var vil=document.getElementById('ville');
        var tel=document.getElementById('tel');
        var ph=document.getElementById('file');
       

        if(name.value==""||isNaN(name.value)==false){
            document.getElementById('name1').innerHTML='Entrer votre <strong> Nom </strong>(seulement les lettres)!!';
            document.getElementById('name').style.backgroundColor='wheat';
            name.focus(); 
            return false;
        }
        
        if(email.value==""){
            document.getElementById('name2').innerHTML="Entrer votre <strong> L'email </strong>!!";
            document.getElementById('email').style.backgroundColor='wheat';
            email.focus(); 
            return false;
        }
    
             
        if(dn.value==""){
            document.getElementById('name3').innerHTML="Entrer votre <strong> Date de naissance </strong>!!";
            document.getElementById('dn').style.backgroundColor='wheat';
            dn.focus(); 
            return false;
        }
        
        if(ln.value==""){
            document.getElementById('name4').innerHTML="Entrer votre <strong> lieu de naissance </strong>!!";
            document.getElementById('ln').style.backgroundColor='wheat';
            ln.focus(); 
            return false;
        }
       
          
        if(vil.value==""){
            document.getElementById('name5').innerHTML="Entrer votre <strong> ville </strong>!!";
            document.getElementById('ville').style.backgroundColor='wheat';
            ville.focus(); 
            return false;
        }
        
        
        if(tel.value=="+212 "){
            document.getElementById('name6').innerHTML="Entrer votre <strong> Tel </strong>!!";
            document.getElementById('tel').style.backgroundColor='wheat';
            tel.focus(); 
            return false;
        }
        
         
        if(ph.value==""){
            document.getElementById('name7').innerHTML="Veuillez choisir votre simple <strong> photo </strong>!!";
            document.getElementById('file').style.backgroundColor='wheat';
            file.focus(); 
            return false;
        }
        else{
            return true;
        }
        
    }

	function retourner(){
        window.close("test.html");
        window.open("inscription.html");
    }
    
    function visiblee(){
        var name=document.getElementById('name');
        var cy=document.getElementById('dn');
        var ty=document.getElementById('ln');
        var vi=document.getElementById('ville');
        var tel=document.getElementById('tel');
        var ph=document.getElementById('file');

        if(name.value!=""&&isNaN(name.value)==true ){
            name1.style.visibility = "hidden"; 
        }
       
        if(cy.value!=""){
            name3.style.visibility = "hidden";
        }
       
        if(ty.value!="" ){
            name4.style.visibility = "hidden";
        }

        if(vi.value!="" ){
            name5.style.visibility = "hidden";
        }
        if(tel.value!="+212 "&&tel.value!="" ){
            name6.style.visibility = "hidden";
        }
        if(ph.value!="" ){
            name7.style.visibility = "hidden";
        }
    }
    