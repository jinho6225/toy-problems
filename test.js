// 1. Edit anywhere in the first 23 lines of the code snippet below to output this result, in order:

//Code snippet (This code currently throws an error):

// line 1

const robot = (function () {
    const _internal = {
        messagesSaid: {},
    }
    const _broadcast = function (message) {
        console.log(`%c${message}`, 'color:red;font-weight:bold;')
    }
    return {
        say(message) {
            _broadcast(message)
        },
        sayMultiple: (messages) => {
            if (Array.isArray(messages)) {
                messages.forEach(this.sayMultiple)
            } else if (typeof messages === 'string') {
                this.say(messages)
            }
        }
    }
})()

// line 23

robot.say(`Today's date is ${new Date().toLocaleDateString()}`)
const dailyGreeting = [
    'Good morning',
    'What did you do yesterday?', 'What will you do today?'
]
robot.sayMultiple(dailyGreeting)



//answer

const robot = (function () {
    const _internal = {
        messagesSaid: {},
    }
    const _broadcast = function (message) {
        console.log(`%c${message}`, 'color:red;font-weight:bold;')
    }
    return {
        say(message) {
            _broadcast(message)
        },
        sayMultiple: (messages) => {
            if (Array.isArray(messages)) {
                messages.forEach(_broadcast) // change here
            } else if (typeof messages === 'string') {
                this.say(messages)
            }
        }
    }
})()

// line 23

robot.say(`Today's date is ${new Date().toLocaleDateString()}`)
const dailyGreeting = [
    'Good morning',
    'What did you do yesterday?', 'What will you do today?'
]
robot.sayMultiple(dailyGreeting)

// 2. What is the === operator?
/*
The strict equality operator (===) checks whether its two operands are equal, 
returning a Boolean result. 
Unlike the equality operator, 
the strict equality operator always considers operands of different types to be different.                    	
                	
‘7’ == 7 // true          	
‘7’ === 7 //false
*/

//  3. Why does 5 + 102 + '7' + 2 evaluate to “10772” ?
/*
there was type converstion
5 + 102 = 107 is addition between numbers. 
Since ‘7’ is string, the operation '+' is changed to concatenation. ‘1077’ 
‘1077’ + 2 => the operation '+' is changed to concatenation. it will also be concatenated as “10772”
*/


// 4. What is this code doing (this is a CSS property): transition: "all 2s ease-in-out"
/*                        	
CSS transitions allows you to change property values smoothly, over a given duration.
All css property transitions are 2 seconds in length.Transition timing function is “ease-in-out,”
*/     


// 5. In this code example below:
/*                       	
const x = {
name:'fred',
cart:['pencil', 'pen', 'paper']
                        
}
                        
const y = x
y.name ='jerry' y.cart.push('apple')
                        
Why does x evaluate to the object below after we changed y? :
                        
{
    cart: ["pencil", "pen", "paper", "apple"],
    name: "jerry"               	
}
                            
    object if reference type
    y is not located new memory place
    it's just referencing object x's memory place
    that's why x's value was changed
*/                    	

