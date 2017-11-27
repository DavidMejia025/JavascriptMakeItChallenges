function Controller(view,model1, model2){
	this.view =view
	this.tree = model1
	this.orange = model2
}


Controller.prototype = {
	run: function(){
		this.bindEvents()
	},

	bindEvents: function(){
		$('.plant').on('click', this.view.paintTree)
		$(".grow").on("click", this.growTree.bind(this))
		$(".pick").on("click", this.pickOrange.bind(this))
	},

	growTree: function(){	
		this.tree.grow()
		this.view.paintOranges(this.tree.oranges)
		this.view.setAtributes(this.tree)
	},

	pickOrange: function(){
		this.tree.dropOrange()
		this.view.eraseOrange(this.tree)
	}
}

function View(){

}

View.prototype = {
	paintTree: function(){
		$("#orange-tree-template").css('display','block')
		$(this).css( 'display', 'none')
	},

	setAtributes: function(tree) {
		$('.age').text("edad: "+ tree.age)
		$(".fruit-count").text("Frutas "+ tree.orangesCount)
	},

	paintOranges: function(oranges){
		oranges.forEach(function(orange){
		$(".display-tree-big").append("<div style='position:absolute;top: `${orange.left}`;right:`${orange.left}`'><img src='./app/images/orange.gif' alt='Orange'></div>")	
	// console.log("Hola")
	// console.log(orange.left)
	// console.log(orange.top)
	// console.log("Chao")
		})
	},

	eraseOrange: function(tree){
		
		$(".fruit-count").text("Frutas "+ tree.orangesCount)
		$(".display-tree-big").children().last().remove()
	}
}

function Tree(){
	this.age = 0
	this.height = 0
	this.oranges = []
	this.orangesCount = 0;
	this.isAlive = true
}

Tree.prototype = {
	die: function(){
		if (this.age > MAX_AGE){
			return this.isAlive = false
		}

	},

	math: function(){
		return 2+2
	},

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
		this.orangesCount = this.oranges.length

	},

	dropOrange: function(){
		 this.oranges.pop()
		 this.orangesCount = this.oranges.length
		 return this.oranges

	},
}

function Orange(){
	this.diameter = Math.floor(Math.random()*10+1)
	this.positionTop = Math.floor(Math.random()*400+100)
	this.positionRigth = Math.floor(Math.random()*400+100)

}

var FRUIT_BEARING_AGE = 3
var MAX_AGE = 10

view = new View
tree = new Tree
orange = new Orange
controller = new Controller(view, tree, orange)
controller.run()

/////////////////////////////////////7
// var pickOrange = function(){
// 	return new Orange
// 	}
/////////////////////////////////////7
