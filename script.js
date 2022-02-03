let brands = [];

$(".add").click(function() {
    $(".add").val();
    let imgAdd = $(".picture-url").val();
    brands.push(imgAdd);
    for (let brandAdd of brands) {
        $(".gallery").append("<img src=" + brandAdd + ">");
    }
});







