
// Evented thing (30 mins)

// Define the "EventedThing" class, so that its instances have
// an "on" and a "trigger" method to react to events. For example:
//
// eventedThing.on('meet', function (name) {
//  console.log('Nice to meet you, ' + name + '.');
// });
//
// eventedThing.trigger('meet', 'Sarah');
// -> 'Hi there!'
// -> 'Nice to meet you, Sarah.'
//
// eventedThing.trigger('whatever');
// -> nothing happens


function EventedThing () {
  this._listen = {};

}

EventedThing.prototype.on = function (triggerKey,func) {
  this._listen[triggerKey] = func;
};
// don't know how i made it working with the dots, but it works
EventedThing.prototype.trigger = function (triggerKey,...args) {
  if (!this._listen[triggerKey]) return;
  return this._listen[triggerKey](...args);
};



// var obj = new EventedThing();
// obj.on('hello',function (msg,msg2,msg3) {console.log('hello '+msg+' '+msg2+' '+msg3);});
// obj.trigger('hello','goooog morning','hello again','by');


module.exports = new EventedThing;
