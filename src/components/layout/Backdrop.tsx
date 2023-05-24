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
      onRequestClose={onRequestClose}
      overlayClassName={clsxm(
        'fixed inset-0 z-50 overflow-hidden',
        'bg-base-content bg-opacity-20',
        'transition-all duration-300',
        [
          isDarkBg && 'bg-gray-900/20',
          isTransparent && 'bg-transparent',
          isBlur && 'backdrop-blur md:hidden',
          isGradient &&
            'bg-gradient-to-b from-primary/70 to-transparent md:hidden',
        ]
      )}
      className="absolute inset-0 bg-transparent"
    >
      <div
        className="absolute inset-0 h-screen w-screen"
        onClick={onRequestClose}
      />
      <div className={className}>{children}</div>
    </Modal>
  );
};

export default Backdrop;
