
//triggers every time there is a change
document.getElementById('orderForm').addEventListener('change', recal);

function recal(){
    var amount=0.00;
    var tip=1.00;
    if (document.getElementById('classic').checked){
        amount=3;
    }
    else if (document.getElementById('premium').checked){
        amount=5;
    } 
    else if (document.getElementById('royal').checked){
        amount=10;
    }
    else{
        amount=0;
    }
//Now for the tip;
    if (document.getElementById('tip10').checked){
      tip=1.1;  
    }
    else if (document.getElementById('tip15').checked){
      tip=1.15;  
    } 
    else if (document.getElementById('tip20').checked){
      tip=1.2;  
    }

    document.getElementById('total').innerHTML="Total: $"+(amount*tip).toFixed(2);        
}   



