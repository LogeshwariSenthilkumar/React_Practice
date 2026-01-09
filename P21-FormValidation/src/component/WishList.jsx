import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdFolderDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/cartSlice";

const WishList = () => {
  let newList = useSelector((state) => {
    return state.cart;
  });
  let dispatch=useDispatch()
  let handleDelete=(itemId)=>{
        dispatch(removeItem(itemId))
  }
  return (
    <div>
      {newList.length > 0? (
        <section className="products">
          {newList.map((product) => {
            return (
              <Card
                style={{ width: "18rem" }}
                key={product.id}
                className="product"
              >
                <center>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ width: "9rem", height: "12rem" }}
                  />
                </center>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleDelete(product.id);
                    }}
                  >
                    <MdFolderDelete />
                  </Button>
                </Card.Footer>
              </Card>
            );
          })}
        </section>
      ):<h1>Please Purchase Something</h1>}
    </div>
  );
};

export default WishList;
