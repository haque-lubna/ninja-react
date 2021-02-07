import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlog] = useState([
        {title: "title1", body: "body1", author: "author1", id: 1},
        {title: "title2", body: "body2", author: "author2", id: 2},
        {title: "title3", body: "body3", author: "author1", id: 3}
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="Blog List are shown below:"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "author1")} title="Author1's Blog List are shown below:"/>
        </div>
    );
}
 
export default Home;