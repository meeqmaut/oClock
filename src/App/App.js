import React from 'react';
import './App.css';
import Clock from '../Components/Clock/Clock';
import ForTask from '../Components/Common/ForTask/ForTask'

class App extends React.Component {

  reverseNumber(n) {
    if ( !isNaN(n) ) {
      return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
    }

    return 'Please enter a number';    
  }


  stringCombinations(string){
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


  secondGreatestAndLowest(numbers) {
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

  findTheFirstUniqueCharacter(string){
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
  

  render () {
    return (
      <div className="myComponents">
        <div>
          <ForTask taskFunction={this.reverseNumber} taskName="Reverse number" />
          <ForTask taskFunction={this.stringCombinations} taskName="String combinations" />
        </div>
        <div>
          <Clock/>
        </div>
        <div>
          <ForTask taskFunction={this.secondGreatestAndLowest} taskName="Second greatest and lowest" />
          <ForTask taskFunction={this.findTheFirstUniqueCharacter} taskName="First not repeated character" />
        </div>
      </div>
    );
  }
}

export default App;