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
        currentSlideIndex = tabIndex
      }
    });
  }
};

let currentSlideIndex = 0
const autoSlider = () => {
  currentSlideIndex++;
  if (currentSlideIndex >= tabContentBlocks.length) {
    currentSlideIndex = 0;
  }
  hideTabContent();
  showTabContent(currentSlideIndex);
};
setInterval(autoSlider, 3000);
