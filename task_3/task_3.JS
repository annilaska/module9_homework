
// -----------------------задание 3-------------------------


// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
// Пример: если пользователь ввёл 5, то запрос будет вида https://picsum.photos/v2/list?limit=5.
// После получения данных вывести ниже картинки на экран.



const button = document.querySelector('.button');
const resultNode = document.querySelector('.resultBlock');

function useRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open ('GET', url, true);
    
  xhr.onload = function() {
    if (xhr.status !== 200) {
      console.log('Статут ответа:', xhr.ststus)
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
    
    
  xhr.onerror = () => console.log('Ошибка! Статут ответа:', xhr.ststus);
    
    
  xhr.send()   
}


function callback(apiData) {
  let cards = ''
  
  apiData.forEach(item => {
    const cardblock = `
    <div class="card">
    <img src ="${item.download_url}" class="card_image">
    </div>
    `;
    
    cards += cardblock;
  });
  
  resultNode.innerHTML = cards;
}


button.addEventListener('click', () => { 
  const value = document.querySelector('.input').value;
  if (value < 1 || value > 10) {
    resultNode.innerHTML = "<p>число вне диапазона от 1 до 10</p>";
    return
  } 
  if (isNaN(value)) {
    resultNode.innerHTML = "<p>введено не число</p>";
    return
  }

  const url = `https://picsum.photos/v2/list?limit=${value}`
  useRequest(url, callback);
});








