// Image slider
const images = [
  "images/slider1.jpg",
  "images/slider2.jpg",
  "images/slider3.jpg",
];
let current = 0;
const slider = document.getElementById("sliderImage");

if (slider) {
  setInterval(() => {
    current = (current + 1) % images.length;
    slider.src = images[current];
  }, 3000);
}

// Form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    if (!name || !email || !message) {
      document.getElementById("formMessage").textContent =
        "All fields are required!";
    } else {
      document.getElementById("formMessage").textContent =
        "Thank you for contacting us!";
      this.reset();
    }
  });
}
