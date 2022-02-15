
// -----------------------задание 5-------------------------

// Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

// Заголовок первого input — «номер страницы».
// Заголовок второго input — «лимит».
// Заголовок кнопки — «запрос».
// При клике на кнопку происходит следующее:

// Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
// Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
// Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
// Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input. 
// Пример: если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
// После получения данных вывести список картинок на экран.

// Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).



const button = document.querySelector(".button");
const result = document.querySelector(".resultBlock");

let lastRequest = localStorage.getItem('lastRequest')

button.onclick = function(event) {
    event.preventDefault();
    result.textContent = "";

    const page = document.querySelector(".input1").value; 
    const limit = document.querySelector(".input2").value;

    if (((page < 1 || page > 10) && (limit < 1 || limit > 10)) || (isNaN(limit) && isNaN(page)) ) {
        result.innerHTML = "<p>Номер страницы и лимит вне диапазона от 1 до 10</p>"
    } else if ((limit < 1 || limit > 10) || isNaN(limit)) {
        result.innerHTML = "<p>Лимит вне диапазона от 1 до 10</p>"
    } else if ((page < 1 || page > 10) || isNaN(page)) {
        result.innerHTML = "<p>Номер страницы вне диапазона от 1 до 10</p>"
    } else {
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)

        .then((response) => {
            return response.json();
        })

        .then((lastRequest) => {
            localStorage.setItem('lastRequest', JSON.stringify(lastRequest))

            onDisplay(lastRequest);
        })

        .catch(() => {
            console.log('error')
        });
    }

}


function onDisplay(lastRequest) {
    let cards = "";

    if(lastRequest) {
        lastRequest.forEach(item => {
            let card = `
                <div class="card">
                    <img src="${item.download_url}" class="image"
                </div>
                `;
                cards += card
        });
          
        result.innerHTML = cards;
    }
}

onDisplay(JSON.parse(lastRequest))


