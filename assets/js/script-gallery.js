// script.js
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-button');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');
  const zoomInBtn = document.querySelector('.zoom-in');
  const zoomOutBtn = document.querySelector('.zoom-out');

  // Filter functionality (unchanged)
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      galleryItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox functionality
  const galleryImages = document.querySelectorAll('.gallery-image');
  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      lightbox.style.display = 'block';
      lightboxImg.src = image.src;
    });
  });

  // Close lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.style.transform = 'scale(1)'; // Reset zoom
  });

  // Zoom in
  zoomInBtn.addEventListener('click', () => {
    lightboxImg.style.transform = 'scale(1.5)';
  });

  // Zoom out
  zoomOutBtn.addEventListener('click', () => {
    lightboxImg.style.transform = 'scale(1)';
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg && e.target !== zoomInBtn && e.target !== zoomOutBtn) {
      lightbox.style.display = 'none';
      lightboxImg.style.transform = 'scale(1)'; // Reset zoom
    }
  });
});