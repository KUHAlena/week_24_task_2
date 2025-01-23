import styles from "./WordTable.module.scss";
import WordRow from "../WordRow/WordRow.jsx";

const WordTable = ({ words, updateWord, deleteWord }) => {
  return (
    <div className={styles["table-container"]}>
      <table>
        <thead>
          <tr>
            <th>English</th>
            <th>Transcription</th>
            <th>Russian</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <WordRow
              key={word.id}
              word={word}
              updateWord={updateWord}
              deleteWord={deleteWord}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordTable;
