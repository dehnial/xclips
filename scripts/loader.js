window.loader = {
    load: function (pageName) {
        $.get(`./content/${pageName}.html`, function (data) {
            $("#content").html(data);
        });
    }
}; 
