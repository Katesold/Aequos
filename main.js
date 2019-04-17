var button = document.getElementsByClassName('chatbubble');
var chat = document.getElementsByClassName('bot');
var closeButton = document.getElementsByClassName('close')[0];
var chattext = document.getElementsByClassName('chattext')[0];

function openChat(){
    button[0].style.display = 'none';
    chat[0].style.height = '500px';
    closeButton.style.display = "block";
    chattext.style.display = "None";
}

function closeChat(){
    button[0].style.display = 'block';
    chat[0].style.height = '0';
    closeButton.style.display = "none";
    chattext.style.display = "Block";
}


var nav = document.getElementsByClassName("header_menu");
var navBg = document.getElementsByClassName("hamburgerCont")[0];
var navBlack = document.getElementsByClassName("hamburgerBlack")[0];

function menuSwitch(){
    if(nav[0].style.display == "flex"){
        nav[0].style.display = "None";
        navBg.style.height = "75px";
        navBlack.style.display = "None";
        
    } else{
        nav[0].style.display = "flex";
        navBg.style.height = "0";
        navBlack.style.display = "Block";
    }
}

chattext.addEventListener("click", hideMe);

function hideMe() {
  chattext.style.display = "None";
}


function navListen (){
  nav[0].style.display = "None";
  navBlack.style.display = "None";
  navBg.style.height = "75px";
}

var servicesBtn = document.getElementsByClassName('header-link')[1];

servicesBtn.addEventListener('click', navListen);


var home = document.querySelector('.selected');
var mql = window.matchMedia('(min-width: 960px)');
if ($( window ).width() < 960){
  home.addEventListener('click', navListen);
  servicesBtn.addEventListener('click', navListen);
} else{
  home.removeEventListener('click', navListen);
  servicesBtn.removeEventListener('click', navListen);
}
// home.addEventListener('click', navListen);
window.addEventListener('resize', function(){
  if(window.matchMedia('(min-width: 960px)').matches){
    nav[0].style.display = "flex";
    navBg.style.height = "0";
    home.removeEventListener('click', navListen);
    servicesBtn.removeEventListener('click', navListen);
  } else{
    nav[0].style.display = "None";
    home.addEventListener('click', navListen);
    servicesBtn.addEventListener('click', navListen);
    navBg.style.height = "75px";
  }
});



function screenTest(e) {
    if (e.matches) {
      nav[0].style.display = "flex";
      navBg.style.height = "0";
      home.removeEventListener('click', navListen);
      console.log(e);
    } else {
      nav[0].style.display = "None";
      home.addEventListener('click', navListen);
      navBg.style.height = "75px";
      console.log(e +" +mql"+ mql);
    }
}
// mql.addListener(screenTest);


var left, right;
if(document.querySelector(".toRight") != null){
  right = document.querySelector(".toRight");
  left = document.querySelector(".toLeft");
  right.addEventListener('click', switchReasonsR);
  left.addEventListener('click', switchReasonsL);
}

var reasons = document.getElementsByClassName("reasonScroll");
var navRs = document.getElementsByClassName("navi");

var i = 0;
function switchReasonsR(){
  if(i==0){
    i += 1;
  }
  if(reasons.length > i){
    reasons[i].style.order= "-1";
    navRs[i+1].src = "images/blackdot.png";
    reasons[i-1].style.order = "0";
    navRs[i].src = "images/whitedot.png";
    i = i + 1;
  } else{
    reasons[3].style.order = "0";
    navRs[4].src = "images/whitedot.png";
    i = 0;
    reasons[0].style.order = "-1";
    navRs[1].src = "images/blackdot.png";
    //console.log(reasons[i], i);
  }
}

