BackboneApp.Collections.Todos = Backbone.Collection.extend({
	model: BackboneApp.Models.Todo,
	urlRoot : '/todos',
	url : '/todos'
})