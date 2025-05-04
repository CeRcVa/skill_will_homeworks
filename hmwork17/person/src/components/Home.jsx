import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Sherlock Holmes</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/Sherlock_Holmes_Portrait_Paget.jpg" alt="Sherlock Holmes" width="300" />
      <p><Link to="/about">Learn more about Sherlock</Link></p>
      <p><Link to="/1">See Fact #1</Link></p>
      <p><Link to="/2">See Fact #2</Link></p>
      <p><Link to="/3">See Fact #3</Link></p>
    </div>
  )
}
