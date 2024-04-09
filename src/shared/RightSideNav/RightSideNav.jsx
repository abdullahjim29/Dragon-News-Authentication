import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import sweemming from "../../assets/qZone1.png";
import classs from "../../assets/qZone2.png";
import playground from "../../assets/qZone3.png";
import './rightSideNav.css'
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-4 mb-5">
        <h2 className="text-3xl font-bold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login with Github
        </button>
      </div>

      <div className="p-4 mb-6">
        <h2 className="text-3xl font-bold mb-4">Find Us On</h2>
        <a
          className="flex items-center gap-4 text-lg border rounded-t-lg p-5"
          href=""
        >
          <FaFacebook />
          Facebook
        </a>
        <a className="flex items-center gap-4 text-lg border-x p-5" href="">
          <FaTwitter />
          Twitter
        </a>
        <a
          className="flex items-center gap-4 text-lg border rounded-b-lg p-5"
          href=""
        >
          <FaInstagram />
          Instagram
        </a>
      </div>

      <div className="p-4 space-y-4 mb-5 bg-[#f3f3f3]">
        <h2 className="text-3xl font-bold">Q Zone</h2>
        <img src={sweemming} alt="" />
        <img src={classs} alt="" />
        <img src={playground} alt="" />
      </div>

      <div className="bg-images h-[400px] text-center p-6 space-y-6 mb-12">
        <h1 className="text-4xl text-white font-bold">Create an Amazing Newspaper</h1>
        <p className="text-white">Discover thousands of <br /> options, easy to <br />customize layouts, <br /> one-click to import <br /> demo and much more.</p>
        <button className="btn bg-[#d72050] border-none text-white rounded-none mb-12">Learn More</button>
        </div>
    </div>
  );
};

export default RightSideNav;
