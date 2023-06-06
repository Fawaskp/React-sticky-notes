import React from 'react'
import Note from '../Note/Note'
import './NoteContainer.css'

function NoteContainer(props) {

  function reverseArray(arr){
    const array = []
    for (let i=arr.length-1;i>=0;i--){
      array.push(arr[i])
    }
    return array
  }
  const notes = reverseArray(props.notes)

  return (
    <div className='note-container'>
      <h2>Notes</h2>
      <div className='note-container-notes'>
        { 
        notes.length > 0?
        notes.map((value)=>{
            return( <Note key={value.id} note={value} addText={props.addText}  deleteNote={props.deleteNote} /> )
          }) : <h2>Notes is empty ...</h2>
        }
      </div>
    </div>
  )
}

export default NoteContainer
