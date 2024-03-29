import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [hasError, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortController.signal})
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
                if(err.name === 'AbortError'){
                    console.log("fetch aborted!");
                }
                else{
                    setIsPending(false);
                    setError(err.message);
                }
            });
        }, 1000);

        return () => abortController.abort();
    }, [url]);

    return {data, isPending, hasError};
}
 
export default useFetch;