const Form = document.querySelector('.form');


Form.addEventListener('submit', action);

function action(e) { 
    e.preventDefault();
    const string = e.currentTarget.elements.string.value;
    const word = e.currentTarget.elements.word.value;

    findSequenceOfCells(string, word)
}



function findSequenceOfCells(string, word) { 
    const result = [];

    const cleanString = string.toLowerCase().replace(/[^a-zа-яё]/gi, '');
    const cleanWord = word.toLowerCase().replace(/[^a-zа-яё]/gi, '');
    const matrixSize = Math.sqrt(cleanString.length);

    if (!Number.isInteger(matrixSize)) { console.log('Please enter another string'); return };
    if (cleanString.length < 4 || string.length < 4) { console.log('Please enter another word'); return}
    const matrix = createMatrix(cleanString, matrixSize);
    const lettersArr = Array.from(cleanWord);

    lettersArr.forEach(letter => {
        const letterCoordinates = [];
        const stringIndex = matrix.findIndex(el => el.includes(letter));
        let rawIndex;
        if (stringIndex < 0) { rawIndex = -1 } else { rawIndex = matrix[stringIndex].indexOf(letter); }

    
       letterCoordinates.push(stringIndex, rawIndex)
       result.push(letterCoordinates) 
    });

     console.log(...result) 
}


function createMatrix(string, num) { 
    const matrix = [];
    
    for (i = 0; i < string.length; i+= num) { 
        const stringOfMatrix = [];
        for (y = 0; y < num; y++) { 
            stringOfMatrix.push(string[i + y])
        };
        matrix.push(stringOfMatrix)
    };
    return matrix
};
