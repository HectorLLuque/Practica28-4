let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let base: number = Number(dato1.value);
let altura: number = Number(dato2.value);

btnEnviarBase.addEventListener("click", () => {
  console.log("la base del rectángulo ingresado es: ", dato1.value);
});

btnEnviarAltura.addEventListener("click", () => {
  console.log("la altura del rectángulo ingresado es: ", dato2.value);

  console.log(
    "el area de los datos del rectángulo ingresado es: ",
    dato1.value * dato2.value
  );
});
