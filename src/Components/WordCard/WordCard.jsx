
import styles from "./WordCard.module.scss";

const WordCard = ({ english, transcription, russian, isTranslationVisible, onCheck }) => {
  return (
    <div className={styles.card}>
      <div>
        <h2>{english}</h2>
        <p>{transcription}</p>
      </div>
      {isTranslationVisible ? (
        <p className={styles.translation}>{russian}</p>
      ) : (
        <button onClick={onCheck} className={styles.checkButton}>
          Проверить
        </button>
      )}
    </div>
  );
};

export default WordCard;