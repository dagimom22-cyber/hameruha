// Load cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// DISPLAY PRODUCTS
function displayProducts(list = products) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <p>$${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

// ADD TO CART
function addToCart(id) {
  const p = products.find(x => x.id === id);
  const item = cart.find(x => x.id === id);

  if (item) item.qty++;
  else cart.push({ ...p, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart");
}

// SHOW CART
function displayCart() {
  const list = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  console.log("Cart from localStorage:", cart);
  if (!list || !totalEl) return;

  list.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    list.innerHTML = "<li>Your cart is empty.</li>";
    totalEl.textContent = "Total: $0";
    return;
  }

  cart.forEach(item => {
    total += item.price * item.qty;
    list.innerHTML += `<li>${item.name} x${item.qty} - $${(item.price * item.qty).toFixed(2)}</li>`;
  });

  totalEl.textContent = `Total: $${total.toFixed(2)}`;
}


// CART COUNT
function updateCartCount() {
  const span = document.getElementById("cart-count");
  if (span) span.textContent = cart.reduce((s, i) => s + i.qty, 0);
}

// SEARCH
function searchProducts() {
  const input = document.querySelector(".search input");
  if (!input) return;

  const q = input.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );

  displayProducts(filtered);
}

// OPTIONAL SIGNUP
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Signup successful (optional)");
    window.location.href = "index.html";
  });
}

// INIT
document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  displayCart();
  updateCartCount();

  const btn = document.querySelector(".search button");
  const input = document.querySelector(".search input");

  if (btn) btn.onclick = searchProducts;
  if (input) input.onkeyup = e => e.key === "Enter" && searchProducts();
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkToggle");

  if (!toggleBtn) {
    console.log("Dark mode button not found");
    return;
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

