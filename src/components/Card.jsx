import React from "react";

export default function Card(props) {
  return (
    <div className="card-section--main-container">

        <img
          src= {props.displayImg}
          alt=""
          className="card-section--main-img"
        />
        <div>
          <div className="card-section--header-container">
            <img
              src="public/assets/map-pin-fill.svg"
              alt=""
              className="card-section--pin-logo"
            />
            <p>{props.countryName}</p>
            <a href={props.googleMapLink}
                className="card-section--google-map-link"
            >
               View on Google Maps
            </a>
          </div>

        <h1>{props.location}</h1>
        <h3>{props.fromDate} - {props.toDate}</h3>
        <p className="card-section--paragraph">
          {props.information}
        </p>
      </div>
      </div>

  );
}
