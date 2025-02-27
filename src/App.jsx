import React, { useContext } from 'react'
import GlobalStyle from './GlobalStyle.jsx';
import { Context } from './context/context.js';

function App() {
  const {style} = useContext(Context)

  return (
    <GlobalStyle theme={style}></GlobalStyle>
  )
}

export default App
