import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
const EstateDetails = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const estate = estates?.find((estate) => estate.id == id);
    return (
        <div className="flex flex-col md:flex-row gap-8 my-8">
            <Helmet>
                <title>UrbanDwellings | Estate</title>
            </Helmet>
            <div className="flex-1">
                <img className="rounded-md h-full w-full" src={estate.image} alt="" />
            </div>
            <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-semibold">{estate.estate_title}</h2>
            <h2 className="text-xl font-medium"><span className='opacity-90'>Category:</span> {estate.segment_name}</h2>
            <p className="my-3 opacity-90 text-justify">{estate.description}</p>
            <p className="mb-2"><span className='opacity-90'>Location:</span> {estate.location}</p> 
            <p><span className='opacity-85'>Facilities:</span> {estate.facilities.map((facility,idx)=><span key={idx} className='mr-3 md:mr-8'>#{facility}</span>)}</p>
            <div className='flex justify-between text-start pr-24 mb-2'>
            <p><span className='opacity-90'>Area:</span> {estate.area}</p> 
            <p><span className='opacity-90'>Price:</span> ${estate.price}</p> 
            <p><span className='opacity-90'>For</span> {estate.status}</p> 
            </div>
            <div className='flex justify-between pr-24 my-2'>
            {estate.bedrooms? <p><span className='opacity-90'>Bedrooms:</span> {estate.bedrooms}</p> : <p><span className='opacity-90'>Total Units:</span> {estate.total_units}</p> }
            {estate.bathrooms? <p><span className='opacity-90'>Bathrooms:</span> {estate.bathrooms}</p> : <p><span className='opacity-90'>Occupied Units:</span> {estate.occupied_units}</p> } 
            </div>
            <div className='flex justify-between my-2  pr-24'>
            {estate.garage_spaces? <p><span className='opacity-90'>Garage Spaces:</span> {estate.garage_spaces}</p> : <p><span className='opacity-90'>Parking Spaces:</span> {estate.parking_spaces}</p> }
            {estate.year_built? <p><span className='opacity-90'>Year of Built:</span> {estate.year_built}</p> : <p><span className='opacity-90'>Floor Level:</span> {estate.floor_level}</p> } 
            </div>

            </div>
        </div>
    );
};

export default EstateDetails;