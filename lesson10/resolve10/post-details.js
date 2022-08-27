let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(posts => {
        let ul = document.createElement('ul');
        for (const post of posts) {
            let li = document.createElement('li');
            li.innerText = `${post.title}`;

            ul.appendChild(li);

        }
    });
