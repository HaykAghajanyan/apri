import { useState, useEffect, memo } from 'react'
import {Link, NavLink} from "react-router-dom";

import './index.css'

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
    <header onClick={() => changeColor()}>
      Header => {counter}

      <NavLink className={({isActive}) => isActive ? 'active' : ''} to={'cats'}>To cats</NavLink>
      <NavLink to={'/'}>Go back</NavLink>
    </header>
  )
}

export default memo(Header)
