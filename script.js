
var menu_list_array = ["Veg Margherita Pizza", "Chicken Tandoori Pizza", "Veg Supreme Pizza", "Paneer Tikka Pizza", "Deluxe Veggie Pizza", "Veg Extravaganza Pizza"];

function showmenu(){
    menu_list_array.sort();
    var final_menu = "";
    final_menu = menu_list_array.join("<br>");
    document.getElementById("display_menu").innerHTML=final_menu;
}

function add(){
    menu_list_array.push(document.getElementById("add_item").value);
    showmenu(); 
}