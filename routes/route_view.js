
module.exports = function(express) {
	const route = express.Router();

	route.get("/",(req,res) => {
		return res.render("appointment");
	});
	route.get("/appointment",(req,res) => {
		return res.render("appointment");
	});
	
	return route;
};