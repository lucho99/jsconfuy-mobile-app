'use strict';

angular.module('jsconf.uy.services', ['angularLocalStorage'], function($provide) {
  
  $provide.factory('SpeakersService', function($http, storage) {
    return {
      all: function(cb) {
        $http.
        get('/data/speakers.json').
        success(function(data) {
          storage.set('speakers', data);
          cb(data);
        }).
        error(function(data, status) {
          console.log('Request Failed with Status- ' + status + ' Response is ' + data);
          cb(storage.get('speakers'));
        });
      }
    };
  });
  
  $provide.factory('AgendaService', function($http, storage) {
    return {
      all: function(cb) {
        $http.
        get('/data/agenda.json').
        success(function(data) {
          storage.set('agenda', data);
          cb(data);
        }).
        error(function(data, status) {
          console.log('Request Failed with Status- ' + status + ' Response is ' + data);
          cb(storage.get('agenda'));
        });
      }
    };
  });
  
});

