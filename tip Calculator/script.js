const button = document.querySelector("button");
const outPut = document.querySelector(".output");

button.addEventListener("click", tipForService);

function tipForService(e) {
  e.preventDefault();
  const cost = document.querySelector("input");

  // console.log(cost.value * 0.12);
  let tip = (cost.value * 0.12).toFixed(2);

  let temp = `<h3>You should give tip of $${tip} on of $${cost.value}</h3>`;
  outPut.innerHTML = temp;
}
