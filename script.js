
document.querySelectorAll('.materia').forEach(m => {
  m.addEventListener('click', () => {
    m.classList.toggle('tachada');
  });
});
