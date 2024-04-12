import PropTypes from 'prop-types';
const Review = ({review}) => {
    const {userName, name, occupation, rating, comment, date,img}= review;
    return (
        <div className='border shadow-lg p-4 rounded-lg my-6 space-y-1'>
            <p className='opacity-80'>{date}</p>
            <p><span className='opacity-80'>About:</span> <span className='font-semibold'>{name}</span></p>
            <p><span className='opacity-80'>Rating:</span> <span className='font-semibold'>{rating}</span></p>
            <p className='pt-2'>{comment}</p>
            <div className='flex items-center gap-5 pt-4'>
                <img className='rounded-full' src={img} alt="" />
                <div>
                <p className='text-xl font-semibold pt-4 '>{userName}</p>
                <p className='text-sm opacity-85 text-end'>{occupation}</p>
                </div>
            </div>
        </div>
    );
};
Review.propTypes={
    review: PropTypes.object,
}
export default Review;