/ ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
//@match         https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==
let yInput = document.getElementByName("id='text'")[0];
let bt = document.getElementsByName ('bt')[i];
let s = 'Гобой';
let i = 0;
let links = document.links;

if (bt!=undefined){
    let timerId = setInterval(()=>{
  yInput.value += s[i];
  i++;
  if (i==s.length) {
      clearInterval(timerId);
      bt.click();}
  },500);
}
else if (location.hostname == "www.yandex.ru") {
    for (let i=0; i<links.length; i++){
        if(links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
            links[i].click();
            break;
        }
    }
}
else{
    setInterval(()=>{
        let index = getRandom(0,links.length)
        links[index].click();
        if(getRandom(0,100)<30)location.href = "https://www.yandex.ru/";
    },5000);
}

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}






