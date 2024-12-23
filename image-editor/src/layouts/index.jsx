import { Fragment } from 'react';
import { Header, Footer } from '../components';

const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default AppLayout;
