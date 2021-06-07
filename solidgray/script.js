var totalInCart = 0;
var totalCost = 0;

function addToCart() {
    totalInCart++;
    totalCost = totalCost + 50;
    document.getElementById('outputArea1').innerHTML = "Total in cart: " + totalInCart;
    document.getElementById('outputArea2').innerHTML = "Total cost: $" + totalCost;
}

function clickCartButton(){
    addToCart()
}


function change1(){
    document.getElementById('pic').src="assets/BLACK_bold-red-1-600x673.jpeg";
}

function change2(){
    document.getElementById('pic').src="assets/BLUE-lava_2-600x673.jpeg";
}

function change3(){
    document.getElementById('pic').src='assets/GRAY_bold-red-1-600x673.jpeg';   
}

function change4(){
    document.getElementById('pic').src='assets/WHITE-lava-2-600x673.jpeg';
}
function change5(){
    document.getElementById('pic').src='assets/RED_bold-red-1-600x673.jpeg';
}