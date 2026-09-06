// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const rail = document.getElementById('rail');

if (navToggle && rail) {
  navToggle.addEventListener('click', () => {
    rail.classList.toggle('open');
  });

  rail.querySelectorAll('.rail-link').forEach(link => {
    link.addEventListener('click', () => rail.classList.remove('open'));
  });
}

// Presentation flip cards
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('a')) return; // don't flip when clicking the download link
    card.classList.toggle('is-flipped');
  });
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('is-flipped');
    }
  });
});
