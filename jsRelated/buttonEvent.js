const form = document.querySelector('form');
const searchFeild = document.querySelector('.search');
let parent = document.getElementById('doubleHolder');
/**
 * First approach double the button
 */
// let parent = document.getElementById('doubleButton');
// function clickHandler(e) {
//     console.log('button clicked');
//     let btn = createElement('button', 'btn', 'double');

//     let btn2 = createElement('button', 'btn', 'double');     
      
//     parent.appendChild(btn);
//     parent.appendChild(btn2);
//     addListener(btn);
//     addListener(btn2);
//     parent.removeChild(e.target);
// }

// document.querySelector('.btn').addEventListener('click', function(e) {
//     clickHandler(e);
// });

// function addListener(elem) {
//     elem.addEventListener('click', function(e) {
//         clickHandler(e);
//     });
// }

// function createElement(type, cls, text) {
//     let elem = document.createElement(type);
//     elem.setAttribute('class', cls);
//     elem.innerText = text;
//     return elem;
// }

parent.addEventListener('click', function(e) {
    if(e.target.classList.contains('double')) {
        let btn = createElement('button');
        btn.setAttribute('class', 'double');
        btn.innerText = 'double';
        let btn2 = createElement('button');
        btn2.setAttribute('class', 'double');
        btn2.innerText = 'double';
        parent.appendChild(btn);
        parent.appendChild(btn2);
        parent.removeChild(e.target);
    }
});



form.addEventListener('submit', search);

function search(e) {
    e.preventDefault();
    let target = searchFeild.value;
    fetchData(target);
}

async function fetchData(target) {
    let url = `https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${target}&aqi=no`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  }



// document.getElementById('text').addEventListener('keydown', function(e) { 
//     console.log('key pressed');
//     console.log(e.key);
// });