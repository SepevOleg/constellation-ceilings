
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.stock-block');

for (let elm of elements) {
  observer.observe(elm);
}


const popup = document.querySelector(".stock");

document.onclick = function (e) {
    if (e.target.className != "stock") {
        popup.style.display = "none";
    };
};