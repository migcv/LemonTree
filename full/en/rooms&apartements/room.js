var close_stay = true;
var close_group = true;
var stay_collapse = document.getElementById("stay-collapse-link");
if(stay_collapse) {
    stay_collapse.addEventListener('click', function() {
        var arrow = document.getElementById("arrow-stay");
        if (close_stay) {
            $('.collapse-group').collapse("hide");
            document.getElementById("arrow-group").className = "fa fa-angle-down fa-fw";
            close_group = true;
            arrow.className = "fa fa-angle-up fa-fw";
            close_stay = false;
        } else {
            arrow.className = "fa fa-angle-down fa-fw";
            close_stay=true;
        }
    }, false);
}
var group_collapse = document.getElementById("group-collapse-link");
if(group_collapse) {
    group_collapse.addEventListener('click', function() {
        var arrow = document.getElementById("arrow-group");
        if (close_group) {
            $('.collapse-stay').collapse("hide");
            document.getElementById("arrow-stay").className = "fa fa-angle-down fa-fw";
            close_stay=true;
            arrow.className = "fa fa-angle-up fa-fw";
            close_group = false;
        } else {
            arrow.className = "fa fa-angle-down fa-fw";
            close_group = true;
        }
    }, false);
}