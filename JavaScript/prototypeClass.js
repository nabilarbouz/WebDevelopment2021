function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function() {
  console.log("hello my name is " + this.name);
}

// The Baseball Player will inherit from Person
function BaseballPlayer(name, age, team, salary) {
  Person.call(this, name, age);
  this.team = team;
  this.salary = salary;
} 

BaseballPlayer.prototype = Object.create(Person.prototype);
BaseballPlayer.prototype.constructor = BaseballPlayer;

BaseballPlayer.prototype.hitBall = function() {
  console.log(this.name + " just hit the ball 42 yards!");
}

// we can also overide functions
BaseballPlayer.prototype.talk = function() {
  console.log("Hello my name is: " + this.name + " and I play baseball");
}

var personOne = new Person("John", 33);
personOne.talk();
console.log(personOne.age);

var baseballPlayerOne = new BaseballPlayer("Bob", 25, "Yankees", 210000);
baseballPlayerOne.talk();
console.log(baseballPlayerOne.salary + " dollars.");
console.log("team: " + baseballPlayerOne.team);
console.log(baseballPlayerOne.age);