
gsap.registerPlugin(ScrollTrigger);


gsap.set('.visual__title span, .index__publishing__text', {
    y:0,
    opacity:0,
})


gsap.set('index__publishing img',{
    scale:1.3
})

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


const texts = document.querySelectorAll('.text__effect p');

const t2 = gsap.timeline({
    ScrollTrigger: {
        trigger:'.text__block',
        start:'top center',
        end:'bottom top+=10%',
        
    }
});




gsap.to("[data-speed]", {
    y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "max",
      invalidateOnRefresh: true,
      scrub: 1,
    }
  });
  


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


gsap.set('.index__design',{
   y:0,
})


const t4 = gsap.timeline({

    scrollTrigger:{
        trigger:'.index__design',
        start:'50% 50%',
        end: '+=1500',
        scrub:true,
        pin:true,
        // markers: true

        
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







    //05 : 텍스트 애니메이션
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


        gsap.set('.design__wrap',{
            y:0,
        })
        gsap.set('.design__wrap li',{
            // opacity:0,
            y: 500,
        })
        
        gsap.to(".design__wrap li", {
            opacity:1,
            yPercent:-100,
            stagger:0.1,  //시간차 간격
       
            scrollTrigger: {
                trigger: ".design__wrap",
                start: "0 50%", // the default values
                end:"+=2000",
                scrub: 2,
                // pin:true,   
            }, 
        });


gsap.set('.index__about',{
    y:0,
 })
 
 
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
        // pin:true,
        //markers: true,//개발가이드선
        // markers: true
    }
});


let test = gsap.timeline({
    scrollTrigger: {
        trigger: '.about_txt', //트리거 요소
        start: '20% 20%', // 트리거 요소 상단이 보이는 영역 상단에 닿을 때
        //start: '50px top', // 트리거 요소 상단에서 50px위치가 보이는 영역 상단에 닿을 때
        pin: true, //트리거 요소 고정
        end: '+=1300', // 고정된후 1500px만큼 더 스크롤한 후 고정이 해제됨
		scrub:1, //스크롤에 따른 애니메이션의 부드러움 정도
    }
});







	///////////// 작품 클릭했을때 팝업(모달) ///////////////
	const menu = document.querySelectorAll(".menu");
	const pop = document.querySelectorAll(".pop");
	const close = document.querySelectorAll(".close");
	const body = document.querySelector("body");


	menu.forEach(function(menu){

		menu.addEventListener("click",function(){ 
			this.nextElementSibling.style.display="block";
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


/* 마우스 커서 */
var cursor = document.querySelector(".cursor"); 
var publisingWrap = document.querySelectorAll(".publishing__con"); //프로젝트 전체 영역

function cursorEvent(e){

    cursor.style.top = e.pageY - scrollY + "px";
    cursor.style.left = e.pageX + "px";

}

window.addEventListener('mousemove', cursorEvent);

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




// 탭메뉴

const tabmenu = document.querySelectorAll(".publishing__tab li a");
const con = document.querySelectorAll(".publishing__con");

tabmenu.forEach((btn, index) => {
    btn.addEventListener("click",()=>{
        tabmenu.forEach(other =>{
            other.classList.remove('on')
        });
        con.forEach(other =>{
            other.classList.remove('on')
        });
        tabmenu[index].classList.add('on');
        con[index].classList.add('on');
});

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


