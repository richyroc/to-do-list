var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener ('click', removeItem);
//filter event
filter.addEventListener ('keyup',filterItems);

function addItem (e) {
  e.preventDefault();
  //get input value
  var newItem = document.getElementById('item').value;
  //create new li element
  var li = document.createElement('li');

  li.className = 'list-group-item';
  //add text node with input value
  li.appendChild(document.createTextNode(newItem));


  //create delete button el
  var deleteBtn = document.createElement('button');
  //add classes to delete btn
  deleteBtn.className ='btn btn-danger btn-sm float-right delete';

  //append text node
  deleteBtn.appendChild(document.createTextNode('x'));

  //append button to li
  li.appendChild(deleteBtn);

  //append li to list
  itemList.appendChild(li);

}

function removeItem (e){
  if(e.target.classList.contains('delete')){
    if (confirm('Are you sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}