
//jQuery for Task-2 ATG internship Author : Bhupesh Prajapati
$(document).ready(function () {
    //tooltip
    $('.fa-info').tooltip({title: "This is a tooltip. Use it to show if there is any help text.", placement: "top"});
    //initial div3 selected
    $("#div3").addClass("selected-box");
    $("#nb").off("mouesehover");
    $('input[type=radio][name=choice]').on('change', function () {
        e=$(this).val();
        e2='null';
        //back button functioning
        $("#backButton").on("click", function () {
            $('#modal2').modal('hide');
        if ($(this).val() == 'paid') {
            $("#div1").addClass("selected-box");
        }
        if ($(this).val() == 'free') {
            $("#div2").addClass("selected-box");
        }
        });
        $("#backButton").on("click", function () {
            $('#payment').modal('show');
        });
        $("#nb").removeClass("disabled"); //enabling the next button
        //select box blue highlight for payment modal
        if ($(this).val() == 'paid') {
            $("#div1").addClass("selected-box");
        }
        else {
            $("#div1").removeClass("selected-box");
        }
        if ($(this).val() == 'free') {
            $("#div2").addClass("selected-box");
        }
        else {
            $("#div2").removeClass("selected-box");
        }
        //if paid is selected then next button leads to payed event modal
        $("#nb").on("click", function () {
            if (e == 'paid') {
                $('#payment').modal('hide');
                $('#modal2').modal('show');
            }
        });
    });
        //Modal 2 Seleletion logic
    $('input[type=radio][name=choice2]').on('change', function () { 
        e2=$(this).val();
        //2nd modal
        if ($(this).val() == 'scost') {
            $("#div3").addClass("selected-box");
        }
        else {
            $("#div3").removeClass("selected-box");
        }
        if ($(this).val() == 'mcost') {
            $("#div4").addClass("selected-box");
        }
        else {
            $("#div4").removeClass("selected-box");
        }
        if($(this).val()!='mcost'){
                $("#div3").addClass("selected-box");
            }
    });
});