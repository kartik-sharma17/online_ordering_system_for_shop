 

let total_items = 0;
let rates = [];
let items_list = [];

function addtocartanimation(item,rate){
        total_items++;
        items_list.push(item);
        rates.push(rate);
        alert("Items is added to cart");
        let cart_display = document.getElementById("c_display");
        cart_display.style.display="inline";
        cart_display.innerHTML = total_items;
        console.log(items_list);
        console.log(rates);

} 


// to send data 
function send(){
    let items_added = document.getElementById("items_added"); 
    let rate = document.getElementById("rates"); 
    items_added.value = items_list;
    rate.value = rates;
}


  // get user geolocation --- for unique user cart identification..
  getlocation();
  successlocation();

  function successlocation(position) {
      let location =Math.floor((position.coords.latitude + position.coords.longitude)*100000)
      let variable = document.querySelectorAll("loca");
      variable.value =location;
      console.log(location); 
  }

  function faillocationissue() {
      console.log("something went wrong");
  }

  async function getlocation() {
      navigator.geolocation.getCurrentPosition(successlocation, faillocationissue);
  }



// to ask need to add more items or not --

// function wanttoadd(){
//     let decision = confirm("Want To ADD more Items ?");
//     if(decision == true){
//         return false;
//     }
//     else{
//         return true;
//     }
// }




// for animation on cart --
 
        
        
//         for(let i = 0 ; i< total_items ; i++){

//     // for single class
//     let create_class_single = document.createElement('div');
//     create_class_single.className ='single';
//     create_class_single.id = 'item'+i;
//     document.getElementById('item_table').appendChild(create_class_single);


//     // for name
//     let create_name = document.createElement('p');
//     create_name.innerHTML = (i+1)+". Rabdi";
//     document.getElementById('item'+i).appendChild(create_name);



//     // for div for add , display and remove items
//     let create_div = document.createElement('div');
//     create_div.className ='quantity';
//     create_div.id ='quantity'+i;
//     document.getElementById('item'+i).appendChild(create_div);


//     let create_add = document.createElement('p');
//     create_add.className = 'ms-5 btt add';
//     create_add.innerHTML = '+';
//     let create_display = document.createElement('p');
//     create_display.className ='ms-1 me-1';
//     create_display.innerHTML = '1';
//     let create_remove = document.createElement('p');
//     create_remove.className = 'me-5 btt remove';
//     create_remove.innerHTML = '-';

//     document.getElementById('quantity'+i).appendChild(create_add);
//     document.getElementById('quantity'+i).appendChild(create_display);
//     document.getElementById('quantity'+i).appendChild(create_remove);


//     let create_price = document.createElement('div');
//     create_price.className = 'price';
//     create_price.innerHTML = '100/-';
//     document.getElementById('item'+i).appendChild(create_price);
// }

// }


    





 

