// variavéis: let ou Const

const linksRedeSociais = {
  github: 'marcoantoniorochadutra',
  youtube: 'channel/UCiTQBnvTn5f8lefpDjvedfw',
  instagram: 'marcoantoniodrd',
  facebook: 'marcoantoniodrd',
  twitter: 'marcoantoniodrd'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksRedeSociais[social]}`
  }
}
//ser humano lê: 123456789
//maquina: 0123456789

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksRedeSociais.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userId.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
