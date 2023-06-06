import React,{useState,useEffect} from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {

  const [notes,setNotes] = useState(JSON.parse(localStorage.getItem('notes-app'))||[]);  
  
  const addNote = (color)=> {
    let tempNotes = [...notes]
    
    tempNotes.push({
      id:Date.now()+""+Math.floor(Math.random()*89),
      note:"",
      time:Date.now(),
      color,
    })
    setNotes(tempNotes);
  };

  const deleteNote = (id)=>{
    const tempNotes = [...notes]
    const index = tempNotes.findIndex(item=>item.id === id)
    if(index<0)return
    tempNotes.splice(index,1)
    setNotes(tempNotes);
  };

  const addText = (id,text) =>{
    const tempNotes = [...notes]
    const index = tempNotes.findIndex(item=>item.id === id)
    console.log('helo world',index);
    tempNotes[index].note = text
    setNotes(tempNotes)
  };

  useEffect(()=>{
    localStorage.setItem('notes-app',JSON.stringify(notes))
    console.log('Strigify >>>> ',typeof(JSON.stringify(notes)));
  },[notes])

  return (
    <div className="App">
      <Sidebar addNote={addNote}></Sidebar>
      <NoteContainer notes={notes} addText={addText} deleteNote={deleteNote}></NoteContainer>
    </div>
  );
}

export default App;
