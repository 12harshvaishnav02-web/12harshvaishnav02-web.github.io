const items=document.querySelectorAll('.section-head,.card,.timeline article,.internship,.education,.contact-row');
items.forEach(el=>el.classList.add('reveal'));
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver((entries,obs)=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target);}
 }),{threshold:.08});
 items.forEach(el=>observer.observe(el));
}else{items.forEach(el=>el.classList.add('visible'));}
document.querySelectorAll('details').forEach(el=>el.addEventListener('toggle',()=>{
 const symbol=el.querySelector('summary b'); if(symbol) symbol.textContent=el.open?'−':'＋';
}));
