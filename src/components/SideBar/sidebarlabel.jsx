function SidebarLabel({label, amount}) {
    return ( 
        <div className="sidebarlabel">
            <li>
                <label className="checkbox-item">{label}
                <input type="checkbox"  />
                <span className="checkmark" />
                </label>
                <span className="categorey-no">{amount}</span>
            </li>
        </div>
     );
}

export default SidebarLabel;