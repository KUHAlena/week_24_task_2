import { useState } from 'react';
import WordTable from "../Components/WordTable/WordTable.jsx";
import "../styles/styles.scss";
import WordCard from '../Components/WordCard/WordCard.jsx';

const initialWords = [
  { id: 1, english: "measure", transcription: "[ˈmeʒ.əɹ]", russian: "мера" },
  { id: 2, english: "fire", transcription: "[faɪə]", russian: "огонь" },
  { id: 3, english: "island", transcription: "[ˈaɪ.lənd]", russian: "остров" },
];

function App() {
  const [words, setWords] = useState(initialWords);

  const updateWord = (id, updatedWord) => {
    setWords(words.map((word) => (word.id === id ? updatedWord : word)));
  };

  const deleteWord = (id) => {
    setWords(words.filter((word) => word.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>Word List</h1>
      </header>
      <WordTable words={words} updateWord={updateWord} deleteWord={deleteWord} />
      <WordCard english="stork" transcription="[stɔːk]" russian="аист" />
    </div>
  );
}

export default App;
