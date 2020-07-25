const express = require('express');
const app = express();
const path = require('path')

var router = express.Router();

app.use('/public', express.static(path.join(__dirname, '/public')))

app.get('/', (req, res, next) => {
    var duongdan = path.join(__dirname, 'home.html')
    res.sendFile(duongdan);
})
 
app.listen(3000, () => {
    console.log('server dang chay 300');
})

module.exports = router;
