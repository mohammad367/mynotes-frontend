import React from 'react';
import { Link } from 'react-router-dom';
let getTitle=(note)=>{
    const title= note.body.split('\n')[0];
    if (title.length >45){
        return title.slice(0,45);
    }
    return title;
}

let getContent=(note)=>{
    let title=getTitle(note);
    let content=note.body.replaceAll('\n',' ');
    content=content.replaceAll(title,'');
    content= content.slice(0,20);
    return content;
}

let getDate=(note)=>{
    
    return new Date(note.updated).toLocaleDateString()
}

const ListItem = ({note}) => {
    console.log(note)
    return ( 
        <div>
        <Link to={`/notes/${note.id}`}>
            <div className='notes-list-item'>    
            <h3>
                {getTitle(note)}
            </h3>
            <p>
                <span>
                   {getDate(note)} {getContent(note)}
                </span>
            </p>
            
            </div>
        </Link>
        </div>
     );
}
 
export default ListItem;
