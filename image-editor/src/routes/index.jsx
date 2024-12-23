import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Dashboard from '../pages/dashboard';
import Contact from '../pages/contact';
import Unsubscribe from '../pages/unsubscribe';
import Subscription from '../pages/subscription';
import Processing from '../pages/processing';
import Preview from '../pages/preview';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/unsubscribe' element={<Unsubscribe />} />
      <Route path='/subscription' element={<Subscription />} />
      <Route path='/processing' element={<Processing />} />
      <Route path='/preview' element={<Preview />} />
    </Routes>
  );
};

export default AppRoutes;
