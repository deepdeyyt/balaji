// Basic client-side form handling for demo purposes
document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  var y = new Date().getFullYear();
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // basic validation
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var msg = document.getElementById('message').value.trim();
    if (!name || !phone || !msg) {
      alert('Please fill in Name, Phone & Message.');
      return;
    }
    // This is a demo. Replace with real submission to backend or form service.
    alert('Thanks, ' + name + '! Your message has been recorded (demo). We will contact you at ' + phone + '.');
    form.reset();
  });
});