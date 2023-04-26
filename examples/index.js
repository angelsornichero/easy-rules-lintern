let i = 1

function easy(param) {
	return param
}

easy(i)

const a = { a: 20 }

console.log(a)

const b = () => {
	return
}

b()

const c = [1, 1]
console.log(c) // Valid comment

async function d() {
	const a = await 2
	return a
}

d()

const e = {
	key: 5,
	ey: 2
}

console.log(e)

if (e !== undefined) { // Instead if (true) || if (e !==  undefined)
	console.log(e)
}
