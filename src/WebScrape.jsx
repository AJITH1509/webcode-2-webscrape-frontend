import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState, useEffect } from "react";
import { API } from "../global.js";

export const Webscrape = () => {
  const [keyword, setKeyword] = useState("iphone");
  const [product, setProduct] = useState([]);
  const getData = () => {
    fetch(`${API}/${keyword}`)
      .then((data) => data.json())
      .then((products) => setProduct(products));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Card className="login-container">
        <CardContent className="card-content">
          <TextField
            onChange={(e) => setKeyword(e.target.value)}
            label="Product Name"
            variant="outlined"
          />
          <Button onClick={() => getData()} color="success" variant="contained">
            Search
          </Button>
        </CardContent>
      </Card>
      <div className="product-list-container">
        {product.map((data) => (
          <Phone key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

const Phone = ({ data }) => {
  return (
    <Card className="product-container">
      <img className="product-picture" src={data.image} />
      <CardContent>
        <h2 className="product-name">{data.name}</h2>
        <h3 className="product-price">{data.price}</h3>
        <h3 className="product-rating">⭐ {data.rating}</h3>
        <Button variant="contained">Buy Now</Button>
      </CardContent>
      <hr style={{ opacity: 0.5, width: "70%" }} />
    </Card>
  );
};
