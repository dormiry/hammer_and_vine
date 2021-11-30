 // Nav Shadow on Scroll
 window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('.navbar');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }else{
      nav.classList.remove("add-shadow");
    }
  });


//  Hamburger Menu

      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector("ul");
      const navLink = document.querySelectorAll("li");

      hamburger.addEventListener("click", mobileMenu);
      navLink.forEach(n => n.addEventListener("click", closeMenu));

      function mobileMenu() {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
      }

      function closeMenu() {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
      }

