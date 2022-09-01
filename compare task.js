var obj1 = {name: "Siva", age: 24};
var obj2 = {age: 24, name: "Siva"};

for ( key in obj1) {
   
   if (obj1[key] == obj2[key] ){
      console.log("True");
   } else {
      console.log("False");
   }

}