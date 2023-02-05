const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
const port = 3000
const fs = require('fs');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// app.get('/', async (req: any, res: any) => {
// 	// let data = await readFile("./api/private/views/index.html");
// 	res.send("data")
// })

export default app;

// // Return contents of file
// function readFile(path: string) {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(path, 'utf8', (err: any, data: any) => {
// 			try {
// 				resolve(data);
// 			} catch (err) {
//                 console.error("Error reading file " + path)
//                 reject(err);
// 			}
// 		})
// 	})
// }