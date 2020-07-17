class Pokemon {
  coolness = 'on water'

  constructor(name) {
    this.name = name; 
  }

  greeting() {
    console.log(`Hi, ${this.name}!`) 
  }

  superGreeting() {
    this.greeting()
    console.log('You are the best!')
  }
}

const squirtle = new Pokemon('Squirtle')

debugger 