/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <DialogContent aria-label={'Menu'}>
        <Wrapper>
          <ButtonWrapper>
            <UnstyledButton onClick={onDismiss}>
              <Icon id="close" strokeWidth={2} />
              <VisuallyHidden>Close</VisuallyHidden>
            </UnstyledButton>
          </ButtonWrapper>
          <Navigation>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Navigation>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Wrapper>
      </DialogContent>
    </DialogOverlay>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  ${UnstyledButton} {
    margin-right: -10px;
  }
`;
const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: var(--weight-medium);

  > a {
    color: black;
    text-decoration: none;

    &:first-of-type {
      color: var(--color-secondary);
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  font-size: calc(14 / 16 * 1rem);

  > a {
    color: var(--color-gray-700);
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  left: 20%;
  width: 80%;
  height: 100vh;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;
`;

export default MobileMenu;
