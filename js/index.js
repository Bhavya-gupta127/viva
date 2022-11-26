const light = document.getElementsByClassName("light");
const dark = document.getElementsByClassName("dark");
const planet = document.getElementById("trippy");
// const planet = document.getElementById('planet');

//NavChange
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");

    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

function changePlanet() {
  planet.src = "assets/img/moon.png";
}
window.addEventListener("scroll", (event) => {
  myScrollFunction();
});

// function myScrollFunction() {
//     console.log("Scroll is working");
//     var card = gsap.timeline();
//     card.to(
//         ".card", {
//         y: 100,
//         duration:1,
//         visibility: 'hidden'
//     }
//     )
//     var carousel = gsap.timeline();
//     carousel.to(
//         ".hi-slide", {
//         marginTop: '30vh'
//     }
//     )
// }
function darkMode() {
    transition1() ;
    transition2();
  $(document).ready(function () {
    $("html").animate({ scrollTop: 0 }, 1);
    $("body").animate({ scrollTop: 0 }, 1);
  });

  var homeCard = gsap.timeline();
  homeCard.to("#test", {
    visibility: "hidden",
  });
  var scrollOn = gsap.timeline();
  scrollOn.to("body", {
    overflow: "visible",
  });
  var contactCard = gsap.timeline();
  contactCard.to(".contact-card", {
    visibility: "visible",
  });
  var gold = gsap.timeline();
  gold.to(".gold", {
    visibility: "visible",
  });
  var showNav = gsap.timeline();
  showNav.to("nav", {
    delay: 1.5,
    duration: 0.5,
    outerHeight: 1,
    visibility: "visible",
  });
  var showSlider = gsap.timeline();
  showSlider.to(".hi-slide", {
    delay: 1.5,
    duration: 0.5,
    visibility: "visible",
  });
  var hamburger = gsap.timeline();
  hamburger.to(".hamburger",{
    delay: 1.5,
    duration: 0.5,
    visibility: "visible",
  })
  var planet = gsap.timeline();
  planet
    .to(".trippypl", {
      opacity: 0,
      x: 100,
      duration: 1,
      onComplete: changePlanet,
    })
    .to(".trippypl", {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 2,
    });
  var card = gsap.timeline();
  // card.to(".middle", 2, { rotationY: 90, transformOrigin: "50% 50%", ease: Linear.easeNone, opacity: 0, duration: 0.5, })
  //     .to(".card", 2, { rotationY: -90, transformOrigin: "50% 50%", ease: Linear.easeNone, opacity: 0, duration: 0.1 }, "<")
  card.to(".card", 2, {
    visibility: "visible",
    rotationY: 0,
    transformOrigin: "50% 50%",
    ease: Linear.easeNone,
    opacity: 1,
    duration: 0.5,
  });

  var character = gsap.timeline();
  character
    .to(".face", {
      opacity: 0,
      // rotation: 360,
      // y: 100,
      // duration: 1,
    })
    .to(".ninja", {
      opacity: 1,
      visibility: "visible",
    })
    .from("#character", {
      opacity: 0,
      y: 1000,
    })
    .from(
      "#glow",
      {
        opacity: 0,
        y: 1000,
      },
      "<"
    );
  // var landscape=gsap.timeline();
  // landscape.to(".landscape", {
  //         opacity: 0,
  //         y:100,
  //         duration: 1,
  //     },">")
  //     .to(".darkbg", {
  //         visibility:'visible',

  //     })
  //     .to(".darkbg", {
  //       opacity:1,
  //     //   y:-10
  //     })

  //     .to(".mainbg",{
  //         opacity:0,
  //        // y:100,
  //         duration: 1,
  //     },">")
  //     .to(".darkbg2",{

  //         opacity:1,
  //     })

  var landscape = gsap.timeline();
  landscape
    .to(
      ".landscape",
      {
        opacity: 0,
        y: 100,
        duration: 0.5,
      },
      ">"
    )
    .to(
      ".mainbg",
      {
        opacity: 0,
        duration: 0.5,
      },
      ">"
    )
    .to(
      ".darkbg",
      {
        visibility: "visible",
      },
      "<"
    )
    .to(
      ".darkbg",
      {
        opacity: 1,
        duration: 0.5,
        // ease: Power4.easeInOut
      },
      "<"
    );

  var star = gsap.timeline();

  star
    .to(
      ".star",
      {
        visibility: "visible",
      },
      ">+2"
    )
    .to(
      ".star2",
      {
        visibility: "visible",
      },
      ">"
    )
    .to(
      "#star-img",
      {
        opacity: 1,
        rotation: 360,
        repeat: 2000,
        duration: 0.2,
      },
      ">"
    )
    .to(
      "#star-img",
      {
        opacity: 1,
        repeat: 200,
        duration: 4,
        x: -1000,
        y: -1000,
      },
      "<"
    )
    .to(
      "#star-line",
      {
        opacity: 1,
        repeat: 200,
        duration: 4,
        x: -1000,
        y: -1000,
      },
      "<"
    )
    .to(
      "#star-img2",
      {
        opacity: 1,
        rotation: 360,
        repeat: 2000,
        duration: 0.2,
      },
      "<+1"
    )
    .to(
      "#star-img2",
      {
        opacity: 1,
        repeat: 200,
        duration: 4,
        x: 1000,
        y: -1000,
      },
      "<"
    )
    .to(
      "#star-line2",
      {
        opacity: 1,
        repeat: 200,
        duration: 4,
        x: 1000,
        y: -1000,
      },
      "<"
    );

  // dark[0].style.visibility = "visible";
  // light[0].style.visibility = "hidden";
}


// Hamburger Menu - Option
function toggle(){
  mobile_menu.classList.toggle("is-active");
  mobile_menu_items.classList.toggle("is-active");
}
const hamburger_menu = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-menu");
const mobile_menu_items = document.querySelector(".mobile-menu-content");
hamburger_menu.addEventListener("click",toggle);


