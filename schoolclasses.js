class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newPopulation) {
    (typeof newPopulation) === 'number' ? this._numberOfStudents = newPopulation : console.log('no tyvm')  
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} level.`)
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let randomIndex = Math.floor(Math.random()*(substituteTeachers.length));
    console.log(randomIndex);
    console.log(substituteTeachers[randomIndex]); 
  }
};

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, numberOfStudents);
    this._level = 'primary';
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
};

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, numberOfStudents);
    this._level = 'middle';
  }
};

class HighSchool extends School {
  constructor (name, numberOfStudents, sportsTeams) {
    super(name, numberOfStudents);
    this._sportsTeams = sportsTeams;
    this._level = 'high'
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = School('Lorraine Hansbury', 'middle', 54)
console.log(lorraineHansbury.numberOfStudents) 
//Works fine using School class

const MPPS = HighSchool('MPPS', 510)
console.log(MPPS.numberOfStudents)  
//Undefined. The .quickFacts() method from School class works fine *except* on the numberOfStudents variable. tf.