const LocationForm = ( {handleSubmit} ) => {
  return (
    <section className="locationform-section">
      
        <img className="title-img" src="/images/rick-and-morty.png" alt="" />
      
      <form className="location-form" onSubmit={handleSubmit}>
          <input className="location-form_input"placeholder="Location id..." type="number" min={1} max={126} id="newLocation"/>
          <button className="location-form_button">Search</button>
      </form>
    </section>
  )
}
export default LocationForm