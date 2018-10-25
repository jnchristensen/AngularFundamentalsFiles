'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData) {
    $scope.event = eventData.event;

}
);