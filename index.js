var data = [{
		categoria: 'comida',
		subcategoria: [{
			articulo: "pan",
			marcas: ['flakes', 'corn']
		}, {
			articulo: 'cereales',
			marcas: ['oily', 'ram']
		}]
	},

	{
		categoria: 'ropa',
		subcategoria: [{
			articulo: "camisa",
			marcas: ['tshirt', 'nike']
		}, {
			articulo: 'pantalon',
			marcas: ['stratt', 'rok']
		}]
	}
]

var comidaPan = {
	x: ['enero', 'febrero', 'marzo', 'abril', 'mayo'],
	y: [60, 24, 53, 16, 21],
	name: 'Pan',
	type: 'bar'
};

var comidaCereales = {
	x: ['enero', 'febrero', 'marzo', 'abril', 'mayo'],
	y: [10, 30, 11, 29, 25],
	name: 'Cereales',
	type: 'bar'
};

var ropaCamisa = {
	x: ['enero', 'febrero', 'marzo', 'abril', 'mayo'],
	y: [1, 24, 10, 9, 21],
	name: 'Camisa',
	type: 'bar'
};
var ropaPantalon = {
	x: ['enero', 'febrero', 'marzo', 'abril', 'mayo'],
	y: [60, 15, 53, 2, 12],
	name: 'Pantalon',
	type: 'bar'
};

var dataGroupComida = [comidaPan, comidaCereales];
var dataGroupRopa = [ropaCamisa, ropaPantalon];

var parentSelect = $('#parent');
var child1Select = $('#child1');
var child2Select = $('#child2');

data.forEach((data) => {
	parentSelect.append('<option value=' + data.categoria + '>' + data.categoria + '</option>');
});

parentSelect.change(() => {
	Plotly.purge('plotlyChart');
	$('#plotlyChart').empty();
	child1Select.empty();
	child1Select.append('<option disabled selected value>Selecciona una opcion</option>');
	child2Select.empty();
	child2Select.append('<option disabled selected value>Selecciona una opcion</option>');
	if (parentSelect.children("option:selected").val() == data[0].categoria) {
		Plotly.newPlot('plotlyChart', dataGroupComida, {
			responsive: true,
			title: 'Comida',
			barmode: 'stack'
		});
		data[0].subcategoria.forEach((subcategoria) => {
			child1Select.append('<option value=' + subcategoria.articulo + '>' + subcategoria.articulo + '</option>');
		})

	} else if (parentSelect.children("option:selected").val() == data[1].categoria) {
		Plotly.newPlot('plotlyChart', dataGroupRopa, {
			responsive: true,
			title: 'Ropa',
			barmode: 'stack'
		});
		data[1].subcategoria.forEach((subcategoria) => {
			child1Select.append('<option value=' + subcategoria.articulo + '>' + subcategoria.articulo + '</option>');
		})
	}
});

child1Select.change(() => {
	child2Select.empty();
	child2Select.append('<option disabled selected value>Selecciona una opcion</option>');
	if (child1Select.children("option:selected").val() == data[0].subcategoria[0].articulo) {
		data[0].subcategoria[0].marcas.forEach((marcas) => {
			child2Select.append('<option value=' + marcas + '>' + marcas + '</option>');
		})

	} else if (child1Select.children("option:selected").val() == data[0].subcategoria[1].articulo) {
		data[0].subcategoria[1].marcas.forEach((marcas) => {
			child2Select.append('<option value=' + marcas + '>' + marcas + '</option>');
		})
	} else if (child1Select.children("option:selected").val() == data[1].subcategoria[0].articulo) {
		data[1].subcategoria[0].marcas.forEach((marcas) => {
			child2Select.append('<option value=' + marcas + '>' + marcas + '</option>');
		})
	} else if (child1Select.children("option:selected").val() == data[1].subcategoria[1].articulo) {
		data[1].subcategoria[1].marcas.forEach((marcas) => {
			child2Select.append('<option value=' + marcas + '>' + marcas + '</option>');
		})
	}
});