'use strict';

angular.module('prosperenceApp')
.controller('OverviewCtrl', function ($scope, User, Auth) {
  $scope.user = Auth.getCurrentUser();
  $scope.plan = $scope.user.plan;

  var defaultOverviewPlanels = [
    'cash-flow-chart',
    'income-tax-chart'
  ];

  $scope.user.overviewPlanels = $scope.user.overviewPlanels || defaultOverviewPlanels;

  // Reset overview planels to defaults.
  $scope.resetDefaultOverviewPlanels = function() {
    $scope.user.overviewPlanels = defaultOverviewPlanels;
  };

});
