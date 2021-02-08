import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isPending, hasError} = useFetch('http://localhost:3001/blogs/' + id);

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {hasError && <div>{hasError}</div>}
            {blog && (
                <article>
                    <h2>Title: {blog.title}</h2>
                    <p>Author: {blog.author}</p>
                    <p>Body: {blog.body}</p>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;