// Smooth scroll to section – works good
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// toggle roadmap – only one opens at a time
function toggleDetails(card) {
  const details = card.querySelector('.details');
  const allCards = document.querySelectorAll('.roadmap-card');

  // close all others
  allCards.forEach(c => {
    if (c !== card) {
      c.classList.remove('active');
      c.querySelector('.details').style.display = 'none';
    }
  });

  // toggle clicked one
  if (card.classList.contains('active')) {
    details.style.display = 'none'; // collapse
    card.classList.remove('active');
  } else {
    details.style.display = 'block'; // open
    card.classList.add('active');
  }
}

// adding note

function addNote() {
  const input = document.getElementById('noteInput');
  const noteText = input.value.trim();

  if (noteText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `${noteText} <span class="delete" onclick="deleteNote(this)">✕</span>`;

  document.getElementById('noteList').appendChild(li);
  input.value = '';
}

function deleteNote(el) {
  el.parentElement.remove();
}

// end of adding note

// gallery

function openModal(src) {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImage');
  modal.style.display = 'block';
  modalImg.src = src;
}

function closeModal() {
  document.getElementById('imgModal').style.display = 'none';
}
 // end of gallery

 // about
 // about as refrence

 function submitFake(e) {
  e.preventDefault();
  alert('Message sent (demo only)');
}

// about end