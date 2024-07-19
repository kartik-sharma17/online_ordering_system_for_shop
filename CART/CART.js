
let data = document.getElementById('data').innerHTML;
let items = data.split(",");
let data_rates = document.getElementById('data_rates').innerHTML;
let rates = data_rates.split(",");
let updates_rates = [];



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
            price(a,i);
            // document.getElementById('total').remove();
            bill_display();
            
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
                price(a,i);
                // document.getElementById('total').remove();
                bill_display();

            }
            else{
                document.getElementById('item'+i).remove();
                let index =items.indexOf(items[i]);
                items.splice(index,1);
                updates_rates.splice(index,1);
                // document.getElementById('total').remove();
                bill_display();
            }
        
        };
    
        document.getElementById('quantity'+i).appendChild(create_add);
        document.getElementById('quantity'+i).appendChild(create_display);
        document.getElementById('quantity'+i).appendChild(create_remove);
    
    
        let create_price = document.createElement('input');
        create_price.setAttribute("readOnly" , '');
        create_price.className = 'price';
        create_price.value = rates[i]+'/-';
        create_price.id ='price'+i;
        document.getElementById('item'+i).appendChild(create_price);


        // FOR PRICE TO CHANGE ACCORDING TO QUANTITY---
        function price(a,i){
            let price = a*rates[i];
            let display = document.getElementById('price'+i);
            display.value=price+'/-';
            updates_rates[i] = price;
            console.log(updates_rates);
            console.log(rates)
        }

        updates_rates[i] =document.getElementById('price'+i).value;
    
    }

    // for total price to dispay 
    function bill_display(i){
        sum = 0;
        updates_rates.forEach(number =>{
            sum = parseInt(number)+sum;
        });
        let total =document.getElementById("total");
        total.value = sum+'/-';
        let sgst =sum*2.5/100+'/-';
        document.getElementById('sgst_total').value =sgst;
        let cgst =sum*2.5/100+'/-';
        document.getElementById('cgst_total').value =cgst;
        let grand_total =sum + parseInt(sgst) + parseInt(cgst)+'/-' ;
        document.getElementById('Grand_total').value =grand_total;
    }

    
    bill_display();


}


// for(let i= 0 ;i<items.length ;i++){
//     let bt =document.getElementById('remove'+i);
//     console.log(bt);
//     bt.addEventListener("hover",remove(items[i]));
// }

