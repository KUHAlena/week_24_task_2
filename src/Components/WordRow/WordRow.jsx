import { useState } from 'react';
import styles from "./WordRow.module.scss";

const WordRow = ({ word, updateWord, deleteWord }) => {
const [isEditing, setIsEditing] = useState(false);
const [formData, setFormData] = useState({ ...word });

const handleChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};

const handleSave = () => {
    updateWord(word.id, formData); 
    setIsEditing(false); 
};

const handleCancel = () => {
    setFormData({ ...word }); 
    setIsEditing(false); 
};

return (
    <tr className={styles.row}>
{isEditing ? (
    <>
        <td>
        <input
            type="text"
            name="english"
            value={formData.english}
            onChange={handleChange}
        />
        </td>
        <td>
        <input
            type="text"
            name="transcription"
            value={formData.transcription}
            onChange={handleChange}
        />
        </td>
        <td>
        <input
            type="text"
            name="russian"
            value={formData.russian}
            onChange={handleChange}
        />
        </td>
        <td className={styles.actions}>
        <button className="save-btn" onClick={handleSave}>
            Сохранить
        </button>
        <button className="cancel-btn" onClick={handleCancel}>
            Отмена редактирования
        </button>
        </td>
        </>
    ) : (
        <>
        <td>{word.english}</td>
        <td>{word.transcription}</td>
        <td>{word.russian}</td>
        <td className={styles.actions}>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Редактировать
            </button>
            <button className="delete-btn" onClick={() => deleteWord(word.id)}>
            Удалить
            </button>
        </td>
        </>
    )}
    </tr>
);
};

export default WordRow;
