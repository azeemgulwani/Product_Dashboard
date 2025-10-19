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