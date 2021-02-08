import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [body, setBody] = useState('');
const [isPending, setIsPending] = useState(false);
const history = useHistory();

const handleAddBlogButton = (event) => {
    event.preventDefault();
    const blog = {title, author, body}
    setIsPending(true);

    fetch('http://localhost:3001/blogs', {
        method: 'POST',
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log("New blog added");
        setIsPending(false);
        history.go(-1);
    })
}
    return (
        <div className="create">
            <h2>Create new blog</h2>
            <form onSubmit={handleAddBlogButton}>
                <label>Blog Title:</label>
                <input type="text" placeholder="Write Blog Title here..." required 
                value={title} onChange={(event) => setTitle(event.target.value)}/>

                <label>Blog Author:</label>
                <select value={author} required onChange={(event) => setAuthor(event.target.value)}>
                    <option value="">Choose Author</option>
                    <option value="rahim">Rahim</option>
                    <option value="karim">Karim</option>
                </select>

                <label>Blog Body:</label>
                <textarea placeholder="Write Blog Body here..." required 
                value={body} onChange={(event) => setBody(event.target.value)}/>

                {!isPending &&<button>Add Blog</button>}
                {isPending &&<button disabled>Adding Blog..</button>}

            </form>
        </div> 
    );
}
 
export default Create;