var button = document.getElementById('chatbubble');
var chat = document.getElementById('bot');
var closeButton = document.getElementById('close');

function openChat(){
    button.style.display = 'none';
    chat.style.height = '500px';
    closeButton.style.display = "block";
}

function closeChat(){
    button.style.display = 'block';
    chat.style.height = '0';
    closeButton.style.display = "none";
}


var nav = document.getElementsByClassName("header_menu");

function menuSwitch(){
    if(nav[0].style.display == "flex"){
        nav[0].style.display = "None";
    } else{
        nav[0].style.display = "flex";
    }
}

document.getElementById("chattext").addEventListener("click", hideMe);

function hideMe() {
  document.getElementById("chattext").style.display = "None";
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
