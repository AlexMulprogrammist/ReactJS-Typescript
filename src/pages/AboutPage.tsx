import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Page Info</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        necessitatibus mollitia ducimus facere atque magnam numquam aspernatur
        eveniet adipisci ut!
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Back to list To-do
      </button>
    </>
  )
}
