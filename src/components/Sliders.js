import React, { useState } from "react"

const Sliders = () => {
  const [hue, setHue] = useState(Math.ceil(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.ceil(Math.random() * 100))
  const [lightness, setLightness] = useState(50)

  const randomColorChange = event => {
    setHue(Math.ceil(Math.random() * 360))
    setSaturation(Math.ceil(Math.random() * 100))
    setLightness(Math.ceil(Math.random() * 100))
  }

  return (
    <section>
      <div
      // style={{ backgroundColor: `hsl(${hue}, {saturation}%, {lightness}%)` }}
      >
        <h1>Color Picker #2! with Hooks!</h1>
        <section>
          <button onClick={randomColorChange}>Random Color Change</button>
          <p>Hue</p>
          <input
            type='range'
            min='0'
            max='360'
            value={hue}
            onChange={e => setHue(e.target.value)}
          />
        </section>
        <section>
          <p>Saturation</p>
          <input
            type='range'
            min='0'
            max='100'
            value={saturation}
            onChange={e => setSaturation(e.target.value)}
          />
        </section>
        <section>
          <p>Lightness</p>
          <input
            type='range'
            min='0'
            max='100'
            value={lightness}
            onChange={e => setLightness(e.target.value)}
          />
          <div
            className='color-block'
            style={{
              backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`
            }}
          ></div>
        </section>
      </div>
    </section>
  )
}

export default Sliders
