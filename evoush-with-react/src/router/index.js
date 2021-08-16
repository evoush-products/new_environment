import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import {Home, About, Product} from '../App/Pages'


const links = [
  {id: 1, name: "Home", path: "/"},
  {id: 2, name: "About", path: "/about"},
  {id: 3, name: "Product", path: "/product"}
]
const router = () => {

  return (
    <>
      <Router>
        <nav>
        <ul>
          {
            links.map(link => (
              <li><Link to={link.path}>{link.name}</Link></li>
            ))
          }
        </ul>
        </nav>

          <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Product}/>

          </Switch>
      </Router>
    </>
  )
}

export default router
