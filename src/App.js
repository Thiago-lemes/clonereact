import React, {useEffect, useState} from "react";
import tmdb from "./tmdb";


export default () => {
    const[movieList,setMovieList]=useState
    useEffect(()=>{
        const loadAll = async() =>{
            //puxando a lista total
            let list = await tmdb.getHomeList();
            setMovieList(list);
        }
        loadAll();
    }, []);

    return(
        <div className="page">
           <section classNaome = "lists">
               {movieList.map((item, key)=>(
                   <div>
                       {item.title}
                   </div>
               ))}
           </section>

        </div>
    )

    
}