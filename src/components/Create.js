const Create = () => {
    return (
        <div className="create">
            <h2>Create new blog</h2>
            <form>
                <label>Blog Title:</label>
                <input type="text" placeholder="Write Blog Title here..." required/>

                <label>Blog Author:</label>
                <select>
                    <option value="rahim">Rahim</option>
                    <option value="karim">Karim</option>
                </select>

                <label>Blog Body:</label>
                <textarea placeholder="Write Blog Body here..." required/>

                <button>Add Blog</button>
            </form>
        </div> 
    );
}
 
export default Create;