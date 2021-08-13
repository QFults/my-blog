let posts = [
  {
    title: 'Example Post',
    body: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague.'
  }
]

const renderPosts = () => {
  document.getElementById('posts').innerHTML = ''

  for (let i = 0; i < posts.length; i++) {
    const postElem = document.createElement('div')
    postElem.className = 'card mb-2'
    postElem.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${posts[i].title}</h5>
      <p class="card-text">${posts[i].body}</p>
    </div>
  `
    document.getElementById('posts').prepend(postElem)
  }
}

document.getElementById('createPost').addEventListener('click', event => {
  event.preventDefault()

  const title = document.getElementById('title').value
  const body = document.getElementById('body').value

  posts.push({ title, body })

  renderPosts()

  document.getElementById('title').value = ''
  document.getElementById('body').value = ''
})

renderPosts()
