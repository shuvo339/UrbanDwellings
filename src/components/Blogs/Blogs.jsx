import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs]= useState(null)
    useEffect(()=>{
        fetch('/blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }, [])
    return (
        <div className="flex flex-col items-center mt-12">
            <h2 className="text-3xl font-semibold">Popular Blogs</h2>
            <div className="grid lg:grid-cols-2 gap-3 lg:gap-6 my-6 w-full">
                {
                    blogs?.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;