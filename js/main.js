AOS.init();

/*Side bar management for languages*/
function openNav(id, width) { //TO OPEN 
    document.getElementById(id).style.width = width;
    document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
}
function closeNav(id) { //TO CLAUSE
    document.getElementById(id).style.width = "0px";
    document.body.style.backgroundColor = "white";

}
function close_side_bar_on_body_click($id_jquery, id_js, e, width) {
    //FUNCTION TO CLOSE A SIDE BAR ON A BODY CLICK
    var container = $($id_jquery);
    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0 &&
        document.getElementById(id_js).style.width == width) {
        closeNav(id_js);
    }
}
$(document).mouseup(function (e) {
    close_side_bar_on_body_click("#mySidebar_mobile_menu", "mySidebar_mobile_menu", e, "90%");
});
$('.link_close_side_my').click(function (e) {
    closeNav('mySidebar_mobile_menu')
})
