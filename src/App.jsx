import './App.css';
import Header from './components/Header/header';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/footer';
import { ContextProvider } from './components/context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import OfferPage from './components/OfferPage/offerpage';
import BlogPage from './components/BlogPage/blogpage';
import FeedbackPage from './components/Feedback/feedback';
import PicnicPage from './components/PicnicPage/Picnicpage';
import PackagePage from './components/PackagePage/Package';
import Bookingpage from './components/BookingPage/bookingpage';

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <div className='headerp'>
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/offerpage" element={<OfferPage/>} />
            <Route path="/blogpage" element={<BlogPage/>} />
            <Route path="/feedbackpage" element={<FeedbackPage/>} />
            <Route path="/picnicpage" element={<PicnicPage/>} />
            <Route path="/packagepage" element={<PackagePage/>} />
            <Route path="/bookingpage" element={<Bookingpage/>} />






          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
