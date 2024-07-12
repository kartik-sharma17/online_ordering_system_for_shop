
// for animation on cart --
let total_items = 0;
let items_list = [];
function addtocartanimation(item){
        total_items++;
        items_list.push(item);
        alert("Items is added to cart");
        let cart_display = document.getElementById("c_display");
        cart_display.style.display="inline";
        cart_display.innerHTML = total_items;
        console.log(items_list);
}

