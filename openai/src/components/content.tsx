import React, { FC, useState } from 'react';
import BraftEditor, { EditorState } from 'braft-editor';
import { useParams } from 'react-router-dom';
import Sender from './sender';
import Receiver from './receiver';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/code-highlighter.css';
// import CodeHighlighter from 'braft-extensions/dist/code-highlighter'

// BraftEditor.use(CodeHighlighter({
//   includeEditors: ['editor-with-code-highlighter'],
// }))

const Content: FC = (props) => {
  const {id} = useParams();
  console.log({id})
  
  const [state, setState] = useState<EditorState>(
    BraftEditor.createEditorState('- a')
  );
  const handleChange = (editorState: EditorState) => {
    console.log(editorState.toText());
    console.log(editorState.toHTML());
    setState(editorState);
  };
  return (
    <div className="flex-auto flex flex-col">
      <div className="flex-auto mx-5px mt-20px">
        <Sender />
        <Receiver />
      </div>
      <div>
        <BraftEditor 
          className='border-1px'
          value={state}
          onChange={handleChange}
          contentStyle={{ height: 200 }}
          controls={['fullscreen', 'code', 'separator', 'clear']}
        />
      </div>
    </div>
  )
};

export default Content;