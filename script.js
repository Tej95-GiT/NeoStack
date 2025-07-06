


// Improved scroll-to-section with fallback
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  const top = section.offsetTop;

  window.scrollTo({
    top: top,
    behavior: 'smooth'
  });
}

// Improved dark theme toggle
function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  const toggleBtn = document.querySelector('.theme-toggle');
  if (toggleBtn) toggleBtn.textContent = isDark ? '☀️' : '🌙';
}

// Load theme preference on start
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) toggleBtn.textContent = '☀️';
  }

  // Logo parallax tilt
  const logo = document.querySelector('.logo img');
  const container = document.querySelector('.logo');

  if (logo && container) {
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
  }
});


// Notes: Add a new note

let activeNotes = [];

function addNote() {
  const input = document.getElementById('noteInput');
  const text = input.value.trim();
  const button = document.querySelector('.note-box button');

  // R I P P L E
  button.classList.remove('ripple'); // reset
  void button.offsetWidth;           // force reflow
  button.classList.add('ripple');

  // CONTINUE .. ..
  if (!text || text.length > 100) return;

  const note = document.createElement('div');
  note.className = 'floating-note';
  note.textContent = text;

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '✕';
  closeBtn.className = 'close-btn';
  closeBtn.onclick = () => {
    note.remove();
    activeNotes = activeNotes.filter(n => n !== note);
  };
  note.appendChild(closeBtn);

  document.getElementById('floatingNotes').appendChild(note);

  requestAnimationFrame(() => {
    placeNoteSafely(note);
    makeDraggable(note);
    activeNotes.push(note);
    input.value = '';
  });
}


// Notes: Place note safely within bounds

function placeNoteSafely(note) {
  const section = document.getElementById('floatingNotes');
  const padding = 30;
  const maxAttempts = 100;

  const noteW = note.offsetWidth;
  const noteH = note.offsetHeight;

  for (let i = 0; i < maxAttempts; i++) {
    const x = padding + Math.random() * (section.offsetWidth - noteW - 2 * padding);
    const y = 200 + Math.random() * (section.offsetHeight - noteH - 2 * padding - 200); // keep below UI

    note.style.left = `${x}px`;
    note.style.top = `${y}px`;

    const r1 = note.getBoundingClientRect();
    const overlaps = activeNotes.some(existing => {
      const r2 = existing.getBoundingClientRect();
      return (
        r1.left < r2.right &&
        r1.right > r2.left &&
        r1.top < r2.bottom &&
        r1.bottom > r2.top
      );
    });

    if (!overlaps) return;
  }

  // fallback if no space
  note.style.left = "30px";
  note.style.top = "200px";
}


// Notes: Make note draggable (Fixed)

function makeDraggable(note) {
  let isDragging = false;
  let offsetX = 0, offsetY = 0;

  note.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains('close-btn')) return;

    isDragging = true;
    offsetX = e.clientX - note.offsetLeft;
    offsetY = e.clientY - note.offsetTop;
    note.style.zIndex = 999;
    note.style.cursor = "grabbing";

    const onMouseMove = (e) => {
      if (!isDragging) return;

      const parent = document.getElementById('floatingNotes');
      const x = Math.min(Math.max(e.clientX - offsetX, 10), parent.offsetWidth - note.offsetWidth - 10);
      const y = Math.min(Math.max(e.clientY - offsetY, 10), parent.offsetHeight - note.offsetHeight - 10);

      note.style.left = `${x}px`;
      note.style.top = `${y}px`;
    };

    const onMouseUp = () => {
      isDragging = false;
      note.style.cursor = "grab";
      note.style.zIndex = 2;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
}

// Notes: Active notes array
// Notes: Toggle note input visibility


// Notes: Place note randomly within bounds
// Notes: Toggle note input visibility

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
// Smooth scroll for internal links


function showRoadmapDetail(key) {
  const infoBox = document.getElementById('roadmap-info');
  const steps = document.querySelectorAll('.roadmap-left .step');

  steps.forEach(s => s.classList.remove('active'));
  const target = document.querySelector(`.step[onclick*="${key}"]`);
  if (target) target.classList.add('active');

  // Slide out
  infoBox.style.opacity = 0;
  infoBox.style.transform = "translateX(20px)";

setTimeout(() => {
  let content = {
    html: {
      title: "HTML Basics – The Root of It All",
      desc: "My journey into web development began with the raw My journey into web development began with the raw structure of HTML. It was like learning the skeleton of the internet — from headings and paragraphs to forms and semantic tags. I still remember the first time I saw my own text displayed in a browser. There was no style, no layout — just pure content. Yet it felt powerful. I learned the importance of clean markup, how DOM trees form, and how structure affects accessibility and SEO. That foundation gave me the confidence to explore more."
    },
    css: {
      title: "CSS Layouts – Learning to Breathe Life into Pages",
      desc: "After HTML, CSS became my battleground. Positioning elements was chaos in the beginning — the first time I touched Flexbox, nothing aligned. But slowly, I cracked the puzzle: box model, z-index, responsive breakpoints, animations. I started to see the browser not just as a place to dump content, but as a canvas. With every small UI I built, I found myself tweaking colors, spacing, and layouts endlessly. Grid was a game-changer — once that clicked, I began creating full layouts that scaled across devices."
    },
    js: {
      title: "JavaScript Logic – From Static to Interactive",
      desc: "This was the turning point. With JS, I moved from websites that looked good to ones that responded, reacted, and lived. I started simple: toggling menus, handling form inputs, making notes persist using localStorage. Then I learned about the DOM, event delegation, scope, and closures — concepts that helped me reason like a programmer. Debugging became part of the fun. I began building things that felt dynamic — a note-taking app, button animations, even theme toggles. This is where I realized I was building, not just learning."
    },
    git: {
      title: "Git & GitHub – Real Dev Discipline",
      desc: "Everything changed when I committed my first project. At first, Git felt like another tool — until I broke a branch, had to stash changes, and fix merge conflicts. I learned the hard way why version control is essential. GitHub became my mirror: it showed how much I had built, how far I'd come. Pushing commits, writing clean messages, creating branches for features — it became second nature. Deploying via GitHub Pages and seeing my own work live was one of the most rewarding experiences in my early dev phase."
    },
    projects: {
      title: "Projects – Where Everything Came Together",
      desc: "Once I had the tools, I started crafting real things. I built landing pages from scratch, developed interactive tools like note apps and galleries, and finally brought this NeoStack project to life. Each project taught me not just code, but workflow, polish, and clarity. I began caring about responsiveness, accessibility, and clean UI flow. I wasn't just applying skills — I was shaping my identity as a developer. Every error, every fix, every improvement became a step forward. This phase turned knowledge into proof."
    }
  };

  // your existing logic here, e.g.:



    infoBox.innerHTML = `
      <h3>${content[key].title}</h3>
      <p>${content[key].desc}</p>
    `;

    // Slide in
    infoBox.style.opacity = 1;
    infoBox.style.transform = "translateX(0)";
  }, 200);
}


const fadeItems = document.querySelectorAll('.fade-slide');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.15
});

fadeItems.forEach(el => observer.observe(el));
