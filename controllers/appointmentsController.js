const {
	appointment,
	item,
	Sequelize
} = require("../models");

const Op = Sequelize.Op;

let self = {};

self.getAll = async (req, res) => {
	try {
		let data = await appointment.findAll({
			attributes: ["id", "date", "startTime", "endTime"]
		});
		return res.json({
			status: "success",
			data: data
		})
	} catch (error) {
		res.status(500).json({
			status: "error",
			data: error
		})
	}
}

self.get = async (req, res) => {
	try {
		let id = req.params.id;
		let data = await appointment.findOne({
			attributes: ["id", "date", "startTime", "endTime"],
			where: {
				id: id
			}
		});
		return res.json({
			status: "success",
			data: data
		})
	} catch (error) {
		res.status(500).json({
			status: "error",
			data: error
		})
	}
}

self.search = async (req, res) => {
	try {
		let text = req.query.text;
		console.log(text);

		let whereConditions = {};

		if (text) {
			whereConditions = {
				[Op.or]: [
					{
						date: {
							[Op.like]: "%" + text + "%"
						}
					}
				]
			};
		}

		let data = await appointment.findAll({
			attributes: ["id", "date", "startTime", "endTime"],
			where: whereConditions
		});

		return res.json({
			status: "success",
			data: data
		});
	} catch (error) {
		res.status(500).json({
			status: "error",
			data: error
		});
	}
};

self.save = async (req, res) => {
	try {
		let body = req.body;
		let data = await appointment.create(body);
		return res.json({
			status: "success",
			data: data
		})
	} catch (error) {
		res.status(500).json({
			status: "error",
			data: error
		})
	}
}

self.update = async (req, res) => {
	try {
		let id = req.params.id;
		let body = req.body;
		let data = await appointment.update(body, {
			where: {
				id: id
			}
		});
		return res.json({
			status: "success",
			data: data
		})
	} catch (error) {
		res.status(500).json({
			status: "error",
			data: error
		})
	}
}

self.delete = async (req, res) => {
	try {
		let id = req.params.id;
		let data = await appointment.destroy({
			where: {
				id: id
			}
		});
		return res.json({
			status: "success",
			data: data
		})
	} catch (error) {
		res.status(500).json({
			status: "error",
			data: error
		})
	}
}


module.exports = self;