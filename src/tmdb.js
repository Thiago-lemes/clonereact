import { getByTitle } from "@testing-library/react";

const API_KEY = '6b7bad8a761c4750c8d753c9b123a450';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async(endpoint) =>
//essa função vai fazer a buscar e retornar o resultado
{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json =  await req.json();
    return json;

}
export default{
    //pegar a infomação da pagina principal 
    getHomeList: async() =>{
        return[
            {slug:'Originais',
            title: 'originais da Netflix', 
            items: await basicFetch(`/discover/tv?with_network=213&language=pt-BRapi_key=${API_KEY}`)
            },
            
            {slug:'trending',
            title:'Recomendados para Você',
            items:await basicFetch(`/treinding/all/week?language=pt-BRapi_key=${API_KEY}`)
            },

            {
                slug:'toprated',
                title: 'Em Alta',
                items:await basicFetch(`/movie/top_rated?language=pt-BRapi_key=${API_KEY}`)
            },

            {
                slug:'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BRapi_key=${API_KEY}`)
            },

            {
                slug:'comedy',
                title: 'Comedia',
                item: await basicFetch(`/discover/movie?with_genres=35&language=pt-BRapi_key=${API_KEY}` )
            },

            {
                slug:'horror ',
                title: 'Terror ',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BRapi_key=${API_KEY}` )
            },

            {
                slug:'romance ',
                title: ' Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BRapi_key=${API_KEY}`)
            },

            {
                slug:'documentary ',
                title: 'Documentarios ',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BRapi_key=${API_KEY}`)
            }
        

        ];
    }

}