import React from "react";

export default function CountryPage (props) {
    return (
        <div className="country-page">
            <div className="container">
                <div className="btn-back">
                    <span>&#129044;</span> Back
                </div>
                <div className="country">
                    <div className="country__flag">
                        <img src="./src/assets/flag.png" alt="*Country name* flag" />
                    </div>
                    <div className="country__info">
                        <h1 className="country__name">Belgium</h1>
                        <div className="country__cols">
                            <div className="country__col">
                                <p className="country__data">
                                    <span>Native Name:</span> België
                                </p>
                                <p className="country__data">
                                    <span>Population:</span> 11,319,511
                                </p>
                                <p className="country__data">
                                    <span>Region:</span> Europe
                                </p>
                                <p className="country__data">
                                    <span>Sub Region:</span> Western Europe
                                </p>
                                <p className="country__data">
                                    <span>Capital:</span> Brussels
                                </p>
                            </div>
                            <div className="country__col">
                                <p className="country__data">
                                    <span>Top Level Domain:</span> .be
                                </p>
                                <p className="country__data">
                                    <span>Currencies:</span> Euro
                                </p>
                                <p className="country__data">
                                    <span>Languages:</span> Dutch, French, German
                                </p>
                            </div>
                        </div>
                        <div className="country__borders">
                            <p className="country__data">
                                <span>Border Countries:</span>
                            </p>
                            <div className="border-country">France</div>
                            <div className="border-country">Germany</div>
                            <div className="border-country">Netherlands</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}