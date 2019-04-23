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
//var navWhite = document.getElementsByClassName("hamburger")[0];

function menuSwitch(){
    if(nav[0].style.display == "flex"){
        nav[0].style.display = "None";
        navBg.style.height = "75px";
        navBlack.style.display = "None";
       // navWhite.style.display = "Block";
    } else{
        nav[0].style.display = "flex";
        navBg.style.height = "0";
        navBlack.style.display = "Block";
        //navWhite.style.display = "None";
    }
}

chattext.addEventListener("click", hideMe);

function hideMe() {
  chattext.style.display = "None";
}

/*
NAVIGATION DISPLAY TOGGLE MOBILE AND DESKTOP
*/
function navListen (){
  nav[0].style.display = "None";
  navBlack.style.display = "None";
  navBg.style.height = "75px";
}

var servicesBtn = document.getElementsByClassName('header-link')[1];
var sdWanBtn = document.getElementsByClassName('header-link')[2];
var aboutBtn = document.getElementsByClassName('header-link')[3];
var newsBtn = document.getElementsByClassName('header-link')[4];
var contactBtn = document.getElementsByClassName('header-link')[5];


var home = document.querySelector('.selected');
var mql = window.matchMedia('(min-width: 960px)');
if ($( window ).width() < 960){
  home.addEventListener('click', navListen);
  servicesBtn.addEventListener('click', navListen);
  sdWanBtn.addEventListener('click', navListen);
  aboutBtn.addEventListener('click', navListen);
  newsBtn.addEventListener('click', navListen);
  contactBtn.addEventListener('click', navListen);
} else{
  home.removeEventListener('click', navListen);
  servicesBtn.removeEventListener('click', navListen);
  sdWanBtn.removeEventListener('click', navListen);
  aboutBtn.removeEventListener('click', navListen);
  newsBtn.removeEventListener('click', navListen);
  contactBtn.removeEventListener('click', navListen);
}

window.addEventListener('resize', function(){
  if(window.matchMedia('(min-width: 960px)').matches){
    nav[0].style.display = "flex";
    navBg.style.height = "0";
    home.removeEventListener('click', navListen);
    servicesBtn.removeEventListener('click', navListen);
    sdWanBtn.removeEventListener('click', navListen);
    aboutBtn.removeEventListener('click', navListen);
    newsBtn.removeEventListener('click', navListen);
    contactBtn.removeEventListener('click', navListen);
  } else{
    nav[0].style.display = "None";
    home.addEventListener('click', navListen);
    servicesBtn.addEventListener('click', navListen);
    sdWanBtn.addEventListener('click', navListen);
    aboutBtn.addEventListener('click', navListen);
    newsBtn.addEventListener('click', navListen);
    contactBtn.addEventListener('click', navListen);
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

/*
  touch scroll pan-x
*/
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

/*
SD-WAN PAGE FUNCTIONS
*/

var leftArr, rightArr;
if(document.querySelector(".toRightArr") != null){
  rightArr = document.querySelector(".toRightArr");
  leftArr = document.querySelector(".toLeftArr");
  rightArr.addEventListener('click', switchSDReasonsR);
  leftArr.addEventListener('click', switchSDReasonsL);
}

var reasonsSD = document.getElementsByClassName("SDreasonScroll");
var SDnavRs = document.getElementsByClassName("sectorsNavi");

var k = 0;
function switchSDReasonsR(){
  if(k==0){
    k += 1;
  }
  if(reasonsSD.length > k){
    reasonsSD[k].style.order= "-1";
    SDnavRs[k+1].src = "images/bluedot.png";
    reasonsSD[k-1].style.order = "0";
    SDnavRs[k].src = "images/whitedot.png";
    k = k + 1;
  } else{
    reasonsSD[6].style.order = "0";
    SDnavRs[1].src = "images/bluedot.png";
    k = 0;
    reasonsSD[0].style.order = "-1";
    SDnavRs[7].src = "images/whitedot.png";
  }
}

function switchSDReasonsL(){
  k = k-1;
  if (k < 0){
    reasonsSD[6].style.order = "-1";
    SDnavRs[7].src = "images/bluedot.png";
    reasonsSD[0].style.order = "0";
    SDnavRs[1].src = "images/whitedot.png";
    k = 7;
  } else if (k >= 0 && i < reasonsSD.length){
    if(k-1 == -1){
      reasonsSD[6].style.order = "-1";
      SDnavRs[7].src = "images/bluedot.png";
      reasonsSD[0].style.order = "0";
      SDnavRs[1].src = "images/whitedot.png";
      k = 7;
    } else{
      reasonsSD[k-1].style.order = "-1";
      SDnavRs[k].src = "images/bluedot.png";
      reasonsSD[k].style.order = "0";
      SDnavRs[k+1].src = "images/whitedot.png";
    }   
  } else {
    reasonsSD[k-1].style.order = "-1";
    reasonsSD[0].style.order = "0";
    reasonsSD[k].style.order = "0";
  }
}

var SDtouchStartpt;
for(var it = 0; it < reasonsSD.length; it++){
  reasonsSD[it].addEventListener('touchstart', function(e){
  SDtouchStartpt = e.touches[0].screenX;
  console.log(e, SDtouchStartpt+" start");
});

reasonsSD[it].addEventListener('touchend', function(ev){
  var touchEndpt = ev.changedTouches[0].screenX
  console.log(ev, touchEndpt+" end");
  if (touchEndpt < SDtouchStartpt){
    if(document.querySelector(".toRightArr") != null){
      switchSDReasonsR();
    } 
  } else if (touchEndpt > SDtouchStartpt){
    if(document.querySelector(".toLeftArr") != null){
      switchSDReasonsL();
    }
  }
})
}







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
