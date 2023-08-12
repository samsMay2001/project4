function Amenity({txt}) {
    return ( 
        <li>
            <label className="checkbox-item">
                {txt}
                <input type="checkbox" defaultChecked="checked" />
                <span className="checkmark" />
            </label>
        </li>
     );
}

export default Amenity;