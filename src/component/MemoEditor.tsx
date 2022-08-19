import { useState } from "react";
import { categoryList } from "../common";

// 便签新增/编辑区
function MemoEditor() {
  const [title, setTitle] = useState('')
  const [curCategory, setCurCategory] = useState(categoryList[0])

  function onSave() {

  }
  
  return (
    <>
      <div className="cover-layer"></div>
      <div id="new-markdown"
          className="editor-layer">
        <div className="editor-top">
          <input className="editor-title form-control"
              type="text"
              placeholder="标题"
              value={title}
              />
          <div className="dropdown select-category">
            <button className="btn btn-default dropdown-toggle"
                data-toggle="dropdown">
              <span className="category">{curCategory}</span>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              {categoryList.map((item) => {
                return (
                  <li onClick={() => setCurCategory(item)}>
                    <a>{item}</a>
                  </li>
                )
              })}
            </ul>
          </div>
          <ul className="tools">
            <li className="save" onClick={onSave}/>
            <li className="cancel"
                ></li>
          </ul>
        </div>
        <textarea className="text-content form-control"
          placeholder="内容"
          v-model="memo.content"></textarea>
      </div>
    </>
  )
}

export default MemoEditor
