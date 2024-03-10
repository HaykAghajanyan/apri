import { useParams, useLoaderData } from 'react-router-dom'
import {useReducer} from "react";

const Cats = () => {
  const params = useParams()
  const todosFromLoader = useLoaderData()

  const {} = useReducer()

  console.log('todosFromLoader', todosFromLoader)
  return (
    <div>
      Page about Cats
    </div>
  )
}

export default Cats
