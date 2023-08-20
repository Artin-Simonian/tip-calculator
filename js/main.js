// Constants
const billElement = document.querySelector("#total > input");
const tipElement = document.querySelector("#tip > input");
const totalbtn = document.querySelector(".total-btn");
const totalText = document.querySelector('#total > p');
const fiveBtn = document.getElementById('five');
const tenBtn = document.getElementById('ten');
const twentyBtn = document.getElementById('twenty');

// User types in amount of bill
totalbtn.addEventListener("click", function () {
  const billInput = billElement.value;
  const tipInput = tipElement.value;
  let sum = ((billInput * (tipInput / 100)) + parseInt(billInput)).toFixed(2);
  totalText.textContent = `Total = $ ${sum}`;
});


fiveBtn.addEventListener('click', function(){
  const billInput = billElement.value;
  const tipInput = tipElement.value;
  let sum = ((billInput * (0.05)) + parseInt(billInput)).toFixed(2);
  totalText.textContent = `Total =  $ ${sum}`;
});

tenBtn.addEventListener('click', function(){
  const billInput = billElement.value;
  const tipInput = tipElement.value;
  let sum = (((billInput * (0.10) + parseInt(billInput)))).toFixed(2);
  totalText.textContent = `Total = $ ${sum}`;
});

twentyBtn.addEventListener('click', function(){
  const billInput = billElement.value;
  const tipInput = tipElement.value;
  let sum = ((billInput * (0.20) + parseInt(billInput))).toFixed(2);
  totalText.textContent = `Total = $ ${sum}`;
});



