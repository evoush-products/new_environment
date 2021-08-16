import React, {Fragment} from 'react'
import {AllData} from '../services'
import {Pages} from './Pages'

const App = props => {

const [products, setProducts] = useState([])

	useEffect(() => {
		AllData()
		.then(res => {
			setProducts(res.data)
		})
	}, [products])

  return (
    <Fragment>
    	<h1>Hallo World</h1>
    </Fragment>
  )
}

export default App
