const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuS1 = document.querySelector(".hamburger-menu span:nth-child(1)");
const hamburgerMenuS2 = document.querySelector(".hamburger-menu span:nth-child(2)");
const hamburgerMenuS3 = document.querySelector(".hamburger-menu span:nth-child(3)");
const navigation = document.querySelector("nav ul");

hamburgerMenu.clicked = false;
hamburgerMenuS1.style.transformOrigin="0 0";
hamburgerMenuS3.style.transformOrigin="0 100%";

hamburgerMenu.addEventListener("click", function(e){
	
	if(hamburgerMenu.clicked){
		hamburgerMenuS1.style.transform = "rotate(0deg)";
		hamburgerMenuS2.style.transform = "scale(1, 1)";
		hamburgerMenuS3.style.transform = "rotate(0deg)";
		navigation.style.transform = "translateX(0)";
		hamburgerMenu.clicked = false;
	}else{		
		hamburgerMenuS1.style.transform = "rotate(30deg)";
		hamburgerMenuS2.style.transform = "scale(0, 0)";
		hamburgerMenuS3.style.transform = "rotate(-30deg)";
		navigation.style.transform = "translateX(-100%)";
		hamburgerMenu.clicked = true;
	}
	
});

const headerSlider = document.querySelector(".header-slider");
var startX = 0;
var outOfRectAndPass = false;

headerSlider.addEventListener("touchstart", function(event){
	var pos = event.touches[0];
	startX = pos.pageX;
	outOfRectAndPass = false;
});

headerSlider.addEventListener("touchmove", function(event){
	//take the touch position with this object
	var pos = event.touches[0];
	var rect = event.target.getBoundingClientRect();
	if(pos.pageY > rect.bottom || pos.pageY < rect.top){
		outOfRectAndPass = true;
	}
	
	if(pos.pageX - startX > event.target.offsetWidth * 10 / 100){
		if(!outOfRectAndPass){
			outOfRectAndPass = true;
			moveLeft();
		}
	}
	
	if(pos.pageX - startX < -1 * event.target.offsetWidth * 10 / 100){
		if(!outOfRectAndPass){
			outOfRectAndPass = true;
			moveRight();
		}
	}
});

function moveRight(){
	alert(headerSlider.style.left);
}

function moveLeft(){
	headerSlider.style.transform="100%";
}
const test = document.querySelector(".background-header1");
