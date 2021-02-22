import React, { Component, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { ResponsiveCalendar } from "@nivo/calendar";
import {
  Row,
  Col,
  Button,
  CardHeader,
  Card,
  CardBody,
  TabContent,
  TabPane,
  CardTitle,
} from "reactstrap";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import {
  Area,
  Line,
  ResponsiveContainer,
  Bar,
  BarChart,
  ComposedChart,
  CartesianGrid,
} from "recharts";

import { faArrowUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cdata = [
  { day: "2017-04-13", value: 54 },
  { day: "2017-11-29", value: 366 },
  { day: "2018-01-15", value: 96 },
  { day: "2019-10-09", value: 179 },
  { day: "2017-11-15", value: 152 },
  { day: "2018-08-28", value: 351 },
  { day: "2019-09-21", value: 274 },
];
const data = [
  { name: "Page A", uv: 1000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data2 = [
  { name: "Page A", uv: 4000, pv: 1, amt: 10000 },
  { name: "Page B", uv: 7300, pv: 4139, amt: 3221 },
  { name: "Page C", uv: 8200, pv: 7980, amt: 5229 },
  { name: "Page D", uv: 6278, pv: 4390, amt: 3200 },
  { name: "Page E", uv: 3189, pv: 7480, amt: 6218 },
  { name: "Page D", uv: 9478, pv: 6790, amt: 2200 },
  { name: "Page E", uv: 1289, pv: 1980, amt: 7218 },
  { name: "Page F", uv: 3139, pv: 2380, amt: 5150 },
  { name: "Page G", uv: 5349, pv: 3430, amt: 3210 },
];

export default class AnalyticsDashboard1 extends Component {
  constructor() {
    super();

    this.state = {
      dropdownOpen: false,
      activeTab1: "11",
    };
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      });
    }
  }

  render() {
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div>
            <PageTitle
              heading="Data Visualization"
              subheading="This is the main page"
              icon="pe-7s-graph1 icon-gradient bg-night-sky"
            />
            <Row>
              <Col lg="12">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Welcome</CardTitle>
                    <p align="justify">
                      Ethiopia’s large land area and diverse topography results
                      in different climates across the country. Thus, Ethiopia’s
                      climate is tropical in the south-east and north-east
                      lowlands and cooler in the highland regions in the central
                      and north of the country. Seasonal rainfall is driven
                      mainly by the migration of the Inter‐Tropical Convergence
                      Zone (ITCZ). Mean annual rainfall distribution is
                      approximately 2,000 mm over the south-western highlands
                      and less than 300 mm over the south-eastern and
                      north-eastern lowlands.  Temperatures across Ethiopia can
                      range from below 15ºC, over the highlands to above 25ºC in
                      the lowlands.
                    </p>
                    <br />
                    <a
                      href="http://sdwebx.worldbank.org/climateportal/countryprofile/doc/GFDRRCountryProfiles/wb_gfdrr_climate_change_country_profile_for_ETH.pdf"
                      target="_blank"
                    >
                      <Button color="primary">Details</Button>
                    </a>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Temperature</CardTitle>
                    <p align="justify">
                      Average temperatures in Ethiopia have increased by an
                      average of 1ºC since 1960 at an average rate of 0.25ºC per
                      decade; most noticeable increases have occurred July
                      through September. <br /> <br />
                      The average number of ‘hot nights’ (the hottest 10% of
                      nights annually) increased by 37.5% between 1960 and 2003
                      and the average number of ‘hot days’ per year, increased
                      by 20%.
                      <br /> <br />
                    </p>

                    <Button color="primary">Details</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Precipitation</CardTitle>
                    <p align="justify">
                      Long-term trends in rainfall are difficult to determine
                      for Ethiopia due to strong inter‐annual and inter‐decadal
                      variability in rainfall data. <br /> The south-central
                      region of the country has experienced a 20% decrease in
                      rainfall since 1960. <br /> The rise of sea surface
                      temperatures in the Indian Ocean influences the migration
                      of the ITCZ which can further increase variability in the
                      timing and duration of rainfall seasons, altering
                      traditional rainfall patterns and cause more frequent
                      drought.
                    </p>

                    <Button color="primary">Details</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}
