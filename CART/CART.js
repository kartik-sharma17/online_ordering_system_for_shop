
let data = document.getElementById('data').innerHTML;
let items = data.split(",");

bill();

function bill(){

    
    
    
    for(let i = 0 ; i< items.length ; i++){
    
        // for single class
        let create_class_single = document.createElement('div');
        create_class_single.className ='single';
        create_class_single.id = 'item'+i;
        document.getElementById('item_table').appendChild(create_class_single);
    
    
        // for name
        let create_name = document.createElement('p');
        create_name.innerHTML = items[i]+" Net Weight = 500Gm";
        document.getElementById('item'+i).appendChild(create_name);
    
    
    
        // for div for add , display and remove items
        let create_div = document.createElement('div');
        create_div.className ='quantity';
        create_div.id ='quantity'+i;
        document.getElementById('item'+i).appendChild(create_div);
    
    
        let create_add = document.createElement('button');
        create_add.className = 'btn btn-outline-success btn-sm m-1';
        create_add.innerHTML = 'ADD +';
        create_add.onclick = function (){
            let quantity = document.getElementById('quantity_display'+i);
            let a = parseInt(quantity.value);
            a = a+1;
            quantity.value = a;
            console.log(a);
        }


        let create_display = document.createElement('input');
        create_display.setAttribute("readOnly" , '');
        create_display.className ='ms-4 me-4 display_quantity';
        create_display.id='quantity_display'+i;
        create_display.value = '1';


        let create_remove = document.createElement('button');
        create_remove.className = 'btn btn-outline-danger btn-sm m-1';
        create_remove.innerHTML = 'Remove -';
        create_remove.onclick = function(){
            let quantity = document.getElementById('quantity_display'+i);
            if(parseInt(quantity.value) >= 2){
                let a = parseInt(quantity.value);
                a=a-1
                quantity.value = a;
            }
            else{
                document.getElementById('item'+i).remove();
                let index =items.indexOf(items[i]);
                items.splice(index,1);
            }
            console.log(items);
        };
    
        document.getElementById('quantity'+i).appendChild(create_add);
        document.getElementById('quantity'+i).appendChild(create_display);
        document.getElementById('quantity'+i).appendChild(create_remove);
    
    
        let create_price = document.createElement('div');
        create_price.className = 'price';
        create_price.innerHTML = '100/-';
        document.getElementById('item'+i).appendChild(create_price);
    }
}


// for(let i= 0 ;i<items.length ;i++){
//     let bt =document.getElementById('remove'+i);
//     console.log(bt);
//     bt.addEventListener("hover",remove(items[i]));
// }


function remove(item){
    
}