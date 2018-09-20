app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state('logout', {
          url: '/logout',
          controller: function($scope, $route) {
              $route.reload()
          }
      })