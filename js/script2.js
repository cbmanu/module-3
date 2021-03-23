
  (function (window){
  var byeSpeaker = {}
  byeSpeaker.speakWord = "Good Bye";
  byeSpeaker.sayBye = function() {
    console.log(byeSpeaker.speakWord + " " + theName);
  }
  window.byeSpeaker = byeSpeaker;
})(window);
