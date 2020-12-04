$(document).ready(function () {
    console.log("ready!");

    $.ajax({
        type: "POST",
        url: "WebForm1.aspx/GetName",
        data: '{ name0 : "' + $('#name0').val() + '" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            console.log(response.d)
        },
        failure: function (response) {
            alert(response.d);
        }
    });

    $.ajax({
        type: "POST",
        url: "WebForm1.aspx/GetName1",
        data: '{ name1 : "' + $('#name1').val() + '" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            console.log(response.d)
        },
        failure: function (response) {
            alert(response.d);
        }
    });

    $.ajax({
        type: "POST",
        url: "WebForm1.aspx/GetName2",
        data: '{ name2 : "' + $('#name2').val() + '" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            console.log(response.d)
        },
        failure: function (response) {
            alert(response.d);
        }
    });

    $.ajax({
        type: "POST",
        url: "WebForm1.aspx/GetName3",
        data: '{ name3 : "' + $('#name3').val() + '" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            console.log(response.d)
        },
        failure: function (response) {
            alert(response.d);
        }
    });


})