
// -----------------------задание 4-------------------------


// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
// Пример: если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
// После получения данных вывести ниже картинку на экран.



const button = document.querySelector('.button');
const resultNode = document.querySelector('.resultBlock');


button.addEventListener('click', () => { 
    const width = document.querySelector('.input1').value;
    const hight = document.querySelector('.input2').value;


    if (width >= 100 && width <= 300) {
      if (hight >= 100 && hight <= 300) {
        fetch(`https://picsum.photos/${width}/${hight}`)
        .then((response) => {
          resultNode.innerHTML = `<div class="card">
          <img src="${response.url}" 
          </div>`
        })

        .catch(() => {
          console.log("error")
        });
      } 
    } else if (isNaN(width) && isNaN(hight)) {
      resultNode.innerHTML = "<p>значения не являются числами</p>";
    } else if (isNaN(width)) {
      resultNode.innerHTML = "<p>одно из значений не является числом</p>";
    } else if (isNaN(hight)) {
      resultNode.innerHTML = "<p>одно из значений не является числом</p>";
    } else {
      resultNode.innerHTML = "<p>число вне диапазона от 100 до 300</p>";
    }

});