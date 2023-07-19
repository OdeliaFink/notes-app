import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
`;

const RightTabsContainer = styled.div`
display: flex;
padding: 0.7rem;
padding 1rem;
justify-content: space-between;
width: 30%;
`;

const Button = styled.button`
  padding: 0.7rem;
  border-radius: 10%;
  text-decoration: none;
  border: none;
  background-color: #769fb6;
  transition: background-color 1s;

  &:hover {
    background-color: white;
    cursor: pointer;
    border: 1px solid black;
  }

  &:focus,
  &:active {
    transition: none;
  }
`;

const NavBar = () => {
  return (
    <>
      <Container className="container">
        <div>
          <div className="logo-container-left">
            <h1>logo</h1>
          </div>
        </div>
        <RightTabsContainer className="tabs-container-right">
          <div>
            <Button>toggle theme</Button>
          </div>
          <div>
            <Button>login</Button>
          </div>
        </RightTabsContainer>
      </Container>
    </>
  );
};

export default NavBar;
