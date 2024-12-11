import { useState } from 'react';
import AddQuestion from './AddQuestion';
import CollectedQuestions from './CollectedQuestions';
import './App.css';

export default function App() {

  return (
    <>
      <h1 className="faiq-h1">FAIQ - Frequently Asked Interview Questions</h1>
      <AddQuestion newQuestion/>
      <CollectedQuestions />
    </>
  );

}
