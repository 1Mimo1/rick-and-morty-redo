import { useEffect, useState } from "react"
import ResidentCard from "./ResidentCard"
import Pagination from "./Pagination"

const ResidentList = ({residents, currentLocation}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const RESIDENTS_PER_PAGE = 15 
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)
  //slices
  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE 
  const residentsShown = residents.slice(sliceStart, sliceEnd)

  const pages = []; 
  for (let x = 1; x <= totalPages; x++ ) {
    pages.push(x)
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [currentLocation])
  return (
    <section>
      <section className="residentlist-section">
          {
              residentsShown.map((resident) =>  <ResidentCard key={resident} residentUrl ={resident}/> )
          }
      </section>
      <Pagination pages = {pages} setCurrentPage = {setCurrentPage} currentPage={currentPage}/> 
    </section>
  )
}
export default ResidentList