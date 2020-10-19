//Nav bar start
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
   
    
    burger.addEventListener('click',()=>{
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index)=>{
            if (link.style.animation){
                link.style.animation = '' //by doing this we animate the nav each time it is clicked
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.7}s`; //not single quotes. backtexts
            }
            console.log(index/5);
        });

        //burger animation
        burger.classList.toggle('toggle');
    });
    
    
}

navSlide();
//Nav-bar end