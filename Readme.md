# Lindani's Technical Notes

## Workshops

* [Functions & Objects](./workshops/functions_and_objects_slides.html)
* [Useful algorithms](./workshops/useful_algorithms.md)
* Useful algoritms using functions (lodash)
* How does a web application work?
* Others?
* clearer instructions 
* Making sure the problem is understood before coding


## Keep updated

To ensure your fork have the latest changes from this repository.

[Look at these instructions](https://help.github.com/articles/configuring-a-remote-for-a-fork/)

You need to create an upstream repository for your fork.

## Notes

Notes on things I learned & snippets of code that will make my life easier

### How to print a string to the console

```python
# how do I print to the console again?
print "Hello wolrd"
```
### How to write if statement

```python
#  how do I write if statement in python?
if myNumber > 6:
  print "Hello"
else:
  print "Bye bye"
```
### How to test a project using Mocha

```javascript
In my Projects folder create a <folder-name> folder, then create test folder and run mocha inside the <folder-name> folder

Here is an example of how test code should be inside the file test.js file:

var assert = require("assert");

describe("In the ferry", function(){
	it("I should be able to create cars", function(){
		//assemble
		//act
		//assert
		assert.eqaul("car", "car"); //Passing test
	});
	
	it("I should be able to board people", function(){
        //assemble
        //act
        //assert
        assert.equal("car", "people"); //Failing test
    });
});

```

### A note about something else
add more here...

### If things get to long...

* [Todo something useful](notes/my_file.md) A short description here
* [Create a basic Express app](notes/my_file.md) How to get going with express
* [Lindani's](Lindani.md) notes to add later on 

