//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let url = new URL(location.href);
console.log(location.href)
let id = url.searchParams.get('id');
console.log(id);


        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(comments => {
            let div = document.createElement('div');
            div.classList.add('comment');

                for (const comment of comments) {

            let commentPostId = document.createElement('p');
            commentPostId.innerText = `postId: ${comment.postId}`;
            div.appendChild(commentPostId);

            let commentId = document.createElement('p');
            commentId.innerText = `id: ${comment.id}`;
            div.appendChild(commentId);

            let commentName = document.createElement('p');
            commentName.innerText = `name: ${comment.name}`;
            div.appendChild(commentName);

            let commentEmail = document.createElement('p');
            commentEmail.innerText = `email: ${comment.email}`;
            div.appendChild(commentEmail);

            let commentBody = document.createElement('p');
            commentBody.innerText = `comment: ${comment.body}`;
            div.appendChild(commentBody);

            document.body.appendChild(div);


        }
    });