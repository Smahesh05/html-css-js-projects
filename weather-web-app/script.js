function convertTemperature(temp, unit) {
  if (unit === "imperial") {
    return (temp * 9) / 5 + 32;
  }
  return temp;
}

function errorCondition() {}

const formEl = document.getElementById("weatherForm");
const apiKey = "1d9f62e628091d7c340796e75df7b71c";
const geoLocationButtonEl = document.getElementById("geoLocationButton");
const unitSelectEl = document.getElementById("unitSelect");
const weatherFormEl = document.getElementById("weatherForm");

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  let locationEl = document.getElementById("locationInput").value;
  const unit = document.getElementById("unitSelect").value;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationEl}&units=${unit}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (data.cod === "404") {
        throw new Error("Location not found");
      }

      const temperature = convertTemperature(data.main.temp, unit);
      const weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${temperature}°${
        unit === "imperial" ? "F" : "C"
      }</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Speed: ${data.wind.speed}</p>
            `;

      document.getElementById("weatherInfo").innerHTML = weatherInfo;
      locationEl = "";
    })
    .catch((error) => {
      let errorMessage = "Please try again";
      if (error.message === "Location not found") {
        errorMessage = "Location not found. Please enter a valid location.";
      }

      document.getElementById(
        "weatherInfo"
      ).innerHTML = `<p>${errorMessage}</p>`;
    });
});

unitSelectEl.addEventListener("change", function () {
  weatherFormEl.dispatchEvent(new Event("submit"));
});

geoLocationButtonEl.addEventListener("click", function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const unit = unitSelectEl.value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;

        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            const temperature = convertTemperature(data.main.temp, unit);

            const weatherInfo = `
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <p>Temperature: ${temperature}°${
              unit === "imperial" ? "F" : "C"
            }</p>
                        <p>Weather: ${data.weather[0].description}</p>
                    `;

            document.getElementById("weatherInfo").innerHTML = weatherInfo;
            locationEl = "";
          })
          .catch((error) => {
            let errorMessage = "error found. Please try again later.";

            document.getElementById(
              "weatherInfo"
            ).innerHTML = `<p>${errorMessage}</p>`;
          });
      },
      function (error) {
        console.error("Geolocation error:", error);
        document.getElementById(
          "weatherInfo"
        ).innerHTML = `<p>Unable to retrieve location. Please try again or enter a location manually.</p>`;
      }
    );
  } else {
    console.error("Geolocation is not supported by your browser.");
    document.getElementById(
      "weatherInfo"
    ).innerHTML = `<p>Geolocation is not supported by your browser.</p>`;
  }
});
