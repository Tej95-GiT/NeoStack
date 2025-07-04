function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


function toggleDetails(card) {
  const allCards = document.querySelectorAll('.roadmap-card');
  allCards.forEach(c => {
    if (c !== card) c.classList.remove('active');
  });
  card.classList.toggle('active');
}

