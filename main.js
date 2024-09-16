// const btn = document.getElementById('load');
// btn.addEventListener('click', function() {
//     loadFile();
// });


function onFormLoaded() {
    const btn = document.getElementById('add-line');
    btn.addEventListener('click', function () {
        const input = document.getElementById('text');
        const line = input.value;
        const textContainer = document.getElementById('text-container');
        textContainer.insertAdjacentHTML('beforeend', `<div>${line}</div>`);
    });
}

const buttonsContainer = document.getElementById('buttons');
const container = document.getElementById('container');
buttonsContainer.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-file')) {
        const file = e.target.getAttribute('data-file');
        if (file === 'part.html') {
            loadFile(`data/${file}`, onFormLoaded);
        } else {
            loadFile(`data/${file}`);
        }
        
    }
})

function loadFile(fileName, callback) {
    container.innerText = 'Loading...';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', fileName, true);
    xhr.onload = function () {
        const str = this.responseText;
        onDataLoaded(str);

        if (typeof callback === 'function') {
            callback();
        }
    }
    xhr.send(null);
}

function onDataLoaded(text) {
    container.innerHTML = text;
}

