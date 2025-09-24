import styled from '@emotion/styled';
import { useEffect } from 'react';

type Props = {
  message: string;
  onRemove: () => void;
};

export default function Toast({ message, onRemove }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onRemove]);
  return <ToastWrapper>{message}</ToastWrapper>;
}

export const ToastWrapper = styled.div`
  width: 100%;
  height: 45px;
  background-color: #ffc9c9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  z-index: 1000;
  position: fixed;
  animation: fadeAnimation 0.5s ease-out;

  @keyframes fadeAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
