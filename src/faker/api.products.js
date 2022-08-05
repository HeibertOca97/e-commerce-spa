import { v4 as uuidv4 } from 'uuid'

const products = [
    {
        title: "Short dress",
        description: "<p>Adipisicing hic aperiam maiores eum magni.</p><p>Quasi labore tenetur voluptatum laboriosam impedit!</p><p>Adipisicing minus ratione illum id amet Blanditiis repudiandae facilis error eos obcaecati voluptatibus molestiae sit? Expedita iste impedit?</p>",
        image: "https://i.etsystatic.com/14923684/r/il/0f140c/3837119012/il_340x270.3837119012_6d1y.jpg",
        categories: ["ladies"],
        size: ["XS - EU 34", "S - EU 36"],
        color: ["brown", "red", "black"],
        price: 25.00,
    },
    {
        title: "Polo de algodón brand",
        description: "<p>Adipisicing hic aperiam maiores eum magni.</p><p>Quasi labore tenetur voluptatum laboriosam impedit!</p><p>Adipisicing minus ratione illum id amet Blanditiis repudiandae facilis error eos obcaecati voluptatibus molestiae sit? Expedita iste impedit?</p>",
        image: "https://i.etsystatic.com/30924734/c/898/713/0/23/il/7ff53d/3200602112/il_340x270.3200602112_ta3v.jpg",
        categories: ["gentlemen"],
        size: ["S - EU 36", "M - EU 38", "XL - 42"],
        color: ["white", "red", "black"],
        price: 33.45,
    },
    {
        title: "Held Jacket Hakuna",
        description: "<p>Adipisicing hic aperiam maiores eum magni.</p><p>Quasi labore tenetur voluptatum laboriosam impedit!</p><p>Adipisicing minus ratione illum id amet Blanditiis repudiandae facilis error eos obcaecati voluptatibus molestiae sit? Expedita iste impedit?</p>",
        image: "https://th.bing.com/th/id/OIP.EsJChnN3f21BkOlBtYlXVQHaHa?pid=ImgDet&rs=1",
        categories: ["ladies", "gentlemen", "unisex"],
        size: ["S - EU 36", "M - EU 38", "XL - 42"],
        color: ["darkblue", "gray", "black"],
        price: 200.00,
    },
];


export const newProducts = products.map(product => ({id: uuidv4(), ...product}));


