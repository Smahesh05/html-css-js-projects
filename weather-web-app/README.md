# My Weather App

## Overview

My Weather App is a simple web application that allows users to check the current weather for a location. It provides a user-friendly interface to input a location (city or ZIP code) and retrieve weather information using asynchronous requests to the OpenWeatherMap API.

## Features

- **Homepage**:

  - The homepage provides a simple user interface with an input field to enter a location and a "Get Weather" button to trigger the weather request.

- **Unit Selection**:

  - Users can switch between temperature units (Celsius and Fahrenheit) using a dropdown menu. The weather data is updated accordingly.

- **Geolocation**:

  - Users have the option to use their device's geolocation to automatically fetch weather information for their current location. Permissions will be requested for this feature.

- **Error Handling**:

  - The application gracefully handles cases where the location entered by the user is not found or when there is an issue with the API request. It displays user-friendly error messages and guides the user on how to proceed.

- **Input Field Clearing**:
  - After receiving a response, the input field is automatically cleared for a better user experience.

## Instructions

1. **Getting Started**:

   - Open the `index.html` file in a web browser.

2. **Getting Weather by Location**:

   - On the homepage, enter a location (city or ZIP code) in the input field.
   - Click the "Get Weather" button.

3. **Unit Selection**:

   - Use the dropdown menu labeled "Select Unit" to switch between Celsius and Fahrenheit. The weather data will be updated accordingly.

4. **Geolocation**:

   - Click the "Get Weather for Current Location" button to fetch weather information for your current location. You will be prompted to allow geolocation access.

5. **Error Handling**:

   - If a location is not found or there is an issue with the API request, a user-friendly error message will be displayed, guiding you on how to proceed.

6. **Input Field Clearing**:
   - After receiving a response, the input field will be automatically cleared.

## Technical Details

- **API Used**: OpenWeatherMap API
- **API Key (for demonstration)**: [YOUR_API_KEY]

## Developer Notes

- **Code**: The code is written in HTML, CSS, and JavaScript. The JavaScript file is embedded in the HTML for simplicity.

- **Unit Conversion**: The temperature unit is dynamically converted between Celsius and Fahrenheit based on user selection.

- **Geolocation**: The application requests geolocation permissions to get weather data for the user's current location.

- **Error Handling**: The application handles API request errors and location not found cases gracefully, providing informative error messages.

---

Enjoy using My Weather App! If you have any further questions or feedback, please don't hesitate to contact .

Happy Coding 💓
