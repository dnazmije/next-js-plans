const Selectors = (props) => (
    <div className="select-container">
    
        <select className="select">
            <option value="1">Annually</option>
            <option value="12">Yearly</option>
            <option value="24">2 Years</option>
        </select>

        <select className="select">
            <option value="EUR">EUR</option>
            <option value="CHF">CHF</option>
            <option value="USD">USD</option>
        </select>

    <style jsx>{`
            .select {
                padding: 8px;
                border-radius: 3px;
                margin-left: 8px;
            }
            .select-container {
                
            }
        `}</style>
    </div>

    
);

export default Selectors;
