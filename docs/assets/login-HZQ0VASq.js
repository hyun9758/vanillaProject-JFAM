import"./reset-9GtOEJoH.js";/* empty css              *//* empty css               *//* empty css               */import"./include-JfAPemNh.js";import{p}from"./pocketbase-v9INCz3k.js";import{s as f}from"./storage-9woz5qE_.js";const i=document.querySelector(".input-id"),a=document.querySelector(".id-input-condition"),d=document.querySelector(".input-password"),r=document.querySelector(".password-input-condition"),h=document.querySelector(".login-button"),n=document.querySelector(".auto-login-img"),m=document.querySelector(".find-id"),w=document.querySelector(".find-password"),s=document.querySelector(".modal-container"),y=document.querySelector(".closeButton");let o=!1,c=!1;function g(t){return/^[a-zA-Z0-9]{6,12}$/.test(String(t).toLowerCase())}function v(t){return/^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(String(t).toLowerCase())}const k=async(t,e)=>{try{return await p.collection("users").authWithPassword(t,e)}catch{return window.alert("일치하는 회원정보가 없습니다. 아이디, 비밀번호를 다시 확인해주세요."),!1}};function C(){o=g(i.value),o?a.textContent="":a.textContent="영문 또는 영문, 숫자 조합 6~12자리로 입력해주세요."}function S(t){const e=t.target;c=v(e.value),c?r.textContent="":r.textContent="특수문자(~!@#$%^&*) 포함 6~16자리로 입력해주세요."}async function q(t){if(o&&c){t.preventDefault();const e=await k(i.value,d.value);e?(f("auth",{isAuth:!0,userData:e}),window.location.href="/src/pages/main/index.html"):alert("일치하는 회원정보가 없습니다. 아이디, 비밀번호를 다시 확인해주세요.")}else alert("아이디나 비밀번호 형식을 맞춰주세요.")}function L(){n.id==="auto-unchecked"?(n.src="/images/check_filled_blue.svg",n.id="auto-checked",n.alt="체크박스 활성화"):(n.src="/images/check_filled_white.svg",n.id="auto-unchecked",n.alt="체크박스 비활성화")}function l(t){t.preventDefault(),s.style.display="block"}function E(t){t.preventDefault(),s.style.display="none"}i.addEventListener("input",C);d.addEventListener("input",S);h.addEventListener("click",q);n.addEventListener("click",L);m.addEventListener("click",l);w.addEventListener("click",l);y.addEventListener("click",E);
