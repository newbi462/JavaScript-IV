// CODE here for your Lambda Classes

class Person {
  constructor(name,age,location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}


class Instructor extends Person {
  constructor(name,age,location,specialty,favLanguage,catchPhrase) {
    super(name,age,location); // links to above Person class and inharits funtion actiong as proto
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }
  demo(subjectString) {
    console.log(`Today we are learning about ${subjectString}`);
  }
  grade(studentObj,subjectString) {
    console.log(`${studentObj.name} receives a perfect score on ${subjectString}`);
  }
}


class Student extends Person {
  constructor(name,age,location,previousBackground,className,favSubjects) {
    super(name,age,location); // links to above Person class and inharits funtion actiong as proto
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
  }
  listsSubjects() {
    for (var i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }
  PRAssignment(subjectString) { // ya this should not have been CAPS, but orders are orders
    console.log(`${this.name} has submitted a PR for ${subjectString}`);
  }
  sprintChallenge(subjectString) {
    console.log(`${this.name} has begun sprint challenge on ${subjectString}`);
  }
}


class ProjectManager extends Instructor {
  constructor(name,age,location,specialty,favLanguage,catchPhrase,gradClassName,favInstructor) {
    super(name,age,location,specialty,favLanguage,catchPhrase); // links to above Instructor class and inharits funtion actiong as proto
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }
  standUp(slackchannelStrng) {
    console.log(`${this.name} announces to ${slackchannelStrng}, @channel standy times!​​​​​`);
  }
  debugsCode(studentObj,subjectString) {
    console.log(`${this.name} debugs ${studentObj.name}'s code on ${subjectString}`);
  }
}



/*TEST PERSON*/
console.log("TEST Person");
let sam = new Person("Sam",30,"Hometown,USA");
console.log(sam);
sam.speak();

/*TEST Instructor*/
console.log("\nTEST Instructor");
let brit = new Instructor("Brit",25,"Blame Canada","HTML","JavaScript","That is not part of today's lesson");
console.log(brit);
brit.demo("stuff");
brit.grade(sam,"CSS");
brit.speak()

/*TEST Student*/
console.log("\nTEST Student");
let chance = new Student("Chance",30,"Nowhere,USA","sales","CS132",['Html', 'CSS', 'JavaScript']);
console.log(chance);
chance.speak();
chance.listsSubjects();
chance.PRAssignment("Web Stuff");
chance.sprintChallenge("Supper Great Web Stuff");

/*TEST ProjectManager*/
console.log("\nTEST ProjectManager");
let dan = new ProjectManager("Dan",38,"Top of the World,USA","redux","Python","Don't forget the homies","CS1","Brit");
console.log(dan);
dan.speak();
dan.standUp("web99");
dan.debugsCode(chance,"HTML")
