$('#contactform').on('submit', function (e) {
    e.preventDefault();
    var data = $('#contactform')
        .serializeArray()
        .reduce(function (json, { name, value }) {
            json[name] = value;
            return json;
        }, {});

    $.ajax({
        url: 'https://website.giftclarity.com/api/contactform?code=-SJUpZqeZzGwsFy-MjoIZyYNyFEZwAJSFdFQweL8DaGVAzFucAAhSA==',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (response) {
            $('#submitsuccess').show();
            $('#submitsuccess')[0].scrollIntoView();
        },
        error: function (err) {
        }
    })
});
