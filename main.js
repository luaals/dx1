function Palavra(){
    const a = document.querySelector('#a').value;
    const b = document.querySelector('#b').value;
    const msg = document.querySelector(".msg");


    if(a.length > b.length && a.length < 20 &&  a.length > 0){
        msg.innerHTML = "A palavra do Aldo é maior";
    }

    else if(b.length > a.length &&b.length < 20 && b.length > 0 ){
        msg.innerHTML = "A palavra da Jucimara é maior";
    }
    else{
        msg.innerHTML = "*";
    }
}