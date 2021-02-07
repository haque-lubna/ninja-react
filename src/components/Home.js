import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, hasError} = useFetch('http://localhost:3001/blogs')

    return (
        <div className="home">
            {hasError && <div style={{backgroundColor: "red"}}>{hasError}</div>}
            {isPending && <div>Loading data......</div>}
            {blogs && <BlogList blogs={blogs} title="Blog List are shown below:"/>}
        </div>
    );
}
 
export default Home;