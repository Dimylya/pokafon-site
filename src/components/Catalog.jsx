import { useContext, useEffect, useState } from "react";
import './Catalog.css';
import Card from "./Card";
import Delay from "../api/Delay";
import { ThemeContext } from "../context/theme";



function Catalog (){
    const theme = useContext(ThemeContext);
    const [catalog, setCatalog] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
      async function load() {
        setIsLoading(true);
        const result = await Delay();
        setCatalog(result)
        setIsLoading(false)
      }

      load();
    },[])
    function poisk (){
      if (!search) return catalog;
      return catalog.filter((e)=> e.name.toLowerCase().includes(search.toLowerCase()));
    }
    console.log(theme)
    if (isLoading) return <p className={`isLoading-${theme.currentTheme}`}>Загрузка</p>
    
    return (
        <>
            <h2 className={`catalog-h2-${theme.currentTheme}`}>Полный каталог</h2>
            <input className={`catalog-search-${theme.currentTheme}`} type="text" placeholder="Введите название товара" value={search} onChange={(e)=>{setSearch(e.target.value);}} />
            <div className="catalog-container">
                {poisk().map((e)=>{
                    return <Card item = {e}/>
                })}
            </div>
        </>
    )
}

export default Catalog;