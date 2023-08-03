// store reference to cube
const cube = document.querySelector('.cube');

// store array of li items
const faces = document.querySelectorAll('li');

// add click listener to each li
for (let i = 0; i < faces.length;i++) {
    faces[i].addEventListener('click', function() {
        cube.className = (`cube ${this.id}`);
    })
}