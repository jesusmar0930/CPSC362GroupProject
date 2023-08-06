import React from 'react';
import Product_Page from '../../../Components/Product_Page/product_page';

const path = {category: "Apparel", type: "Tops", item: "Crewneck"};
const item = {name: "Crewneck", price: "$65.00", image: require('../../../product_photos/trcrewneck.jpg')};
const related_1 = {name: "Sweatpants", price: "$30.00", image: require("../../../product_photos/trsweatpants.jpg")};
const related_2 = {name: "Plain Tee", price: "$25.00", image: require("../../../product_photos/trplaintee.jpg")};
const related_3 = {name: "Polo", price: "$35.00", image: require("../../../product_photos/trpolo.jpg")};
const related_4 = {name: "Hoodie", price: "$75.00", image: require("../../../product_photos/trhoodie.jpg")};
const PRODUCTS = {
    id: 9,
    productName: "Crewneck",
    price: "65.00",
    productImage:
        require('../../../product_photos/trcrewneck.jpg'),
    path: "#",
    size: "xs",
  }
const Crewneck = () => {
    return (
        <div>
            <Product_Page PRODUCTS = {PRODUCTS} path = {path} item = {item} related_1 = {related_1} related_2 = {related_2} related_3 = {related_3} related_4 = {related_4} />
        </div>
    );
};

export default Crewneck;