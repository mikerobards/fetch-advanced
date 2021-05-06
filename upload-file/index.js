/* 
Create a variable for the form element. 
Then create an event listener for submit. 
Prevent the default behavior. 
Post a FormData object to https://httpbin.org/post, then console log the JSON response.
*/

const uploadForm = document.getElementById('uploadForm')

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // my answer chaining

    // const formData = new FormData(this)
    // const options = {
    //     method: 'POST',
    //     body: formData
    // }

    // fetch('https://httpbin.org/post',options)
    // .then(res => res.json())
    // .then(json => console.log(json))
    // .catch(err => console.error(err))

    uploadFile(this)

})

async function uploadFile(data) {
    const formData = new FormData(data)
    const options = {
        method: 'POST',
        body: formData
    }

    const uploadPromise = await fetch('https://httpbin.org/post', options)

    if(uploadPromise.ok) {
        const uploadResponse = await uploadPromise.json()
        console.log(uploadResponse.files)
    } else {
        console.error(uploadPromise.status)
    }

}

