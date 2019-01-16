var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

$(function () {
    $("#slider-range").slider({
        range: true,
        min: 10000,
        max: 100000000,
        values: [10000000, 50000000],
        slide: function (event, ui) {
            $("#amount").val("Rp." + ui.values[0] + " - Rp." + ui.values[1]);
        }
    });
    $("#amount").val("Rp." + $("#slider-range").slider("values", 0) +
        " - Rp." + $("#slider-range").slider("values", 1));
});

// cm slider
$(function () {
    $("#slider-cm").slider({
        range: true,
        min: 0,
        max: 50,
        values: [10, 20],
        slide: function (event, ui) {
            $("#diameter").val(ui.values[0] + " Cm" + " - " + ui.values[1] + " Cm");
        }
    });
    $("#diameter").val($("#slider-cm").slider("values", 0) + " Cm" + " - " +
         $("#slider-cm").slider("values", 1) + " Cm");
});
// end cm slider

$(document).foundation();
Foundation.Abide.defaults.validators['checkbox_limit'] =
    function ($el, required, parent) {
        // parameter 1 is jQuery selector
        var group = parent.closest('.checkbox-group');
        var min = group.attr('data-abide-validator-min');
        var checked = group.find(':checked').length;
        if (checked >= min) {
            group.find('label').removeClass('is-invalid-label');
            return true;
        } else {
            return false;
        }
    };

$(document).ready(function () {

    $("#frm-test")
        // to prevent form from submitting upon successful validation
        // form validation failed
        .on("forminvalid.zf.abide", function (ev, frm) {
            console.log("Form id " + ev.target.id + " is invalid");
        })
        // form validation passed, form will submit if submit event not returned false
        .on("formvalid.zf.abide", function (ev, frm) {
            console.log(frm);
            var checkedValue = $('.x:checked').val();

            console.log(checkedValue)
            var checkedValue = null;
            //var inputElements = document.getElementsByClassName('x');
            var inputElements = document.getElementsByName('name[]');
            for (var i = 0; inputElements[i]; ++i) {
                if (inputElements[i].checked) {
                    checkedValue = inputElements[i].value;
                    console.log(checkedValue);
                    /*break;*/
                }
            }
        })
        .on("submit", function (ev) {
            ev.preventDefault();
        });
    console.log("ready!");
});

$(function () {
    $('#dp2').fdatepicker();
});

