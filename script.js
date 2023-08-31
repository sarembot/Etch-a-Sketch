const gridDivs = 256;

const container = document.getElementById("container");

for (i = 0; i < gridDivs; i++){

    const newDiv = document.createElement('div');

    newDiv.className = 'square';

    container.appendChild(newDiv);
}

const squareDivs = document.querySelectorAll('.square');

squareDivs.forEach(function(squareDiv){

    squareDiv.addEventListener('mouseover', function(){
    squareDiv.style.backgroundColor = 'black';
    });

    squareDiv.addEventListener('mouseout', function(){
    squareDiv.style.backgroundColor = 'white';
    })
})