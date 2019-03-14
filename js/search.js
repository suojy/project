function myFunction() {
    var input, filter,ul,li,a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function click(){
    document.getElementsById("myInput").style.border = '1px solid red';
}
function cancel(){
    document.getElementsById("myInput").style.border = '2px solid #009F00';
}





