// Smooth scroll to section
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

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