'use strict';

angular.module('jsconf.uy', [
  'ngRoute',
  'underscore',
  'jsconf.uy.services',
  'jsconf.uy.controllers',
]).
config(function($routeProvider) {
  $routeProvider.when('/agenda', {templateUrl: 'partials/agenda.html', controller: 'AgendaCtrl'});
  $routeProvider.when('/speakers', {templateUrl: 'partials/speakers.html', controller: 'SpeakersCtrl'});
  $routeProvider.when('/venue', {templateUrl: 'partials/venue.html'});
  $routeProvider.otherwise({redirectTo: '/home'});
});