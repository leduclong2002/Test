// add cart
var btn = document.querySelectorAll(".check_add");
btn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    {
      addCart();
    }
  });
});
function addCart() {
  var addDiv = document.createElement("div");
  addDiv.className = "items";
  var divContent =
    '<div class="pic float-left"><img id="items-pic" src="/asset/img/637864944636979062_iphone-13-xanhla-1 (1).jpg" alt="Sản phẩm" /></div><div class="float-left"><div class="items-type float-left"><h3 class="items-name">iPhone 13 128GB</h3><div class="colors"><span>Màu</span><ul class="ordercolorful"></ul></div></div><div class="items-price float-left"><p class="end-price"><span>19.190.000</span> <sup>đ</sup></p><p class="price"><span>24.990.000</span> <sup>đ</sup></p><p class="discount inline-block">Giảm -30 %</p></div><div class="items-amount float-left"><div class="wrapper"><span class="minus">-</span><span class="num inline-block">01</span><span class="plus">+</span></div></div></div><div class="remove_item float-right"><i class="close-icon ti-close"></i><div class="clear"></div></div>';
  addDiv.innerHTML = divContent;
  var cartItem = document.querySelector(".container .list-items");
  cartItem.append(addDiv);
  totalCart();
}
function totalCart() {
  var last_price = 0;
  var first_price = 0;
  var items = document.getElementsByClassName("items-price");
  for (var i = 0; i < items.length; i++) {
    var end_price = items[i].querySelector(".end-price span").innerHTML;
    var price = items[i].querySelector(".price span").innerHTML;

    var amount =
      items[i].parentElement.children[2].querySelector(
        ".wrapper .num"
      ).innerHTML;

    var priceA = parseFloat(price) * 1000000 * amount;
    var priceB = parseFloat(end_price) * 1000000 * amount;

    first_price += priceA;
    last_price += priceB;
  }
  document.querySelector(".temp-price span").innerHTML = formatCash(
    first_price + ""
  );
  document.querySelector(".promo-price span").innerHTML =
    "-" + formatCash(-last_price + first_price + "");
  document.querySelector(".last-price span").innerHTML = formatCash(
    last_price + ""
  );
}


// increase and decrease item
var increment = document.getElementsByClassName("plus");
var decrement = document.getElementsByClassName("minus");
for (var i = 0; i < increment.length; i++) {
  var plus = increment[i];
  plus.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    var input = buttonClicked.parentElement.children[1];
    var inputValue = input.innerHTML;
    var newValue = parseInt(inputValue) + 1;
    newValue = newValue < 10 ? "0" + newValue : newValue;
    input.innerHTML = newValue;
    totalCart();
  });
}
for (var i = 0; i < decrement.length; i++) {
  var minus = decrement[i];
  minus.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    var input = buttonClicked.parentElement.children[1];
    var inputValue = input.innerHTML;
    var newValue = parseInt(inputValue) - 1;
    if (inputValue > 1) {
      newValue = newValue < 10 ? "0" + newValue : newValue;
      input.innerHTML = newValue;
      totalCart();
    } else {
      alert("Số lượng tối thiểu là 1!");
    }
  });
}
// remove item
var remove_item = document.getElementsByClassName("remove_item");
for (var i = 0; i < remove_item.length; i++) {
  var item = remove_item[i];
  item.addEventListener("click", function (event) {
    var itemClicked = event.target;
    var item = itemClicked.parentElement.parentElement;
    item.remove();
    totalCart();
  });
}

function show_password() {
  var input_password = document.getElementsByClassName("input password");
  for (var i = 0; i < input_password.length; i++) {
    var x = input_password[i];
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
}

// format money
function formatCash(str) {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}


