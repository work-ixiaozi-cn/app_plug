import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
// @ts-ignore
import musicAPI from 'music-api'

const Content: FC = (props) => {
  const {id} = useParams();
  musicAPI.searchSong('netease', {
    key: '陈粒',
    limit: 10,
    page: 1,
  })
    .then((res: any) => console.log({res}))
    .catch((err: any) => console.log({err}))

  return (
    <div className="flex-auto flex flex-col">
      <div className="flex-auto mx-5px mt-20px">
      </div>
      <div>
          <audio
              controls
              src="
https://ws.stream.qqmusic.qq.com/C400002FoKdh2I9Tcl.m4a?guid=4220211900&vkey=72C616E6F6211A04D599ACBBCFC27E2CBD687036ED0FDFB06446AF4918BCB750B4386B9846A4B79CF1C5E0074EA9ECE9097236906C27E738&uin=&fromtag=123032">
          </audio>
      </div>
    </div>
  )
};

export default Content;