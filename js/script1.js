
(function (window){
var helloSpeaker = {};
helloSpeaker.speakWord = "Hello";
helloSpeaker.sayHello = function() {
  console.log(helloSpeaker.speakWord + " " + theName);
}
window.helloSpeaker = helloSpeaker;
})(window);
