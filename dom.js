// get the selectors
let form = document.querySelector('#form-items')
let items = document.querySelector('#items')
let search = document.querySelector('#search')

console.log(search)

// add events
form.addEventListener('submit', addItem);
items.addEventListener('click', removeItem);
search.addEventListener('keyup', filterItems)


function addItem(e) {
    e.preventDefault()
    // get value of input
    let newItem = document.querySelector('#newItem').value

    // create li
    let li = document.createElement('li')
    li.className ='list-group-item'
    li.appendChild(document.createTextNode(newItem));

    // create delete button
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'))
    li.appendChild(deleteBtn)

    // add li to ul
    items.appendChild(li);

    document.querySelector('#newItem').value = ''
    console.log(li)
}

function removeItem(e) {
    e.preventDefault()
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement
            items.removeChild(li);
            console.log(li);
        }
    }
}

function filterItems(e) {
    // lowercase the search
    let searchVal = e.target.value.toLowerCase()
    let children = items.children
    Array.from(children).forEach(function(item) {
        var itemContent = item.firstChild.textContent;
        if (itemContent.toLowerCase().indexOf(searchVal) != -1) {
            item.style.display = 'block'
        }
        else {
            item.style.display = 'none'
        }
    })
    console.log(children)
    console.log(Array.from(children));
}

// let div1 = document.createElement('div');
// div1.className= 'error';

// let txt = document.createTextNode("hello works");
// div1.appendChild(txt)

// let cont = document.querySelector('.container')
// cont.appendChild(div1)

// console.log(cont);
// console.log(div1);


// var btn = document.querySelector('#button');
// console.log(btn)
// btn.addEventListener('click', () => console.log('Inisde click'))

// function btnClicked() {
//     console.log('Button Clicked!')
// }



// // console.dir(window.atob("ab"))

// // document.querySelector('input').value = "placeholder"
// // document.querySelector('input[type="submit"]').value = 'SEND'

// // var lis = document.querySelectorAll('li');
// // console.log(lis)
// // lis.forEach(element => {
// //     element.style.backgroundColor = 'blue'
// // });

// // var items = document.querySelector('#items');
// // console.log(items)

// // console.log(items.parentElement);
// // console.log(items.parentNode);

// // for (let i=0; i<= lis.length; i++) {
// //     lis[i].style.backgroundColor = 'red';
// // };

// // EXAMINE THE DOCUMENT OBJECT //

// // console.dir(document);
// // console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.title);
// // //document.title =  123;
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.all);
// // console.log(document.all[10]);
// // // document.all[10].textContent = 'Hello';
// // console.log(document.forms[0]);
// // console.log(document.links);
// // console.log(document.images);

// // GETELEMENTBYID //
// // console.log(document.getElementById('header-title'));
// // var headerTitle = document.getElementById('header-title');
// // var header = document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = 'Goodbye';
// // console.log(headerTitle.innerText);
// // headerTitle.innerHTML = '<h3>Hello</h3>';
// // header.style.borderBottom = 'solid 3px #000';

// // GETELEMENTSBYCLASSNAME //
// // var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].textContent = 'Hello 2';
// // items[1].style.fontWeight = 'bold';
// // items[1].style.backgroundColor = 'yellow';

// // // Gives error
// // //items.style.backgroundColor = '#f4f4f4';

// // for(var i = 0; i < items.length; i++){
// //   items[i].style.backgroundColor = '#f4f4f4';
// // }

// // GETELEMENTSBYTAGNAME //
// // var li = document.getElementsByTagName('li');
// // console.log(li);
// // console.log(li[1]);
// // li[1].textContent = 'Hello 2';
// // li[1].style.fontWeight = 'bold';
// // li[1].style.backgroundColor = 'yellow';

// // // Gives error
// // //items.style.backgroundColor = '#f4f4f4';

// // for(var i = 0; i < li.length; i++){
// //   li[i].style.backgroundColor = '#f4f4f4';
// // }

// // QUERYSELECTOR //
// // var header = document.querySelector('#main-header');
// // header.style.borderBottom = 'solid 4px #ccc';

// // var input = document.querySelector('input');
// // input.value = 'Hello World'

// // var submit = document.querySelector('input[type="submit"]');
// // submit.value="SEND"

// // var item = document.querySelector('.list-group-item');
// // item.style.color = 'red';

// // var lastItem = document.querySelector('.list-group-item:last-child');
// // lastItem.style.color = 'blue';

// // var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.color = 'coral';

// // QUERYSELECTORALL //
// // var titles = document.querySelectorAll('.title');

// // console.log(titles);
// // titles[0].textContent = 'Hello';

// // var odd = document.querySelectorAll('li:nth-child(odd)');
// // var even= document.querySelectorAll('li:nth-child(even)');

// // for(var i = 0; i < odd.length; i++){
// //   odd[i].style.backgroundColor = '#f4f4f4';
// //   even[i].style.backgroundColor = '#ccc';
// // }

