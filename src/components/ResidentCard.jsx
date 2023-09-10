import axios from "axios"
import { useEffect, useState } from "react"

const ResidentCard = ({residentUrl}) => {
    const [residentInfo, setResidentInfo] = useState(null)

    useEffect(() => {
      
      axios
        .get(residentUrl)
        .then(({data}) =>setResidentInfo(data))
        .catch((err) => console.log(err))
    }, [])
    
  return (
    <article className="article"> 
        <header className="residentcard-header">
            <img className="residentcard-img" src={residentInfo?.image} alt="" />
        </header>
        <section className="residentcard-section">
            <div className="residentcard-div_1">
                <h3 className="residentcard-div_h3">{residentInfo?.name}</h3>
                <div className="resident-fix">
                    <div className={`${residentInfo?.status}`}></div>
                    <h4 className="residentcard-div_h4">{residentInfo?.status}</h4>  
                </div>  
            </div>
            <div className="residentcard-div_2">
                <ul className="residentcard-div_ul">
                    <li className="residentcard-div_li"><span className="residentcard-div_span">Species</span> {residentInfo?.species}</li>
                    <li className="residentcard-div_li"><span className="residentcard-div_span">Origin</span> {residentInfo?.origin.name}</li>
                    <li className="residentcard-div_li"><span className="residentcard-div_span">Appeared</span> {residentInfo?.episode.length}</li>
                </ul>
            </div>
        </section>
    </article>
  )
}
export default ResidentCard