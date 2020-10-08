const header = document.querySelector("header");

function resize(){
	
	header.style.height = (header.offsetWidth / 1.5) + "px";
}

resize();


document.querySelector(".main-title").style.transform = "translateX(5%) ";
document.querySelector(".main-title").style.opacity = "1";
document.querySelector(".sub-title").style.transform = "translateX(5%)";
document.querySelector(".sub-title").style.opacity = "1";


//Intersection Observer for service section
const elementsInServiceSection = document.querySelectorAll(".card-service");
const serviceTitle = document.querySelector(".service-title");
const options = {
	root: null,
	threshold: 0.15
};

const observerOfServiceSection = new IntersectionObserver(function(entries, observer){
					entries.forEach(entry => {
						if(entry.isIntersecting){
							entry.target.classList.toggle("appear");
							observer.unobserve(entry.target);
						}
					});
				 }, options);
				
observerOfServiceSection.observe(serviceTitle);
elementsInServiceSection.forEach(element => {
	observerOfServiceSection.observe(element);
});

//Navigator
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuS1 = document.querySelector(".hamburger-menu span:nth-child(1)");
const hamburgerMenuS2 = document.querySelector(".hamburger-menu span:nth-child(2)");
const hamburgerMenuS3 = document.querySelector(".hamburger-menu span:nth-child(3)");
const navigation = document.querySelector("nav ul");

hamburgerMenu.clicked = false;
hamburgerMenuS1.style.transformOrigin="0 0";
hamburgerMenuS3.style.transformOrigin="0 100%";

function hideTheSidebar(){
	hamburgerMenuS1.style.transform = "rotate(0deg)";
	hamburgerMenuS2.style.transform = "scale(1, 1)";
	hamburgerMenuS3.style.transform = "rotate(0deg)";
	navigation.style.transform = "translateX(0)";
	hamburgerMenu.clicked = false;
}

hamburgerMenu.addEventListener("click", function(e){
	
	if(hamburgerMenu.clicked){
		hideTheSidebar()
	}else{
		if(navigation.style.transition === "none 0s ease 0s"){
			navigation.style.transition = "all 0.5s";
		}		
		hamburgerMenuS1.style.transform = "rotate(29deg)";
		hamburgerMenuS2.style.transform = "scale(0, 0)";
		hamburgerMenuS3.style.transform = "rotate(-29deg)";
		navigation.style.transform = "translateX(-100%)";
		hamburgerMenu.clicked = true;
	}
	
});

const navs = document.querySelectorAll("nav ul li");

navs.forEach(nav => {
	nav.addEventListener("click", function(e){
		if(e.target.textContent === "Home"){
			window.scrollTo(0, 0);
		}else if(e.target.textContent === "About Me"){
			window.location = "#profile";
		}else{
			window.open("mailto:muhamadhafiz2508@gmail.com");
		}
		if(hamburgerMenu.clicked){
			hideTheSidebar()
		}
	});
});

//get Notified when the screen size get changed
window.addEventListener("resize", function(){
  	if(hamburgerMenu.clicked){
		navigation.style.transition = "none";
		hideTheSidebar()
	}
	resize();
});

