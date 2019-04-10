var button = document.getElementById('chatbubble');
var chat = document.getElementById('bot');
var closeButton = document.getElementById('close');
var chattext = document.getElementById('chattext');

function openChat(){
    button.style.display = 'none';
    chat.style.height = '500px';
    closeButton.style.display = "block";
    chattext.style.display = "None";
}

function closeChat(){
    button.style.display = 'block';
    chat.style.height = '0';
    closeButton.style.display = "none";
    chattext.style.display = "Block";
}


var nav = document.getElementsByClassName("header_menu");
var navBg = document.getElementById("hamburgerCont");
var navBlack = document.getElementById("hamburgerBlack");

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
// nav[0].addEventListener("resize", hideMenu);

// function hideMenu() {
//     if(nav[0].style.height > "420px"){
//         nav[0].style.display = "Flex";
//     }
//     //document.getElementById("header").style.display = "None";
// }

var mql = window.matchMedia('(max-width: 960px)');

function screenTest(e) {
    if (e.matches) {
      nav[0].style.display = "None";
    } else {
      nav[0].style.display = "flex";
    }
}
  
mql.addListener(screenTest);


var right = document.querySelector(".toRight");
var left = document.querySelector(".toLeft");

right.addEventListener('click', switchReasonsR);
left.addEventListener('click', switchReasonsL);
var reasons = document.getElementsByClassName("reasonScroll");
var navRs = document.getElementsByClassName("navi");

var i = 0;
function switchReasonsR(){
  // i = i+1;
  // console.log(i+" i");
  // if(i === 4){
  //   reasons[0].style.order= "-1";
  //   reasons[3].style.order = "0";
  //   navRs[1].src = "images/blackdot.png";
  //   navRs[4].src = "images/whitedot.png";
  //   i = 0;
  // } else {
  //   reasons[i].style.order= "-1";
  //   reasons[i-1].style.order = "0";
  //   navRs[i+1].src = "images/blackdot.png";
  //   navRs[i].src = "images/whitedot.png";
  // }



  if(i==0){
    i += 1;
  }
  if(reasons.length > i){
    //console.log(reasons[i], i);
    // reasons[i].style.left = "0";
    // reasons[i-1].style.left = "150%";
    reasons[i].style.order= "-1";
    navRs[i+1].src = "images/blackdot.png";
    // reasons[i].style.transform = "translateX(0px)";
    // reasons[i].style.transform = "transition(left 2s)";
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
    // reasons[3].style.position = "Static";
    reasons[3].style.order = "-1";
    navRs[4].src = "images/blackdot.png";
    // reasons[0].style.position = "Absolute";
    reasons[0].style.order = "0";
    navRs[1].src = "images/whitedot.png";
    console.log(i+" i<0");
    i = 4;
    //console.log(reasons[i], i);
  } else if (i >= 0 && i < reasons.length){
    if(i-1 == -1){
      // reasons[3].style.position = "Static";
      reasons[3].style.order = "-1";
      navRs[4].src = "images/blackdot.png";
      // reasons[0].style.position = "Absolute";
      reasons[0].style.order = "0";
      navRs[1].src = "images/whitedot.png";
      console.log(i+" i>=0");
      i = 4;
    } else{
      // reasons[i-1].style.position = "Static";
      reasons[i-1].style.order = "-1";
      navRs[i].src = "images/blackdot.png";
      // reasons[i].style.position = "Absolute";
      reasons[i].style.order = "0";
      navRs[i+1].src = "images/whitedot.png";
      console.log(i+" else");
     // console.log(reasons[i], i);
    }
      
  } else {
    // reasons[i-1].style.position = "Static";
    // reasons[0].style.position = "Absolute";
    // reasons[i].style.position = "Absolute";
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
      switchReasonsR();
    } else if (touchEndpt > touchStartpt){
      switchReasonsL();
    }
  })
}



// $(document).ready(function(){   
//     setTimeout(function () {
//         $("#CONSTANT_OPEN_URL").fadeIn(200);
//      }, 4000);
//     $("#CONSTANT_OPEN_URL, .cli-plugin-main-link").click(function() {
//         $("#CONSTANT_OPEN_URL").fadeOut(200);
//     }); 
// }); 


// $(document).ready(function(){
//     $("section").click(function(){
//       $("section").hide();
//     });
//   });
