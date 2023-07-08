import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useShopContext } from "../../hooks/useShopContext";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cartItems";
import { ShopContextProps } from "../../context/shopContext";

export const Cart: React.FC = () => {
  const { cartItems, getTotalCartAmount, checkout } =
    useShopContext() as ShopContextProps;
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div>
          <h1>Your Cart Items</h1>
        </div>

        <CartContainer>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            }
          })}
        </CartContainer>
        {totalAmount > 0 ? (
          <Checkout>
            <p> Subtotal: ${totalAmount} </p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </Checkout>
        ) : (
          <h1> Your Shopping Cart is Empty</h1>
        )}
      </Container>
    </>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CartContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: auto auto auto;
  text-align: center;
`;

export const Checkout = styled.div`
  margin-top: 30px;

  & button {
    width: 150px;
    height: 50px;
    background-color: rgb(19, 19, 19);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  & button:last-child {
    margin-left: 10px;
  }
`;
