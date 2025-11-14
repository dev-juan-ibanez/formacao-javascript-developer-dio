
async function fetchProfileData() {
    const url = 'https://github.com/dev-juan-ibanez/formacao-javascript-developer-dio/blob/main/desafio-portfolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
