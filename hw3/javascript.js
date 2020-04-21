
var LIST = $('.left-block');
var ITEM_TEMPLATE = $('.one-item').html();

var RIGHT_LIST = $('.list-bought');
var ADD_PRODS = $('.bought_prods').html()



$(".search-button").click(function addItem(title) {
    title = $(".input").val()

    //   title = $("<span>" +titl+ "</span>").css("margin-top","50px")
    var node = $(ITEM_TEMPLATE); //Create new HTML node
    //  node.find(".item-name").val($(".input").val());

    var HEIGHT = $(".left-block").height()
    var name = $('.item-name').val()
    name = title
    var NEW_HEIGHT = HEIGHT+40;
    $(".left-block").css({position:'absolute', height:NEW_HEIGHT})

//Delete Action


    //  LIST.append(title)
    $(".left-block").append(name)
    LIST.append(node); //Add to the end of the list



    var node2 = $(RIGHT_LIST);
    $(".list-bought").append(name)
    RIGHT_LIST.append(node2)

})




//Delete Action

//  LIST.append(title)
//Add to the end of the list


