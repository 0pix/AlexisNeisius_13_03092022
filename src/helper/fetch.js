// utiliser cette fonction uniquement pour récupérer la data puis faire un dispatche dans le composent parent


export async function request(method, url, body) {


	const reponse = await fetch(url, {
		method: method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body)
	})

	try {
		const data = await reponse.json()

		if (data.status === 400) {
			console.log(data)
		}
		if (data.status === 200) {
			console.log(data)
		}
		return data;
	} catch (err) {
		console.log(err)
	}
}

// const body = {
// 	"email": 'tony@stark.com',
// 	"password": `password123`
// }

// const test = request("POST", "http://localhost:3001/api/v1/user/login", body)
// console.log(test)





