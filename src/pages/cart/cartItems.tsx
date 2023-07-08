import { styled } from "styled-components";
import { ShopContextProps } from "../../context/shopContext";
import { useShopContext } from "../../hooks/useShopContext";
import { Products } from "../../products";

interface CartItemProps {
  data: Products;
}

export const CartItem = ({ data }: CartItemProps) => {
  const { id, productName, price, productImage } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useShopContext() as ShopContextProps;
  return (
    <Container>
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <Handler>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </Handler>
      </div>
    </Container>
  );
};

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  margin: 10px;
  padding: 20px;

  & img {
    width: 200px;
  }

  & .description {
    width: 100%;
    font-size: 20px;
  }
`;

export const Handler = styled.div`
  & input {
    width: 40px;
    text-align: center;
    font-weight: bolder;
  }
`;
