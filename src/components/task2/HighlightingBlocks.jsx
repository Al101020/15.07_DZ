// import { useState } from 'react';
// import './crud.css';
// import AllNotes from './AllNotes'
// import { indexUU } from './indexUU';

function HighlightingBlocks() {
  console.log('HighlightingBlocks');
  
  return (
    <>
      <div className='task2'>
        {/* <div id='crudTitle'>
          <div className='notes'>
            <h1 className='titleTask'>Notes</h1>
          </div>
          <button id='updateBtn' onClick={updateNotes}>Обнавить</button>
        </div>
        <div id='divAllNotes'>
          <AllNotes props={allNotes} funcDel={delNote} />
        </div>
        <div id='crudBottom'>
          <div>New Note</div>
          <div>
            <form>
              <textarea name='textareaNewNote' id='textareaNewNote' rows='5' cols='45'
              value={NewNote} onChange={(e) => setNewNote(e.target.value)} required />
              <br />
              <button name='addNote' id='addNote' onClick={addNewNote}>Добавить</button>
            </form>
          </div>
        </div> */}
      </div>
    </>
  )
};

export default HighlightingBlocks;