import { Fragment } from 'react';
import Navbar from '../component/header/Navbar';
import Footer from '../component/footer/Footer';

const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default AppLayout;
