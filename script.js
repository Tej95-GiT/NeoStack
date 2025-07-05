// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Dark theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

// Load dark mode if previously set
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
};

// Toggle roadmap details per card
function toggleDetails(card) {
  const details = card.querySelector('.details');
  const allCards = document.querySelectorAll('.roadmap-card');

  allCards.forEach(c => {
    if (c !== card) {
      c.classList.remove('active');
      c.querySelector('.details').style.display = 'none';
    }
  });

  if (card.classList.contains('active')) {
    details.style.display = 'none';
    card.classList.remove('active');
  } else {
    details.style.display = 'block';
    card.classList.add('active');
  }
}

// Notes: Add a new note
function addNote() {
  const input = document.getElementById('noteInput');
  const noteText = input.value.trim();

  if (noteText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `${noteText} <span class="delete" onclick="deleteNote(this)">✕</span>`;
  document.getElementById('noteList').appendChild(li);
  input.value = '';
}

// Notes: Delete a note
function deleteNote(el) {
  el.parentElement.remove();
}

// Gallery: Open modal image
function openModal(src) {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImage');
  modal.style.display = 'block';
  modalImg.src = src;
}

// Gallery: Close modal
function closeModal() {
  document.getElementById('imgModal').style.display = 'none';
}

// Contact: Fake form submission
function submitFake(e) {
  e.preventDefault();
  alert('Message sent (demo only)');
}
// Contact: Validate email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
} 

// Contact: Validate form
function validateForm() {
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return false;
  }
  if (message.trim() === '') {
    alert('Message cannot be empty.');
    return false; 

  }
  return true;
}

// Contact: Handle form submission
function handleSubmit(e) {
  e.preventDefault();
  if (validateForm()) {
    document.getElementById('contactForm').submit();
  }
}
// FAQ: Toggle answer visibility

