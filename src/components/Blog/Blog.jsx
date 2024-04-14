import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
    const {title, author, date, category, tags, id} = blog;
    return (
        <div className="border-2 shadow-lg p-6 space-y-2 rounded-xl bg-slate-100">
            <h2 className="text-xl font-semibold">Title: {title}</h2>
            <p>By: <span className="font-semibold">{author}</span></p>
            <p>Publish Date: <span className="font-semibold">{date}</span></p>
            <p>Category: <span className="font-semibold">{category}</span></p>
            <div className="flex gap-4 items-center pt-4 pb-2">
                <p className="font-semibold">Tags</p>
                {tags.map((tag, idx) => (
            <div key={idx} className="bg-blue-100 rounded-full">
              <p className="text-[#7E5E60] font-semibold px-5 py-2">#{tag}</p>
            </div>
          ))}
        </div>
        <Link to={`/blog-details/${id}`}><button className="btn bg-[#7E5E60] text-white">Read More</button></Link>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object,
}
export default Blog;