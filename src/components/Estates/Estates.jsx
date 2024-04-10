import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Estates = ({estate}) => {
    const {id,image, estate_title, segment_name, price, area, location, status, facilities}=estate;
    return (
        <div className="border p-4 rounded-lg shadow-md space-y-3">
            <img className='rounded-md w-full h-72' src={image} alt="" />
            <h2 className="text-2xl font-semibold">{estate_title}</h2>
            <h2 className="text-xl font-medium">{segment_name}</h2>
            <p><span className='opacity-90'>Location:</span> {location}</p> 
            <div className='flex gap-16'>
            <p><span className='opacity-90'>Area:</span> {area}</p> 
            <p><span className='opacity-90'>Price:</span> ${price}</p> 
            <p><span className='opacity-90'>For</span> {status}</p> 
            </div>
            <p className='pb-4'><span className='opacity-85'>Facilities:</span> {facilities.map((facility,idx)=><span key={idx} className='mr-6'>#{facility}</span>)}</p>
            <Link to={`/details/${id}`}><button className='btn bg-[#7E5E60] text-white'>View Property</button></Link>
        </div>
    );
};

Estates.propTypes={
    estate: PropTypes.object,
}
export default Estates;