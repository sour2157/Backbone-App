BackboneApp.Routers.Todos = Backbone.Router.extend({
	routes: {
	'': 'index',
	'backbone(/)': 'index'
	},

	index: function() {
		var todos = new BackboneApp.Collections.Todos();
		todos.fetch({
			success: function(data, response){
				console.log(data);
			}
		});
	}
});