const LocationInfo = ({currentLocation}) => {
  return (
    <div className="help">
      <section className="location-section">
          <div className="location-h2-container">
            <h2 className="location-h2">{currentLocation?.name}</h2>
          </div>
          <ul className="location-ul">
              <li className="location-li">Type - {currentLocation?.type}</li>
              <li className="location-li">Dimension - {currentLocation?.dimension}</li>
              <li className="location-li">Population - {currentLocation?.residents.length}</li>
          </ul>
      </section>
    </div>
  )
}
export default LocationInfo