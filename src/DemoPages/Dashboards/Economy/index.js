import React, { Component, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { ResponsiveLine } from "@nivo/line";
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

const rdata = [
  { taste: "fruity", chardonay: 73, carmenere: 114, syrah: 96 },
  { taste: "bitter", chardonay: 48, carmenere: 94, syrah: 30 },
  { taste: "heavy", chardonay: 52, carmenere: 25, syrah: 57 },
  { taste: "strong", chardonay: 76, carmenere: 62, syrah: 26 },
  { taste: "sunny", chardonay: 66, carmenere: 120, syrah: 111 },
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

const vdata = [
  {
    id: "japan",
    color: "hsl(328, 70%, 50%)",
    data: [
      { x: "plane", y: 217 },
      { x: "helicopter", y: 44 },
      { x: "boat", y: 45 },
      { x: "train", y: 49 },
      { x: "subway", y: 205 },
      { x: "bus", y: 283 },
      { x: "car", y: 113 },
      { x: "moto", y: 270 },
      { x: "bicycle", y: 293 },
      { x: "horse", y: 163 },
      { x: "skateboard", y: 5 },
      { x: "others", y: 122 },
    ],
  },
  {
    id: "france",
    color: "hsl(93, 70%, 50%)",
    data: [
      { x: "plane", y: 156 },
      { x: "helicopter", y: 286 },
      { x: "boat", y: 233 },
      { x: "train", y: 261 },
      { x: "subway", y: 45 },
      { x: "bus", y: 25 },
      { x: "car", y: 124 },
      { x: "moto", y: 279 },
      { x: "bicycle", y: 58 },
      { x: "horse", y: 90 },
      { x: "skateboard", y: 79 },
      { x: "others", y: 112 },
    ],
  },
  {
    id: "us",
    color: "hsl(284, 70%, 50%)",
    data: [
      { x: "plane", y: 293 },
      { x: "helicopter", y: 6 },
      { x: "boat", y: 224 },
      { x: "train", y: 165 },
      { x: "subway", y: 157 },
      { x: "bus", y: 58 },
      { x: "car", y: 7 },
      { x: "moto", y: 224 },
      { x: "bicycle", y: 219 },
      { x: "horse", y: 42 },
      { x: "skateboard", y: 158 },
      { x: "others", y: 70 },
    ],
  },
  {
    id: "germany",
    color: "hsl(263, 70%, 50%)",
    data: [
      { x: "plane", y: 185 },
      { x: "helicopter", y: 117 },
      { x: "boat", y: 84 },
      { x: "train", y: 190 },
      { x: "subway", y: 154 },
      { x: "bus", y: 258 },
      { x: "car", y: 195 },
      { x: "moto", y: 52 },
      { x: "bicycle", y: 101 },
      { x: "horse", y: 165 },
      { x: "skateboard", y: 234 },
      { x: "others", y: 87 },
    ],
  },
  {
    id: "norway",
    color: "hsl(64, 70%, 50%)",
    data: [
      { x: "plane", y: 121 },
      { x: "helicopter", y: 157 },
      { x: "boat", y: 288 },
      { x: "train", y: 39 },
      { x: "subway", y: 225 },
      { x: "bus", y: 73 },
      { x: "car", y: 140 },
      { x: "moto", y: 32 },
      { x: "bicycle", y: 282 },
      { x: "horse", y: 167 },
      { x: "skateboard", y: 130 },
      { x: "others", y: 227 },
    ],
  },
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
              heading="Economy"
              subheading="This section provides the options to visualize historical climate data for different timeframes via map and annual cycle chart."
              icon="pe-7s-cash icon-gradient bg-night-sky"
            />

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
                            width={730}
                            height={250}
                            data={adata}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="blue" />
                            <Line type="monotone" dataKey="uv" stroke="red" />
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
                            data={ldata}
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
                              <linearGradient
                                id="colorPv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="5%"
                                  stopColor="#82ca9d"
                                  stopOpacity={0.8}
                                />
                                <stop
                                  offset="95%"
                                  stopColor="#82ca9d"
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
                              dataKey="uv"
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
                        <div className="widget-numbers">63.2k</div>
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
                        <div className="widget-numbers">63.2k</div>
                        <div className="widget-subheading">Euro</div>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="card mb-3 widget-chart card-hover-shadow-2x">
                        <div className="icon-wrapper border-light rounded">
                          <div className="icon-wrapper-bg bg-light" />
                          <i className="lnr-diamond icon-gradient bg-happy-itmeo" />
                        </div>
                        <div className="widget-numbers">63.2k</div>
                        <div className="widget-subheading">Pound</div>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="card mb-3 widget-chart card-hover-shadow-2x">
                        <div className="icon-wrapper border-light rounded">
                          <div className="icon-wrapper-bg bg-light" />
                          <i className="lnr-diamond icon-gradient bg-happy-itmeo" />
                        </div>
                        <div className="widget-numbers">63.2k</div>
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
                          keys={["chardonay", "carmenere", "syrah"]}
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
                    <BarChart width={730} height={250} data={bdata}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" fill="red" />
                      <Bar dataKey="uv" fill="blue" />
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
                    <ComposedChart width={730} height={250} data={data}>
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
                      <Bar dataKey="pv" barSize={20} fill="orange" />
                      <Line type="monotone" dataKey="uv" stroke="green" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <Card className="main-card mb-3">
                  <CardBody>
                    <ResponsiveContainer height={400}>
                      <ResponsiveLine
                        data={vdata}
                        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                        xScale={{ type: "point" }}
                        yScale={{
                          type: "linear",
                          min: "auto",
                          max: "auto",
                          stacked: true,
                          reverse: false,
                        }}
                        yFormat=" >-.2f"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                          orient: "bottom",
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                          legend: "transportation",
                          legendOffset: 36,
                          legendPosition: "middle",
                        }}
                        axisLeft={{
                          orient: "left",
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                          legend: "count",
                          legendOffset: -40,
                          legendPosition: "middle",
                        }}
                        pointSize={10}
                        pointColor={{ theme: "background" }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: "serieColor" }}
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={[
                          {
                            anchor: "bottom-right",
                            direction: "column",
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: "left-to-right",
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: "circle",
                            symbolBorderColor: "rgba(0, 0, 0, .5)",
                            effects: [
                              {
                                on: "hover",
                                style: {
                                  itemBackground: "rgba(0, 0, 0, .03)",
                                  itemOpacity: 1,
                                },
                              },
                            ],
                          },
                        ]}
                      />
                    </ResponsiveContainer>
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
