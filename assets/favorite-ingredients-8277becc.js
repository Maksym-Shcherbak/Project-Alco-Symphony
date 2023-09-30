import"./modulepreload-polyfill-ec808ebb.js";import{P as h}from"./pagination-12e29811.js";console.log();let n=[],m,f,l;const y=document.getElementById("tui-pagination-container"),r=document.querySelector(".favorite-ingradients-list"),g=new h(y,6);document.addEventListener("DOMContentLoaded",t=>{n=JSON.parse(localStorage.getItem("favorite-ingradients")),S(),m=g.createCardsPerPage(n),c(m[0],r),g.changePageByClick(m,r,c)});r.addEventListener("click",$);function S(){l=document.querySelector(".ingradient-modal")}function $(t){if(t.target.nodeName!=="BUTTON"){console.log(t);return}if(t.srcElement.className==="remove-button"){p(t),c(n,r);return}k(t,l),l.querySelector(".back-button").addEventListener("click",E),l.querySelector(".remove-button").addEventListener("click",p),l.querySelector(".add-button").addEventListener("click",N)}function k(t,e){B(n,e,t),e.classList.add("open")}function E(){I(l),c(n,r)}function I(t){t.classList.remove("open"),t.innerHTML=""}function p(t){t.target.classList.add("hidden"),t.target.nextElementSibling&&t.target.nextElementSibling.classList.remove("hidden");for(let e=0;e<n.length;e++){const{title:a}=n[e];t.target.dataset.name===a&&(n.splice(e,1),localStorage.setItem("favorite-ingradients",JSON.stringify(n)))}}function N(t){t.target.classList.add("hidden"),t.target.previousElementSibling.classList.remove("hidden"),n.push(f),localStorage.setItem("favorite-ingradients",JSON.stringify(n))}function c(t,e){e.innerHTML="";let a="Non-Alcoholic";for(let o=0;o<t.length;o++){const{title:i,description:d,alcohol:s}=t[o];s.toLowerCase()==="yes"&&(a="Alcoholic");const u=`<li>
    <h2 class="title">${i}</h2>
      <p class="alcohol">${a}</p>
      <p class="description">${d}</p>
       <button type="button" data-name="${i}">Read more</button>
       <button class="remove-button" type="button" data-name="${i}" >Remove from favorite</button>
      </li>`;e.insertAdjacentHTML("beforeend",u)}}function B(t,e,a){for(let o=0;o<t.length;o++){const{title:i,abv:d,type:s,country:u,flavour:b,description:v}=t[o];if(a.target.dataset.name===i){f=t[o];const L=`<h2 class="title">${i}</h2>
      <p class="type">${s}</p>
      <div>
        <p class="description">${v}</p>
        <ul class="list">
          <li>Type: ${s}</li>
          <li>Country of origin: ${u}</li>
          <li>Alcohol by volume: ${d}%</li>
          <li> Flavour: ${b}</li>
        </ul>
      </div>
      <button class="remove-button" type="button" data-name="${i}" >Remove from favorite</button>
       <button class="add-button hidden" type="button" data-name="${i}" >Add tofavorite</button>
      <button class="back-button" type="button">Back</button>`;e.insertAdjacentHTML("beforeend",L)}}}
