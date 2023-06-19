import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/code-highlighter.css';


const Welcome: FC = () => {
  const getMdia = async () => {
    let media = await navigator.mediaDevices.getDisplayMedia({audio: true, video: true})
    console.log(media)
  }
  getMdia()
  return (
    <div className="flex-auto flex flex-col">
      <div className="flex-auto mx-5px mt-20px">
        json
      </div>
      <div>
      json
      </div>
    </div>
  )
};

export default Welcome;
