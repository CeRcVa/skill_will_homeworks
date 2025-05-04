import { useParams } from 'react-router-dom'
import { facts } from '../data'

export default function Fact() {
  const { factId } = useParams()
  const fact = facts[factId]

  return (
    <div>
      {fact ? (
        <>
          <h2>Fact #{factId}</h2>
          <p>{fact}</p>
        </>
      ) : (
        <p>ფაქტი ვერ მოიძებნა</p>
      )}
    </div>
  )
}
