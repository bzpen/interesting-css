import React from 'react'
import styles from './style/css/App.module.less'
import DictionaryPanel from './components/DictionaryPanel'
import PreviewPanel from './components/PreviewPanel'

function App() {
  return <div className={styles.content}>
    <DictionaryPanel/>
    <PreviewPanel/>
  </div>
}

export default App
