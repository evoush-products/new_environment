import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AllProductData} from '../../../services'


const Home = () => {
	const [products, setProducts] = useState([])

		useEffect(() => {
			AllProductData()
			.then(res => {
				// console.log(res)
				setProducts(res)
			})
		}, [products])

		const Heading = styled.h1 `
		color: #cc0000;
		font-size: 31px;
		text-align: center;
		`
		const BaseContainer = styled.section `
		background-color: #ffefcc;
		border: 1px solid #e0e0e0;
		`

		const ProductContainer = styled.section `
		background-color: #FCF3F1;
		border: 2px solid #434343;
		`



		return (
			<>

			<BaseContainer>
			<Heading>Evoush Home Page</Heading>
			</BaseContainer>

			<ProductContainer>
				{
					products.map(product => (
						<>
							<h1>{product.title}</h1>
						</>
					))
				}
			</ProductContainer>
			</>
			)
	}

	export default Home
