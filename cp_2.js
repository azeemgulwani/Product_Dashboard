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