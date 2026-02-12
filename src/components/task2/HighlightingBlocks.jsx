import './HighlightingBlocks.css';
import React, { useState } from 'react';
import List from './List';
import arrList from './arrList';

export default function HighlightingBlocks() {
  const [list, setList] = useState(arrList);
  return (
    <div className='task2'>
      <List list={list} />
    </div>
  );
}
