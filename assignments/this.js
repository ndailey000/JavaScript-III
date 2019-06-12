/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Allows you to select a specific "tree" in a forest. 
* 2. Reverts back to a key in the object. 
* 3. Allows resuability. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
function hello(eng) {
    console.log(this);
return `Hola is ${eng} in Texas!`;
}
console.log(hello("hello"));
//--------Not helpful obvi!------//

// code example for Window Binding

// Principle 2
const warrior = {
    name: 'Xena',
    weapon: 'Chakram', 
    action: function() {
        return `${this.name} kills with her ${this.weapon}.`;
    }
}
console.log(warrior.action());
// code example for Implicit Binding

// Principle 3
 
function Animal (food) {
    this.food = food;
    this.eat = function() {
       console.log(`This animal likes to eat ${this.food}`);
    }
}

const zebra = new Animal ("grass");
const lion = new Animal ("tofu bc hes vegan!");

zebra.eat ();

lion.eat();
// code example for New Binding

// Principle 4
const villain = {
    name: "Warren Jeffs"
    }

    const killer = {
        name: "Ted Bundy "
    }
    const skills = ["manipulation", "charisma", "combing hair" ];
      

    function baddies(param) {
        return `You dont want to be caught in an alley with ${this.name}! It wont be fun for you bc I have certain skills like ${param}`;

    }

    console.log(baddies.call(killer, skills));
// code example for Explicit Binding