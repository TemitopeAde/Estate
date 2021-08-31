const Find = () => {
    return (
        <div className="find-component">
            <div className="find-form">
                <form>
                    <select className="nice-select">
                        <option>Choose Area</option>
                        <option>chicago</option>
                        <option>London</option>
                        <option>Los Angeles</option>
                        <option>New York</option>
                        <option>New Jersey</option>
                    </select>
                    <select className="nice-select">
                        <option>Open House</option>
                        <option>Rent</option>
                        <option>Sale</option>
                        <option>Sold</option>
                    </select>
                    <select id="" className="nice-select">
                        <option>Property Type</option>
                        <option>Apartment</option>
                        <option>Co-op</option>
                        <option>Condo</option>
                        <option>Single Family Home</option>
                    </select>
                    <button type="submit" className="btn find-btn">Find Now</button>
                </form>
            </div>
        </div>
    )
}


export default Find

