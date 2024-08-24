'use client'

import { useState } from 'react'

export default function Home() {

  const [animation, setAnimation] = useState<boolean>(Boolean)

  return (
    <>
      <h2 className="c_h2">animationは、display: noneでも動く</h2>
      <button className="c_button" onClick={() => setAnimation((prev) => !prev)}>onClick!</button>
      <div className="c_starting_style">
        <div className="c_starting_style_item c_starting_style_item_ver_animation"></div>
      </div>

      <h2 className="c_h2">Transition @starting-style 設定あり</h2>
      <button className="c_button">onClick!</button>
      <div className="c_starting_style">
        <div className="c_starting_style_item"></div>
      </div>

      <h2 className="c_h2">Transition @starting-style 設定なし</h2>
      <button className="c_button">onClick!</button>
      <div className="c_starting_style">
        <div className="c_starting_style_item"></div>
      </div>
    </>
  );
}
