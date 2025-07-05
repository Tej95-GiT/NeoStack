// Smooth scroll to section
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;

  window.scrollTo({
    top: target.offsetTop,
    behavior: 'smooth'
  });
}
// Smooth scroll for anchor links

// Improved dark theme toggle
function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Optional: update button icon
  const toggleBtn = document.querySelector('.theme-toggle');
  if (toggleBtn) toggleBtn.textContent = isDark ? '☀️' : '🌙';
}

// Load theme preference on start
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) toggleBtn.textContent = '☀️';
  }
};

// Roadmap toggle (deprecated, replaced by vertical roadmap UI)
function toggleDetails(card) {
  // no-op (functionality shifted to vertical roadmap progress)
}

// Notes: Add a new note
function addNote() {
  const input = document.getElementById('noteInput');
  const noteText = input.value.trim();
  if (!noteText) return;

  const li = document.createElement('li');
  li.innerHTML = `${noteText} <span class="delete" onclick="deleteNote(this)">✕</span>`;
  document.getElementById('noteList').appendChild(li);
  input.value = '';
}

// Notes: Delete a note
function deleteNote(el) {
  el.parentElement.remove();
}

// Gallery Modal (used for certifications now)
function openModal(src) {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImage');
  modal.style.display = 'block';
  modalImg.src = src;
}

function closeModal() {
  document.getElementById('imgModal').style.display = 'none';
}

// Fake form submit
function submitFake(e) {
  e.preventDefault();
  alert('Message sent (demo only)');
}
// Smooth scroll for anchor links


//mc complicationssss

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo img');
  const container = document.querySelector('.logo');

  if (!logo || !container) return;

  container.addEventListener('mousemove', (e) => {
    const bounds = container.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    logo.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  container.addEventListener('mouseleave', () => {
    logo.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
});

