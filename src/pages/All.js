import Catalog from "../Components/Catalog/catalog";
const PRODUCTS =  [ {
  id: 6,
  productName: "Smartphone",
  price: "499.99",
  productImage:
    "https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png",
  path: "/electronics",
},
{
  id: 7,
  productName: "Laptop",
  price: "899.99",
  productImage:
    "https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png",
  path: "/electronics",
},
{
  id: 8,
  productName: "Smartwatch",
  price: "199.99",
  productImage:
    "https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png",
  path: "/electronics",
},
];
function All() {
  return (
    <div>
      <h1 className="pageName">All</h1>
      <Catalog PRODUCTS={PRODUCTS} />
    </div>
  );
};

export default All;