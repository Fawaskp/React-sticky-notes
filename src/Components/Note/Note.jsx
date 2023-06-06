import React from 'react'
import './Note.css'
import deleteIcon from '../Sidebar/images/delete.png'

function Note(props) {

  const formatDate = (value) =>{

    const date = new Date(value)
    const monthNames = [
      'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Sep','Nov','Dec'
    ]

    let hrs = date.getHours()
    let amPm = hrs>12 ? 'PM' : 'AM'
    hrs = hrs>12? hrs-12 : hrs

    let minute = date.getMinutes()
    minute = minute<10?'0'+minute:minute

    let day = date.getDate()
    let month = monthNames[date.getMonth()]
    let year = date.getFullYear()

    return `${hrs}:${minute} ${amPm} ${day} ${month} ${year}`
  }

  return (
    <div className='note fade-in' style={{backgroundColor:props.note.color}}>
      <textarea onChange={(event)=> props.addText(props.note.id,event.target.value)} className='note_text' defaultValue={props.note.note}></textarea>
      <div className='note-footer'>
        <p>{formatDate(props.note.time)}</p>
        <img src={deleteIcon} alt="Delete-icon" 
        onClick={()=>props.deleteNote(props.note.id) }
        />
      </div>
    </div>
  )
}

export default Note
