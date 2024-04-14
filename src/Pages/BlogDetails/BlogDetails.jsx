import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
    const blogs = useLoaderData();
    const { id } = useParams();
    const blog = blogs?.find((blog) => blog.id == id);
    return (
        <div className="border-2 shadow-lg p-6 space-y-2 rounded-xl bg-slate-100 lg:w-2/3 my-8 mx-auto text-center">
        <h2 className="text-xl font-semibold">Title: {blog.title}</h2>
        <p>By: <span className="font-semibold">{blog.author}</span></p>
        <p>Publish Date: <span className="font-semibold">{blog.date}</span></p>
        <p>Category: <span className="font-semibold">{blog.category}</span></p>
        <div className="flex gap-4 items-center pt-4 pb-2 justify-center">
            <p className="font-semibold">Tags</p>
            {blog.tags.map((tag, idx) => (
        <div key={idx} className="bg-blue-100 rounded-full">
          <p className="text-[#7E5E60] font-semibold px-5 py-2">#{tag}</p>
        </div>
      ))}
    </div>
    <p>{blog.content}</p>
    </div>
    );
};

export default BlogDetails;