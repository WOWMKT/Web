import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from './ModalContext';

const CommonModal = ({ children }) => {
  const { isModalOpen, closeModal } = useModal();

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
    <ModalWrapper isOpen={isModalOpen} onClick={closeModal}>
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  );
};

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
`;

export default CommonModal;
