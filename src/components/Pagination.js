import  { useState, useEffect } from 'react'
import  './PaginationStyles.css'

const ProductCard = ({image, title}) => {
    return <div className='product-card'>
        <img src = {image} alt={title} className='product-image'/>
        <span>{title}</span>
    </div>
}

const PAGE_SIZE = 20;

const Pagination = () => {

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products?limit=500')
        const json = await data.json();
        setProducts(json.products)
    }

    useEffect(() => {
        fetchData();
    }, [])

    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / PAGE_SIZE);
    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    const handlePageChange = (n) => {
        setCurrentPage(n);
    }

    return !products.length ? <h1>No Products Found</h1> : (
        <div className='App'>
            <h1 className='header'>
            Pagination
        </h1>
         <div className='pagination-container'>
            {[...Array(totalPages).keys()].map((n) => (
                <span className='pagination' key={n} onClick={() => handlePageChange(n)}>{n}</span>
            ))}
        </div>
        <div className= 'product-container'>
        {products.slice(startIndex,endIndex).map((p) => 
             <ProductCard key={p.id} image={p.thumbnail} title={p.title}/>
        )}
        </div>
       
        </div>   
    )
}

export default Pagination