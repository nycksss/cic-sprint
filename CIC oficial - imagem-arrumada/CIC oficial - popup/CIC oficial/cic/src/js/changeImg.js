// function loadAvatarFromLocalStorage() {
//     const storedImage = localStorage.getItem('avatarImage');
//     if (storedImage) {
//         const avatar = document.getElementById('avatar');
//         avatar.innerHTML = '';
//         const img = document.createElement('img');
//         img.src = storedImage;
//         img.style.width = '100%'; 
//         img.style.height = '100%';
//         avatar.appendChild(img);
//     }
// }


// window.onload = function() {
//     loadAvatarFromLocalStorage();
// };


// document.querySelector('#user_avatar').addEventListener('click', () => {
//     const input = document.createElement('input');
//     input.type = 'file';
//     input.accept = 'image/*';

//     input.onchange = function(event) {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const img = document.createElement('img');
//                 img.src = e.target.result;

//                 const avatar = document.querySelector('#user_avatar');
//                 avatar.innerHTML = '';
//                 img.style.width = '100%'; 
//                 img.style.height = '100%';
//                 avatar.appendChild(img);

                
//                 localStorage.setItem('avatarImage', e.target.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     input.click();
// });

function loadAvatarFromLocalStorage() {
    const storedImage = localStorage.getItem('avatarImage');
    if (storedImage) {
        const avatar = document.getElementById('avatar');
        avatar.innerHTML = '';
        const img = document.createElement('img');
        img.src = storedImage;
        img.style.width = '100%'; 
        img.style.height = '100%';
        avatar.appendChild(img);
    }
}


window.onload = function() {
    loadAvatarFromLocalStorage();
};


document.getElementById('avatar').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;

                const avatar = document.getElementById('avatar');
                avatar.innerHTML = '';
                img.style.width = '100%'; 
                img.style.height = '100%';
                avatar.appendChild(img);

                
                localStorage.setItem('avatarImage', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    input.click();
});