import React,{useState} from 'react'
import './Sidebar.css'
import plusIcon from './images/Pasted image.png'

function Sidebar({addNote}) {

    const [colStatus,changeColStatus] = useState(false)
    const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

    return (
        <div className='side-bar'>
            <img 
            onClick={()=> changeColStatus(!colStatus)} 
            src={plusIcon} alt="addIcon" 
            className={`${colStatus?'add-image-rotate':null}`}
            />
            <ul  className={`sidebar-list ${colStatus?'sidebar-list-active':null}`}>
                {
                colors.map((color,index)=>{
                    return ( 
                        <li key={index} 
                            className='sidebar-list-item'
                            style={{backgroundColor:color}}
                            onClick={()=>addNote(color)}>
                        </li> 
                    )
                })
                }
            </ul>             
         </div>
        )
}

export default Sidebar
