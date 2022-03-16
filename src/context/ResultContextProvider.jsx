import React, {createContext,useContext,useState} from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ( {children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Elon Musk');
    const [alanInstance, setAlanInstance] = useState();

    // /videos, /search, /images
    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'EU',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': 'a755e45650msh27449e531804d9cp179fe4jsn472ad406b8cc'
            }
        });

        const data = await response.json();

        if(type.includes('/news')) {
            setResults(data.entries);
        } else if(type.includes('/images')) {
            setResults(data.image_results);
        } else {
            setResults(data.results);
        }
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading, alanInstance, setAlanInstance}}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);