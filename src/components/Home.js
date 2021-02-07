import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlog] = useState(null);

    const [isPending, setIsPending] = useState(true);

    const [hasError, setError] = useState(null);

    const deleteHandle = (id) => {
        const filteredBlogs = blogs.filter(blog => blog.id !== id);
        setBlog(filteredBlogs);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3001/blogs')
            .then(res => {
                if(!res.ok){
                    throw Error('Something wents wrong!');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlog(data);
                setIsPending(false);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            });
        }, 1000);
    }, []);
    return (
        <div className="home">
            {hasError && <div style={{backgroundColor: "red"}}>{hasError}</div>}
            {isPending && <div>Loading data......</div>}
            {blogs && <BlogList blogs={blogs} title="Blog List are shown below:" deleteHandle={deleteHandle}/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Author1")} 
                        title="Author1's Blog List are shown below:"
                        deleteHandle={deleteHandle}/>}
        </div>
    );
}
 
export default Home;