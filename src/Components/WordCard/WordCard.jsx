import React, { useState } from 'react';
import styles from './WordCard.module.scss';

const WordCard = ({ english, transcription, russian }) => {
const [isTranslationVisible, setIsTranslationVisible] = useState(false);

const handleCheckClick = () => {
    setIsTranslationVisible(true);
};

return (
    <div className={styles.card}>
    <div>
        <h2>{english}</h2>
        <p>{transcription}</p>
    </div>
    {isTranslationVisible ? (
        <p className={styles.translation}>{russian}</p>
    ) : (
        <button onClick={handleCheckClick} className={styles.checkButton}>
        Проверить
        </button>
    )}
    </div>
);
};

export default WordCard;
