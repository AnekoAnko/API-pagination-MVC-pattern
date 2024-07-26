function PageButtons({setPage, page, totalPosts, limit}){
    const handlePrev = () => {
        if (page > 1) {
            setPage(page -1);
        }
    }

    const handleNext = () => { 
        if ((page+1) * limit <= totalPosts){
            setPage(page + 1);
        }
    }

    return  (
    <div className='pageButtons' >
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
    </div>
    )
}

export default PageButtons;