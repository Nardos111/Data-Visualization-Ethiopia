import React, { Component, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { ResponsiveRadar } from "@nivo/radar";

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
  AreaChart,
  Area,
  Line,
  ResponsiveContainer,
  Bar,
  BarChart,
  ComposedChart,
  CartesianGrid,
  Tooltip,
  YAxis,
  XAxis,
  Legend,
  LineChart,
} from "recharts";

import * as GDP from "../../../assets/json_data/GDP.json";
import * as GNI from "../../../assets/json_data/GNI.json";
import * as enrollment from "../../../assets/json_data/school_enrollment.json";
import * as per_capita from "../../../assets/json_data/GDP_per_capita.json";
import { parse } from "@fortawesome/fontawesome-svg-core";

const rdata = [
  { taste: "Recurrent Expenditure", budget: 133321561063 },
  { taste: "Capital Expenditure", budget: 160329788483 },
  { taste: "Subsidy Appropriation to Regions", budget: 176361602899 },
  { taste: "Sustainable Development Goals", budget: 6000000000 },
];
const bdata = [
  { name: "Page A", uv: 4000, pv: 2400 },
  { name: "Page B", uv: 3000, pv: 1398 },
  { name: "Page C", uv: 2000, pv: 9800 },
  { name: "Page D", uv: 2780, pv: 3908 },
  { name: "Page E", uv: 1890, pv: 4800 },
  { name: "Page F", uv: 2390, pv: 3800 },
  { name: "Page G", uv: 3490, pv: 4300 },
];
const ldata = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const adata = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
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

