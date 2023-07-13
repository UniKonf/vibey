import clsxm from '@/lib/clsxm';

import React, { PropsWithoutRef } from 'react';
import { default as Modal, default as ReactModal } from 'react-modal';

type BackdropProps = {
  className?: string;
  isDarkBg?: boolean;
  isTransparent?: boolean;
  isBlur?: boolean;
  isGradient?: boolean;
  children?: React.ReactNode;
} & PropsWithoutRef<ReactModal.Props>;

const Backdrop: React.FC<BackdropProps> = ({
  className,
  isDarkBg = false,
  isTransparent = false,
  isBlur = false,
  isGradient = false,
  children,
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      onRequestClose={onRequestClose}
      overlayClassName={clsxm(
        'fixed inset-0 z-40 overflow-hidden',
        'bg-base-content bg-opacity-20',
        'transition-all duration-300',
        [
          isDarkBg && 'bg-gray-900/20',
          isTransparent && 'bg-transparent',
          isBlur && ' backdrop-blur',
          isGradient && 'bg-gradient-to-b from-primary/70 to-transparent',
        ]
      )}
      className="static inset-0 flex h-full w-screen justify-center overflow-y-auto bg-transparent pb-14"
    >
      <div className="relative mt-14 h-fit w-fit" onClick={onRequestClose} />
      <div className={className}>{children}</div>
    </Modal>
  );
};

export default Backdrop;
