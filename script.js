const gridDivs = 16;

const container = document.getElementById("container");

for (i = 0; i < gridDivs; i++){

    const newDiv = document.createElement('div');

    newDiv.className = 'square';

    container.appendChild(newDiv);
}