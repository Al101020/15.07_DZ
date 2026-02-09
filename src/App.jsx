import './App.css';

import FormattingThePublicationDate from './components/task1/FormattingThePublicationDate.jsx';
import HighlightingBlocks from './components/task2/HighlightingBlocks.jsx';

function App() {
  return (
    <>
      <h3>Задача №1 - Форматирование даты публикации</h3>
      <FormattingThePublicationDate />
      <h3>Задача №2 - Подсвечивание блоков</h3>
      <HighlightingBlocks />
    </>
  )
};

export default App;
