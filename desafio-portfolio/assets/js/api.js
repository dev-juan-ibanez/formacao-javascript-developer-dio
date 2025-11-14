
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/dev-juan-ibanez/formacao-javascript-developer-dio/main/desafio-portfolio/data/profile.json';

    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
