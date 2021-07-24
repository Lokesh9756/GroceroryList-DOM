
 var form=document.getElementById("formId")
 var ed=document.getElementById('edit')
 var addItem=document.getElementById("table1")
 form.addEventListener('submit',addList)
 var totalprice=0;
 function addList(e){
   e.preventDefault();
   let itemName=document.getElementById("itemName").value;
   let itemUnit=document.getElementById("itemUnit").value;
   let itemPrice=document.getElementById("itemPrice").value;
  let tt=document.getElementById('total');
   let itemList = document.createElement('tr')
   let thName=document.createElement("td")
   let thUnit=document.createElement("td")
   let thPrice=document.createElement("td")
   let totalPrice=document.createElement('td');
  thName.textContent=itemName;
  thUnit.textContent=itemUnit;
  thPrice.textContent=itemPrice;
  totalPrice.textContent= itemUnit*itemPrice;
   itemList.appendChild(thName)
   itemList.appendChild(thUnit)
   itemList.appendChild(thPrice)
   itemList.appendChild(totalPrice)
   addItem.appendChild(itemList);
totalprice+=itemUnit*itemPrice;
tt.textContent=totalprice;
var deleteBtn=document.createElement('button')
deleteBtn.className='btn btn-danger btn-sm float-right delete'
deleteBtn.innerHTML = 'X'
deleteBtn.style.backgroundColor = 'red'
var editBtn=document.createElement('button')
editBtn.className='btn btn-danger btn-sm float-right delete'
editBtn.innerHTML = 'edit'
editBtn.style.backgroundColor = 'yellow'
itemList.appendChild(deleteBtn)
itemList.appendChild(editBtn)
deleteBtn.addEventListener('click',removeItem);
function removeItem(e){
  if(confirm('Are you sure ?'))
  {
    totalprice-=parseInt(itemList.childNodes[3].textContent)
    tt.textContent=totalprice;
  }

addItem.removeChild(itemList)

    }
    editBtn.addEventListener('click',function()
{
   var name=document.createElement('input');
   name.placeholder='itemname'
    var unit=document.createElement('input');
    unit.placeholder='unit/kg'
    var price=document.createElement('input');
  price.placeholder='price'
    var btn=document.createElement('button')
    btn.innerHTML='save';
    ed.appendChild(name);
    ed.appendChild(unit);
    ed.appendChild(price);
    ed.appendChild(btn)
    btn.addEventListener('click',function(){
        if(confirm('are you sure ?'))
        {
            totalprice-=parseInt(itemList.childNodes[3].textContent)
        itemList.childNodes[0].textContent=name.value
        itemList.childNodes[1].textContent=unit.value
        itemList.childNodes[2].textContent=price.value
        itemList.childNodes[3].textContent=(unit.value*price.value)
        totalprice+=(unit.value*price.value);
        tt.textContent=totalprice;
        }
       ed.removeChild(name)
       ed.removeChild(unit)
       ed.removeChild(price)
       ed.removeChild(btn)
    })
})
  
 }

 