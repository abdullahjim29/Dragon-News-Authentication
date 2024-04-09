import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreckingNews = () => {
  return (
    <div className="flex bg-[#f3f3f3] p-3">
        <button className="btn btn-error text-white px-8 ">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
       <Link className="mr-10" to='/'> I can be a React component, multiple React components, or just some
        text.</Link>
       <Link className="mr-10" to='/'> I can be a React component, multiple React components, or just some
        text.</Link>
       <Link className="mr-10" to='/'> I can be a React component, multiple React components, or just some
        text.</Link>
      </Marquee>
    </div>
  );
};

export default BreckingNews;
