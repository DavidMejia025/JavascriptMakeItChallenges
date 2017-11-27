// Tu codigo va aca
function createTree() {
	return new Tree()
}

function Tree(){
	this.age = 0
	this.height = 0
	this.orangeCount = 0
	this.isAlive = true 
	this.oranges = []
	this.roundOranges = []
}
	
Tree.prototype = {
    grow: function(){
    	this.die()
    	if (this.isAlive){ 
			this.age++
			this.height+=10 
			if(this.age >= FRUIT_BEARING_AGE){
			this.createOranges()	
			}
		}
	},

	createOranges: function(){
		var orangesIn = Math.floor(Math.random()*4+1)
		for (var i =1; i<=orangesIn; i++){
			this.oranges.push(new Orange)
		}
		var x0 = this.orangeCount
		var xf = this.orangeCount+orangesIn
		this.roundOranges = this.oranges.slice(x0, xf)
		this.orangeCount += orangesIn

	},
	

	die: function(){
		if (this.age <= MAX_AGE){
			this.isAlive = true
		}else{
			this.isAlive = false
		}
	},

	dropOrange: function(){
		this.orangeCount += -1
		return this.oranges.pop()

	},
}	


var pickOrange = function(){
	return new Orange
	}
var Orange = function(){
	this.top = `${Math.floor(Math.random()*700+1)}px`
	this.left = `${Math.floor(Math.random()*100+1)}px`
	this.diameter = Math.floor(Math.random()*10+1)
}

orange = new Orange()

var FRUIT_BEARING_AGE = 3
var MAX_AGE = 10