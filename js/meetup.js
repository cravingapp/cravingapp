// ($(document).ready($(function() {
//  var meetupAPI = "http://http://api.meetup.com/2/events/?key=1879c3f6593c7a15e682a1431591a&member_id=self&jsoncallback=?";

//  $.getJSON(meetupAPI, displayEvents);

//  function displayEvents(data) {
//    var obj = jQuery.parseJSON( '{ "status":"upcoming" }' );
//    alert( obj.status === "upcoming" );
//  });
// })();

// create meetup service
app.controller('MeetupController', function($scope, $http) {
  $http.jsonp('http://api.meetup.com/2/events?page=5&callback=JSON_CALLBACK&key=1879c3f6593c7a15e682a1431591a&member_id=self')
    .success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      console.log(data);

      // get results: [
      //  0: 
      //    event_url: "http://www.meetup.com/new-york-ios-developer/events/218145162/"
      //    how_to_find_us: "The lobby entrance is on the west side of Broadway between 57th + 58th. Bring gov't ID."
      //    id: "218145162" 
      //    name: "Design Meets Dev"
      //    time: 1415836800000
      //    yes_rsvp_count: 198
      // ]
      $scope.events = data.results;
      console.log($scope.events);

      
    });

    
});

// create meetup controller

// create meetup template