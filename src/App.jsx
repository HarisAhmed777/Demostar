import './App.css';
import Header from './components/Header/header';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/footer';
import { ContextProvider } from './components/context';
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import OfferPage from './components/OfferPage/offerpage';
import BlogPage from './components/BlogPage/blogpage';
import FeedbackPage from './components/Feedback/feedback';
import PicnicPage from './components/PicnicPage/Picnicpage';
import PackagePage from './components/PackagePage/Package';
import Bookingpage from './components/BookingPage/bookingpage';
import Both from './components/LoginandSignupapge/Both';
import ForgotPassword from './components/LoginandSignupapge/Forgotpassword';
import Contact from './components/Contact/Contact';
import { useContext ,useEffect} from 'react';
import { Context } from './components/context';
import { jwtDecode } from "jwt-decode";
import Profile from './components/Dashboard/profile';
// import Booking from './components/BookingPage/bookingpage';
import UserBooking from './components/Dashboard/userbooking';
import Allusers from './components/admindashboard/allusers';
import Allbookings from './components/admindashboard/allbookings';
import Admindashboard from './components/admindashboard/admindashboard';
import Allforms from './components/admindashboard/allforms';

function App() {
  return (
    <>
      <ContextProvider>
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
            <Route path="/login" element={<LoginRedirect/>} />
            <Route path="/forgotpassword" element={<ForgotPassword/>} />
            <Route path="/contactus" element={<Contact/>} />
            <Route path = '/profile' element =  {<Profile/>}/>
            <Route path = '/booking' element =  {<UserBooking/>}/>
            <Route path = '/allusers' element =  {<Allusers/>}/>
            <Route path = '/allbookings' element =  {<Allbookings/>}/>
            <Route path = '/admin' element =  {<Admindashboard/>}/>
            <Route path = '/allforms' element =  {<Allforms/>}/>







          </Routes>
          <Footer />
      </ContextProvider>
    </>
  );
}

function RootApp(){
  return(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}


function LoginRedirect() {
  const navigate = useNavigate();
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded && decoded.email) {
          setIsAuthorized(true);
          setUser(decoded.email);  
          navigate('/');
        } else {
          throw new Error('Token does not contain email');
        }
      } catch (error) {
        console.error('Token is invalid or expired', error);
      }
    }
  }, [setIsAuthorized, setUser, navigate]);

  return <Both />;
}

export default RootApp;
