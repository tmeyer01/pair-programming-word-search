// This paired project was a collab with @tmeyer01 


const wordSearch = (letters, word) => { 
    if(letters.length === 0){
        return false;
    }
    
    
    const horizontalJoin = letters.map(ls => ls.join('').toUpperCase())
   
    //console.log(horizontalJoin);
    
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    let vertWord = []

    for(let col = 0; col < letters[0].length; col++){
        let newWordArray = [];
        for (let row = 0; row < letters.length; row++){
            newWordArray.push(letters[row][col])
        }
        vertWord.push(newWordArray)
    }

    let verticalWordJoin = vertWord.map(i => i.join('').toUpperCase())
    //console.log(verticalWordJoin);

    for (let w of verticalWordJoin) {
        if (w.includes(word)) return true
    }

    return false;

}

// wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ]);




module.exports = wordSearch

//sanam1060