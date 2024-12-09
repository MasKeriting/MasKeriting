let cart = [];

function addToCart(productName, price) {
  cart.push({ productName, price });
  alert(`${productName} berhasil ditambahkan ke keranjang.`);
  updateCartCount();
}

function updateCartCount() {
  const cartLink = document.querySelector('a[href="cart.html"]');
  cartLink.textContent = `Keranjang (${cart.length})`;
}

function searchProduct() {
  const searchInput = document.getElementById("searchBar").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const productName = product.querySelector("h3").textContent.toLowerCase();
    if (productName.includes(searchInput)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

function filterByCategory() {
  const category = document.getElementById("categoryFilter").value;
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    if (category === "all" || product.dataset.category === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
