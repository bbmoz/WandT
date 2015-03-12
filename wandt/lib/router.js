Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'home'
});

Router.route('/about', {
    name: 'about'
});