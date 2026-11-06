document.addEventListener('DOMContentLoaded', () => {
 const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.primary-nav');
 menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav?.classList.toggle('is-open',!open)});
 const catalogs=[...document.querySelectorAll('[data-selaras-catalog]')];
 if(!catalogs.length && document.querySelector('.product-grid')) catalogs.push(document.querySelector('#catalog')||document);
 catalogs.forEach(catalog=>{
  const filters=[...catalog.querySelectorAll('[data-filter]')],cards=[...catalog.querySelectorAll('[data-product-category]')];
  function filter(value){filters.forEach(b=>b.classList.toggle('is-active',b.dataset.filter===value));cards.forEach(c=>{c.hidden=value!=='all'&&c.dataset.productCategory!==value})}
  filters.forEach(b=>b.addEventListener('click',()=>filter(b.dataset.filter)));
  document.querySelectorAll('[data-category]').forEach(a=>a.addEventListener('click',()=>filter(a.dataset.category)));
 });
});
