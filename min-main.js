var button=document.getElementsByClassName("chatbubble"),chat=document.getElementsByClassName("bot"),closeButton=document.getElementsByClassName("close")[0],chattext=document.getElementsByClassName("chattext")[0],closeChat=document.getElementsByClassName("closeChat")[0];function openChat(){button[0].style.display="none",chat[0].style.height="450px",chat[0].style.border="#037eb361 1px solid",closeButton.style.display="block",chattext.style.display="None",closeChat.style.display="None"}function closeChatX(){button[0].style.display="block",chat[0].style.height="0",closeButton.style.display="none",chattext.style.display="Block",closeChat.style.display="Block",chat[0].style.border="None"}var nav=document.getElementsByClassName("header_menu"),navBg=document.getElementsByClassName("hamburgerCont")[0],navBlack=document.getElementsByClassName("hamburgerBlack")[0];function menuSwitch(){"flex"==nav[0].style.display?(nav[0].style.display="None",navBg.style.height="75px",navBlack.style.display="None"):(nav[0].style.display="flex",navBg.style.height="0",navBlack.style.display="Block")}function hideMe(){chattext.style.display="None",closeChat.style.display="None"}function navListen(){nav[0].style.display="None",navBlack.style.display="None",navBg.style.height="75px"}closeChat.addEventListener("click",hideMe,{passive:!0});var left,right,servicesBtn=document.getElementsByClassName("header-link")[1],sdWanBtn=document.getElementsByClassName("header-link")[2],aboutBtn=document.getElementsByClassName("header-link")[3],newsBtn=document.getElementsByClassName("header-link")[4],contactBtn=document.getElementsByClassName("header-link")[5],home=document.querySelector(".selected"),mql=window.matchMedia("(min-width: 960px)");function screenTest(e){e.matches?(nav[0].style.display="flex",navBg.style.height="0",home.removeEventListener("click",navListen)):(nav[0].style.display="None",home.addEventListener("click",navListen,{passive:!0}),navBg.style.height="75px")}$(window).width()<960?(home.addEventListener("click",navListen,{passive:!0}),servicesBtn.addEventListener("click",navListen,{passive:!0}),sdWanBtn.addEventListener("click",navListen,{passive:!0}),aboutBtn.addEventListener("click",navListen,{passive:!0}),newsBtn.addEventListener("click",navListen,{passive:!0}),contactBtn.addEventListener("click",navListen,{passive:!0})):(home.removeEventListener("click",navListen),servicesBtn.removeEventListener("click",navListen),sdWanBtn.removeEventListener("click",navListen),aboutBtn.removeEventListener("click",navListen),newsBtn.removeEventListener("click",navListen),contactBtn.removeEventListener("click",navListen)),window.addEventListener("resize",function(){window.matchMedia("(min-width: 960px)").matches?(nav[0].style.display="flex",navBg.style.height="0",home.removeEventListener("click",navListen),servicesBtn.removeEventListener("click",navListen),sdWanBtn.removeEventListener("click",navListen),aboutBtn.removeEventListener("click",navListen),newsBtn.removeEventListener("click",navListen),contactBtn.removeEventListener("click",navListen)):(nav[0].style.display="None",home.addEventListener("click",navListen,{passive:!0}),servicesBtn.addEventListener("click",navListen,{passive:!0}),sdWanBtn.addEventListener("click",navListen,{passive:!0}),aboutBtn.addEventListener("click",navListen,{passive:!0}),newsBtn.addEventListener("click",navListen,{passive:!0}),contactBtn.addEventListener("click",navListen,{passive:!0}),navBg.style.height="75px")}),null!=document.querySelector(".toRight")&&(right=document.querySelector(".toRight"),left=document.querySelector(".toLeft"),right.addEventListener("click",switchReasonsR,{passive:!0}),left.addEventListener("click",switchReasonsL,{passive:!0}));var touchStartpt,reasons=document.getElementsByClassName("reasonScroll"),navRs=document.getElementsByClassName("navi"),i=0;function switchReasonsR(){0==i&&(i+=1),reasons.length>i?(reasons[i].style.order="-1",reasons[i].style.transform="translateX(5px)",navRs[i+1].src="images/blackdot.png",reasons[i-1].style.order="0",navRs[i].src="images/whitedot.png",i+=1):(reasons[3].style.order="0",reasons[3].style.transform="translateX(5px)",navRs[4].src="images/whitedot.png",i=0,reasons[0].style.order="-1",reasons[0].style.transform="translateX(5px)",navRs[1].src="images/blackdot.png")}function switchReasonsL(){(i-=1)<0?(reasons[3].style.order="-1",reasons[3].style.transform="translateX(5px)",navRs[4].src="images/blackdot.png",reasons[0].style.order="0",navRs[1].src="images/whitedot.png",i=4):i>=0&&i<reasons.length?i-1==-1?(reasons[3].style.order="-1",reasons[3].style.transform="translateX(5px)",navRs[4].src="images/blackdot.png",reasons[0].style.order="0",navRs[1].src="images/whitedot.png",i=4):(reasons[i-1].style.order="-1",reasons[i-1].style.transform="translateX(5px)",navRs[i].src="images/blackdot.png",reasons[i].style.order="0",navRs[i+1].src="images/whitedot.png"):(reasons[i-1].style.order="-1",reasons[i-1].style.transform="translateX(5px)",reasons[0].style.order="0",reasons[i].style.order="0")}for(var j=0;j<reasons.length;j++)reasons[j].addEventListener("touchstart",function(e){touchStartpt=e.touches[0].screenX},{passive:!0}),reasons[j].addEventListener("touchmove",function(e){e.targetTouches[0];var t=e.changedTouches[0].screenX;e.currentTarget.style.left=t-touchStartpt+"px",e.preventDefault()},!1),reasons[j].addEventListener("touchend",function(e){var t=e.changedTouches[0].screenX;t<touchStartpt?null!=document.querySelector(".toRight")?(switchReasonsR(),moveDivLeft()):(switchSectorsR(),moveDivLeft()):t>touchStartpt&&(null!=document.querySelector(".toLeft")?(switchReasonsL(),moveDivLeft()):(switchSectorsL(),moveDivLeft()))},{passive:!0});function moveDivLeft(){for(var e=0;e<reasons.length;e++)-1!=reasons[e].style.order&&(reasons[e].style.left="0")}var rightSector,leftSector,accept=document.getElementsByClassName("cookie-law")[0];function accepted(){accept.style.display="None"}null!=document.querySelector(".toRightSector")&&(rightSector=document.querySelector(".toRightSector"),leftSector=document.querySelector(".toLeftSector"),rightSector.addEventListener("click",switchSectorsR,{passive:!0}),leftSector.addEventListener("click",switchSectorsL,{passive:!0}));reasons=document.getElementsByClassName("reasonScroll");var leftArr,rightArr,navSs=document.getElementsByClassName("sectorsNavi"),z=0;function switchSectorsR(){0==z&&(z+=1),reasons.length>z?(reasons[z].style.order="-1",navSs[z+1].src="images/bluedot.png",reasons[z-1].style.order="0",navSs[z].src="images/whitedot.png",z+=1):(reasons[3].style.order="0",navSs[4].src="images/whitedot.png",z=0,reasons[0].style.order="-1",navSs[1].src="images/bluedot.png")}function switchSectorsL(){(z-=1)<0?(reasons[3].style.order="-1",navSs[4].src="images/bluedot.png",reasons[0].style.order="0",navSs[1].src="images/whitedot.png",z=4):z>=0&&z<reasons.length?z-1==-1?(reasons[3].style.order="-1",navSs[4].src="images/bluedot.png",reasons[0].style.order="0",navSs[1].src="images/whitedot.png",z=4):(reasons[z-1].style.order="-1",navSs[z].src="images/bluedot.png",reasons[z].style.order="0",navSs[z+1].src="images/whitedot.png"):(reasons[z-1].style.order="-1",reasons[0].style.order="0",reasons[z].style.order="0")}null!=document.querySelector(".toRightArr")&&(rightArr=document.querySelector(".toRightArr"),leftArr=document.querySelector(".toLeftArr"),rightArr.addEventListener("click",switchSDReasonsR,{passive:!0}),leftArr.addEventListener("click",switchSDReasonsL,{passive:!0}));var SDtouchStartpt,reasonsSD=document.getElementsByClassName("SDreasonScroll"),SDnavRs=document.getElementsByClassName("sectorsNavi"),k=0;function switchSDReasonsR(){0==k&&(k+=1),reasonsSD.length>k?(reasonsSD[k].style.order="-1",SDnavRs[k+1].src="images/bluedot.png",reasonsSD[k-1].style.order="0",SDnavRs[k].src="images/whitedot.png",k+=1):(reasonsSD[6].style.order="0",SDnavRs[1].src="images/bluedot.png",k=0,reasonsSD[0].style.order="-1",SDnavRs[7].src="images/whitedot.png")}function switchSDReasonsL(){(k-=1)<0?(reasonsSD[6].style.order="-1",SDnavRs[7].src="images/bluedot.png",reasonsSD[0].style.order="0",SDnavRs[1].src="images/whitedot.png",k=7):k>=0&&i<reasonsSD.length?k-1==-1?(reasonsSD[6].style.order="-1",SDnavRs[7].src="images/bluedot.png",reasonsSD[0].style.order="0",SDnavRs[1].src="images/whitedot.png",k=7):(reasonsSD[k-1].style.order="-1",SDnavRs[k].src="images/bluedot.png",reasonsSD[k].style.order="0",SDnavRs[k+1].src="images/whitedot.png"):(reasonsSD[k-1].style.order="-1",reasonsSD[0].style.order="0",reasonsSD[k].style.order="0")}for(var it=0;it<reasonsSD.length;it++)reasonsSD[it].addEventListener("touchstart",function(e){SDtouchStartpt=e.touches[0].screenX},{passive:!0}),reasonsSD[it].addEventListener("touchmove",function(e){e.targetTouches[0];var t=e.changedTouches[0].screenX;e.currentTarget.style.left=t-SDtouchStartpt+"px",e.preventDefault()},!1),reasonsSD[it].addEventListener("touchend",function(e){var t=e.changedTouches[0].screenX;t<SDtouchStartpt?null!=document.querySelector(".toRightArr")&&(switchSDReasonsR(),moveSDDivLeft()):t>SDtouchStartpt&&null!=document.querySelector(".toLeftArr")&&(switchSDReasonsL(),moveSDDivLeft())},{passive:!0});function moveSDDivLeft(){for(var e=0;e<reasonsSD.length;e++)-1!=reasonsSD[e].style.order&&(reasonsSD[e].style.left="0")}$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}}),"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").then(function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)},function(e){console.log("ServiceWorker registration failed: ",e)})});