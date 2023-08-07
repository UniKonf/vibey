import clsxm from '@/lib/clsxm';

import Footer from './Footer';
import Header from './Header';
import { ComponentPropsWithRef } from 'react';

type LayoutProps = ComponentPropsWithRef<'div'>;

const Layout = ({ children, className, ...rest }: LayoutProps) => {
  return (
    <div
      {...rest}
      className={clsxm(
        `min-h-screen bg-background text-foreground `,
        className
      )}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
