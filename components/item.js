const Item = (props) => (
    <div className="item-container">
        <div className="item">
            <div className="popular">
                <span>{props.stars.Popular}</span>
            </div>
            <div className="item-text">

            <div className="header center">
                <h3>{props.stars.Name.toUpperCase()}</h3>
            </div>            
            <div className="center">
                <span>€ </span>
                <span className="price">{props.stars.Pricing[1]}</span>
                <span>/mo</span>
            </div>
            <div className="center billed">
                <span>Billed as €{props.stars.Pricing[12]} per year</span>
                {/* https://reactjs.org/docs/conditional-rendering.html */}
            </div>
            <div className="center descr">
                <p> {props.stars.Description}</p>
            </div>
            <div className="descr-items">
                <p><i className="fa fa-arrow-right"></i> <span>{props.stars.Users}</span></p>
                <p><i className="fa fa-arrow-right"></i> <span>{props.stars.Storage}</span></p>
                <p><i className="fa fa-arrow-right"></i> <span>{props.stars.Addresses}</span></p>
                <p><i className="fa fa-arrow-right"></i> <span>{props.stars.Domain}</span></p>
                <p><i className="fa fa-arrow-right"></i> <span>{props.stars.Support}</span></p>
                {/* conditional re here */}
                {props.stars.Priority && <p><i className="fa fa-arrow-right"></i> <span>{props.stars.Priority}</span></p> }
                {props.stars.Options && <p><i className="fa fa-arrow-right"></i> <span>{props.stars.Options}</span></p> }
            </div>
            <div className="center action-button">
                <button>Select</button>
            </div>
                
            </div>            
            
        </div>

        <style jsx>{`
            .item {
                border: 1px solid #aaa;
                padding: 12px 24px;
            }
            .item-container {
                width: 25%;
                display: flex;
                flex-wrap: wrap;
                // min-height: 600px;
            }
            @media only screen and (max-width: 900px) {
                .item-container {
                    width: 100%;
                    display: initial;
                    flex-wrap: no-wrap;
                }
            }
            i {
                font-size: 12px;
                color: green;
                font-weight: 300;
                margin-right: 12px;
            }
            .center {
                text-align: center;
            }
            .price {
                font-size: 32px;
                color: #222;
            }
            .descr-items p {
                display: flex;
            }
            .descr-items {
                padding: 12px;
                min-height: 280px;
            }
            button {
                background-color: #6880dd;
                padding: 10px 24px;
                color: white;
                border: none;
                border-radius: 4px;
                font-size: 15px;
            }
            .action-button {
                padding-bottom: 30px;
            }
            .billed {
                font-size: 13px;
                padding-top:2px;
            }
            .descr {
                padding-top: 40px;
            }
            .popular {
                margin-bottom: -16px;
                text-align: center;
                margin-top: -10px;
                text-transform: uppercase;
                color: #a5ca8c;
                font-size: 11px;
                font-weight: bold;
            }
            .header {
                margin-top: 30px;
            }
            .item-text {
                margin-top:16px;
            }
        `}</style>
    </div>

);

export default Item;