// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let url = new URL(location.href);
console.log(location.href)
let id = url.searchParams.get('id');
console.log(id);

let usersPost = document.getElementsByClassName('posts')[0];

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response => response.json())
    .then(posts => {
        let ul = document.createElement('ul');
        ul.classList.add('userPost');

        for (const post of posts) {

            let liUserId = document.createElement('li');
            liUserId.innerText = `userId: ${post.userId}`;
            liUserId.classList.add('userPost', 'posts');
            ul.appendChild(liUserId);

            let liId = document.createElement('li');
            liId.innerText = `id: ${post.id}`;
            liId.classList.add('userPost', 'posts');
            ul.appendChild(liId);

            let liTitle = document.createElement('li');
            liTitle.innerText = `title: ${post.title}`;
            liTitle.classList.add('userPost', 'posts');
            ul.appendChild(liTitle);

            let liBody = document.createElement('li');
            liBody.innerText = `body: ${post.body}`;
            liBody.classList.add('userPost', 'posts');
            ul.appendChild(liBody);

            let postsBtn = document.createElement('button');
            ul.appendChild(postsBtn);
            postsBtn.classList.add('postsBtn')
            let a = document.createElement('a');
            a.href = `post-details.html?id=${post.id}`
            a.innerText = ' Comments';
            postsBtn.appendChild(a);

            document.body.appendChild(ul);
    }
});