// Hero Section Scroll Down Animation
const scrollDown = document.querySelector('.scroll-down');

scrollDown.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior:'smooth'
  });
});

// Testimonials Section Slider
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial');

let currentTestimonial = 0;

function showTestimonial() {
  testimonials.forEach((testimonial, index) => {
    if (index === currentTestimonial) {
      testimonial.classList.add('active');
    } else {
      testimonial.classList.remove('active');
    }
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial();
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial();
}

testimonialSlider.addEventListener('click', (e) => {
  if (e.target.classList.contains('testimonial')) {
    currentTestimonial = Array.prototype.indexOf.call(testimonials, e.target);
    showTestimonial();
  }
});

// Call-to-Action Section Button Hover Effects
const ctaButtons = document.querySelectorAll('.cta-btn');

ctaButtons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    button.style.transform ='scale(1.1)';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform ='scale(1)';
  });
});

// Footer Social Media Links Hover Effects
const socialMediaLinks = document.querySelectorAll('.social-media-link');

socialMediaLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    link.style.transform ='scale(1.1)';
  });

  link.addEventListener('mouseout', () => {
    link.style.transform ='scale(1)';
  });
});