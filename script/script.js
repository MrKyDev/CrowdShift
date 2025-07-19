function mockLogin() {
  window.location.href = "index.html";
}

function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function setMap(category) {
  const map = document.getElementById("mapFrame");
  let src = "";

  switch (category) {
    case "restaurants":
      src = "https://www.google.com/maps?q=Goodtaste%20Restaurant%20Baguio&output=embed";
      break;
    case "shuttle":
      src = "https://www.google.com/maps?q=Baguio%20Jeepney%20Terminal&output=embed";
      break;
    case "clinics":
      src = "https://www.google.com/maps?q=Medical%20Clinics%20in%20Baguio&output=embed";
      break;
    case "police":
      src = "https://www.google.com/maps?q=Police%20Stations%20in%20Baguio&output=embed";
      break;
    case "parks":
      src = "https://www.google.com/maps?q=Burnham%20Park%20Baguio&output=embed";
      break;
    case "tourist":
      src = "https://www.google.com/maps?q=Tourist%20Spots%20in%20Baguio&output=embed";
      break;
    case "banks":
      src = "https://www.google.com/maps?q=Banks%20in%20Baguio&output=embed";
      break;
    case "markets":
      src = "https://www.google.com/maps?q=Public%20Market%20Baguio&output=embed";
      break;
    default:
      src = "https://www.google.com/maps?q=Baguio&output=embed";
  }

  map.src = src;
}

 function mockLogin() {
      window.location.href = "main.html";
    }

    // Preloader script
     // Simulate successful login (mock)
    function mockLogin() {
      // You can replace this alert with: window.location.href = "main.html";
      alert("✅ Logged in successfully! Redirecting to dashboard...");
      window.location.href = "main.html"; // mock redirect
    }

    document.addEventListener("DOMContentLoaded", function () {
      const loader = document.getElementById("loader");
      const typingElement = document.getElementById("typing");
      const content = document.getElementById("content");

      const text = "CrowdShift";
      let charIndex = 0;

      function typeEffect() {
        if (charIndex < text.length) {
          typingElement.innerHTML += text.charAt(charIndex);
          charIndex++;
          setTimeout(typeEffect, 150);
        } else {
          setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";
            content.style.opacity = "1";
            content.style.pointerEvents = "auto";
          }, 800); // delay before showing main content
        }
      }

      typeEffect();
    });
