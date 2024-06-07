gsap.registerPlugin(ScrollTrigger);

// 비주얼 영역 초기 설정
gsap.set('.visual__title span, .index__publishing__text', {
    y:0,
    opacity:0,
})

gsap.set('index__publishing img',{
    scale:1.3
})

//비주얼 텍스트 설정
const t1 = gsap.timeline();

t1.to('visual__title div',{
    opacity:1,
}).to('.visual__title span',{
    y:-100,
    opacity:1,
    ease:'expo.out',
    duration:1,
    scale:1.3,
    stagger:0.1
})
const t2 = gsap.timeline({
    ScrollTrigger: {
        trigger:'.text__block',
        start:'top center',
        end:'bottom top+=10%',
        
    }
});

//퍼블리싱 프로젝트 영역
const t3 = gsap.timeline({
    scrollTrigger:{
        trigger:'.index__publishing',
        start:'top top',
        end: '+=1500',
        scrub:true,
        pin:true,
    }
});

t3.to('.index__publishing__overlay',{
    opacity:1
}).to('.index__publishing',{
    "clip-path":"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
},0).to('.index__publishing img',{
    scale:1
},0).to('.index__publishing__text',{
    y:0,
    opacity:1,
},0)


//디자인 프로젝트 영역
const t4 = gsap.timeline({
    scrollTrigger:{
        trigger:'.index__design',
        start:'50% 50%',
        end: '+=1500',
        scrub:true,
        pin:true,
    }
});

t4.to('.index__design__overlay',{
    opacity:1
}).to('.index__design',{
    "clip-path":"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",

},0).to('.index__design img',{
    scale:1
},0).to('.index__design__text',{
    y:0,
    opacity:1,
},0)



//visual 영역 텍스트 애니메이션
const ani5 = gsap.timeline();
ani5.to(".text__effect .t1", {xPercent: 500}, "text")
    .to(".text__effect .t2", {xPercent: -500}, "text")
    .to(".text__effect .t3", {xPercent: 500}, "text")

    ScrollTrigger.create({
        animation: ani5,
        trigger: ".text__container",
        start: "0% 0%",
        end: "+=1500%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
    });

    gsap.set('.design__wrap li',{ y: 500, })
    
    gsap.to(".design__wrap li", {
        opacity:1,
        yPercent:-100,
        stagger:0.1,  //시간차 간격
    
        scrollTrigger: {
            trigger: ".design__wrap",
            start: "0 0%", 
            end:"+=2000",
            scrub: 2,
            // pin:true,   
        }, 
    });

 //about me
 const t5 = gsap.timeline({
     scrollTrigger:{
         trigger:'.index__about',
         start:'top top',
         end: '+=1500',
         scrub:true,
         pin:true,
         //markers: true,//개발가이드선
     }
 });
 
 t5.to('.index__about__overlay',{
     opacity:1
 }).to('.index__about',{
     "clip-path":"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
 },0).to('.index__about img',{
     scale:1
 },0).to('.index__about__text',{
     y:0,
     opacity:1,
 },0)
 
const t6 = gsap.timeline({
    scrollTrigger:{
        trigger:'.about__wrap',
        start:'top top',
        end: '+=1500',
        scrub:true,
    }
});

let test = gsap.timeline({
    scrollTrigger: {
        trigger: '.about_txt', 
        start: '0% 20%', 
        pin: true, 
        end: '+=1500',
		scrub:1, 
    }
});


//마우스 커서 이벤트
var cursor = document.querySelector(".cursor"); 
var publisingWrap = document.querySelectorAll(".con__sum"); //프로젝트 전체 영역
var designWrap = document.querySelectorAll(".design__wrap"); //디자인 영역

function cursorEvent(e){
    cursor.style.top = e.pageY - scrollY + "px";
    cursor.style.left = e.pageX + "px";
}

window.addEventListener('mousemove', cursorEvent);

//퍼블리싱 프로젝트
publisingWrap.forEach(link =>{
    if ( link !== publisingWrap ){
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("on");
        });
        link.addEventListener("mouseover", () => {
            cursor.classList.add("on");
        });
    }  
});

//디자인 프로젝트
designWrap.forEach(link =>{
    if ( link !== designWrap ){
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("on");
        });
        link.addEventListener("mouseover", () => {
            cursor.classList.add("on");
        });
    }  
});


// 헤더 이벤트
const header = document.querySelector("#header");
const gnb = document.querySelectorAll("#header nav li a");

function headerScroll(){
    window.addEventListener("scroll",()=>{
        
        let headerTop = 100;
        let scrollPosition = window.scrollY;
      
        // document.querySelector("#tt").innerText = scrollPosition;//스크롤값 출력

        if (scrollPosition > headerTop){
            header.classList.add("on");
            header.style.transition="0.2s ease-in";
            document.querySelector('.logo').style.display="none"; 

            gnb.forEach((e)=>{
                for(e=0;e<3;e++){
                gnb[e].classList.add("on");
                }
            });

        }else if (scrollPosition <= headerTop){
            header.classList.remove("on");
            document.querySelector('.logo').style.display="block";

            gnb.forEach((e)=>{
                for(e=0;e<3;e++){
                gnb[e].classList.remove("on");
                }
            });
        }
    });
}
headerScroll();// 헤더 이벤트


// 프로젝트 영역 호버 이벤트
let sumHover = document.querySelectorAll(".con__sum");
let contilte = document.querySelectorAll(".con__tilte");

function hover(){
    sumHover.forEach(function(sum,index){
        sum.addEventListener("mouseenter",()=>{
            contilte[index].classList.add("on");
        });  
        sum.addEventListener("mouseleave",()=>{
            contilte[index].classList.remove("on");
        });
    }) 
}
setInterval(hover,10);



	// 작품 클릭했을때 팝업(모달)
	const menu = document.querySelectorAll(".menu");
	const pop = document.querySelectorAll(".pop");
	const close = document.querySelectorAll(".close");
	const body = document.querySelector("body");


	menu.forEach(function(menu){

		menu.addEventListener("click",function(){ 

            let idx = this.getAttribute("data-idx");
             
            pop[idx].style.display="block";
		
			body.style.overflow="hidden";
		});	

	});


	close.forEach(function(close){ 

			close.addEventListener("click",function(e){
				e.preventDefault();

				pop.forEach(function(pop){
					pop.style.display="none";
				})

				body.style.overflow="auto";
			});

	})
