const gridDivs = 256;

const container = document.getElementById("container");

for (i = 0; i < gridDivs; i++){

    const newDiv = document.createElement('div');

    newDiv.className = 'square';

    container.appendChild(newDiv);
}


//handle hover effect for grid squares
function handleSquareHover(event) {

    if (event.target.classList.contains('square')) {
        event.target.classList.add('hovered');
        event.target.classList.remove('unhovered');
    }
}

//attach hover listener to container
container.addEventListener('mouseover', handleSquareHover);

//handle removal of hover
function handleSquareUnhover(event) {
    if (event.target.classList.contains('square')) {
        event.target.classList.remove('hovered');
        event.target.classList.add('unhovered')

    }
}

container.addEventListener('mouseout', handleSquareUnhover);


const button = document.getElementById('btn');
let numberOfSquares;

button.addEventListener('click', function(){

    function promptForNumber() {
        do {
            numberOfSquares = window.prompt('How many squares per side would you like? Enter a number between 1 and 100.')

            if (numberOfSquares !== null) {
                //convert input to a number
                numberOfSquares = parseFloat(numberOfSquares)
            }
        //check if input is a number and within 1-100
        } while (isNaN(numberOfSquares) || numberOfSquares < 1 || numberOfSquares > 100);

        //update CSS variable --grid-size with value for numberOfSquares
        document.documentElement.style.setProperty('--grid-size', numberOfSquares)

        //run function createNewGrid if user input is valid
        if (!isNaN(numberOfSquares) && numberOfSquares >= 1 && numberOfSquares <= 100) {
            createNewGrid(numberOfSquares)
        }

        function createNewGrid(numberOfSquares){
            //removes the old grid
            container.innerHTML = '';
            
            //create new grid
            const newGrid = numberOfSquares * numberOfSquares;
            console.log(newGrid);
        
            for (i = 0; i < newGrid; i++){
        
                const newDiv = document.createElement('div');
                console.log(newDiv);
                newDiv.className = 'square';
        
                container.appendChild(newDiv);
            }
        }
    }

    promptForNumber()
    
});

//I have to change CSS I think. And find a way to make the grid flexible so it doesn't turn into a long vertical rectangle

//Hover doesn't work after input is received from user

//Something wrong with height of .square, when user input received it gets smaller, probably linked to first comment

//must figure out way to make it align baby