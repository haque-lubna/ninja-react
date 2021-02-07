import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [hasError, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Something wents wrong!');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            });
        }, 1000);
    }, [url]);

    return {data, isPending, hasError};
}
 
export default useFetch;