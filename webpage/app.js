const listItems = document.querySelectorAll(".anchor");

function activateListItem(element) {
  listItems.forEach((item) => item.classList.remove("active"));

  element.classList.add("active");
}

listItems.forEach((item) => {
  item.addEventListener("click", function () {
    activateListItem(this);
  });

  item.addEventListener("mouseenter", function () {
    this.classList.add("hover");
  });

  item.addEventListener("mouseleave", function () {
    this.classList.remove("hover");
  });

  item.addEventListener("click", function () {
    if (!this.classList.contains("hover")) {
      this.classList.remove("active");
    }
  });
});

function activateListItem(element) {
  var listItems = document.querySelectorAll(".header__item a");
  listItems.forEach((item) => item.classList.remove("active"));

  element.classList.add("active");
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      console.log(`https://www.google.pt/maps/@${latitude}@${longitude}`);

      const coords = [latitude, longitude];

      const map = L.map("map").setView(coords, 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup("A pretty CSS popup.<br> Easily customizable.")
        .openPopup();
    },
    function () {
      console.log("position not find");
    }
  );
}

const scrollTopBtn = document.getElementById("scrollTopBtn");

scrollTopBtn.addEventListener("click", function () {
  const homeListItem = document.querySelector('a[href="#home"]');
  activateListItem(homeListItem);
  document.documentElement.scrollTop = 0;
});
