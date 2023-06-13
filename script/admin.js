let productArray = JSON.parse(localStorage.getItem('productArray'))
let tableBody = document.querySelector('#table-body')
// Buttons
let addBtn = document.querySelector('#addBtn')


function displayData(){
  try {
    tableBody.innerHTML = ''
    productArray.forEach((content) =>{
    tableBody.innerHTML += 
      `
      <tr>
                  <td>${content.id}</td>
                  <td>${content.title}</td>
                  <td>
                    ${content.description}
                  </td>
                  <td>R${content.price}</td>
                  <td>
                    <img
                      src="${content.img}"
                      style="width: 10rem"
                    />
                  </td>
                  <td class="d-flex flex-column">
                    <button class="btn btn-primary mb-1">Edit</button>
                    <button class="btn btn-primary">Delete</button>
                  </td>
                </tr>
      `
    })
    alert('Product Added')
  } catch (e) {
    console.log(e);
  }
}


addBtn.addEventListener('click', ()=>{
    let randomNumber = Math.floor(Math.random() * 100)
    let titleInput = document.querySelector('#title-input').value
    let descInput = document.querySelector('#description-input').value
    let priceInput = document.querySelector('#price-input').value
    let imgInput = document.querySelector('#img-input').value

    productArray.push({
        id: randomNumber,
        title: titleInput,
        description: descInput,
        price: priceInput,
        img: imgInput
    })

    localStorage.setItem('productArray', JSON.stringify(productArray))
    displayData()
})

displayData()

