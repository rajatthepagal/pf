window.onload=function(){
	navMod();
	skillanimate();
	//scroll();
};

function navMod(){
	window.addEventListener("scroll", function(){
		var navText = document.querySelector('nav');
		if(window.scrollY >= 400)
			{
				navText.style.color="black";
				navText.style.textShadow="none";
				navText.style.backgroundColor="white";
				navText.style.boxShadow="1px 1px 2px rgba(0,0,0,0.4)";
			}
		else{
			navText.style.color="white";	
			navText.style.textShadow="";
			navText.style.backgroundColor="";
			navText.style.boxShadow="";
		}
		
	});
	
}

function skillanimate(){
	window.addEventListener('scroll', function(){
		var skills = document.querySelectorAll('.rate .ratings');
		var trig = false;
		if(window.scrollY > 500)
		{
			trig = true;
		}
		else{
			trig=false;
		}
		if(trig)
		{
			for(var i=0; i < skills.length ; i++)
				skills[i].classList.add('animateGrow');
		}
		else{
			for(var i=0; i < skills.length ; i++)	
			 skills[i].classList.remove('animateGrow');
		}
	});
}

function initMap() {
        var beltola = {lat:26.129313,lng: 91.790922};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: beltola,
        });
		map.setZoom(15);
		
        var marker = new google.maps.Marker({
          position: beltola,
          map: map
        });
}

/*function scroll(){
	var buttons = document.querySelectorAll('.nav-right li a');
	var a=['#about','#portfolio','#contact'];
	buttons.forEach(function(but){
		but.addEventListener('click',function(){
			var name =this.getAttribute('data');
			console.log(name);
			console.log(a[name]);
			var container=document.querySelector(a[name]);
			var height = container.offsetTop;
			window.scrollTo(0,height+200); 
			
		});
	});
}*/

