let wrapper=document.querySelector(".wrapper"),matches=document.querySelectorAll(".matches_container button"),btns=document.querySelectorAll(".btns button"),attempts=document.querySelector(".attempts span"),popup=document.querySelector(".popup p"),modal=document.querySelector(".modal"),win=document.querySelector(".win"),lose=document.querySelector(".lose"),attemptsNum=3;function makePopup(){btns.forEach((t=>{t.disabled=!0})),matches.forEach((t=>{t.disabled=!0})),setTimeout((()=>{matches.forEach((t=>{t.classList.add("remove")})),popup.classList.add("active")}),1500),setTimeout((()=>{matches.forEach((t=>{t.classList.remove("remove"),t.classList.remove("up"),t.disabled=!1})),btns.forEach((t=>{t.disabled=!1})),popup.classList.remove("active")}),3e3)}function attemptsIsEmpty(){0==attemptsNum&&(lose.classList.add("active"),setTimeout((()=>{modal.classList.add("active")}),1200),setTimeout((()=>{modal.classList.add("opacity")}),1300))}function adaptationElements(){const t=window.innerWidth/window.innerHeight,e=t>=1.9?"modificate1":t>=1.6?"modificate2":t>1?"modificate3":"modificate4";wrapper.className=`wrapper ${e}`}matches.forEach((t=>{t.addEventListener("click",(function(t){attemptsNum--,attempts.innerText=attemptsNum;let e=Math.floor(2*Math.random());matches.forEach((t=>{t.classList.add("up")})),0==e?(matches.forEach((t=>{t.disabled=!0})),t.target.setAttribute("src","images/matches/1.webp"),t.target.parentElement.classList.add("active"),win.classList.add("active"),setTimeout((()=>{modal.classList.add("active")}),1600),setTimeout((()=>{modal.classList.add("opacity")}),1700)):makePopup(),attemptsIsEmpty()}))})),btns.forEach(((t,e)=>{t.addEventListener("click",(()=>{attemptsNum--,attempts.innerText=attemptsNum,matches.forEach((t=>{t.classList.add("up")}));let t=Math.floor(2*Math.random());if(e>=0&&e<=matches.length){let a=matches[e];if(0==t){btns.forEach((t=>{t.disabled=!0})),a.querySelector("img").setAttribute("src","images/matches/1.webp"),a.classList.add("active"),win.classList.add("active"),setTimeout((()=>{modal.classList.add("active")}),1600),setTimeout((()=>{modal.classList.add("opacity")}),1700)}else makePopup()}attemptsIsEmpty()}))})),adaptationElements(),window.addEventListener("resize",adaptationElements);