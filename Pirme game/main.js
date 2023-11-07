let getprime = 0;
let moneygeting = 0;
document.getElementById("startprime1").onclick = function(){
    getprime += 1;
    document.getElementById("labelstatusprime").innerHTML = "You Have: " + getprime  + " Prime Points"
    if(getprime>=20){
       getprime = 0;
       moneygeting += 1;
       document.getElementById("money").innerHTML = "Prime money: " + moneygeting; 
    }
}
const myprimes = document.querySelector("#myprimes");
const seemyprimes = document.querySelector("#seemyprimes");

myprimes.addEventListener("click", () =>{
    if(seemyprimes.style.display == "none"){
        seemyprimes.style.display = "block";
    }
    else{
        seemyprimes.style.display = "none";
    }
})