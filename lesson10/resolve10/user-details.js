// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

let url = new URL(location.href);
console.log(location.href);
let id = url.searchParams.get('id');
console.log(id);


fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => users.forEach(user => {

        let div = document.createElement('div');
        div.classList.add('user_info')

        let userId = document.createElement('p');
        userId.innerText = `id: ${user.id}`;
        div.appendChild(userId);

        let userName = document.createElement('p');
        userName.innerText = `name: ${user.name}`;
        div.appendChild(userName);

        let userUsername = document.createElement('p');
        userUsername.innerText = `username: ${user.username}`;
        div.appendChild(userUsername);

        let userEmail = document.createElement('p');
        userEmail.innerText = `email: ${user.email}`;
        div.appendChild(userEmail);

        let userAddress = document.createElement('divAddress');
        userAddress.innerText = `address:`
            div.appendChild(userAddress);

                let addressStreet = document.createElement('p');
                addressStreet.innerText = `street: ${user.address.street}`;
                div.appendChild(addressStreet);

                let addressSuite = document.createElement('p');
                addressSuite.innerText = `suite: ${user.address.suite}`;
                div.appendChild(addressSuite);

                let addressCity = document.createElement('p');
                addressCity.innerText = `city: ${user.address.city}`;
                div.appendChild(addressCity);

                let addressZipcode = document.createElement('p');
                addressZipcode.innerText = `zipcode: ${user.address.zipcode}`;
                div.appendChild(addressZipcode);

                let addressGeo = document.createElement('divGeo');
                addressGeo.innerText = `geo:`;
                div.appendChild(addressGeo)

                        let geoLat = document.createElement('p');
                        geoLat.innerText = `lat: ${user.address.geo.lat}`;
                        div.appendChild(geoLat);

                        let geoLng = document.createElement('p');
                        geoLng.innerText = `lng: ${user.address.geo.lng}`;
                        div.appendChild(geoLng);

        let userPhone = document.createElement('p');
        userPhone.innerText = `phone: ${user.phone}`;
        div.appendChild(userPhone);

        let userWebsite = document.createElement('p');
        userWebsite.innerText = `website: ${user.website}`;
        div.appendChild(userWebsite);

        let company = document.createElement('divCompany');
        company.innerText = `company:`;
        div.appendChild(company)

                let companyName = document.createElement('p');
                companyName.innerText = `name: ${user.company.name}`;
                div.appendChild(companyName);

                let companyCatchPhrase = document.createElement('p');
                companyCatchPhrase.innerText = `catchPhrase: ${user.company.catchPhrase}`;
                div.appendChild(companyCatchPhrase);

                let companyBs = document.createElement('p');
                companyBs.innerText = `bs: ${user.company.bs}`;
                div.appendChild(companyBs);

        document.body.appendChild(div);


                    let userPostsBtn = document.createElement('button');
                    div.appendChild(userPostsBtn);
                    userPostsBtn.classList.add('post_btn');
                    let a = document.createElement('a');
                    a.href = `./post.html?id=${user.id}`
                    a.innerText = ' Post of current user';
                    userPostsBtn.appendChild(a);

    }
     ));

