
fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => {
const productList = document.getElementById('product-list');
data.products.forEach(product => {
const li = document.createElement('li');
li.textContent = `${product.title} -
${product.price}-${product.description}`;
productList.appendChild(li);
});
console.log(data)
})
.catch(error => console.error(error));
