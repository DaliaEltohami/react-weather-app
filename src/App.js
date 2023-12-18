import { Component } from "react";
import "./App.css";
import WeatherForm from "./components/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";

// https://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

const apiKey = "e54731bc5eadb2080db2679daaabc6bf";

class App extends Component {
  state = {
    tempreature: "",
    humidity: "",
    city: "",
    country: "",
    description: "",
    error: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    try {
      if (country && city) {
        const api = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${apiKey}`
        );
        const data = await api.json();
        console.log(data);
        if (data.id) {
          console.log(data.id);
          this.setState({
            tempreature: data.main.temp,
            humidity: data.main.humidity,
            city: data.name,
            country: data.sys.country,
            description: data.weather[0].description,
            error: "",
          });
        }
        if (data.message) {
          this.setState({
            tempreature: "",
            humidity: "",
            city: "",
            country: "",
            description: "",
            error: data.message,
          });
        }
      } else {
        this.setState({
          tempreature: "",
          humidity: "",
          city: "",
          country: "",
          description: "",
          error: "Please Enter Country and city",
        });
      }
    } catch (e) {
      console.log(e);
      this.setState({
        tempreature: "",
        humidity: "",
        city: "",
        country: "",
        description: "",
        error: "",
      });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1> React Weather App</h1>
          <WeatherForm handleSubmit={this.handleSubmit} />
          <WeatherInfo
            tempreature={this.state.tempreature}
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
