//Order: tiger, hello kitty, kirby, pig, panda, bear
var cart = {};
var orderName = "";
var orderInstructions = "";
var orderPayment = "";
var currentBao = "panda";

cart["panda"] = {
  id: 3,
  name: "Panda",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/panda.jpg",
  sellsID: "pandaSold"
}

cart["kirby"] = {
  id: 1,
  name: "Kirby",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/kirby.jpg",
  sellsID: "kirbySold"
}

cart["bear"] = {
  id: 4,
  name: "Bear",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/bear.jpg",
  sellsID: "bearSold"
}

cart["bee"] = {
  id: 7,
  name: "Bee",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/bee.jpg",
  sellsID: "beeSold"
}

cart["tiger"] = {
  id: 2,
  name: "Tiger",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/tiger.png",
  sellsID: "tigerSold"
}

cart["hk_red"] = {
  id: 0,
  name: "Hello Kitty-Red",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/hk_red.png",
  sellsID: "hk_redSold"
}

cart["dog"] = {
  id: 5,
  name: "Dog",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/dog.png",
  sellsID: "dogSold"
}

cart["pig"] = {
  id: 6,
  name: "Pig",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/pig.jpg",
  sellsID: "pigSold"
}

cart["lion"] = {
  id: 12,
  name: "Lion",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/lion.jpg",
  sellsID: "lionSold"
}

cart["snoopy"] = {
  id: 11,
  name: "Snoopy",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/snoopy.jpg",
  sellsID: "snoopySold"
}

cart["hk_yellow"] = {
  id: 13,
  name: "Hello Kitty-Yellow",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/hk_yellow.jpg",
  sellsID: "hk_yellowSold"
}

cart["pikachu"] = {
  id: 15,
  name: "Pikachu",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/pikachu.png",
  sellsID: "pikachuSold"
}

cart["winnie"] = {
  id: 9,
  name: "Winnie",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/winnie.jpg",
  sellsID: "winnieSold"
}

cart["piggie"] = {
  id: 10,
  name: "Piggie",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/piggie.jpg",
  sellsID: "piggieSold"
}

cart["cow"] = {
  id: 8,
  name: "Cow",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/cow.jpg",
  sellsID: "cowSold"
}

cart["rilakkuma"] = {
  id: 14,
  name: "Rilakkuma",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/rilakkuma.png",
  sellsID: "rilakkumaSold"
}

cart["apple"] = {
  id: 16,
  name: "Apple",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/apple.jpg",
  sellsID: "appleSold"
}

cart["orange"] = {
  id: 17,
  name: "Orange",
  count: 0,
  total: 1,
  steamed: false,
  image: "../img/orange.png",
  sellsID: "orangeSold"
}

function clear() {
  for (bao in cart) {
    b = cart[bao];
    if (b.total <= 0) {
      document.getElementById(b.sellsID).style = "display:block";
      document.getElementById(b.sellsID).style = "color: red";
    }
    else {
      document.getElementById(b.sellsID).style = "display:none";
    }
  }
}

function setTotals(totals) {
  var index = 0;
  while (index < 18) {
    for (bao in cart) {
      if (cart[bao].id == index) {
        cart[bao].total = totals[index];
      }
    }
    index++;
  }
}

function increaseCount() {
  bao = currentBao;
  if (cart[bao].count < cart[bao].total) {cart[bao].count++;}
  getCount();
}

function decreaseCount() {
  bao = currentBao;
  if (cart[bao].count > 0) {cart[bao].count--;}
  getCount();
}

function getCount() {
  bao = currentBao;
  document.getElementById("count").innerHTML = cart[bao].count;
}

function changeSteamed() {
  bao = currentBao;
  cart[bao].steamed = !cart[bao].steamed;
}

function displayBao() {
  var img = "<img src=" + cart[currentBao].image + " width=\"15%\" height=\"15%\" style=\"border-radius:100%\">";
  document.getElementById("baoImage").innerHTML = img;
  document.getElementById("currentBao").innerHTML = cart[currentBao].name + " Baos";
}

function changeCart() {
  var orders = [orderName, orderInstructions, orderPayment];
  var newQuantities = ["","",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  for (bao in cart) {
    b = cart[bao];
    if (b.count > 0) {
      var isSteamed = "Frozen";
      if (b.steamed) {isSteamed = "Steamed";}
      var order = b.count.toString() + " " + isSteamed + " " + b.name + " Bao(s)";
      orders.push(order);
    }
    newQuantities[b.id+2] = b.count;
  }

  document.getElementById("counts").value = JSON.stringify(newQuantities);
  document.getElementById("cart").value = JSON.stringify(orders);

}

function calculatePrice() {
  var totalCount = 0;
  var priceSteamed = 0;

  for (bao in cart) {
    b = cart[bao];
    totalCount += b.count;
    if (b.steamed) { priceSteamed += (0.5*b.count); }
  }

  var price = (Math.floor(totalCount/4)*15+totalCount%4*5+priceSteamed);
  document.getElementById("price").innerHTML = "Total: $" + price.toString();
}

//Cart Stuff
function displayCart() {
  let cartIndex = 0;
  for (bao in cart) {
    b = cart[bao];
    if (b.count > 0) {
      let isSteamed = "Frozen";
      if (b.steamed) {isSteamed = "Steamed"}
      let display = b.count.toString() + " " + isSteamed + " " + b.name + " Bao(s)";
      let image = "<img src=" + b.image + " width=\"40%\" height=\"40%\" style=\"border-radius:100%\"><br>";
      document.getElementById(cartIndex).innerHTML = image + display;
      cartIndex++;
    }
  }
  for (let i = cartIndex; i < 9; i++) {
    document.getElementById(i).innerHTML = "";
  }
  // document.getElementById("cartString").innerHTML = JSON.stringify(cart);
}

function confirmOrder() {
  orderName = document.getElementById("name").value;
  orderInstructions = document.getElementById("instructions").value;
  orderPayment = document.getElementById("payment").value;

  console.log(orderName, orderInstructions, orderPayment);

  var cartEmpty = true;

  for (bao in cart) {
    if (cart[bao].count > 0) {
      cartEmpty = false;
      break;
    }
  }
  if (cartEmpty) {
    alert("Cart is empty");
    document.getElementById("cart").value = "";
    document.getElementById("counts").value = "";
  }
  else if (orderName == "" || orderPayment == "") {
    alert("Please fill out all fields");
    document.getElementById("cart").value = "";
    document.getElementById("counts").value = "";
  }
  else {
    changeCart();
    alert("Order Received! Please be ready to pay either by cash, Venmo, or Paypal");
    document.getElementById("confirm")
  }
}

//SLIGHT MODAL STUFF (hopefully not that much tho)
function imgClicked(bao) {
  currentBao = bao;
  displayBao();
  getCount();
  if (!cart[bao].steamed) {
    document.getElementById("form01-frozen-steamed").value = "value1"
  }
  else {
    document.getElementById("form01-frozen-steamed").value = "value2"
  }
  document.getElementById("orderScreen").style.display = "block";
}