document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("volunteerForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const interest = document.getElementById("interest").value.trim();

      if (!name || !email || !interest) return;

      const newEntry = {
        name,
        email,
        interest,
        date: new Date().toLocaleString(),
      };

      let volunteers = JSON.parse(localStorage.getItem("volunteers") || "[]");
      volunteers.push(newEntry);
      localStorage.setItem("volunteers", JSON.stringify(volunteers));

      // Redirect to view page
      window.location.href = "volunteers.html";
    });
  }
});

