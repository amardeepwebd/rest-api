import React,{useState,useEffect} from 'react';
import country from './country.css'

const Api =()=>{

    const [country,setCountry] = useState([]);
    const getCountry=async()=>{
        const url = `https://restcountries.com/v3/region/asia`;
        const response = await fetch(url);
        const resjson = await response.json() ;
        console.log(resjson)  
        setCountry(resjson)
    }
    useEffect(()=>{
        
         
            getCountry();

            
    },[]);
    return(
        <>
           {
                 country.map((elem)=>{
                     return(
                         <div className="csk">
                             <div className="mi"><img src={elem.flags[1]} width="250px" height="200pxs"></img></div>
                             <div className="dc">
                                 <div>Country: {elem.name.common}</div>
                                 <div>Capital: {elem.capital}</div>
                                 <div>Region: {elem.region}</div>
                                 <div>SubRegion: {elem.subregion}</div>
                                 <div>Borders: {elem.borders}</div>
                             </div>
                         </div>
                     )
                 })
           }
        </>
    )
}

export default Api;