import React from "react";

export default function WeatherForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          placeholder="Enter Country..."
          name="country"
        ></input>
        <input type="text" placeholder="Enter City..." name="city"></input>
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
}
