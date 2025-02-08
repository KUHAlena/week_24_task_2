import { useState } from "react";
import WordCard from "../WordCard/WordCard.jsx";
import styles from "./WordCarousel.module.scss";

const WordCarousel = ({ words = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealedIndex, setRevealedIndex] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setRevealedIndex(null);
    } else {
      setIsFinished(true); 
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setRevealedIndex(null);
    }
  };

  return (
    <div className={styles.carousel}>
      {currentIndex > 0 && (
        <button className={styles.arrowButton} onClick={handlePrev}>
          &#8592;
        </button>
      )}

      <WordCard
        english={words[currentIndex].english}
        transcription={words[currentIndex].transcription}
        russian={words[currentIndex].russian}
        isTranslationVisible={revealedIndex === currentIndex}
        onCheck={() => setRevealedIndex(currentIndex)}
      />

      {currentIndex < words.length - 1 && (
        <button className={styles.arrowButton} onClick={handleNext}>
          &#8594;
        </button>
      )}
    </div>
  );
};

export default WordCarousel;
