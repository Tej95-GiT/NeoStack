function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


function toggleDetails(card) {
  const details = card.querySelector('.details');
  const allCards = document.querySelectorAll('.roadmap-card');

  // Close all others
  allCards.forEach(c => {
    if (c !== card) {
      c.classList.remove('active');
      c.querySelector('.details').style.display = 'none';
    }
  });

  // Toggle current
  const isOpen = card.classList.contains('active');
  if (isOpen) {
    details.style.display = 'none';
    card.classList.remove('active');
  } else {
    details.style.display = 'block';
    card.classList.add('active');
  }
}


