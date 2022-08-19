import { useState } from 'react'
import ItemList from './component/ItemList'
import MemoEditor from './component/MemoEditor'
import MenuBar from './component/MenuBar'

function App() {
  const [isShowMemoEditor,setIsShowMemoEditor] = useState(false)
  return (
    <div className="App">
      <MenuBar 
        setIsShowMemoEditor={setIsShowMemoEditor}
      />
      <ItemList />
      { isShowMemoEditor && <MemoEditor /> }
    </div>
  )
}

export default App
