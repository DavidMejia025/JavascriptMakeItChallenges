// Tu codigo va aca
var tree={}
$('.plant').on('click', function(){
	$("#orange-tree-template").css('display','block')
	$(this).css( 'display', 'none')
	tree = new Tree
	tree.grow()
})

$(".grow").on("click",function(){
	tree.grow()
	$('.age').text("edad: "+ tree.age)
	$(".fruit-count").text("Frutas "+ tree.orangeCount)
	tree.roundOranges.forEach(function(orange){
		$(".display-tree-big").append("<div style='position:absolute;top: `${orange.left}`;right:`${orange.left}`'><img src='./app/images/orange.gif' alt='Orange'></div>")	
	// console.log("Hola")
	// console.log(orange.left)
	// console.log(orange.top)
	// console.log("Chao")
	})
})
$(".pick").on("click", function(){
	tree.dropOrange()
	console.log(tree.orangeCount)
	$(".fruit-count").text("Frutas "+ tree.orangeCount)
	$(".display-tree-big").children().last().remove()
})


//<img src="./app/images/orange.gif" alt="Orange">
// .css({'position':'absolute','top':'200px','right':'200px'})
		