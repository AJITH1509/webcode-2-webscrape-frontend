import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState, useEffect } from "react";
import { API } from "../global.js";
import CircularProgress from "@mui/material/CircularProgress";

export const Webscrape = () => {
  const [keyword, setKeyword] = useState("iphone");
  const [product, setProduct] = useState(null);
  const getData = () => {
    if (keyword !== "") {
      fetch(`${API}/${keyword}`)
        .then((data) => data.json())
        .then((products) => setProduct(products))
        .catch((err) => console.log(err));
    } else {
      alert("Enter Product Name ! 😁");
    }
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
            required
            placeholder="Eg : iphone"
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
        <CircularProgress color="inherit" disableShrink />
      )}
    </div>
  );
};

const Phone = ({ data }) => {
  const dollarPrice = data.price;

  return (
    <Card className="product-container">
      <img className="product-picture" src={data.image} />
      <CardContent id="product-details">
        <p className="product-name">{data.name}</p>
        <h3 className="product-price">{dollarPrice}</h3>
        <h3 className="product-rating">⭐ {data.rating}</h3>
        <Button variant="contained">Buy Now</Button>
      </CardContent>
      <hr style={{ opacity: 0.5, width: "70%" }} />
    </Card>
  );
};
