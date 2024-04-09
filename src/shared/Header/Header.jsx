import logo from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center mt-6 space-y-2'>
           <img className='w-1/3 mx-auto' src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
           <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;