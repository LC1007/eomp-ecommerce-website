let productArray = JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : localStorage.setItem('data', JSON.stringify([{
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
},{
    id: 3,
    title: 'Adidas FX',
    description: 'This is from the code.js file',
    price: 1600,
    img: 'https://images.pexels.com/photos/2787249/pexels-photo-2787249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},{
    id: 4,
    title: 'Nike',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, laboriosam?',
    price: 3600,
    img: 'https://images.pexels.com/photos/2787249/pexels-photo-2787249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}]))

let titleInput = document.querySelector('#titleInput')
let descInput = document.querySelector('#descInput')
let priceInput = document.querySelector('#priceInput')
let randomNumber = Math.floor(Math.random() * 100)
let addBtn = document.querySelector('#addBtn')
let form = document.querySelector('#form')
let testArr = []

addBtn.addEventListener('click', addData)

function addData(){
    testArr.push([{
        id: randomNumber,
        title: titleInput.value,
        description: descInput.value,
        price: priceInput.value
    }])

    console.log(testArr
        );
}
