$(document).ready(function () {
    $('nav a').on('click', function (e) {
        e.preventDefault();
        var url = $(this).attr('href');

        $.ajax({
            url: url,
            success: function (data) {
                var newContent = $(data).find('#content').html();
                $('#content').html(newContent);
                history.pushState(null, '', url);
            }
        });
    });

    window.onpopstate = function () {
        var url = location.pathname;

        $.ajax({
            url: url,
            success: function (data) {
                var newContent = $(data).find('#content').html();
                $('#content').html(newContent);
            }
        });
    };
});