// Navbar Project
// http://www.omdbapi.com/?apikey=8f7c9dc
const humbergerBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

humbergerBtn.addEventListener('click', function toggleNavbar(e) {
  //   if (links.classList.contains('show-links')) {
  //     humbergerBtn.classList.remove('navbar-toggle-rotate');
  //     links.classList.remove('show-links');
  //   } else {
  //     humbergerBtn.classList.add('navbar-toggle-rotate');
  //     links.classList.add('show-links');
  //   }
  links.classList.toggle('show-links');
});
