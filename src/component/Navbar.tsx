import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ShoppingCart } from "phosphor-react";

export const Navbar: React.FC = () => {
  return (
    <Header>
      <LinkContainer>
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </LinkContainer>
    </Header>
  );
};

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: rgb(19, 19, 19);
`;

export const LinkContainer = styled.div`
  margin-right: 50px;
  display: flex;
  align-items: center;

  & a {
    text-decoration: none;
    color: #fff;
  }

  & a:last-child {
    margin-left: 30px;
  }
`;
