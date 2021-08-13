const posts = JSON.parse(localStorage.getItem('posts')) || []

const renderPosts = () => {
  document.getElementById('posts').innerHTML = ''

  for (let i = 0; i < posts.length; i++) {
    const postElem = document.createElement('div')
    postElem.className = 'card mb-2'
    postElem.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${posts[i].title}</h5>
      <p class="card-text">${posts[i].body}</p>
      <button class="btn btn-danger delete" data-index="${i}">delete</button>
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

  localStorage.setItem('posts', JSON.stringify(posts))

  renderPosts()

  document.getElementById('title').value = ''
  document.getElementById('body').value = ''
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('delete')) {
    const index = parseInt(event.target.dataset.index)
    posts.splice(index, 1)

    localStorage.setItem('posts', JSON.stringify(posts))

    renderPosts()
  }
})

renderPosts()
