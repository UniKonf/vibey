import clsxm from '@/lib/clsxm';

import React from 'react';

type BackdropProps = {
  className?: string;
  isDarkBg?: boolean;
  isTransparent?: boolean;
  isBlur?: boolean;
  isGradient?: boolean;
  children?: React.ReactNode;
  show: boolean;
  onClose?: () => void;
};

const Backdrop: React.FC<BackdropProps> = ({
  className,
  isDarkBg = false,
  isTransparent = false,
  isBlur = false,
  isGradient = false,
  children,
  show = false,
  onClose,
}) => {
  return (
    <div
      className={clsxm(
        'fixed inset-0 z-50 overflow-hidden',
        'flex items-center justify-center',
        'bg-base-content bg-opacity-20',
        'pointer-events-none invisible opacity-0 transition-all duration-300',
        [
          isDarkBg && 'bg-gray-900/20',
          isTransparent && 'bg-transparent',
          isBlur && ' backdrop-blur',
          isGradient && 'bg-gradient-to-b from-primary/70 to-transparent',
          show && 'pointer-events-auto visible opacity-100',
        ],
        className
      )}
    >
      <div className="absolute inset-0 h-screen w-screen" onClick={onClose} />
      {children}
    </div>
  );
};

export default Backdrop;
