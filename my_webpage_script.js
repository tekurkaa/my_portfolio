document.addEventListener("DOMContentLoaded", function () {
    const photos = document.querySelectorAll(".photos div");

    photos.forEach(photo => {
        const image = photo.querySelector(".images");
        const description = photo.querySelector(".description");

        image.addEventListener("mouseover", () => {
            description.style.opacity = "1";
        })

        image.addEventListener("mouseout", () => {
            description.style.opacity = "0";
        })
    })
})

document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("connect-form").addEventListener("submit", function (event) {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            if (name == "" || email == "") {
                alert("Either name or email is empty");
                event.preventDefault();
            } else {
                alert("Message sent!");
            }
        })
})

document.addEventListener("DOMContentLoaded", function() {
    VANTA.NET({
        el: "#vanta-background",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.00,
        maxDistance: 20,
        spacing: 15.00
    })
});