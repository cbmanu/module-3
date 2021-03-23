
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


  for(theName of names){
    toLowerCase = theName.toLowerCase()
    firstLetter = toLowerCase.startsWith("j")
    if (firstLetter) {
      byeSpeaker.sayBye();
    } else {
      helloSpeaker.sayHello();
    }
  }