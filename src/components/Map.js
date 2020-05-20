import React, { Component } from "react";
import ymaps from "ymaps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt as PointIcon } from "@fortawesome/free-solid-svg-icons";

const API_ADDRESS =
  "https://api-maps.yandex.ru/2.1/?apikey=ea6dba4a-0251-4ffa-a9a4-bcb0e00e4732&lang=ru_RU";
const CENTER = [55.798682, 37.69555];
const ZOOM = 13;

export class Map extends Component {
  state = {
    map: null,
    ymaps: undefined,
    points: {
      office: "Колодезный переулок д.2а",
      subway: "метро Сокольники",
      square: "Преображенская площадь"
    }
  };

  loadYandexMapApi(api) {
    ymaps
      .load(api)
      .then(ymaps => this.createMap(ymaps))
      .catch(e => {
        throw new Error("Failed: " + e);
      });
  }

  createMap(ymaps) {
    this.setState({ ymaps });

    if (this.state.ymaps) {
      this.setState({
        map: new this.state.ymaps.Map("map", {
          center: CENTER,
          zoom: ZOOM
        })
      });
    }

    this.createRoute();
  }

  createRoute() {
    new this.state.ymaps.vow.all([
      this.state.ymaps.route([
        this.state.points.office,
        this.state.points.subway
      ]),
      this.state.ymaps.route([
        this.state.points.office,
        this.state.points.square
      ])
    ]).then(routes => {
      const [route1, route2] = routes;
      this.state.map.geoObjects.add(route1).add(route2);
      routes.map(r => {
        const points = r.getWayPoints();
        const lastPoint = points.getLength() - 1;
        points.options.set("preset", "islands#blueStretchyIcon");
        points.get(0).properties.set("iconContent", r.requestPoints[0]);
        points.get(lastPoint).properties.set("iconContent", r.requestPoints[1]);
      });
    });
  }

  componentDidMount() {
    this.loadYandexMapApi(API_ADDRESS);
  }
  render() {
    return (
      <div className="contacts__map-container">
        <span className="contacts__address">
          <FontAwesomeIcon icon={PointIcon} size="xs" /> Москва, Колодезный
          переулок д.2а
        </span>
        <div className="contacts__map" id="map" />
      </div>
    );
  }
}
