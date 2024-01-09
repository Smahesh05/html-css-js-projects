let input = document.getElementById("input");
let generateBtn = document.getElementById("generateBtn");
let main = document.querySelector("main");
let img = document.getElementById("img");
let qrDownloadBtn = document.getElementById("qrDownloadBtn");

generateBtn.addEventListener("click", function () {
  if (!input.value) return;

  generateBtn.textContent = "Generating...";

  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;

  img.onload = () => {
    generateBtn.textContent = "Generate";
    main.classList.add("show");
  };
});

qrDownloadBtn.addEventListener("click", function () {
  fetch(img.src)
    .then((res) => {
      return res.blob();
    })
    .then((blob) => {
      let imgURL = URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = imgURL;
      a.download = input.value;
      a.click();
    });
});
