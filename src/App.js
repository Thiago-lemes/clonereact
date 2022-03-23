import React, {useEffect} from "react";
import tmdb from "./tmdb";


export default () => {
    
    useEffect(()=>{
        const carregarTudo = async() =>{
            //puxando a lista total
            let list = await tmdb.getHomeList();
            console.log(list)
        }
        carregarTudo();
    }, []);

    
}