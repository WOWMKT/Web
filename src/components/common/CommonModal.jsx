import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useModal } from './ModalContext';
import useClickOutside from '../../hooks/useClickoutside';

const CommonModal = ({ children }) => {
  const { isModalOpen, closeModal } = useModal();

  //외부클릭 모달 닫기 hook
  const modalRef = useRef(null);
  useClickOutside(modalRef, closeModal);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen, closeModal]);

  return (
    <ModalWrapper isOpen={isModalOpen} ref={modalRef}>
      <ModalContent>
        <Title>주문폼</Title>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

const Title = styled.div`
  color: var(--black, #000);
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;

  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem;
  border-bottom: 1px solid #c1c1c1;
`;

const ModalWrapper = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(93, 93, 93, 0.6);
  align-items: flex-end;
  justify-content: flex-end;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 2.5rem 2.5rem 0 0;
  height: 85%;
  padding: 3rem;

  overflow-y: auto;
`;

export default CommonModal;
