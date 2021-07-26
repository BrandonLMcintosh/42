function unroll(squareArray) {
    const top = () => {
        return squareArray.shift();
    }
    const right = () => {
        const newArr = [];
        const deleteIndexes = [];
        for(let i = 0; i < squareArray.length - 1; i++){
            const rightElement = squareArray[i].pop();
            newArr.push(rightElement);
            if(squareArray[i].length === 0) deleteIndexes.push(i);
        }
        deleteIndexes.forEach(i => squareArray.splice(i, 1));

        return newArr;
        
    }
    const bottom = () => {
        return squareArray.pop().reverse();
    }
    const left = () => {
        const newArr = [];
        for(let i = squareArray.length - 1; i > 0; i--){
            newArr.push(squareArray[i].shift())
            if(squareArray[i].length === 0) squareArray.splice(i, 1);
        }
        return newArr;
        
    }

    const roll = () => {
        const rotation = [];
        if(squareArray.length) rotation.push(...top());
        if(squareArray.length > 1) rotation.push(...right());
        if(squareArray.length) rotation.push(...bottom());
        if(squareArray.length > 1) rotation.push(...left());
        return rotation;
    }
    
    const finish = () => {
        const flat = [];
        while(squareArray.length){
            flat.push(...roll());
        }
        return flat;
    }

    return finish();
}

module.exports = unroll;
