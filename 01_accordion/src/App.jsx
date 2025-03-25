import { useState } from 'react';
import './App.css';
import data from './components/data/data.js';



function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedItems, setSelectedItems] = useState(new Set()); 
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  function handleSingleSelection(index) {
    setSelectedIndex(selectedIndex === index ? null : index);
  }

  function handleMultiSelection(index) {
    const newSelectedItems = new Set(selectedItems);
    if (newSelectedItems.has(index)) {
      newSelectedItems.delete(index); 
    } else {
      newSelectedItems.add(index); 
    }
    setSelectedItems(newSelectedItems);
  }

  function disableMultiSelection() {
    setEnableMultiSelection(false);
    setSelectedItems(new Set()); 
    setSelectedIndex(null); 
  }

  return (
    <>
      <button
        onClick={() => {
          if (enableMultiSelection) {
            disableMultiSelection(); 
          } else {
            setEnableMultiSelection(true); 
          }
        }}
      >
        {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>

      {data.map((dataItem, index) => (
        <div
          key={index}
          onClick={() =>
            enableMultiSelection
              ? handleMultiSelection(index) 
              : handleSingleSelection(index) 
          }
        >
          <h2>{dataItem.question}</h2>
          <span>{enableMultiSelection ? (selectedItems.has(index) ? "−" : "+") : "+"}</span>

          {(selectedIndex === index || selectedItems.has(index)) && <p>{dataItem.answer}</p>}
        </div>
      ))}
    </>
  );
}



export default App
