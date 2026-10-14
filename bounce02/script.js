
// Translation dictionary
const translations = {
    en: {
        title: "My Profile",
        name: "Bashar Alzaq",
        professional: "Professional Photo",
        casual: "Casual Photo",
        switchPhoto: "Switch Photo",
        showProfessional: "Show Professional Photo",
        showCasual: "Show Casual Photo",
        languageButton: "العربية",
        professionalAlt: "Bashar Alzaq's professional profile photo",
        casualAlt: "Bashar Alzaq's casual profile photo"
    },

    ar: {
        title: "ملفي الشخصي",
        name: "بشار الزق",
        professional: "الصورة الرسمية",
        casual: "الصورة الشخصية غير الرسمية",
        switchPhoto: "تغيير الصورة",
        showProfessional: "عرض الصورة الرسمية",
        showCasual: "عرض الصورة غير الرسمية",
        languageButton: "English",
        professionalAlt: "الصورة الرسمية لبشار الزق",
        casualAlt: "الصورة الشخصية غير الرسمية لبشار الزق"
    }
};

// Get HTML elements
const languageButton = document.getElementById("language-button");
const switchButton = document.getElementById("switch-photo");
const profilePhoto = document.getElementById("profile-photo");
const photoDescription = document.getElementById("photo-description");

// Track the current language and photo
let currentLanguage = "en";
let isProfessional = true;

// Update all translated text
function updateLanguage() {
    const text = translations[currentLanguage];

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const key = element.getAttribute("data-i18n");
        element.textContent = text[key];
    });

    languageButton.textContent = text.languageButton;

    updatePhotoText();
}

// Update the photo description, button, and alt text
function updatePhotoText() {
    const text = translations[currentLanguage];

    if (isProfessional) {
        photoDescription.textContent = text.professional;
        profilePhoto.alt = text.professionalAlt;
        switchButton.textContent = text.switchPhoto;
    } else {
        photoDescription.textContent = text.casual;
        profilePhoto.alt = text.casualAlt;
        switchButton.textContent = text.showProfessional;
    }
}

// Switch between English and Arabic
languageButton.addEventListener("click", function () {
    currentLanguage = currentLanguage === "en" ? "ar" : "en";
    updateLanguage();
});

// Switch between professional and casual photos
switchButton.addEventListener("click", function () {
    profilePhoto.classList.add("changing");

    setTimeout(function () {
        if (isProfessional) {
            profilePhoto.src = "assets/profile-casual.jpg";
            isProfessional = false;
        } else {
            profilePhoto.src = "assets/profile-professional.jpg";
            isProfessional = true;
        }

        updatePhotoText();
        profilePhoto.classList.remove("changing");
    }, 300);
});

// Set the initial language and text
updateLanguage();
