const express = require('express')
const app = express()
const router = require('./router/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const env = require('dotenv')

env.config()

const userScema = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.CONNECT_DB, userScema )
    .then(() => { console.log('connected to mongo'); })
    .catch((err) => { console.log('error:' + err); })

//  checkUserOrAdmin = async (req, res, next) => {
//     const nonSecurePaths = ['/user/addUser', '/user/login', '/admin/addAdmin', '/admin/login', '/weather/getWeathe', '/user/userHistory', '/admin/deleteUser'];
//     if (nonSecurePaths.includes(req.path)) 
//           return next();

//     let jwtToken = req.headers.authorization;
//     let userIdOrAdminId = await jwt.authenticateToken(jwtToken)
//     if (!userIdOrAdminId) {
//         res.status(403);
//         res.send("Method not allow")
//         return;
//     }   
//     next();
// }

// app.all('*', checkUserOrAdmin);
app.listen(3004, () => { console.log('connected with port 3004'); })
app.use(bodyParser.json())
app.use('/', router)


