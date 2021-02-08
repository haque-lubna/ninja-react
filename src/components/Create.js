import { useState } from "react";

const Create = () => {
const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [body, setBody] = useState('');

const handleAddBlogButton = (event) => {
    event.preventDefault();
    const blog = {title, author, body}
    console.log(blog);
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

                <button>Add Blog</button>
            </form>
        </div> 
    );
}
 
export default Create;