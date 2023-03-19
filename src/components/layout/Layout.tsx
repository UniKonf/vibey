import clsxm from '@/lib/clsxm';
import { SettingsContext } from '@/lib/context/settings';

import Footer from './Footer';
import Header from './Header';
import { ComponentPropsWithRef, useContext } from 'react';

type LayoutProps = ComponentPropsWithRef<'div'>;

const Layout = ({ children, ...rest }: LayoutProps) => {
  const { theme } = useContext(SettingsContext);
  return (
    <div
      {...rest}
      className={clsxm(
        `min-h-screen bg-base-100 bg-gradient-to-bl from-[rgb(7,252,193,0.2)] to-[rgba(178,15,255,0.15)] font-bold text-base-content `,
        theme === 'light' ? 'theme-light' : 'theme-dark'
      )}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
