function suma(num1, num2) {
  return num1 + num2;
}

function resta(num1, num2) {
  return num1 - num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}

function multiplicar(x, y) {
  return x * y;
}



const resultado = document.querySelector("#resultado")
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form)
  const x = data.get("input1")
  const y = data.get("input2")

  const input1 = Number(x) ?? 0
  const input2 = Number(y) ?? 0
  const todos = {
    suma: suma(input1, input2),
    resta: resta(input1, input2),
    multiplicar: multiplicar(input1, input2),
    dividir: dividir(input1, input2),
  };

  const template = `
  <label>suma:</label>
  <span>${todos.suma}</span>
  <br>
  <label>resta:</label>
  <span>${todos.resta}</span>
  <br>
  <label>multiplicar:</label>
  <span>${todos.multiplicar}</span>
  <br>
  <label>dividir:</label>
  <span>${todos.dividir}</span>
  <br>
  `

  resultado.innerHTML = template
});
