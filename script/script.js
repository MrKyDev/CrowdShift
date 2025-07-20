
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
  }

  function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
  }

  function showAboutUs() {
    document.getElementById("aboutUsModal").style.display = "flex";
  }

  function closeAboutUs() {
    document.getElementById("aboutUsModal").style.display = "none";
  }

  function setMap(type) {
    const mapFrame = document.getElementById('mapFrame');
    let url = "";

    switch (type) {
      case 'shuttle':
        url = "https://www.google.com/maps?q=Baguio%20Jeepney%20Terminal&output=embed";
        break;
      case 'restaurants':
        url = "https://www.google.com/maps?q=restaurants+in+Baguio&output=embed";
        break;
      case 'clinics':
        url = "https://www.google.com/maps?q=medical+clinics+in+Baguio&output=embed";
        break;
      case 'police':
        url = "https://www.google.com/maps?q=police+stations+in+Baguio&output=embed";
        break;
      case 'parks':
        url = "https://www.google.com/maps?q=parks+in+Baguio&output=embed";
        break;
      case 'tourist':
        url = "https://www.google.com/maps?q=tourist+spots+in+Baguio&output=embed";
        break;
      case 'banks':
        url = "https://www.google.com/maps?q=banks+and+atms+in+Baguio&output=embed";
        break;
      case 'markets':
        url = "https://www.google.com/maps?q=markets+and+malls+in+Baguio&output=embed";
        break;
      case 'hotels':
        url = "https://www.google.com/maps?q=hotels+motels+transients+in+Baguio&output=embed";
        break;
    }

    // Change map
    mapFrame.src = url;

    // Highlight the clicked button
    const buttons = document.querySelectorAll(".buttons-container button");
    buttons.forEach(btn => btn.classList.remove("active"));

    const clickedBtn = Array.from(buttons).find(btn => btn.innerText.toLowerCase().includes(type));
    if (clickedBtn) {
      clickedBtn.classList.add("active");
    }
  }

  // Optional: preload animation
  document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const typingElement = document.getElementById("typing");
    const content = document.getElementById("content");

    const text = "CrowdShift";
    let charIndex = 0;

    function typeEffect() {
      if (typingElement && charIndex < text.length) {
        typingElement.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 150);
      } else if (loader && content) {
        setTimeout(() => {
          loader.style.opacity = "0";
          loader.style.pointerEvents = "none";
          content.style.opacity = "1";
          content.style.pointerEvents = "auto";
        }, 800);
      }
    }

    if (typingElement) {
      typeEffect();
    }
  });

