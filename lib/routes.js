if (Meteor.isClient){
  Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
  });
}

if (Meteor.isServer){
  var Api = new Restivus({
    apiPath: '/api',
  });

  Api.addCollection(Questions, {
    routeOptions: {
      authRequired: false
    }
  });
}

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
