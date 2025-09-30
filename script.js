const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const cardWrapper = document.querySelector('.content-main__list');
const cardArray = [
	{
		id: 0,
		title: 'Пвх материал 1-й сорт',
		price: '170 ₽',
		address: 'Казань, р-н Вахатовский',
		date: '10 июля 11:39',
		img: 'https://placehold.jp/266x266.png',
	},
	{
		id: 1,
		title: 'Пвх материал 2-й сорт',
		price: '100 ₽',
		address: 'Казань, р-н Вахатовский',
		date: '10 июля 11:39',
		img: 'https://placehold.jp/266x266.png',
	},
  {
		id: 2,
		title: 'Пвх материал 3-й сорт',
		price: '200 ₽',
		address: 'Казань, р-н Вахатовский',
		date: '10 июля 11:39',
		img: 'https://placehold.jp/266x266.png',
	},
	{
		id: 3,
		title: 'Пвх материал 4-й сорт',
		price: '400 ₽',
		address: 'Казань, р-н Вахатовский',
		date: '10 июля 11:39',
		img: 'https://placehold.jp/266x266.png',
	},
  {
		id: 4,
		title: 'Пвх материал 5-й сорт',
		price: '1600 ₽',
		address: 'Казань, р-н Вахатовский',
		date: '10 июля 11:39',
		img: 'https://placehold.jp/266x266.png',
	},
	{
		id: 5,
		title: 'Пвх материал 6-й сорт',
		price: '2300 ₽',
		address: 'Казань, р-н Вахатовский',
		date: '10 июля 11:39',
		img: 'https://placehold.jp/266x266.png',
	},
];
const render = cardList => {
  cardWrapper.innerHTML = ""
	return cardList.map((item) => {
		cardWrapper.insertAdjacentHTML(
			'beforeend',
			`<a href="product.html" class="content-main__list-item">
          <div class="content-main__list-item--img">
            <img src="${item.img}" alt="cart">
          </div>
            <h5 class="content-main__list-item--title">${item.title}</h5>
            <strong class="content-main__list-item--price">${item.price}</strong>
            <div class="content-main__list-item--desc-box">
              <span class="content-main__list-item--desc">${item.address}</span>
              <span class="content-main__list-item--desc">${item.date}</span>
            </div>
        </a>
      `,
		);
	});
};

cardWrapper.style.justifyContent = "flex-start"
cardWrapper.style.rowGap = "normal"
cardWrapper.style.gap = "30px"
render(cardArray);

const filterArray = (array, value) => {
  return array.filter(item => {
    return item.title.includes("2-й") || item.price.includes(value)
  })
}

searchBtn.addEventListener('click', () => {
  render(filterArray(cardArray, searchInput.value))
});
