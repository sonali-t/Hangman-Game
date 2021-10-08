import React from 'react'

function Word({ selectedWord, correctLetters }) {
    return (
        <div className="word" >
            {selectedWord.split('').map((letter,id) => {
                return(
              <span className="letter" key={id}>
                {correctLetters.includes(letter) ? letter : ''}
              </span>)
            })}
          
        </div>
    )
}

export default Word
