import { useParams, useLoaderData } from 'react-router-dom'

const Cats = () => {
  const params = useParams()
  const todosFromLoader = useLoaderData()

  console.log('todosFromLoader', todosFromLoader)
  return (
    <div>
      Page about Cats
    </div>
  )
}

export default Cats
