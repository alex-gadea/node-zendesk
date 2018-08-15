//ticketmetricevents.js: Client for the zendesk API.


var util        = require('util'),
    Client      = require('./client').Client,
    defaultUser = require('./helpers').defaultUser;

var TicketMetricEventss = exports.TicketMetricEventss = function (options) {
    this.jsonAPINames = [ 'ticket_metric_events', 'ticket_metric_event' ];
    Client.call(this, options);
};

// Inherit from Client base object
util.inherits(TicketMetricEvents, Client);

// ######################################################## TicketMetrics
// ====================================== Listing TicketMetricEvents for ticket
TicketMetricEvents.prototype.list = function (ticketID, cb) {
    this.request('GET', ['tickets', ticketID, 'metric_events'],  cb);  //all for ticket
};

// ====================================== Listing ALL TicketMetricEvents
TicketMetricEvents.prototype.listAll = function (cb) {
    this.requestAll('GET', ['ticket_metric_events'], cb); //all metric eventss for all tickets
};


// ====================================== Viewing A Single TicketMetricEvent
TicketMetricEvents.prototype.show = function (ticketMetricEventId, cb) {
    this.request('GET', ['ticket_metric_eventss', ticketMetricEventId], cb);  //get by ticket metric event id
};