function switchReasonsL(){

  i = i-1;
  console.log(i+" start");
  if (i < 0){
    reasons[3].style.order = "-1";
    navRs[4].src = "images/blackdot.png";
    reasons[0].style.order = "0";
    navRs[1].src = "images/whitedot.png";
    console.log(i+" i<0");
    i = 4;
    //console.log(reasons[i], i);
  } else if (i >= 0 && i < reasons.length){
    if(i-1 == -1){
      reasons[3].style.order = "-1";
      navRs[4].src = "images/blackdot.png";
      reasons[0].style.order = "0";
      navRs[1].src = "images/whitedot.png";
      console.log(i+" i>=0");
      i = 4;
    } else{
      reasons[i-1].style.order = "-1";
      navRs[i].src = "images/blackdot.png";
      reasons[i].style.order = "0";
      navRs[i+1].src = "images/whitedot.png";
      console.log(i+" else");
     // console.log(reasons[i], i);
    }
      
  } else {
    reasons[i-1].style.order = "-1";
    reasons[0].style.order = "0";
    reasons[i].style.order = "0";
   // console.log(reasons[i]);
  }
}



  var touchStartpt;
  for(var j = 0; j < reasons.length; j++){
  reasons[j].addEventListener('touchstart', function(e){
    touchStartpt = e.touches[0].screenX;
    console.log(e, touchStartpt);
  });

  reasons[j].addEventListener('touchend', function(ev){
    var touchEndpt = ev.changedTouches[0].screenX
    console.log(ev, touchEndpt);
    if (touchEndpt < touchStartpt){
      if(document.querySelector(".toRight") != null){
        switchReasonsR();
      } else {
        switchSectorsR();
      }
    } else if (touchEndpt > touchStartpt){
      if(document.querySelector(".toLeft") != null){
        switchReasonsL();
      } else {
        switchSectorsL();
      }

    }
  })
}

var accept = document.getElementsByClassName('cookie-law')[0];

function accepted(){
  accept.style.display = "None";
}


/*
SERVICES FUNCTIONS
*/

var rightSector, leftSector;
if(document.querySelector(".toRightSector") != null){
  rightSector = document.querySelector(".toRightSector");
  leftSector = document.querySelector(".toLeftSector");
  rightSector.addEventListener('click', switchSectorsR);
  leftSector.addEventListener('click', switchSectorsL);
}

var reasons = document.getElementsByClassName("reasonScroll");
var navSs = document.getElementsByClassName("sectorsNavi");


var z = 0;
function switchSectorsR(){
  if(z==0){
    z += 1;
  }
  if(reasons.length > z){
    reasons[z].style.order= "-1";
    navSs[z+1].src = "images/bluedot.png";
    reasons[z-1].style.order = "0";
    navSs[z].src = "images/whitedot.png";
    z = z + 1;
  } else{
    reasons[3].style.order = "0";
    navSs[4].src = "images/whitedot.png";
    z = 0;
    reasons[0].style.order = "-1";
    navSs[1].src = "images/bluedot.png";
    //console.log(reasons[i], i);
  }
}

function switchSectorsL(){
  z = z-1;
  if (z < 0){
    reasons[3].style.order = "-1";
    navSs[4].src = "images/bluedot.png";
    reasons[0].style.order = "0";
    navSs[1].src = "images/whitedot.png";
    z = 4;
  } else if (z >= 0 && z < reasons.length){
    if(z-1 == -1){
      reasons[3].style.order = "-1";
      navSs[4].src = "images/bluedot.png";
      reasons[0].style.order = "0";
      navSs[1].src = "images/whitedot.png";
      z = 4;
    } else{
      reasons[z-1].style.order = "-1";
      navSs[z].src = "images/bluedot.png";
      reasons[z].style.order = "0";
      navSs[z+1].src = "images/whitedot.png";
    }
      
  } else {
    reasons[z-1].style.order = "-1";
    reasons[0].style.order = "0";
    reasons[z].style.order = "0";
  }
}




// var home = document.querySelector('.selected');

// home.addEventListener('click', function(){
//   nav[0].style.display = "None";
//   navBlack.style.display = "None";
//   navBg.style.height = "75px";
// })



/*
SMOOTH SCROLLING 
*/
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {

    console.log(event);
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
