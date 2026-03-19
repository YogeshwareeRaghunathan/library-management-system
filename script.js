let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showBooks(data){
  let div = document.getElementById("books");
  div.innerHTML = "";

  data.forEach(b => {
    div.innerHTML += `
    <div class="card">
      <h3>${b.title}</h3>
      <p>${b.author}</p>
      <p>${b.genre}</p>
      <p>₹${b.price}</p>
      <button onclick="addCart(${b.id})">Add to Cart</button>
    </div>`;
  });
}

function searchBook(){
  let v = document.getElementById("search").value.toLowerCase();
  let filtered = books.filter(b => 
    b.title.toLowerCase().includes(v)
  );
  showBooks(filtered);
}

function filterGenre(g){
  if(g === "All") showBooks(books);
  else showBooks(books.filter(b => b.genre === g));
}

function addCart(id){
  let book = books.find(b => b.id === id);
  cart.push(book);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

showBooks(books);