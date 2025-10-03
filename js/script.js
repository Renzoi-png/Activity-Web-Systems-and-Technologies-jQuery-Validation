$(document).ready(function () {
    $("#loginForm").validate({
        rules: {
            username: { required: true },
            password: { required: true }
        },
        messages: {
            username: "Enter your codename",
            password: "Enter your password"
        },
        submitHandler: function () {
            let user = $("#username").val();
            let pass = $("#password").val();
            let storedUser = localStorage.getItem("username");
            let storedPass = localStorage.getItem("password");

            if ((user === storedUser && pass === storedPass) || (user === "admin" && pass === "12345")) {
                localStorage.setItem("username", user);
                window.location.href = "landing.html";
            } else {
                $(".auth-card").addClass("shake");
                setTimeout(() => $(".auth-card").removeClass("shake"), 500);
            }
        }
    });

    $("#registerForm").validate({
        rules: {
            name: { required: true, minlength: 3 },
            username: { required: true, minlength: 3 },
            email: { required: true, email: true },
            password: { required: true, minlength: 5 },
            confirm_password: { required: true, equalTo: "#password" }
        },
        messages: {
            name: "Enter resonator name",
            username: "Enter your codename",
            email: "Enter a valid email",
            password: "At least 5 characters",
            confirm_password: "Passwords must match"
        },
        submitHandler: function () {
            localStorage.setItem("name", $("#name").val());
            localStorage.setItem("username", $("#username").val());
            localStorage.setItem("email", $("#email").val());
            localStorage.setItem("password", $("#password").val());
            alert("Registration successful! Please login.");
            window.location.href = "index.html";
        }
    });
});
