import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState, useEffect } from "react";
import { API } from "../global.js";

export const Webscrape = () => {
  const [keyword, setKeyword] = useState("iphone");
  const [product, setProduct] = useState(null);
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
            id="input-field"
            onChange={(e) => setKeyword(e.target.value)}
            label="Product Name"
            variant="outlined"
          />
          <Button onClick={getData} color="success" variant="contained">
            Search
          </Button>
        </CardContent>
      </Card>
      {product ? (
        <div className="product-list-container">
          {product.map((data) => (
            <Phone key={data._id} data={data} />
          ))}
        </div>
      ) : (
        <h2>
          failed to Scrape Data , because Amazon blocks the data Scrape. Try
          after Sometime
        </h2>
      )}
    </div>
  );
};

const Phone = ({ data }) => {
  const dollarPrice = data.price;
  const rupees = dollarPrice.split($)[0];
  return (
    <Card className="product-container">
      <img className="product-picture" src={data.image} />
      <CardContent>
        <p className="product-name">{data.name}</p>
        <h3 className="product-price">{rupees}</h3>
        <h3 className="product-rating">⭐ {data.rating}</h3>
        <Button variant="contained">Buy Now</Button>
      </CardContent>
      <hr style={{ opacity: 0.5, width: "70%" }} />
    </Card>
  );
};
