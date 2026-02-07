const card = document.querySelector('.card');
const links = document.querySelectorAll('.link');

if (card) {
  card.classList.remove('reveal');
  window.setTimeout(() => {
    card.classList.add('reveal');
  }, 80);
}

links.forEach((link, index) => {
  link.classList.remove('reveal');
  window.setTimeout(() => {
    link.classList.add('reveal');
  }, 180 + index * 90);
});
