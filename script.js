function showSection(sectionId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
      section.style.display = 'none';
    });
  
    var section = document.getElementById(sectionId);
    section.style.display = 'block';
  }
  
  