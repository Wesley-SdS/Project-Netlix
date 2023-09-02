import React from 'react';
import styles from '@/src/styles/ModalPerfis.module.css';
import { FaTimes } from 'react-icons/fa';

interface ModalPerfisProps {
  isOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function ModalPerfis({ isOpen, setModalOpen, children }: ModalPerfisProps) {
  if (isOpen) {
    return (
      <div className={styles.modalBackground}>
        
        <div className={styles.modalContent}>
<div className="text-3xl md:text-6xl py-10 text-white text-center">Quem está Assistindo?</div>
<div className='usuarios'>
<img src="/images/usuarios.png" className="w-full mt-10" alt="Logo" />
</div>
<div className="flex justify-center">
<button className="bg-transparent border border-gray-500 text-gray-500 py-3 text-white w-60  my-5 mt-10 hover:text-white hover:border-white transition" onClick={() => setModalOpen(false)} title="Fechar">
   Gerenciar Perfis

 
</button>
</div>
        </div>
      </div>
    );
  }

  return null;
}
