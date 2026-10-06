
const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");
if(menuBtn) menuBtn.addEventListener("click",()=>navLinks.classList.toggle("show"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks?.classList.remove("show")));

document.querySelectorAll(".faq button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const item=btn.parentElement;
    document.querySelectorAll(".faq").forEach(x=>{if(x!==item)x.classList.remove("open")});
    item.classList.toggle("open");
  });
});

document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());

const forms=document.querySelectorAll(".contact-form");
forms.forEach(form=>{
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const msg=form.querySelector(".form-message");
    if(msg){msg.textContent="Thanks! Your request has been captured. Connect this form to your email/CRM before launch.";msg.style.display="block";}
  });
});
