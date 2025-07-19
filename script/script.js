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


