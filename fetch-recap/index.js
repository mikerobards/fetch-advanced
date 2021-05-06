
async function getPost() {
    const postPromise = await fetch('https://jsonplaceholder.typicode.com/posts/1')

    if (postPromise.ok) {
        const posts = await postPromise.json()
        let html = ''
        const title = posts.title
        const body = posts.body
        html += `
        <div>
            <h3>${title}</h3>
            <p>${body}</p>
        </div>
        `
        document.body.innerHTML = html
    } else {
        console.error(`Error: ${postPromise.status}`)
    }
}

getPost()