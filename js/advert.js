
var justDoItOnce = 0;
var close=document.getElementById('close'); 
var modal=document.getElementById('myModal');

var closeCoupon=document.getElementById('closeCoupon');
var modalCoupon=document.getElementById('bigCoupon');

/* This deals with showing and closing the mouse over coupon*/
function coupon(){
        modalCoupon.style.display='block';
        closeCoupon.onclick=function(){
            modalCoupon.style.display='none';
        }
		feats[0].addEventListener('mouseout', function(){
			modalCoupon.style.display='none';
		});
	feats[1].addEventListener('mouseout', function(){
			modalCoupon.style.display='none';
		});
	feats[2].addEventListener('mouseleave', function(){
			modalCoupon.style.display='none'; 
		});
	
}
    
function advert(){
setTimeout(function(){
      
    if (justDoItOnce===0){
        justDoItOnce++; 
		
        modal.style.display='block';
        close.onclick=function(){
            modal.style.display='none';
        }
        
    };

},5000); //ends the setTimeout after 5 secs  
}

window.addEventListener('scroll', advert);
var feats=document.getElementsByClassName('feature-food');
feats[0].addEventListener('mouseover', coupon);
feats[1].addEventListener('mouseover', coupon);
feats[2].addEventListener('mouseover', coupon);



