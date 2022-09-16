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
    {
        title: "Men's crew sailing jackect",
        description: "<p>Adipisicing hic aperiam maiores eum magni.</p><p>Quasi labore tenetur voluptatum laboriosam impedit!</p><p>Adipisicing minus ratione illum id amet Blanditiis repudiandae facilis error eos obcaecati voluptatibus molestiae sit? Expedita iste impedit?</p>",
        image: "https://www.hellyhansen.com/media/catalog/product/3/0/30263_990-2-main3.jpg?quality=90&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560",
        categories: ["gentlemen"],
        size: ["S - EU 36", "M - EU 38", "XL - 42"],
        color: ["gray", "black"],
        price: 150.00,
    },
    {
        title: "Plaid Shirt",
        description: "<p>Adipisicing hic aperiam maiores eum magni.</p><p>Quasi labore tenetur voluptatum laboriosam impedit!</p><p>Adipisicing minus ratione illum id amet Blanditiis repudiandae facilis error eos obcaecati voluptatibus molestiae sit? Expedita iste impedit?</p>",
        image: "https://www.kindpng.com/picc/m/198-1983979_check-shirt-free-desktop-background-lyle-and-scott.png",
        categories: ["gentlemen"],
        size: ["S - EU 36", "M - EU 38", "XL - 42"],
        color: ["blue", "red", "green"],
        price: 50.00,
    },
    {
        title: "Polo Shirt",
        description: "<p>Adipisicing hic aperiam maiores eum magni.</p><p>Quasi labore tenetur voluptatum laboriosam impedit!</p><p>Adipisicing minus ratione illum id amet Blanditiis repudiandae facilis error eos obcaecati voluptatibus molestiae sit? Expedita iste impedit?</p>",
        image: "https://i.pinimg.com/originals/a8/6c/8b/a86c8bfe4c4bbcd902543063c9af0d63.jpg",
        categories: ["ladies"],
        size: ["S - EU 36", "M - EU 38", "XL - 42"],
        color: ["pink", "white", "black"],
        price: 45.00,
    },
];


export const newProducts = products.map(product => ({id: uuidv4(), ...product}));


