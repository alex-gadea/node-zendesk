//ticketmetricevents.js: Client for the zendesk API.


var util        = require('util'),
    Client      = require('./client').Client,
    defaultUser = require('./helpers').defaultUser;

var TicketMetricEvents = exports.TicketMetricEvents = function (options) {
    this.jsonAPINames = [ 'ticket_metric_events', 'ticket_metric_event' ];
    Client.call(this, options);
};

// Inherit from Client base object
util.inherits(TicketMetricEvents, Client);

// ######################################################## TicketMetricEvents
// ====================================== Listing incremental TicketMetricEvents
TicketMetricEvents.prototype.incremental = function (startTime, cb) {
  this.request('GET', ['incremental', 'ticket_metric_events', {start_time: startTime}],  cb);
};

