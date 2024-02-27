import {useState} from "react";

const CIRCLES = [
  {
    id: 1,
    color: 'red'
  },
  {
    id: 2,
    color: 'brown'
  },
  {
    id: 3,
    color: 'blue'
  },
  {
    id: 4,
    color: 'orange'
  },
  {
    id: 5,
    color: 'purple'
  },
]

const Circles = () => {
  const [circles, setCircles] = useState(CIRCLES)
  const [activeCircleId, setActiveCircleId] = useState(null)

  // const filtered = CIRCLES.filter(item => item.id > 1)

  const removeCircle = id => {
    setCircles(prev => prev.filter(item => item.id !== id))
  }

  const changeColor = id => {
    setCircles(prev => prev.map(item => {
      if(item.id === id) {
        return {
          ...item,
          color: 'white'
        }
      }

      return item
    }))
  }

  return (
    <div className='circle-container'>
      {
        circles.map(({ id, color }, index) =>
          <div
            key={id}
            className='circle'
            style={{backgroundColor: activeCircleId === id ? 'green' : color}}
            onClick={() => setActiveCircleId(id)}
            // onClick={() => removeCircle(id)}
            // onClick={() => changeColor(id)}
          >{id}</div>)
      }
    </div>
  )
}

export default Circles
