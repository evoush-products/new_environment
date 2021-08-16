export const AllProductData = async(url) => {
	try {
		const response = await fetch('https://app.evoush.com/api/product/all')
		return response.json()
	}catch(err){
		console.log(err)
	}
}