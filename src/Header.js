import { useState, useEffect, memo } from 'react'

// state
// props

const colors = ['red', 'blue', 'orange', 'purple', 'brown']

const Header = ({ id, color: propsColor, counter }) => {
  const [color, setColor] = useState(propsColor)

  const changeColor = () => {
    const nextColorIndex = Math.round(Math.random() * colors.length)

    // color = colors[nextColorIndex]
    console.log(color)
    setColor(colors[nextColorIndex])
  }

  useEffect(() => {
    console.log('color', color)

    return () => {
      console.log('unmount')
    }
  }, [color])

  return (
    <header style={{ backgroundColor: color}} onClick={() => changeColor()}>
      Header => {counter}
    </header>
  )
}

export default memo(Header)
