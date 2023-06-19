import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/code-highlighter.css';


const Json: FC = (props) => {
  const {id} = useParams();
  console.log({id})
  
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

export default Json;