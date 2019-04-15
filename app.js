// //Install express server
// const express = require('express')
// const path = require('path')
 
// const app = express()
 
// // Serve only the static files form the dist directory
// // Replace the '/dist/<to_your_project_name>'
// app.use(express.static(__dirname + '/dist/emu-telemetry'))
 
// app.get('*', function(req,res) {
// 	// Replace the '/dist/<to_your_project_name>/index.html'
// 	res.sendFile(path.join(__dirname + '/dist/emu-telemetry/index.html'))
// });
// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080)

const express = require('express')
const app = express()
const app2 = express()
const port = 3000
const port2 = 5555
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app2.get('/', (req, res) => res.send('Hello World 2!'))
app2.listen(port2, () => console.log(`Example app 2 listening on port ${port2}!`))