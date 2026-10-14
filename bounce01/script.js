
const profilePhoto = document.getElementById("profile-photo");
const switchButton = document.getElementById("switch-photo");
const photoDescription = document.getElementById("photo-description");

let isProfessional = true;

switchButton.addEventListener("click", function () {

    profilePhoto.classList.add("changing");

    setTimeout(function () {

        if (isProfessional) {
            profilePhoto.src = "assets/profile-casual.jpg";
            profilePhoto.alt = "My casual profile photo";
            photoDescription.textContent = "Casual Photo";
            switchButton.textContent = "Show Professional Photo";
        } else {
            profilePhoto.src = "assets/profile-professional.jpg";
            profilePhoto.alt = "My professional profile photo";
            photoDescription.textContent = "Professional Photo";
            switchButton.textContent = "Show Casual Photo";
        }

        isProfessional = !isProfessional;

        profilePhoto.classList.remove("changing");

    }, 300);

});
