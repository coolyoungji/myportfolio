
function scrollingX(t,w){
	const targetElement = document.querySelector(t);
	const targetElementTop = targetElement.previousElementSibling.offsetTop + targetElement.previousElementSibling.offsetHeight;
	targetElement.style.position="fixed"; 
	targetElement.style.zIndex="-1"; 
	targetElement.style.top=targetElementTop;
	targetElement.style.width=w;
	targetElement.style.height="100vh";
	targetElement.nextElementSibling.style.marginTop=(targetElement.offsetWidth - window.innerHeight) +"px";
	window.addEventListener("scroll",function(){
		let sc = window.scrollY; 
		let sct = sc;
		if ( sct >= targetElementTop  ) { 
			sct = targetElementTop; 
			gap = targetElementTop-sc;
			if ( gap > (-targetElement.offsetWidth + window.innerWidth) ){
				targetElement.style.left = (targetElementTop-sc)+"px"
			}
		} else { targetElement.style.left=0 }
		targetElement.style.top = (targetElementTop - sct) + "px";
	});
}
