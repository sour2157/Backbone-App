
window.BackboneApp = {
Models: {},
Collections: {},
Views: {},
Routers: {},
intialize: function()	{
	BackboneApp.Routers.todoRouter = new BackboneApp.Routers.Todos();

	return Backbone.history.start({
		pushstate: true
	});
 }
};
 $(document).ready(function(){
 	BackboneApp.intialize();
 });
