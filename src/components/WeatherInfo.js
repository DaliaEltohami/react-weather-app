import React from "react";

export default function WeatherInfo(props) {
  return (
    <div>
      {props.country && (
        <p className="info-wrapper">
          country : <span className="info">{props.country}</span>
        </p>
      )}
      {props.city && (
        <p className="info-wrapper">
          city : <span className="info">{props.city}</span>
        </p>
      )}
      {props.tempreature && (
        <p className="info-wrapper">
          tempreature : <span className="info">{props.tempreature}</span>
        </p>
      )}
      {props.humidity && (
        <p className="info-wrapper">
          humidity : <span className="info">{props.humidity}</span>
        </p>
      )}
      {props.description && (
        <p className="info-wrapper">
          description : <span className="info">{props.description}</span>
        </p>
      )}
      {props.error && (
        <p className="info-wrapper">
          error : <span className="info">{props.error}</span>
        </p>
      )}
    </div>
  );
}
