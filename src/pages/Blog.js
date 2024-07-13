import Volunteer from "../components/Volunteer";
import blogData from "../data/blogdata";

function Blog(){
    return(
        <div>
            <div className="w-11/12 max-w-[1160px] py-4 mx-auto flex flex-col">
                <h1 className="text-6xl mt-20 mb-5">Our Blog</h1>
                <div className="text-2xl mb-32">Stay updated with the latest news and stories from the Pond Foundation.</div>
            </div>
            <div className="flex flex-wrap gap-y-10 mx-2 px-14 ">
                    {blogData.map((blog) => (
                        <div key={blog.id} className="flex flex-col w-[45vw] place-items-center text-lg p-5 border rounded-md shadow-md mb-10">
                            <img src={blog.imgSrc} alt={blog.title} className="w-full h-64 object-cover mb-4" />
                            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                            <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
                            <p className="mb-4">{blog.description}</p>
                            <a href={blog.readMoreLink} className="text-blue-500 underline">Read More</a>
                        </div>
                    ))}
            </div>
            <Volunteer/>

        </div>)
}
export default Blog;