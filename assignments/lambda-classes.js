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
