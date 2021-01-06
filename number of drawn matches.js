const request = require('request');

function myFetch(url) {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
		if(error) reject(error)
		resolve(body)
    });
  });
}

async function getDrawnNumbers() {
	let url = `https://jsonmock.hackerrank.com/api/football_matches?year=2011&page=`
	result = await myFetch(url)
	let totalPages = JSON.parse(result).total_pages
	let i = 1
	let count = 0
	while (i <= totalPages) {
		let newUrl = url + i.toString()
		let post = await myFetch(newUrl);
		post = JSON.parse(post)
		let j = 0
		while (j < post.data.length) {
			if (post.data[j].team1goals == post.data[j].team2goals) count++
			// console.log(`${post.page}/${i}/${j}/${count}`)
			j++
		}
		i++
	}
	return count
}

let result = getDrawnNumbers()
result.then(data => console.log(data))



