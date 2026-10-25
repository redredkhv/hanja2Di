(function(){var L=["ko","ru","en"],q=new URLSearchParams(location.search).get("lang"),s=null;
try{s=localStorage.getItem("h2d-lang")}catch(e){}
var n=(navigator.language||"ko").slice(0,2),cur=L.indexOf(q)>=0?q:L.indexOf(s)>=0?s:L.indexOf(n)>=0?n:"ko";
function set(l){cur=l;document.documentElement.lang=l;document.querySelectorAll(".langs button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.set===l)});
 var t=document.querySelector("title[data-"+l+"]");if(t)document.title=t.getAttribute("data-"+l);try{localStorage.setItem("h2d-lang",l)}catch(e){}}
document.addEventListener("click",function(e){var b=e.target.closest(".langs button");if(b)set(b.dataset.set)});
set(cur)})();
