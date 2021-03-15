const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json( ));

app.get('/itemslist/:page', function(req, res) {
    const page = String(req.params.page);

    fs.readFile(`./public/database/items${page}.json`, 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/itemslist', (req, res) => {
    const offset = 6;
    const filePath = './public/database/items3.json';

    fs.readFile(filePath, 'utf8', (err, data) => {
        const list = JSON.parse(data || {});
        const amountOfData = Object.keys(list).length;
        const newID = offset + amountOfData + 1;
        const newItem = req.body;
        newItem.id = newID;
        list[newID] = newItem;
        fs.writeFile(filePath, JSON.stringify(list), (err) => {
            if (err) {
                console.log(err);
            }
            res.send(list);
        })
    })
});

app.post('/cartitem', (req, res) => {
    const filePath = './public/database/cartitems.json';

    fs.readFile(filePath, 'utf8', (err, data) => {
        let cartList = JSON.parse(data || {});
        const newItem = req.body;
        cartList = { ...cartList, ...newItem };
        fs.writeFile(filePath, JSON.stringify(cartList), (err) => {
            if (err) {
                console.log(err);
            }
            res.send(cartList);
        })
    })
});

app.post('/deleteitemscart', (req, res) => {
    const filePath = './public/database/cartitems.json';

    fs.readFile(filePath, 'utf8', (err, data) => {
        let cartList = JSON.parse(data || {});
        const newItem = req.body;
        console.log(newItem);
        const newItemId = Object.keys(newItem)[0];
        console.log(newItemId)
        delete cartList[String(newItemId)];
        console.log(cartList)
        fs.writeFile(filePath, JSON.stringify(cartList), (err) => {
            if (err) {
                console.log(err);
            }
            res.send(cartList);
        })
    })
})

app.get('/cartitems', function(req, res) {
    fs.readFile(`./public/database/cartitems.json`, 'utf8', function(err, data) {
        res.end(data);
    });
});


app.listen(PORT, () => {
    console.log('Server started on port', PORT);
});