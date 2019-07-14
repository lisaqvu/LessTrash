import React, { PureComponent } from "react";
import slider from "./assets/slider.png";
import "./styles/main.css";
import chau from "./assets/coin.png";
import './styles/main.css';

class Home extends PureComponent {
  render() {
    return (
      <header className="masthead">
        <div className="container h-100">
          <img src={slider} alt={"slider"} className="slider" />
        </div>
        <div>
          <p class="text-center header_about_us">About us</p>
          <div className="hr_button_wrapper">
            <button className="hr_button" />
          </div>
          <p class="text-center slogan">
            Our world is a beautiful place and it has sustained everything
            living on it for millions of years. Although our presence has done
            much damage to it, we still have a chance to change it.
          </p>
          <div className="about_us_container">
            <table className="about_us_table">
              <tr>
                <td>
                  <img className="avatar_about_us" src={chau} alt={"chau"} />
                </td>
                <td>
                  <img className="avatar_about_us" src={chau} alt={"chau"} />
                </td>
                <td>
                  <img className="avatar_about_us" src={chau} alt={"chau"} />
                </td>
                <td>
                  <img className="avatar_about_us" src={chau} alt={"chau"} />
                </td>
                <td>
                  <img className="avatar_about_us" src={chau} alt={"chau"} />
                </td>
              </tr>
              <tr>
                <td>
                  <p className="about_us_name">Quynh Chau</p>
                </td>
                <td>
                  <p className="about_us_name">Quynh Chau</p>
                </td>
                <td>
                  <p className="about_us_name">Quynh Chau</p>
                </td>
                <td>
                  <p className="about_us_name">Quynh Chau</p>
                </td>
                <td>
                  <p className="about_us_name">Quynh Chau</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
