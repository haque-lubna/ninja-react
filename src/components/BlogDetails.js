import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isPending, hasError} = useFetch('http://localhost:3001/blogs/' + id);
    const history = useHistory();

    const handleDeleteButton = event => {
        fetch('http://localhost:3001/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            console.log("Delete blog with id: " + id);
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {hasError && <div>{hasError}</div>}
            {blog && (
                <article>
                    <h2>Title: {blog.title}</h2>
                    <p>Author: {blog.author}</p>
                    <p>Body: {blog.body}</p>
                    <button onClick={handleDeleteButton} style={{backgroundColor: "red"}}>X</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;