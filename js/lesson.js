// Phone NUMBER VALIDATE

// const phoneInput = document.querySelector('#phone')
// tab slider
const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabContentItems = document.querySelectorAll(".tab_content_item");
const tabContentItemsParent = document.querySelector(".tab_content_items");

const hideTabContent = () => {
  tabContentBlocks.forEach((tabBlock) => {
    tabBlock.style.display = "none";
  });
  tabContentItems.forEach((tabItem) => {
    tabItem.classList.remove("tab_content_item_active");
  });
};
const showTabContent = (i = 0) => {
  tabContentBlocks[i].style.display = "block";
  tabContentItems[i].classList.add("tab_content_item_active");
};
hideTabContent();
showTabContent();

tabContentItemsParent.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabContentItems.forEach((tabItem, tabIndex) => {
      if (event.target === tabItem) {
        hideTabContent();
        showTabContent(tabIndex);
        currentSlideIndex = tabIndex;
      }
    });
  }
};

let currentSlideIndex = 0;
const autoSlider = () => {
  currentSlideIndex++;
  if (currentSlideIndex >= tabContentBlocks.length) {
    currentSlideIndex = 0;
  }
  hideTabContent();
  showTabContent(currentSlideIndex);
};
setInterval(autoSlider, 3000);

// const cardBlock = document.querySelector(".card");
// const btnNext = document.querySelector("#btn-next");
// const btnPrev = document.querySelector("#btn-prev");
// btnNext.onclick = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos/201")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#search");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");

// API key 291aa3950880603684e43c6cc36aed88
//query params = параметры запроса
const VERSION = "2.5";
const API_KEY = "291aa3950880603684e43c6cc36aed88";
const BASE_API = "https://api.openweathermap.org/data/${VERSION}/weather";

searchButton.onclick = () => {
  if (searchInput.value !== "") {
    fetch(
      "${BASE_API}?q=${searchInput.value}&units=metric&lang=ru&appid=${API_KEY}",
    )
      .then((response) => response.json()) // promise <any>
      .then((data) => {
        console.log(data.name, data.main.temp);
        city.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "&deg;C";
      });
    searchInput.value = "";
  } else {
    city.innerHTML = "Введите название города";
    temp.innerHTML = "";
    city.style.color = "red";
  }
};
//домашнее задание урока № 5
const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");

const converter = (element, targetElement1, targetElement2) => {
  element.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "../data/converter.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = () => {
      const data = JSON.parse(request.response);
      if (element.value === "") {
        targetElement1.value = "";
        targetElement2.value = "";
        return;
      }
      if (element.id === "som") {
        targetElement1.value = (element.value / data.usd).toFixed(2);
        targetElement2.value = (element.value / data.eur).toFixed(2);
      }
      if (element.id === "usd") {
        targetElement1.value = (element.value * data.usd).toFixed(2);
        targetElement2.value = ((element.value * data.usd) / data.eur).toFixed(
          2,
        );
      }

      if (element.id === "eur") {
        targetElement1.value = (element.value * data.eur).toFixed(2);
        targetElement2.value = ((element.value * data.eur) / data.usd).toFixed(
          2,
        );
      }
    };
  };
};
converter(somInput, usdInput, eurInput);
converter(usdInput, somInput, eurInput);
converter(eurInput, somInput, usdInput);

// домашнее задание № 6

const cardBlock = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next'); 
const btnPrev = document.querySelector('#btn-prev'); 

let cardId = 1

const fetchCard = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(response => response.json())
  .then(data => {
    const {title, id, completed} = data 
    const color = completed ? 'green' : 'red'
    const text = completed ? 'completed' : 'todo'
    cardBlock.innerHTML = `
    <p>${title}</p>
    <span style="color: ${color}">${text}</span>
    <span>${id}</span>
    `
  })
}
fetchCard(cardId)
btnNext.onclick = () => {
  cardId++
  if (cardId > 200) {
    cardId = 1
}
fetchCard(cardId)
}
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Данные с posts:', data); 
    });