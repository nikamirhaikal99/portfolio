$(document).ready(function () {
    $("#auth_btn").on("click", function () {
        const username = $("#username").val()
        const password = $("#password").val()

        if (username.length != 0 && password.length != 0) {
            const url = "http://localhost/Krowko/api/Login.php"
            const data = {
                username,
                password,
            }

            $.ajax({
                type: "POST",
                url: url,
                data: { data },
                cache: false,
                success: function (response) {
                    // const data = JSON.stringify(response)
                    const { isSuccess, cookie_name, cookie_val } = response
                    if (isSuccess == true) {
                        Cookies.set(cookie_name, cookie_val)
                        const cookie = Cookies.get(cookie_name)
                        console.log(cookie)
                    }

                    // $("#list").load("http://localhost/KCHUP/Page/js/components/shop.php", { data }, function () {
                    // actions after load page (optional)
                    // })
                },
            })
        }
    })

    function auth(url, data) {
        $.ajax({
            type: "POST",
            url: url,
            data: { data },
            cache: false,
            success: function (response) {
                // const data = JSON.stringify(response)
                return response

                // $("#list").load("http://localhost/KCHUP/Page/js/components/shop.php", { data }, function () {
                // actions after load page (optional)
                // })
            },
        })
    }
})
