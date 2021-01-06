
function toggleMetaItems(linkNode) {
	console.log("toggled")
	var itemsNode = $(linkNode).closest(".meta-head").siblings(".meta-items").first()
	itemsNode.slideToggle({duration: 400});
	var span = $(linkNode).children().first(".twiddle")
	$(span).toggleClass("down");
//	span.toggleClass("icofont-caret-down").toggleClass("icofont-caret-right")
	return false
}
