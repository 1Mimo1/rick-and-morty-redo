const Pagination = ({pages, setCurrentPage, currentPage}) => {
    const currentLi ='current-li'
  return (
    <ul className="pagination-ul">
        {
            pages.map((page) => <li key={page} className= {`${currentPage === page && currentLi}`}onClick={() => setCurrentPage(page)}>{page}</li>)
        }
    </ul>
  )
}
export default Pagination