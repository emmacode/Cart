import { styled } from "styled-components";
import { ShopContextProps } from "../../context/shopContext";
import { useShopContext } from "../../hooks/useShopContext";
import { Products } from "../../products";

interface ProductProps {
  data: Products;
}

export const Product = ({ data }: ProductProps) => {
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItems } = useShopContext() as ShopContextProps;

  const cartItemCount = cartItems[id];
  console.log(cartItemCount, "id");

  return (
    <Container>
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>${price}</b>
        </p>
      </div>
      <Button onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </Button>
    </Container>
  );
};

export const Container = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 350px;
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 300px;
  }

  & .description {
    text-align: center;
  }

  &:hover {
    transition: 0.3s ease-in;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid rgb(19, 19, 19);
  min-width: 100px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 15px;

  &:hover {
    background-color: rgb(19, 19, 19);
    color: white;
    cursor: pointer;
  }
`;
