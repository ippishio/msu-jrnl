const button = document.getElementById('catcreate');
const catholder = document.getElementById('catholder');
button.addEventListener('click', () => {
    var cat = document.createElement("img");
    cat.src = 'cat.gif';
    cat.style = 'width: 10%'
    catholder.appendChild(cat);
    console.log("HUI");
});
