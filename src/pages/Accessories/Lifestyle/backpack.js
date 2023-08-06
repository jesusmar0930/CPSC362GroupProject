import React from 'react';
import Product_Page from '../../../Components/Product_Page/product_page';

const path = {category: "Accesories", type: "backpack", item: "backpack"};
const item = {name: "backpack", price: "$15.00", image: require('../../../product_photos/backpack.png')};
const related_1 = {name: "Sweatpants", price: "$30.00", image: require("../../../product_photos/trsweatpants.jpg")};
const related_2 = {name: "Plain Tee", price: "$25.00", image: require("../../../product_photos/trplaintee.jpg")};
const related_3 = {name: "Polo", price: "$35.00", image: require("../../../product_photos/trpolo.jpg")};
const related_4 = {name: "Hoodie", price: "$75.00", image: require("../../../product_photos/trhoodie.jpg")};
const PRODUCTS = {
    id: 13,
    productName: "backpack",
    price: "15.00",
    productImage:
        require('../../../product_photos/backpack.png'),
    path: "#",
    size: "NA",
  }
const Backpack = () => {
    return (
        <div>
            <Product_Page PRODUCTS = {PRODUCTS} path = {path} item = {item} related_1 = {related_1} related_2 = {related_2} related_3 = {related_3} related_4 = {related_4} />
        </div>
    );
};

export default Backpack;