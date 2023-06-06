function Pencarian() {
    var IsiSearchBar;
    var SearchBar = document.getElementById("search-bar");  
    var filter = SearchBar.value.toUpperCase();
    var ProductData = document.getElementById("product-data");
    var Products = ProductData.getElementsByTagName("span");
    for (i = 0; i < Products.length; i++) {
        Product = Products[i].getElementsByTagName("a")[0];
        IsiSearchBar = Product.textContent || Product.innerText;
        if (IsiSearchBar.toUpperCase().indexOf(filter) > -1) {
            Products[i].style.display = "";
        } else {
            Products[i].style.display = "none";
        }
    }
  }

  var SearchBar = document.getElementById("search-bar");  
  var Tombol = document.getElementById("tombol");

  SearchBar.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("tombol").click();
    }
  });