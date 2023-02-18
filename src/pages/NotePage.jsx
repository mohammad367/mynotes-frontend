import React, { useEffect } from "react";
import { useState} from "react";
import { useParams, Link , useNavigate, useHistory } from "react-router-dom";
//import notes from "../assets/data";
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

const NotePage = () => {
  const navigate= useNavigate();
  let { id: noteId } = useParams();
  let [note,setNote]=useState(null)
  
  console.log(navigate)
  
  useEffect(()=>{
    getNote();
  },[noteId])
  
  let getNote= async () =>{
    if (noteId=== 'new') return;
    let response=await fetch ('/api/notes/'+noteId);
    let data = await response.json();
    setNote(data);
  }
  
  let handleSubmit=()=>{
    if(noteId !=='new' && note.body===''){
      console.log('delete method is triggered')
      deleteNote();
    }
    else if (noteId !== 'new'){
      updateNote();
    }
    else if(noteId ==='new' && note !==null){
      console.log('inside handle submit/ new')
      createNote();
    }
    navigate("/");
  }

  let updateNote= async()=>{
    await fetch('/api/notes/'+noteId+'/',{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...note, 'updated':new Date()})
    });
  }

  let createNote= async()=>{
    await fetch('/api/notes/',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...note, 'updated':new Date()})
    });
    navigate('/')
  }

  let deleteNote=async ()=>{
    await fetch('/api/notes/'+noteId,{
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify(note)
    });
    navigate('/');
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
                <ArrowLeft onClick={handleSubmit} />
            
        </h3>
        {noteId !== 'new' ? (
        <button onClick={deleteNote}> Delete</button>
        ):(
          <button onClick={handleSubmit}> Done </button>
        )
        }

      </div>
      <textarea onChange={(e)=> {
        //console.log(e)
        setNote({...note,'body':e.target.value})}} value={note?.body}>

      </textarea>
    </div>
  );
};

export default NotePage;
