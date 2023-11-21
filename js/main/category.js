$(function () {
    // main
    getListCategory();
});

//dùng ajax de call API xuong BE de lay list category
function getListCategory() {
    //call API xuong BE
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/category",
        // data: "data",// dung cho them và update
        dataType: "JSON",
        success: function (response) {
            list = [];
            list = response;
            // console.log(list);
            showCategory();
        }
    });

}

function showCategory() {

    $("#categories").empty();
    for (let i = 0; i < list.length; i++) {
        $("#categories").append(
            `
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img src="./upload/category/${list[i].image}" width="50px" height="50px"  alt="">
            <p>${list[i].categoryName}</p>
        </div>
        `);

    }
}

// $("#add").click(function (e) {
//     // lay du lieu cua o name và o image
//     var v_name = $("#inputName").val();
//     var v_image = $("#inputImage")[0].files;//file  thành string List<Account>
//     var formData = new FormData();// Map<Integer, Account> = {[1, Account2()]}
//     formData.append("name", v_name);
//     formData.append("image", v_image[0]);



//     //call API de them moi categoryy
//     $.ajax({
//         type: "POST",
//         url: `http://localhost:8080/category`,
//         data: formData,
//         contentType: false,
//         processData: false,
//         success: function (response) {
//             alert("them thanh cong");
//             getListCategory();
//             $("#inputName").val("");
//             $("#inputImage").val("");

//         }
//     });

// });

$("#add").click(function (e) {
    // lay du lieu cua o name và o image
    var v_name = $("#inputName").val();
    var v_image = $("#inputImage")[0].files;//file  thành string List<Account> // lay dc ds cac file
    var formData = new FormData();// Map<Integer, Account> = {[1, Account2()]}
    formData.append("name", v_name);
    for (let i = 0; i < v_image.length; i++) {
        formData.append("image", v_image[[i]]);
    }



    //call API de them moi categoryy
    $.ajax({
        type: "POST",
        url: `http://localhost:8080/category`,
        data: formData,
        contentType: false,
        processData: false,
        success: function (response) {
            alert("Thêm thành công");
            getListCategory();
            $("#inputName").val("");
            $("#inputImage").val("");

        }
    });

});
