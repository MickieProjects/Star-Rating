// All Star
let stars = document.querySelectorAll(".stars i")

// Thank you message
let mgs = document.querySelector("#msg")

// Loop star
stars.forEach((star, index1) => {

    // // Function when click events triggers
    star.addEventListener("click", () => {

        // Loop star again
        stars.forEach((star, index2) => {

            // Adding color stars
            if (index1 >= index2) {
                star.classList.add("color-star")
                mgs.innerHTML = "Thank You"
            } else {
                star.classList.remove("color-star")
            }
        })
    })
})
