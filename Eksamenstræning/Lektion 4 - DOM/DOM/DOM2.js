let li = document.querySelector('li');
li.innerHTML += ' - modificeret!';

let ol = li.parentElement;
let el = document.createElement('li');
el.innerHTML = 'Item 0';
ol.insertBefore(el, li);

ol.insertBefore(el, li.nextElementSibling);
ol.appendChild(el);
ol.replaceChild(el, li);
ol.removeChild(el);
