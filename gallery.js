
const images = [
    {
preview:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2476-1-2048x1536.jpg',
original:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2476-1-scaled.jpg',
description: 'Mannheim Object 4521 image-1',
    },
    {
preview:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2474-2048x1536.jpg',
original:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2474-scaled.jpg',
description: 'Mannheim Object 4521 image-2',
    },
    {
preview:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2378-1-2048x1536.jpg',
original:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2378-1-scaled.jpg',
description: 'Mannheim Object 4520 image-1',
    },
    {
preview:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2376-1-2048x1536.jpg',
original:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2376-1-scaled.jpg',
description: 'Mannheim Object 4520 image-2',
    },
    {
preview:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2371-2048x1536.jpg',
original:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2371-scaled.jpg',
description: 'Mannheim Object 4520 image-3',
    },
    {
preview:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2383-2048x1536.jpg',
original:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2383-scaled.jpg',
description: 'Mannheim Object 7002 image-1',
    },
    {
preview:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2387-2048x1536.jpg',
original:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2387-scaled.jpg',
description: 'Mannheim Object 7002 image-2',
    },
    {
preview:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2386-2048x1536.jpg',
original:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2386-scaled.jpg',
description: 'Mannheim Object 7002 image-1',
    },
    {
preview:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2395-2048x1536.jpg',
original:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2395-scaled.jpg',
description: 'Mannheim Object 7003 image-1',
    },
    {
preview:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2392-1-2048x1536.jpg',
original:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2392-1-scaled.jpg',
description: 'Mannheim Object 7003 image-2',
    },
    {
preview:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2398-2048x1536.jpg',
original:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2398-scaled.jpg',
description: 'Mannheim Object 7003 image-3',
    },
    {
preview:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2368-2048x1536.jpg',
original:
'https://aabaugmbh.de/wp-content/uploads/2022/03/img_2368-scaled.jpg',
description: 'Mannheim Object 4519 image-1',
},
]

const list =document.querySelector("ul.gallery")
const markupGallery = images
.map((image) => `<li class="gallery-item">
<a class="gallery-link" href="${image.original}">
<img 
class="gallery-image"
src="${image.preview}"
alt="${image.description}"> 
</a>
</li>`) 
.join(""); 
list.insertAdjacentHTML("beforeend", markupGallery);

const lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
});

