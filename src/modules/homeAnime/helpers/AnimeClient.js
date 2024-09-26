import axios from "axios";

const url = 'https://api.jikan.moe/v4/seasons/now';
let allItems = [];
let page = 0;
let hasPage = false;


export const getAnimeFachada=async()=>{
    return await getAnime();
}

const getAnime=async()=>{
    console.log(url);

    do{
        page++;
        const data = await axios.get(url+'?page='+page).then(r=>r.data);
        allItems = allItems.concat(data.data);
        hasPage = data.pagination.has_next_page;
        console.log(hasPage);
        console.log(page);
        console.dir("datos: ",data);
        console.dir("todos los items: ",allItems);
    }while(hasPage && page < 3)
    
    
    return allItems;
}