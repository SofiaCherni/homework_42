import { useState } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NoteItem from './components/NoteItem';
import UserForm from './UserForm';

type Note = {
  title: string;
  text: string;
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  // функція додавання нового запису
  const addNote = (newNote: Note) => {
    setNotes([...notes, newNote]);
  };

  // функція видалення
  const deleteNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // Функція отримання нотатків
  const getList = () => {
    if (notes.length === 0) {
      return <div className="box">Нотаток немає</div>;
    }
    return (
      <NoteList>
        {notes.map((note, index) => (
          <NoteItem key={index} note={note} index={index} onDelete={deleteNote} />
        ))}
      </NoteList>
    );
  };

  return (
    <div className="wrapper">
      <UserForm onSubmit={addNote} />
      {getList()}
    </div>
  );
}

export default App;