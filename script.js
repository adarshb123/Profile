function toggleProfile() {
    var profileSection = document.getElementById('profile');
    if (profileSection.style.display === 'none' || profileSection.style.display === '') {
        profileSection.style.display = 'block';
        scrollToProfile(); // Optionally scroll to the profile section
    } else {
        profileSection.style.display = 'none';
    }
}

function scrollToProfile() {
    var profileSection = document.getElementById('profile');
    profileSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
