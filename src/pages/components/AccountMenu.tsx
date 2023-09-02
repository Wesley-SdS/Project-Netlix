import React from 'react';
import { signOut } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';
import { useState } from 'react';
import ModalPerfis from './ModalPerfis';

import { MovieInterface } from '@/types';

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();
  const [openModal, setOpenModal] = useState(false);

  if (!visible) {
    return null;
  }

  const handleOpenModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center justify-center justify-center w-full">
          <img className="w-8 rounded-md" src="/images/default-blue.png" alt="" />
          <p className="text-white text-sm group-hover/item:underline">{currentUser?.name}</p>
        </div>
      </div>

      <hr className="bg-gray-600 border-0 h-px my-4" />

      <div onClick={handleOpenModal} className="px-4 my-2 text-center text-white text-sm hover:underline">
        Gerenciar Perfis
      </div>

      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div onClick={() => signOut()} className="px-4 text-center text-white text-sm hover:underline">
        Logout Netflix
      </div>
      <ModalPerfis isOpen={openModal} setModalOpen={handleCloseModal}>
         
      </ModalPerfis>
    </div>
  );
};

export default AccountMenu;
