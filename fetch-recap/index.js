
async function getPost() {
    const [postPromise, userPromise] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/users')
    ]) 
    
    

    if (postPromise.ok) {
        const posts = await postPromise.json()
        const users = await userPromise.json()

        console.log(users[0])

        let html = ''
        const title = posts[0].title
        const user = users.filter(user => user.id === posts[0].userId)[0].name
        const company = users.filter(user => user.id === posts[0].userId)[0].company.name
        const body = posts[0].body

        html += `
        <div>
            <h3>${title}</h3>
            <h5>${user}</h5>
            <p>${company}</p>
            <p>${body}</p>
        </div>
        `
        document.body.innerHTML = html
    } else {
        console.error(`Error: ${postPromise.status}`)
    }
}

getPost()