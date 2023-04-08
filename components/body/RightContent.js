import React, { Component } from "react";
import {Data} from "./data";
import ShowCard from "./ShowCard/ShowCard";



class RightContent extends Component {
  render() {
    const products = Data();
    return (
      <div>
        <div id="right-content">
          <h2>Product : </h2>
          <div id="products">
            {
                products.map((product) => 
                <ShowCard 
                    loai = {product.loai}
                    name = {product.name}
                    image = {product.image}
                    /> ) 
            }
            <div style={{ clear: "both" }} />
          </div>
          <div style={{ clear: "both" }} />
        </div>
        <div style={{ clear: "both" }} />
      </div>
    );
  }
}

export default RightContent;
