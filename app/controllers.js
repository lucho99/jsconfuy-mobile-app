'use strict';

angular.module('jsconf.uy.controllers', []).
  
  controller('AgendaCtrl', function($scope, AgendaService) {
    
    AgendaService.all(function(data) {
      $scope.agenda = data;
    });
    
    $scope.getDurationClass = function(duration) {
      return "duration-" + duration;
    };
    
    $scope.changeDay = function(day) {
      day.active = !day.active;
    };
    
    $scope.getDayClass = function(day) {
      return day.active ? 'visible' : 'hidden';
    };
    
    $scope.getPanelClass = function(day) {
      return day.active ? 'active' : 'inactive';
    };
  })
  
  .controller('SpeakersCtrl', function($scope, SpeakersService) {
    SpeakersService.all(function(data) {
      $scope.speakers = data;
    });
  })
  
  .controller('LoginCtrl', function($scope, $rootScope, $location, _) {
    
    $scope.menu = [
      {title: "Speakers", href: "#/speakers", active: false}, 
      {title: "Agenda", href: "#/agenda", active: false}, 
      {title: "Venue", href: "#/venue", active: false} 
    ];
    
    $scope.select = function(item) {
      $scope.unSelectAll();
      item.active = true;
    };
    
    $scope.unSelectAll = function() {
      _.each($scope.menu, function(item){ item.active = false });
    };
    
    $scope.isSelected = function(item) {
      return item.active ? 'active' : '';
    };
    
    $rootScope.$on("$locationChangeSuccess", function(event, newUrl) {
      var menuItems = _.select($scope.menu, function(item) { return item.href == "#" + $location.path(); } );
      if(_.isArray(menuItems) && !_.isEmpty(menuItems)){
        $scope.select(_.first(menuItems));
      } else {
        $scope.unSelectAll();
      }
      
    });
    
  });