let productArray = 
JSON.parse(localStorage.getItem('productArray')) ? 
JSON.parse(localStorage.getItem('productArray')) : 
localStorage.setItem('productArray', JSON.stringify([{
    id: 1,
    title: 'Adidas FX',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, laboriosam?',
    price: 1500,
    img: 'https://images.pexels.com/photos/2787249/pexels-photo-2787249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},{
    id: 2,
    title: 'Adidas FX',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, laboriosam?',
    price: 1800,
    img: 'https://images.pexels.com/photos/2787249/pexels-photo-2787249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}]))

let cardDisplay = document.querySelector('#card-display')

cardDisplay.innerHTML = ''
productArray.forEach((content) =>{
    cardDisplay.innerHTML +=
    `
    <div class="card" style="width: 18rem;">
            <img src="${content.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${content.title}</h5>
              <p class="card-text">${content.description}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
    `
})



