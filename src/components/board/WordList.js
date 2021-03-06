import React from 'react'
import styled from 'styled-components'
import BoggleSolver from '../../utils/BoggleSolver'

const ListContainer = styled.ul`
  list-style: none;
  height: 35vh;
  border: 4px solid var(--foreground);
  overflow-y: auto;
  padding: 0.5rem;
`

const Word = styled.li`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  .score {
    opacity: 0.7;
  }
`

const SelectedWord = styled(Word)`
  color: ${props => colorMap[props.validatingState]};
`

const colorMap = {
  0: "var(--foreground)",
  1: "green",
  2: "red"
}

const WordList = ({ showSolution, words, solvedWords, selectedWord, validatingState }) => {
  if (showSolution) {
    return (
      <ListContainer>
        {solvedWords.map(word =>
          <Word key={word}>
            <span style={{ color: `${words.includes(word) ? "green" : "var(--foreground)"}` }}>{word}</span>
            <span className="score">+{BoggleSolver.getPoints(word)}</span>
          </Word>
        )}
      </ListContainer>
    )
  }

  return (
    <ListContainer>
      <SelectedWord validatingState={validatingState}>
        <span>{selectedWord}</span>
        <span className="score">{selectedWord.length ? `+${BoggleSolver.getPoints(selectedWord)}` : null}</span>
      </SelectedWord>
      {words.map(word =>
        <Word key={word}>
          <span>{word}</span>
          <span className="score">+{BoggleSolver.getPoints(word)}</span>
        </Word>
      )}
    </ListContainer>
  )
}

export default WordList