if (Meteor.isClient){
  Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
  });
}

if (!Meteor.isClient){
  Router
  .route('/api/test', function() {
    debugger;
    console.log("test route");
  }, {where: 'server'});
}

Router
.route('/api/questions', {
  where: 'server'
})
.get(function() {
  this.reponse.write("hello");
  this.response.end();
});


Router.route('/', {name: 'home', controller: 'MainController'});

MainController = RouteController.extend({
  action: function() {
  	this.render('home', {
	    data: function () {
	      return { posts: ['post red', 'post blue'] }
	    }
  	});
  }
});
