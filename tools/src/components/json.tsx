import React, {FC, PropsWithChildren, PropsWithRef, ReactElement, useState} from 'react';
import { useParams } from 'react-router-dom';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/code-highlighter.css';
import {Input} from "antd";


const Json: FC = () => {
  const [result, setResult] = useState<string>("")
  const formatObject = (obj: any, level=0): string => {
    let html = '';
    const indent = '  '.repeat(level);
    if (typeof obj === 'object' && !Array.isArray(obj)) {
      html += '{\n';
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = obj[key];
        html += `${indent}  "${key}": ${formatObject(value, level + 1)}`;
        if (i < keys.length - 1) {
          html += ',';
        }
        html += '\n';
      }
      html += `${indent}}`;
    } else if (Array.isArray(obj)) {
      html += '[\n';
      for (let i = 0; i < obj.length; i++) {
        const value = obj[i];
        html += `${indent}  ${formatObject(value, level + 1)}`;
        if (i < obj.length - 1) {
          html += ',';
        }
        html += '\n';
      }
      html += `${indent}]`;
    } else if (typeof obj === 'string') {
      html += `"${obj}"`;
    } else {
      html += obj;
    }
    return html;
  }
  const beautify = (e: any) => {
    let obj = JSON.parse(`    {
      "type": "div",
      "attributes": {
        "class": "container"
      },
      "content": [
        {
          "type": "ul",
          "content": [
            {
              "type": "li",
              "content": [
                "Hello ",
                {
                  "type": "strong",
                  "content": [
                    "World"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }`)

    console.log(formatObject(obj))
    setResult(formatObject(obj))
  }
  return (
    <div className="flex-auto flex flex-col">
      <div className="flex-auto mx-5px mt-20px">
        <Input.TextArea
          className='!h-full !w-full !resize-none hover:border-none rounded-none focus:shadow-none'
          placeholder="字符串转Base64"
          onChange = {beautify}
        />
      </div>
      <div className="flex-auto"  dangerouslySetInnerHTML={{__html: result}}>
      </div>
    </div>
  )
};

export default Json;
