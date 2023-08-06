import React, { useState, useContext } from "react";
import "./product_page.css";
import { ShopContext } from "../../pages/Cart/shop-context";
import { CartItem } from "../../pages/Cart/cart-item";
import { Product } from "../../pages/Cart/product";


function ToggleButtons() {
    const [selectedButton, setSelectedButton] = useState("xs");

    const buttonValues = ["xs", "s", "m", "l", "xl", "2xl"];
    const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
    function handleClick(buttonValue) {
        setSelectedButton(buttonValue);
        cartItems.size = buttonValue.toUpperCase();
    };

    return (
        <div className = "size-toggle-container">
            {buttonValues.map(buttonValue => (
                <div 
                    key={buttonValue} 
                    className={selectedButton === buttonValue ? "size-toggle-button active" : "size-toggle-button"} 
                    onClick={() => handleClick(buttonValue)}
                >
                    {buttonValue.toUpperCase()}
                </div>
            ))}
        </div>
    );
};

const Product_Page = ({PRODUCTS, path, item, related_1, related_2, related_3, related_4}) => {
    const [selectedSize, setSelectedSize] = useState("One Size");
    const [quantity, setQuantity] = useState(1);
  
    const handleSizeChange = (size) => {
      setSelectedSize(size);
    };
  
    const handleQuantityChange = (change) => {
      if (quantity + change > 0) {
        setQuantity(quantity + change);
      }
    };
  
    return (
    <div className="product-page">
      <div className="product-page-container">
        <div className="path-container">
          <a href="#" className="path-link">
            Home
          </a>
  
          <span className="path-separator">/</span>
  
          <a href="#" className="path-link">
            Apparel
          </a>
  
          <span className="path-separator">/</span>
  
          <a href="#" className="path-link">
            Tops
          </a>
  
          <span className="path-separator">/</span>
  
          <a href="#" className="path-link">
            Crewneck
          </a>
  
          <span className="path-separator">/</span>
        </div>
        <div className="item-container">
            <Product data={PRODUCTS} />
          <div className="item-details">
            <div className="item-name-container">
              <h1 className="item-name">{item.name}</h1>
            </div>
  
            <div className="item-price-container">
              <h2 className="item-price">{item.price}</h2>
            </div>
  
            <div className="line-container">
              <div className="line"></div>
            </div>
  
            <div className="size-container">
              <div className="size-text-container">
                <h2 className="size-text">Size</h2>
              </div>
  
              <ToggleButtons
                options={item.sizes}
                selectedOption={selectedSize}
                onOptionChange={handleSizeChange}
              />
            </div>
  
            <div className="item-info-container">
              <p className="item-info">{item.info}</p>
            </div>
          </div>
        </div>

            <div className = "related-items-container">
                <div className = "related-items-title-container">
                    <h2 className = "related-items-title">Related Items</h2>
                </div>

                <div className = "related-items-row">
                    <div className = "related-items-1-container">
                        <img className = "related-items-1-image" src = {related_1.image} alt = {related_1.name} />
                        
                        <div className = "related-items-1-name-container">
                            <h3 className = "related-items-1-name">{related_1.name}</h3>
                        </div>

                        <div className = "related-items-1-price-container">
                            <h4 className = "related-items-1-price">{related_1.price}</h4>
                        </div>
                    </div>

                    <div className = "related-items-2-container">
                        <img className = "related-items-2-image" src = {related_2.image} alt = {related_2.name} />
                        
                        <div className = "related-items-2-name-container">
                            <h3 className = "related-items-2-name">{related_2.name}</h3>
                        </div>

                        <div className = "related-items-2-price-container">
                            <h4 className = "related-items-2-price">{related_2.price}</h4>
                        </div>
                    </div>

                    <div className = "related-items-3-container">
                        <img className = "related-items-3-image" src = {related_3.image} alt = {related_3.name} />
                        
                        <div className = "related-items-3-name-container">
                            <h3 className = "related-items-3-name">{related_3.name}</h3>
                        </div>

                        <div className = "related-items-3-price-container">
                            <h4 className = "related-items-3-price">{related_3.price}</h4>
                        </div>
                    </div>

                    <div className = "related-items-4-container">
                        <img className = "related-items-4-image" src = {related_4.image} alt = {related_4.name} />
                        
                        <div className = "related-items-4-name-container">
                            <h3 className = "related-items-4-name">{related_4.name}</h3>
                        </div>

                        <div className = "related-items-4-price-container">
                            <h4 className = "related-items-4-price">{related_4.price}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Product_Page;