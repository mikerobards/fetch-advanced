const userForm = document.getElementById('userForm')

userForm.addEventListener('submit', async function (e) {
    e.preventDefault()

    const formData = new FormData(this)
    const options = {
        method: 'POST',
        body: formData
    }
    // chaining
    fetch(
        'https://httpbin.org/post',
        options
    )
    .then(res => res.json())
    .then(json => console.log(json.form))
    .catch(err => console.error(err))

    // async await
    // const postPromise = await fetch(
    //     'https://httpbin.org/post',
    //     options
    // )

    // if (postPromise.ok) {
    //     const post = await postPromise.json()
    //     console.log(post.form)

    // } else {
    //     console.error(`Error: ${postPromise.status}`)

    // }

})