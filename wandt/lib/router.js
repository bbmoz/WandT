Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function () {
    return [Meteor.subscribe('cities')];
  }
});

Router.route('/', {
  name: 'home'
});

Router.route('/about', {
  name: 'about'
});
