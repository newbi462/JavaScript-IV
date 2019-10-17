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
