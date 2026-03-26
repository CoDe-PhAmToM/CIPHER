// ── CURSOR ──
const cur  = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx - 4 + 'px';
  cur.style.top  = my - 4 + 'px';
});

(function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx - 14 + 'px';
  ring.style.top  = ry - 14 + 'px';
  requestAnimationFrame(animRing);
})();

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('on');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── TRACK SWITCHER ──
function sw(id, btn) {
  document.querySelectorAll('.track-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.track-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('track-' + id).classList.add('active');
}
