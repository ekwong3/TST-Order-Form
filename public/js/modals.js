//MODAL STUFF
// Get the modal
var orderModal = document.getElementById("orderScreen");

// Get the <span> element that closes the modal
var oSpan = document.getElementById("orderClose");

// When the user clicks on <span> (x), close the modal
oSpan.onclick = function() {
  orderModal.style.display = "none";
}

var cartModal = document.getElementById("cartScreen");

// Get the button that opens the modal
var btn = document.getElementById("submit");

// Get the <span> element that closes the modal
var span = document.getElementById("cartClose");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  cartModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  cartModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == cartModal) {
    cartModal.style.display = "none";
  }
  if (event.target == orderModal) {
    orderModal.style.display = "none";
  }
}