import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlog] = useState([
        {title: "title1", body: "body1", author: "author1", id: 1},
        {title: "title2", body: "body2", author: "author2", id: 2},
        {title: "title3", body: "body3", author: "author1", id: 3}
    ]);

    const [name, setname] = useState('Rahim');

    const deleteHandle = (id) => {
        const filteredBlogs = blogs.filter(blog => blog.id !== id);
        setBlog(filteredBlogs);
    }

    useEffect(() => {
        console.log("Enter into effect");
        console.log(blogs); 
        console.log(name);
    }, [name]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="Blog List are shown below:" deleteHandle={deleteHandle}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "author1")} 
                        title="Author1's Blog List are shown below:"
                        deleteHandle={deleteHandle}/>
            <button onClick = {() => setname("Karim")}>Show Name</button>
            <p>{name}</p>
        </div>
    );
}
 
export default Home;