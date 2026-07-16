
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.global-nav');
const year = document.querySelector('#year');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

year.textContent = new Date().getFullYear();
