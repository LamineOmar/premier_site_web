
//valide
function validef(){
    var name=document.getElementById('nom');
    var pre=document.getElementById('prenom');
    var cy=document.getElementById('cycle');
    var ty=document.getElementById('type1');

if(name.value==""||isNaN(name.value)==false){
    document.getElementById('name1').innerHTML='Entrer votre <strong> Nom </strong>(seulement les lettres)!!';
    document.getElementById('nom').style.backgroundColor='wheat';
    nom.focus(); 
    return false;
}

if(pre.value==""||isNaN(pre.value)==false){
    document.getElementById('name2').innerHTML='Entrer votre <strong> Prenom </strong>(seulement les lettres)!!';
    document.getElementById('prenom').style.backgroundColor='wheat';
    prenom.focus(); 
    return false;
}

if(cy.value==""){
    document.getElementById('name3').innerHTML='Choisir votre <strong> cycle </strong>!!';
    document.getElementById('cycle').style.backgroundColor='wheat';
    cycle.focus(); 
    return false;
}

if(ty.value==""){
    document.getElementById('name4').innerHTML='Choisir votre <strong> activité </strong>!!';
    document.getElementById('type1').style.backgroundColor='wheat';
    type1.focus(); 
    return false;
}
else{
    
    return true;
}

}
function visible(){
    var name=document.getElementById('nom');
    var pre=document.getElementById('prenom');
    var cy=document.getElementById('cycle');
    var ty=document.getElementById('type1');
    if(name.value!=""&&isNaN(name.value)==true ){
        name1.style.visibility = "hidden"; 
    }
   
    if(pre.value!=""&&isNaN(pre.value)==true ){
        name2.style.visibility = "hidden";
    }
   
    if(cy.value!=""){
        name3.style.visibility = "hidden";
    }
   
    if(ty.value!="" ){
        name4.style.visibility = "hidden";
    }
}

