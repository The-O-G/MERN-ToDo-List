const express = require("express");
const bodyParser = require("body-parser");

app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

var aryLst = [];
var date = new Date();
    
var day ='';
var options = {
    weekday: "long",
    day: "numeric",
    month: 'long'
}
var day = date.toLocaleDateString('en-Us', options);

app.get('/', function (req, res) {

    console.log(date.getDay());
    res.render("list", {isday: day, inpVal: aryLst});
});

app.post('/',function(request,response){
    var pressed = (request['body']['action']);
    var item = request.body.inpVal;
    if (pressed == '+') {
        
        if(item != aryLst[aryLst.length-1]){
            aryLst.push(item);
            }
        
            response.render("list", {isday: day, inpVal: aryLst})

    } else if (pressed == '-') {
        
        if(item != aryLst[aryLst.length-1]){
            aryLst.push(item);
            }
            aryLst = [];
            response.render("list", {isday: day, inpVal: aryLst});
    }


});

app.listen(3000, function () {
    console.log("Server booted at 3000");
})
