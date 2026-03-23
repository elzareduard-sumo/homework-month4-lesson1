const cardsContainer = document.querySelector('.cards-container')
const renderCards = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    posts.forEach((post) => {
      const cardHTML = `<div class="card" style="border: 1px solid #ccc; border-radius: 8px; width: 300px; padding: 15px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3LmV69pj3SYOW4WwfC9zko6g75M8t_kOgQ&s" alt="card image" style="width: 100%; border-radius: 4px;">
                    <h3 style="text-transform: capitalize;">${post.title}</h3>
                    <p>${post.body}</p>
                </div>`;
      cardsContainer.innerHTML += cardHTML;
    });
  } catch (error) {
    console.error("ошибка при получении постов", error);
    cardsContainer.innerHTML =
      '<p style="color: red;">не удалось загрузить карточки</p>';
  }
};
renderCards();
