!function(e,t){e&&!e.getElementById("livereloadscript")&&((t=e.createElement("script")).async=1,t.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t))}(self.document),function(){"use strict";let e=document.querySelector('link[rel="next"]')?.getAttribute("href");document.querySelector(".burger-button").addEventListener("click",(function(){document.body.classList.toggle("head-open")})),function(){if(!e)return;new IntersectionObserver(((t,r)=>{try{t.forEach((t=>{t.isIntersecting&&e&&async function(e){try{const t=await fetch(e);if(!t.ok)throw new Error("Failed to fetch page");const r=await t.text(),o=(new DOMParser).parseFromString(r,"text/html"),n=o.querySelectorAll(".post"),c=o.querySelector('link[rel="next"]')?.getAttribute("href");return{posts:n,nextLink:c}}catch(e){throw new Error(e)}}(e).then((t=>{let{posts:o,nextLink:n}=t;o.forEach((e=>{document.querySelector(".gh-postfeed").append(e)})),n?(e=n,r.observe(document.querySelector(".post:last-of-type"))):r.disconnect()}))}))}catch(e){console.log(e)}}),{rootMargin:"150px"}).observe(document.querySelector(".post:last-of-type"))}()}();
//# sourceMappingURL=index.js.map
