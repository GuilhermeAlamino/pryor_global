
const appointmentsController = require("./../controllers/appointmentsController");

module.exports = function (express) {
	const route = express.Router();

	//appointments route
	route.get("/appointment", appointmentsController.getAll);
	route.get("/appointment/:id", appointmentsController.get);
	route.get("/appointment_search", appointmentsController.search);
	route.post("/appointment", appointmentsController.save);
	route.put("/appointment/:id", appointmentsController.update);
	route.delete("/appointment/:id", appointmentsController.delete);

	return route;
};