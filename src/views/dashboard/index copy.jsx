import { Heading } from "../../components/Heading"
import HomeIcon from '@mui/icons-material/Home';
import { useState, useCallback } from 'react';

export function Dashboard() {
    const [elements, setElements] = useState([]);
  
    const handleAddElement = useCallback((newElement) => {
      setElements((prevElements) => [...prevElements, newElement]);
    }, []);
  
    const handleEditElement = useCallback((updatedElement) => {
      setElements((prevElements) =>
        prevElements.map((element) => {
          if (element.id === updatedElement.id) {
            return { ...updatedElement };
          }
          return element;
        })
      );
    }, []);
  
    const handleDeleteElement = useCallback((id) => {
      setElements((prevElements) => prevElements.filter((element) => element.id !== id));
    }, []);
  
    return (
      <>
        <AddElementForm onAddElement={handleAddElement} />
        <ElementList
          elements={elements}
          onEditElement={handleEditElement}
          onDeleteElement={handleDeleteElement}
        />
      </>
    );
}


function AddElementForm({ onAddElement }) {
    const [newElement, setNewElement] = useState({});
  
    const handleAddElement = () => {
      onAddElement(newElement);
      setNewElement({});
    };
  
    return (
      <div>
        <input
          value={newElement.name}
          onChange={(e) => setNewElement({ ...newElement, name: e.target.value })}
        />
        <button onClick={handleAddElement}>Add Element</button>
      </div>
    );
}

function ElementList({ elements, onEditElement, onDeleteElement }) {
    return (
      <ul>
        {elements.map((element) => (
          <li key={element.id}>
            <span>{element.name}</span>
            <button onClick={() => onEditElement({ id: element.id, name: `${element.name} (updated)` })}>
              Edit
            </button>
            <button onClick={() => onDeleteElement(element.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }



