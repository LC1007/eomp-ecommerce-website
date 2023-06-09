let productArr = JSON.parse(localStorage.getItem('data'))
let tableBody = document.querySelector('#table-body')

tableBody.innerHTML = ''
productArr.forEach((content) =>{
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

console.log('this is from index page:',productArr);


