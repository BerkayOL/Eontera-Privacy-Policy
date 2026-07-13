document.addEventListener('DOMContentLoaded', () => {
  const sectionTR = document.getElementById('tr');
  const sectionEN = document.getElementById('en');
  const btnTR = document.getElementById('btn-tr');
  const btnEN = document.getElementById('btn-en');
  const htmlTag = document.documentElement;

  function updateLanguage() {
    const hash = window.location.hash;
    
    // Default to EN if #en, otherwise TR
    if (hash === '#en') {
      sectionTR.style.display = 'none';
      sectionEN.style.display = 'block';
      btnTR.classList.remove('active');
      btnEN.classList.add('active');
      htmlTag.lang = 'en';
      document.title = 'Eontera Privacy Policy';
    } else {
      sectionTR.style.display = 'block';
      sectionEN.style.display = 'none';
      btnTR.classList.add('active');
      btnEN.classList.remove('active');
      htmlTag.lang = 'tr';
      document.title = 'Eontera Gizlilik Politikası';
    }
  }

  // Handle hash change events for smooth transition
  window.addEventListener('hashchange', () => {
    updateLanguage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Execute on initial load without smooth scroll
  updateLanguage();
});
