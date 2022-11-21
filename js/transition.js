function transition1() {
  var styles1 = `.mainbg,.landscape,.face, #trippy,.middle,#vivalogo{ 
        -webkit-mask-image:url('assets/img/nature-sprite-2.png');
       mask-image:url('assets/img/nature-sprite-2.png'); 
       -webkit-mask-size: 10000% 100%;
       mask-size: 10000% 100%;
       -webkit-animation: mask-play-first 1s steps(70) backwards;
       animation: mask-play-first 1s steps(70) backwards ;
       
    }
    
    
    @-webkit-keyframes mask-play-first {
       from {
         -webkit-mask-position: 0% 0;
         mask-position: 0% 0;
         opacity: 1;
       }
       to {
         -webkit-mask-position: 100% 0;
         mask-position: 100% 0;
         opacity: 0;
       }
     }
     
     @keyframes mask-play-first {
       from {
         -webkit-mask-position: 0% 0;
         mask-position: 0% 0;
         opacity: 1;
       }
       to {
         -webkit-mask-position: 100% 0;
         mask-position: 100% 0;
         opacity: 0;
       }
     }
    
     
    }`;

  var stylesheet = document.createElement("style");
  stylesheet.innerText = styles1;
  document.head.appendChild(stylesheet);
}

function transition2() {
  var styles2 = `@-webkit-keyframes mask-play-second {
    from {
      -webkit-mask-position: 100% 0;
      mask-position: 100% 0;
      opacity: 0;
    }
    to {
      -webkit-mask-position: 0% 0;
      mask-position: 0% 0;
      opacity: 1;
    }
  }
  
  @keyframes mask-play-second {
    from {
      -webkit-mask-position: 100% 0;
      mask-position: 100% 0;
      opacity: 0;
    }
    to {
      -webkit-mask-position: 0% 0;
      mask-position: 0% 0;
      opacity: 1;
    }
  }
 
 .ninja #character,
 .ninja #glow,
 #l-build,
 #r-build,
 #bg-1,
 #bg-2,
 #bg-3,
 #trippy,
 #land-1,
 #land-2,
 #land-3,
 #land-4,
 #particles,
 #vivalogo, #trees{ 
    -webkit-mask-image:url('assets/img/nature-sprite-2.png');
    mask-image:url('assets/img/nature-sprite-2.png'); 
    -webkit-mask-size: 10000% 100%;
    mask-size: 10000% 100%;
    -webkit-animation: mask-play-second 1s steps(70) forwards;
    animation: mask-play-second 1s steps(70) forwards ;`;
  var stylesheet = document.createElement("style");
  stylesheet.innerText = styles2;
  document.head.appendChild(stylesheet);
}

function timeouttransition() {
  // setTimeout(transition2(),1000);
  transition2();
}
