import axios from "axios"
import { useEffect, useState } from "react"
export default function AdminProductPage(){

    const [products,setProducts] = useState([
    {
        "_id": "68b55fa3ffe165114aa99353",
        "productId": "B2001",
        "productName": "Herbal Shampoo",
        "altNames": [
            "Natural Hair Cleanser",
            "Ayurvedic Shampoo",
            "Organic Shampoo"
        ],
        "images": [
            "https://example.com/images/shampoo-front.jpg",
            "https://example.com/images/shampoo-back.jpg"
        ],
        "price": 1200,
        "lastPrice": 1500,
        "description": "A gentle herbal shampoo enriched with aloe vera and neem extract. Helps reduce dandruff, strengthens roots, and keeps your hair soft and shiny.",
        "__v": 0
    },
    {
        "_id": "68ccff3f9968ca459ffd2663",
        "productId": "B2002",
        "productName": "Matte Lipstick",
        "altNames": [
            "Long Lasting Lipstick",
            "Velvet Matte Lip Color",
            "Non-Smudge Lipstick"
        ],
        "images": [
            "https://example.com/images/lipstick1.jpg",
            "https://example.com/images/lipstick2.jpg"
        ],
        "price": 950,
        "lastPrice": 1100,
        "description": "A richly pigmented matte lipstick that provides full coverage with a smooth finish. Long-lasting formula keeps your lips vibrant all day without smudging.",
        "__v": 0
    }
])

useEffect(
    ()=>{
    axios.get("http://localhost:3000/api/products").then(
        (res)=>{
    console.log(res.data);
    setProducts(res.data);
    console.log({
        discountTitle:"summer sale",
        products:products[0],
    });
    console.log({
        discountTitle:"summer sale"
    });
}
)

},[]
)

    

    

    return(
        <div>
            <h1>Admin Product Page</h1>
            
            <table>
                <thead>
                    
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Last Price</th>
                        <th>Stock</th>
                        <th>Description</th>
                    
                </thead>
                <tbody>
                    <tr>
                        <th>1234</th>
                        <th>Face Serum</th>
                        <th>24.99</th>
                        <th>29.99</th>
                        <th>200</th>
                        <th>Hydration Face Serum</th>
                    </tr>

                    <tr>
                        <th>12345</th>
                        <th>Face Cream</th>
                        <th>30.99</th>
                        <th>28.99</th>
                        <th>100</th>
                        <th>Hydration Face Cream</th>
                    </tr>

                    <tr>
                        <th>123456</th>
                        <th>Face Oil</th>
                        <th>30.99</th>
                        <th>28.99</th>
                        <th>100</th>
                        <th>Hydration Face Oil</th>
                    </tr>
                </tbody>
            </table>    
            
                

        </div>
    )
}

