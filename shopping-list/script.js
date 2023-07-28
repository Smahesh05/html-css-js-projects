const btnEl = document.getElementById("btnId");
const ulEl = document.querySelector("ul");
const btnFilterEl = document.getElementById("btnFilter");
let listData = []; // Array to store the items with their dates

// Function to load and display the list
function loadList() {
  const storedData = localStorage.getItem("listData");
  if (storedData) {
    listData = JSON.parse(storedData); // Parse the JSON string and add items to the array
  }
  displayList(); // Display the sorted list
}

// Function to save the list data to localStorage
function saveListToLocalStorage() {
  localStorage.setItem("listData", JSON.stringify(listData)); // Store the array in localStorage as a JSON string
}

// Function to display the sorted list
function displayList() {
  ulEl.innerHTML = ""; // Clear the existing list

  // Display the sorted list
  for (const item of listData) {
    const liEl = document.createElement("li");
    liEl.innerHTML = `
        <span>${item.text}</span>
        <span>${item.date}</span>
        <span class="btn-delete">X</span>
      `;
    ulEl.appendChild(liEl);
  }
}

// Add event listener to the "Add" button
btnEl.addEventListener("click", function (e) {
  const inputEl = document.getElementById("inputId").value;
  const currentDate = new Date().toLocaleString(); // Get the current date and time
  listData.push({ text: inputEl, date: currentDate }); // Add item with date to the array
  saveListToLocalStorage(); // Save the updated array to localStorage
  document.getElementById("inputId").value = ""; // Clear the input field
  displayList(); // Display the updated list
});

// Add event listener to the "Delete" button
ulEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-delete")) {
    const liEl = e.target.parentElement;
    const text = liEl.querySelector("span").innerText;
    listData = listData.filter((item) => item.text !== text); // Remove the item from the array
    saveListToLocalStorage(); // Save the updated array to localStorage
    displayList(); // Display the updated list
  }
});

// Add event listener to the "Sort by Date" button
btnFilterEl.addEventListener("click", function (e) {
  listData.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort the array by date in descending order
  displayList(); // Display the sorted list
});

// On page load, load and display the stored list data from localStorage
loadList();
