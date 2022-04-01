const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const PORT = process.env.PORT || 8000;

app.get("/", (req,res)=>{
	res.render('layout', {template: "index.html"})
})

app.listen(PORT, () => {
	console.log(`listening on :${PORT}`);
});