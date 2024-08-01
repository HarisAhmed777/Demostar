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
import UserBooking from './components/Dashboard/userbooking';
import ResetPassword from './components/LoginandSignupapge/ResetPassword';
import Bloging from './components/BlogPage/bloging';
import PackageSecondPage from './components/PackagePage/Packagesecondpage';
import AvailPromo from './components/OfferPage/AvailPromo';
import TamilNaduPicnic from './components/PicnicPage/TamilNaduPicnic';
import KeralaPicnic from './components/PicnicPage/Keralapicnic';
import ScrollToTop from './components/scrollTop';
import EmailVerification from './components/LoginandSignupapge/Emailverification';
import SeperateNews from './components/NewsandTips/newssperate';
import PrivacyPolicy from './components/TermsAndConditions/PrivacyPolicy/PrivacyPolicy';
import ServiceProviders from './components/TermsAndConditions/ServiceProviders/ServiceProviders';
import ThirdPartyInformation from './components/TermsAndConditions/ThirdPartyInformation/ThirdPartyInformation';
import LegalDisclaimer from './components/TermsAndConditions/LegalDisclaimer/LegalDisclaimer';
import SignupStep2 from './components/Loginfile/Signup2page';
import Bookingpage2 from './components/BookingPage/Bookingpage2';
import MountainsPage from './components/Picnichomepage/Mountainspage';
import ZooPage from './components/Picnichomepage/Zoo';
import SafariPage from './components/Picnichomepage/SafariPage';
import ValleyPage from './components/Picnichomepage/ValleyPage';
import DesertPage from './components/Picnichomepage/DesertPage';
import TemplesPage from './components/Picnichomepage/TemplePage';
import FlowerPage from './components/Picnichomepage/FlowersPage';
import BeachPage from './components/Picnichomepage/Beaches';
import AndhraPicnic from './components/PicnicPage/AndhraPicnic';
import KarnatakaPicnic from './components/PicnicPage/KarnatakaPicnic';
import AllBlogs from './components/TestingImages';
import SchoolPackage from './components/PackagePage/SchoolPackage';

function App() {
  return (
    <>
      <ContextProvider>
            <Header />
          
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/offerpage" element={<OfferPage/>} />
            <Route path="/blogpage" element={<BlogPage/>} />
            <Route path="/feedbackpage" element={<FeedbackPage/>} />
            <Route path="/picnicpage" element={<PicnicPage/>} />
            <Route path="/packagepage" element={<PackagePage/>} />
            <Route path="/bookingpage" element={<Bookingpage/>} />
            <Route path="/login" element={<LoginRedirect/>} />
            <Route path="/verify-otp" element={<SignupStep2/>} />
            <Route path="/verify-email" element={<EmailVerification />} />
            <Route path="/forgotpassword" element={<ForgotPassword/>} />
            <Route path="/contactus" element={<Contact/>} />
            <Route path = '/profile' element =  {<Profile/>}/>
            <Route path = '/booking' element =  {<UserBooking/>}/>
            <Route path="/resetpassword/:_id/:token" element={<ResetPassword/>} />
            <Route path = '/bloging' element =  {<Bloging/>}/>
            <Route path = '/packageenquire' element =  {<PackageSecondPage/>}/>
            <Route path = '/availpromo' element =  {<AvailPromo/>}/>
            <Route path = '/tamilnadupicnic' element =  {<TamilNaduPicnic/>}/>
            <Route path = '/keralapicnic' element =  {<KeralaPicnic/>}/>
            <Route path = '/seperatenews' element =  {<SeperateNews/>}/>
            <Route path = '/PrivacyPolicy' element =  {<PrivacyPolicy/>}/>
            <Route path = '/ServiceProviders' element =  {<ServiceProviders/>}/>
            <Route path = '/ThirdpartyInformation' element =  {<ThirdPartyInformation/>}/>
            <Route path = '/legalDisclaimer' element =  {<LegalDisclaimer/>}/>
            <Route path = '/payment process' element =  {<Bookingpage2/>}/>
            <Route path ='/Mountainpage' element =  {<MountainsPage/>}/>
            <Route path ='/Zoo' element =  {<ZooPage/>}/>
            <Route path ='/SafariPage' element =  {<SafariPage/>}/>
            <Route path = '/BeachesPage' element = {<BeachPage/>}/>
            <Route path ='/ValleyPage' element =  {<ValleyPage/>}/>
            <Route path ='/DesertPage' element =  {<DesertPage/>}/>
            <Route path ='/TemplePage' element =  {<TemplesPage/>}/>
            <Route path ='/FlowersPage' element =  {<FlowerPage/>}/>
            <Route path ='/AndhraPicnicPage' element =  {<AndhraPicnic/>}/>
            <Route path ='/KarnatakaPicnicPage' element =  {<KarnatakaPicnic/>}/>
            <Route path ='/schoolpackage' element =  {<SchoolPackage/>}/>
            <Route path ='/allblogs' element =  {<AllBlogs/>}/>

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
