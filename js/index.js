const handleCategory = async () => {
   const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
   const data = await response.json();

   const tabContainer = document.getElementById('tab-container');

   data.data.news_category.slice(0, 3).forEach((category) => {
    const div = document.createElement ("div");
    div.innerHTML = `
    <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category. category_name}</a>
    `;

    tabContainer.appendChild(div);
   });

   console.log(data.data.news_category);
};

const handleLoadNews = async (categoryId) => {
    const response=await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await response.json();

   const cardContainer = document.getElementById('card-container');

   data.data.forEach((news)=>{
    console.log(news);
    const div =document.createElement("div");
    div.innerHTML = `
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="${news.image_url}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${news.title}</h2>
    <p>${news.details.slice(0, 50)}</p>
    <div class="badge badge-secondary p-5">${news.rating.badge}
    </div>
  </div>
  </div>
    `;
    cardContainer.appendChild(div);
   })
};

handleCategory();

