function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


function toggleDetails(card) {
  card.classList.toggle('active');
}
