
function Controller(view, model){
	this.view = view
	this.model = model
}

Controller.prototype.eventListener= function(){
	$('#roller button.add').on('click', this.view.paint)
	$('#roller button.roll').on('click', this.roll_dice.bind(this))
	
	function callback(){
		console.log('Click test')
	}
}

Controller.prototype.run = function(){
	this.eventListener()
	this.view.paint()

}

Controller.prototype.roll_dice = function(){
	controller = this
	$('.die').each(function(index, dieHtml) {
		value = controller.model.roll()
		controller.view.paint_number(dieHtml,value)
		
	})
}

function View(){

}

View.prototype.paint = function(){
	$('.dice').append('<div class="die">0</div>')
	// $('.die').removeClass()
	$('.die').addClass('one')	
}

View.prototype.paint_number = function(dieHtml, value){
	$(dieHtml).text(value) 
	var lastClass = $(dieHtml).attr('class').split(' ').pop();
	$(dieHtml).removeClass(lastClass);
	console.log(dieHtml)
	switch(value) {
    case 1:
        $(dieHtml).addClass('one')
        break;
    case 2:
        $(dieHtml).addClass('two')
        break;
    case 3:
        $(dieHtml).addClass('three')
        break;
    case 4:
        $(dieHtml).addClass('four')
        break;
    case 5:
        $(dieHtml).addClass('five')
        break;
    default:
        $(dieHtml).addClass('six')
}
}

function Model(){
	this.value = 0;
}

Model.prototype.roll = function(){
	return this.value = Math.floor((Math.random()*6)+1)
}
view = new View()
model = new Model()
controller = new Controller(view,model)
controller.run()


 // Controlador
 //      var value = Math.floor((Math.random()*6)+1) // Model
 //      $(dieHtml).text(value) // Vista
