let textBox = document.querySelector('.textBox')
let archiveBox = document.querySelector('.archive')


// Create Buttons for other textBoxes

for (let archive of archiveText) {
    let button = document.createElement('button')
    button.classList.add('button')
    button.innerText = `${archive.name}`
    archiveBox.appendChild(button)

    // Adds Click Function to buttons that replaces text

    button.addEventListener("click", function (){
        if (textBox.innerText != null) {
            textBox.innerText = null;
        }
        if (textBox.scrollTop != 0) {
            textBox.scrollTop = 0;
        }
        textBox.innerHTML = `${archive.body}`
    })
}