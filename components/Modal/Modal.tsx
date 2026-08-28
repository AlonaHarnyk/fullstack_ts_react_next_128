'use client';

import { useRouter } from 'next/navigation';
import css from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
};

const Modal = ({ children,  }: ModalProps) => {
  const router = useRouter();
  
  const close = () => router.back();

  return (
      <div className={css.backdrop}>
      <div className={css.modal}>
        {children}
        <button onClick={close} className={css.closeBtn}>Close</button>
      </div>
    </div>
  );
};

export default Modal;