import { useState } from 'react';
import './AddQuestion.css';

export default function AddQuestion() {

  const [question, setQuestion] = useState('');

  return (
    <div className="faiq-add-question">
      <h2 className="faiq-add-question-heading">Add your interview question to the list</h2>
      <form className="faiq-add-question-form">
        <label className="faiq-add-question-form-label" htmlFor="faiq-add-question-form-input">Question:</label>
        <input id="faiq-add-question-form-input" type="text"
          onChange={event => {
            setQuestion(event.target.value);
          }} />
        <button className="faiq-add-question-form-button" type="submit"
          onClick={event => {
            console.log(`${question}`);
            event.preventDefault();
          }}>Add</button>
      </form>
    </div>
  );

}
