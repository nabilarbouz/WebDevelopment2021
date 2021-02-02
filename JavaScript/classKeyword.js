class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log("hello my name is " + this.name);
  }
}

class BaseballPlayer extends Person{
  constructor(name, age, team, salary) {
    super(name, age)
     this.team = team;
     this.salary = salary;
  }

  hitBall() {
      console.log(this.name + " just hit the ball 42 yards!");
  }
}

var baseballPlayer = new BaseballPlayer("Joe", 25, "Red Socks", 235231);

baseballPlayer.talk();
baseballPlayer.hitBall();
