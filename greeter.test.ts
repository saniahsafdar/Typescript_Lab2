import { greeter } from "Greeter";
import { JavaScriptGreeter} from "JavaScriptGreeter"

describe("Greeter" , function() {
    test("class defined", () => {
        let greeting: Greeting = new Greeter();
        expect(greeting.greet("")).toBeDefined("Hi, !");
    });
    test("greets with a name", () => {
        let greeting: Greeting = new Greeter();
        expect(greeting.greet("Mary")).toBeDefined("Hi, Mary!");
    });

});

describe("JavaScript Greeter", function(){
    test("adds Javascript to console", ()=>{
        let jsGreeter: JavaScriptGreeter = new JavaScriptGreeter;
        expect(jsGreeter.greet("Mary")).toBe("console.log('Hi, Mary!'");
    })
});