export default class economyDashboard extends Component {
  constructor() {
    super();

    this.state = {
      exchange: [],
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
  componentDidMount() {
    fetch(
      "http://data.fixer.io/api/latest?access_key=1bd52d530ad1f32c1595a3ff8a9c5b67"
    )
      .then((results) => results.json())
      .then((result) => {
        this.setState({
          exchange: result.rates,
        });
      });
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
              heading="Economy"
              subheading="This section provides the options to visualize historical climate data for different timeframes via map and annual cycle chart."
              icon="pe-7s-cash icon-gradient bg-night-sky"
            />
            <div>
              <h1>List of todos</h1>
              {console.log(this.state.exchange)}
            </div>
            <Row>
              <Col lg="12">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Ethiopia's Economy</CardTitle>
                    <p align="justify">
                      Ethiopia’s location gives it strategic dominance as a
                      jumping off point in the Horn of Africa, close to the
                      Middle East and its markets. Ethiopia is landlocked,
                      bordering Eritrea, Somalia, Kenya, South Sudan, and Sudan,
                      and has been using neighboring Djibouti's main port for
                      the last two decades. However, with the recent peace with
                      Eritrea, Ethiopia is set to resume accessing the Eritrean
                      ports of Assab and Massawa for its international trade.
                      With more than 112 million people (2019), Ethiopia is the
                      second most populous nation in Africa after Nigeria, and
                      the fastest growing economy in the region. However, it is
                      also one of the poorest, with a per capita income of $850.
                      Ethiopia aims to reach lower-middle-income status by 2025.
                    </p>
                    <br />
                    <a
                      href="https://www.worldbank.org/en/country/ethiopia/overview"
                      target="_blank"
                    >
                      <Button color="primary">Details</Button>
                    </a>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <Card className="mb-3">
                  <CardHeader className="card-header-tab">
                    <div className="card-header-title">GDP</div>
                  </CardHeader>
                  <TabContent activeTab={this.state.activeTab1}>
                    <TabPane tabId="11">
                      <div className="widget-chart p-0">
                        <ResponsiveContainer height={300}>
                          <LineChart
                            data={GDP}
                            margin={{
                              top: 10,
                              right: 30,
                              left: 80,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis
                              domain={[7324903188.4058, 95912590628.1412]}
                            />
                            <Tooltip />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="value"
                              stroke="blue"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </TabPane>
                  </TabContent>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <Card className="mb-3">
                  <CardHeader className="card-header-tab">
                    <div className="card-header-title">GDP Per Capita</div>
                  </CardHeader>
                  <TabContent activeTab={this.state.activeTab1}>
                    <TabPane tabId="11">
                      <div className="widget-chart p-0">
                        <ResponsiveContainer height={300}>
                          <AreaChart
                            width={730}
                            height={250}
                            data={per_capita}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                          >
                            <defs>
                              <linearGradient
                                id="colorUv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="5%"
                                  stopColor="#8884d8"
                                  stopOpacity={0.8}
                                />
                                <stop
                                  offset="95%"
                                  stopColor="#8884d8"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                            </defs>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area
                              type="monotone"
                              dataKey="value"
                              stroke="#8884d8"
                              fillOpacity={1}
                              fill="url(#colorUv)"
                            />
                            <Area
                              type="monotone"
                              dataKey="pv"
                              stroke="#82ca9d"
                              fillOpacity={1}
                              fill="url(#colorPv)"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </TabPane>
                  </TabContent>
                </Card>
              </Col>
            </Row>
            <Row>
              <Row>
                <Col md="12" lg="6">
                  <Row>
                    <Col md="6">
                      <div className="mb-3 widget-chart card-hover-shadow-2x">
                        <Card>
                          <CardHeader className="card-header-tab">
                            <div className="card-header-title">
                              Exchange Rates
                            </div>
                          </CardHeader>
                        </Card>
                      </div>
                    </Col>
                    <Col md="6"></Col>
                    <Col md="6">
                      <div className="card mb-3 widget-chart card-hover-shadow-2x">
                        <div className="icon-wrapper border-light rounded">
                          <div className="icon-wrapper-bg bg-light" />
                          <i className="lnr-diamond icon-gradient bg-happy-itmeo" />
                        </div>
                        <div className="widget-numbers">
                          {Math.round(
                            (parseFloat(this.state.exchange.ETB) /
                              parseFloat(this.state.exchange.USD)) *
                              100
                          ) / 100}
                        </div>
                        <div className="widget-subheading">
                          United States Dollar
                        </div>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="card mb-3 widget-chart card-hover-shadow-2x">
                        <div className="icon-wrapper border-light rounded">
                          <div className="icon-wrapper-bg bg-light" />
                          <i className="lnr-diamond icon-gradient bg-happy-itmeo" />
                        </div>
                        <div className="widget-numbers">
                          {Math.round(this.state.exchange.ETB * 100) / 100}
                        </div>
                        <div className="widget-subheading">Euro</div>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="card mb-3 widget-chart card-hover-shadow-2x">
                        <div className="icon-wrapper border-light rounded">
                          <div className="icon-wrapper-bg bg-light" />
                          <i className="lnr-diamond icon-gradient bg-happy-itmeo" />
                        </div>
                        <div className="widget-numbers">
                          {Math.round(
                            (this.state.exchange.ETB /
                              this.state.exchange.GBP) *
                              100
                          ) / 100}
                        </div>
                        <div className="widget-subheading">Pound</div>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="card mb-3 widget-chart card-hover-shadow-2x">
                        <div className="icon-wrapper border-light rounded">
                          <div className="icon-wrapper-bg bg-light" />
                          <i className="lnr-diamond icon-gradient bg-happy-itmeo" />
                        </div>
                        <div className="widget-numbers">
                          {Math.round(
                            (this.state.exchange.ETB /
                              this.state.exchange.CNY) *
                              100
                          ) / 100}
                        </div>
                        <div className="widget-subheading">Yuan</div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md="12" lg="6">
                  <Card className="mb-3">
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title">Budget Allocation</div>
                    </CardHeader>

                    <CardBody className="pt-2">
                      <ResponsiveContainer height={400}>
                        <ResponsiveRadar
                          data={rdata}
                          keys={["budget"]}
                          indexBy="taste"
                          maxValue="auto"
                          margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                          curve="linearClosed"
                          borderWidth={2}
                          borderColor={{ from: "color" }}
                          gridLevels={5}
                          gridShape="circular"
                          gridLabelOffset={36}
                          enableDots={true}
                          dotSize={10}
                          dotColor={{ theme: "background" }}
                          dotBorderWidth={2}
                          dotBorderColor={{ from: "color" }}
                          enableDotLabel={true}
                          dotLabel="value"
                          dotLabelYOffset={-12}
                          colors={{ scheme: "nivo" }}
                          fillOpacity={0.25}
                          blendMode="multiply"
                          animate={true}
                          motionConfig="wobbly"
                          isInteractive={true}
                          legends={[
                            {
                              anchor: "top-left",
                              direction: "column",
                              translateX: -50,
                              translateY: -40,
                              itemWidth: 80,
                              itemHeight: 20,
                              itemTextColor: "#999",
                              symbolSize: 12,
                              symbolShape: "circle",
                              effects: [
                                {
                                  on: "hover",
                                  style: {
                                    itemTextColor: "#000",
                                  },
                                },
                              ],
                            },
                          ]}
                        />
                      </ResponsiveContainer>
                    </CardBody>
                  </Card>
                  <Row></Row>
                </Col>
              </Row>
            </Row>
            <Row>
              <Col lg="6">
                <div className="card mb-3 widget-chart">
                  <CardHeader className="card-header-tab">
                    <div className="card-header-title">
                      IBRD/IDA Operations Approved by Fiscal Year
                    </div>
                  </CardHeader>
                  <ResponsiveContainer height={300}>
                    <BarChart width={730} height={250} data={GNI}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="red" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Col>
              <Col lg="6">
                <div className="card mb-3 widget-chart">
                  <CardHeader className="card-header-tab">
                    <div className="card-header-title">
                      Summary of IDA Credits
                    </div>
                  </CardHeader>
                  <ResponsiveContainer height={300}>
                    <ComposedChart width={730} height={250} data={enrollment}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <CartesianGrid stroke="#f5f5f5" />
                      <Area
                        type="monotone"
                        dataKey="amt"
                        fill="blue"
                        stroke="green"
                      />
                      <Line type="monotone" dataKey="value" stroke="green" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </Col>
            </Row>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}
