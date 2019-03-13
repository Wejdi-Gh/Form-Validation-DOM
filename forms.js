function validation (e ) {
    e.preventDefault()
    tab = Array.from ( document.querySelectorAll(".inputarea") )
    let regex1 = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    let regex2 = /[A-Z]+ [a-z]+ [0-9]+/g 
    
    for (let i=0 ; i<tab.length ; i++) {
    
    if (tab[i].value === "")   { alert(" Enter your" + " " + tab[i].id.split("_").join(" ") + " " + "Please" ) ; tab[i].style.border = "2px solid red"; continue;
}
}
    if ( regex1.test(tab[3].value) === false  ) { alert (" Enter a valid e-mail adress " ); tab[3].style.border = "2px solid red";}

    if (tab[4].value.length < 8 )  { alert(" Passwords must contain at least 8 characters" ) ; tab[4].style.border = "2px solid red";}

    if ( regex2.test(tab[4].value) === false  )   {alert (" The password must be a combination of charatacters , numbers and at least a capital letter" );tab[4].style.border = "2px solid red";}
    
    
     }

   
   let button = document.querySelector(".submit")
   button.addEventListener( "click" , validation)