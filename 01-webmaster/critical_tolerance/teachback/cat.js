var cat = { 
  name: 'Ms Stinky', 
    color: 'white',
      raining: true,
        
          speak: function() {
                 console.log("Meow....i am a good cat!")
       }
}

 cat.age = 3
  if( cat.raining ) { 
      cat.speak();
}
  
  cat.raining = false
  
  if (!cat.raining) {
      console.log(cat.age)
      }
