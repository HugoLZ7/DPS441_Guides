import { useState } from "react";
import ProductItem from "./ProductItem";

function ProductList() {
    const [products] = useState([
        {
            productId: 1,
            productName: "Laptop HP",
            price: 850,
            imageUrl: "https://s3.us-east-2.amazonaws.com/ccp-prd-s3-uploads/2022/6/30/a751cb634fcf303a18782f156241b52c0d11822e.png"
        },
        {
            productId: 2,
            productName: "Mouse Gamer",
            price: 25,
            imageUrl: "https://www.radioshackla.com/media/catalog/product/l/o/logitech-g203-lightsynsdf-01_m3lee1t8qpw8zowr.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
        },
        {
            productId: 3,
            productName: "Teclado Mecánico",
            price: 70,
            imageUrl: "https://ss637.liverpool.com.mx/xl/1143900181.jpg"
        },
        {
            productId: 4,
            productName: "Monitor 24\"",
            price: 200,
            imageUrl: "https://aeon.com.sv/web/image/product.template/100378/image_512"
        },
        {
            productId: 5,
            productName: "Audífonos",
            price: 40,
            imageUrl: "https://www.steren.com.sv/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/2230830d1/audifonos-bluetooth-3-5-mm-para-gamers.jpg"
        },
        {
            productId: 6,
            productName: "Webcam HD",
            price: 60,
            imageUrl: "https://i5.walmartimages.com/seo/1080P-Web-Cam-HD-Camera-Webcam-with-Mic-Microphone-for-Computer-PC-Laptop-Notebook_11aab792-f2a7-4765-88a4-656ef218b93e.c2b93dba35f7ed0bb10e6bacac3173a2.jpeg"
        },
        {
            productId: 7,
            productName: "Disco SSD 1TB",
            price: 120,
            imageUrl: "https://m.media-amazon.com/images/I/5169n4UNj5L._AC_SL1200_.jpg"
        },
        {
            productId: 8,
            productName: "Tablet Samsung",
            price: 300,
            imageUrl: "https://i.blogs.es/cec5c7/microsoft-surface-pro/650_1200.jpg"
        },
        {
            productId: 9,
            productName: "Impresora Epson",
            price: 150,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnI7MVV6tCOOVtbNX3LJZQIr51tgheXSiV2w&s"
        },
        {
            productId: 10,
            productName: "Silla Gamer",
            price: 180,
            imageUrl: "https://www.officedepot.com.sv/medias/34533.jpg-515ftw?context=bWFzdGVyfHJvb3R8NzIzODd8aW1hZ2UvanBlZ3xhR0kwTDJnNE5TOHhNRGN3TVRrd05qQXhPRE16TkM4ek5EVXpNeTVxY0dkZk5URTFablIzfDE2OWYxZTI4YTkyZDJlYWZkMzkxYmQxOTFkNTE1ZDQ4ODM2NTZkMjk4ODZmOTg1ZmU1Yjg2NGVhNWUyNzgyNTk"
        }
    ]);

    return (
        <div>
            <div style={containerDiv}>
                <h2>Lista de Productos</h2>
            </div>
            <div style={containerStyle}>
                {products.map((product) => (
                    <ProductItem
                        key={product.productId}
                        id={product.productId}
                        name={product.productName}
                        price={product.price}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center"
};
const containerDiv = {
    display: "flex",
    justifyContent: "center"
}

export default ProductList;
