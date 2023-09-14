import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Footer from '../components/Footer';


const Homepage = () => {
    
        const [searchText, setSearchText] = useState("");
        const [page, setPage] = useState(1);
        const [content, setContent] = useState([]);
      
        const fetchSearch = async () => {
          const data = await fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=0edb3f05130ebfedfe4528ec1b02e92b&language=en-US&query=${searchText}&page=${page}&include_adult=false`
          );
          const { results } = await data.json();
          setContent(results);
          console.log(results)
        };
        useEffect(() => {
          fetchSearch();
        }, [])
         
        const Trigger = (e) => {
          setSearchText(e.target.value);
        };
         
        const Search = () => {
          fetchSearch();
        };
    return (
        <>
            <Header trigger={Trigger} search={Search} /> 
            <MainSection content = {content} />
            <Footer /> 
        </>
    );
}

export default Homepage;
