import {useState} from 'react';

const Home = () => {
    const [blogs, setBlog] = useState([
        {title: "title1", body: "body1", author: "author1", id: 1},
        {title: "title2", body: "body2", author: "author2", id: 2},
        {title: "title3", body: "body3", author: "author3", id: 3}
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> Title: {blog.title}</h2>
                    <p>Body: {blog.body}</p>
                    <p>Written By: {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;