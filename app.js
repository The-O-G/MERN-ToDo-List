const express = require("express");
const bodyParser = require("body-parser");

app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

var aryLst = ['omkar','not omkar', 'maybe omkar'];
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

    var item = request.body.inpVal;
    if(item != aryLst[aryLst.length-1]){
    aryLst.push(item);
    }

    response.render("list", {isday: day, inpVal: aryLst});
});

app.listen(3000, function () {
    console.log("Server booted at 3000");
})