function fetchProductsThen() {
  fetch("https://www.course-api.com/javascript-store-products")
    .then(function(res) { return res.json(); })
    .then(function(products) {
      console.log("Products loaded using .then():");
      products.forEach(function(p) {
        var name = p.fields.name;
        var fixedName = name.charAt(0).toUpperCase() + name.slice(1);
        console.log(fixedName);
      });
    })

    .catch(function(error) {
      console.log("Error fetching products:", error);
    });
}

async function fetchProductsAsync() {
  try {
    var res = await fetch("https://www.course-api.com/javascript-store-products");
    if (!res.ok) throw new Error("Failed to fetch data");
    var products = await res.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

function displayProducts(products) {
  var container = document.getElementById("product-container");
  container.innerHTML = "";
  for (var i = 0; i < 5; i++) {
    var p = products[i];
    var name = p.fields.name;
    var fixedName = name.charAt(0).toUpperCase() + name.slice(1);
    var productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML =
      '<img src="' + p.fields.image[0].url + '" alt="' + fixedName + '">' +
      '<div class="name">' + fixedName + '</div>' +
      '<div class="price">$' + (p.fields.price / 100).toFixed(2) + '</div>';
    container.appendChild(productCard);
  }
}