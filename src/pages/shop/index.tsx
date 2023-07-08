import styled from "styled-components";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

export const Shop: React.FC = () => {
  return (
    <>
      <div>
        <Title>
          <h1>Tech Shop</h1>
        </Title>
        <Products>
          {PRODUCTS.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </Products>
      </div>
    </>
  );
};

export const Title = styled.div`
  margin-top: 100px;
  text-align: center;
  font-size: 40px;
`;

export const Products = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
`;
