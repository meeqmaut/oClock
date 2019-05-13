const reverseNumber = (n) => {
    if ( !isNaN(n) ) {
      return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
    }

    return 'Please enter a number';    
}


const stringCombinations = (string) => {
    let result = [];

    for ( let currentIndex = 0; currentIndex < string.length; currentIndex++ ) {
        let char = string.charAt(currentIndex);
        const temporaryArray = [char];

        for ( let str in result ) {
            temporaryArray.push(result[str] + char);
        }

        result = result.concat(temporaryArray);
    }

    return result.join(', ');
}


const secondGreatestAndLowest = (numbers) => {
    if ( !isNaN(numbers) ){
      const sortedArrayOfNumbers = numbers.split('').sort();
      const arrayOfUniqueNumbers = [];

      for ( let i = 0; i < sortedArrayOfNumbers.length; i++ ) {
        if ( sortedArrayOfNumbers[i] !== sortedArrayOfNumbers[i-1] ) {
          arrayOfUniqueNumbers.push(sortedArrayOfNumbers[i]);
        }
      };

      const lowestAndGreatestNumbers = [arrayOfUniqueNumbers[1], arrayOfUniqueNumbers[arrayOfUniqueNumbers.length-2]];
      
      return lowestAndGreatestNumbers.join(', ');
    }

    return 'Please enter a numbers';
    
}

const findTheFirstUniqueCharacter = (string) => {
    const arrayOfCharacters = string.split('');
    let result;

    for(var i = 0; i < arrayOfCharacters.length; i++){
      if(arrayOfCharacters.indexOf(arrayOfCharacters[i]) === arrayOfCharacters.lastIndexOf(arrayOfCharacters[i])){
        result = arrayOfCharacters[i];
        break;
      }

      result = 'No unique characters in this string';
    }

    return result;
}

  export { reverseNumber, stringCombinations, secondGreatestAndLowest, findTheFirstUniqueCharacter };