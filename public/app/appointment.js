
var app = new Vue({
	el: '#app',
	data: {
		appointments: null,
		search: "",
		btn_text: "Salvar",
		appointment: {}
	},
	methods: {
		getAppointments: function () {
			var self = this;
			axios.get(BASE_API + "appointment").then(function (result) {
				self.appointments = result.data.data;
			}, function (error) {
				console.log(error);
			});
		},
		onSearch: function () {
			var self = this;
			axios.get(BASE_API + "appointment_search?text=" + self.search).then(function (result) {
				self.appointments = result.data.data;
			}, function (error) {
				console.log(error);
			});
		},
		onSave: function () {
			var self = this;
			if (self.btn_text === "Salvar") {
				axios.post(BASE_API + "appointment", self.appointment).then(function (result) {
					Swal.fire(
						'Parabéns!',
						'Criado com sucesso',
						'success'
					);
					self.appointment = {};
				}, function (error) {
					console.log(error);
				});
			} else {
				axios.put(BASE_API + "appointment/" + self.appointment.id, self.appointment).then(function (result) {
					Swal.fire(
						'Parábens!',
						'Atualizado com sucesso',
						'success'
					);
				}, function (error) {
					console.log(error);
				});
			}
		},
		onAdd: function () {
			this.appointment = {};
			this.btn_text = "Salvar";
		},
		onEdit: function (data) {
			var self = this;
			self.btn_text = "Atualizar";
			axios.get(BASE_API + "appointment/" + data.id).then(function (result) {
				self.appointment = result.data.data;
				$('#myModal').modal({ show: true });
			}, function (error) {
				console.log(error);
			});
		},
		onDelete: function (data) {
			var self = this;
			Swal.fire({
				title: 'Tem certeza',
				text: "Você tem certeza que quer deletar está data: " + data.date,
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Sim'
			}).then((result) => {
				if (result.value) {
					axios.delete(BASE_API + "appointment/" + data.id).then(function (result) {
						Swal.fire(
							'Parabéns!',
							'Deletado com sucesso',
							'success'
						);
						self.getAppointments();
					}, function (error) {
						console.log(error);
					});

				}
			})

		}
	},
	mounted: function () {
		this.getAppointments();
	}
});