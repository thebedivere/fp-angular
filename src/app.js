(function (app) {
    app.MyApp = ng.core
        .Component({
            selector: 'my-app',
            template: '<h1>Hello Angular 2!</h1>'
        })
        .Class({
            constructor: function () { }
        })

    document.addEventListener('DOMContentLoaded', function () {
        ng.platformBrowserDynamic.bootstrap(app.MyApp)
    })
    console.log('hello world!')
})()









