Router.configure({
    layoutTemplate: 'layout',
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