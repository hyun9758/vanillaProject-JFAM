function r(e){if(typeof e!="string")throw new Error("문자열로만 기입해주세요.");return document.querySelector(e)}function s(e){if(typeof e!="string")throw new Error("문자열로만 기입해주세요.");return document.querySelectorAll(e)}function i(e,t){r(e).insertAdjacentHTML("beforeend",t)}function a(e){return`https://jfam.pockethost.io/api/files/${e.collectionName}/${e.id}/${e.image}`}function c(e,t,n){const o=e;if(t==="add")o.classList.add(n);else if(t==="remove")o.classList.remove(n);else throw new Error("setClassList 함수의 modify는 add 또는 remove 입니다")}function f(e,t){const n=e;n.textContent=t}export{a,s as b,f as c,r as g,i,c as s};
