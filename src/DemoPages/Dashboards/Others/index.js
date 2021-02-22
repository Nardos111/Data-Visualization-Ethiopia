import React, { Component, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { ResponsiveLine } from "@nivo/line";
import {
  Row,
  Col,
  Button,
  CardHeader,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import AreaExample from "../../Charts/ChartJs/Examples/line2";
import LineExample from "../../Charts/ChartJs/Examples/line";
import BarExample from "../../Charts/ChartJs/Examples/bar";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveContainer } from "recharts";
const pdata = [
  { id: "Oromo", label: "Oromo", value: 33.8, color: "hsl(180, 70%, 50%)" },
  {
    id: "javascript",
    label: "Amharic",
    value: 29.3,
    color: "hsl(68, 70%, 50%)",
  },
  { id: "Somali", label: "Somali", value: 6.2, color: "hsl(125, 70%, 50%)" },
  {
    id: "Tigrinya",
    label: "Tigrinya",
    value: 5.9,
    color: "hsl(197, 70%, 50%)",
  },
  {
    id: "Wolaytta",
    label: "Wolaytta",
    value: 2.2,
    color: "hsl(281, 70%, 50%)",
  },
  { id: "Sidamo", label: "Sidamo", value: 2, color: "hsl(281, 70%, 50%)" },
  { id: "Gurage", label: "Gurage", value: 2, color: "hsl(281, 70%, 50%)" },
  { id: "Hadiyya", label: "Hadiyya", value: 1.7, color: "hsl(281, 70%, 50%)" },
  { id: "Afar", label: "Afar", value: 1.7, color: "hsl(281, 70%, 50%)" },
  { id: "Gamo", label: "Gamo", value: 1.5, color: "hsl(281, 70%, 50%)" },
  { id: "Gedeo", label: "Gedeo", value: 1.3, color: "hsl(281, 70%, 50%)" },
  { id: "Kafa", label: "Kafa", value: 1.1, color: "hsl(281, 70%, 50%)" },
  {
    id: "Other Languages",
    label: "Other Languages",
    value: 8.1,
    color: "hsl(281, 70%, 50%)",
  },
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
export default class othersDashboard extends Component {
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
            <Row>
              <Col lg="12">
                <div className="mb-3 widget-chart card-hover-shadow-2x">
                  <Card>
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title">Health</div>
                    </CardHeader>
                  </Card>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Child Mortality</CardTitle>
                    <AreaExample />
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Ethiopia's Health System</CardTitle>
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
                      second most populous nation in Africa after Nigeria.
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
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Clean Water</CardTitle>
                    <LineExample />
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Life Expectancy</CardTitle>
                    <BarExample />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <div className="mb-3 widget-chart card-hover-shadow-2x">
                  <Card>
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title">Education</div>
                    </CardHeader>
                  </Card>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Gender Proportion</CardTitle>
                    <ResponsiveContainer height={600}>
                      <ResponsivePie
                        data={pdata}
                        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                        innerRadius={0.5}
                        padAngle={0.7}
                        cornerRadius={3}
                        colors={{ scheme: "nivo" }}
                        borderWidth={1}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", 0.2]],
                        }}
                        radialLabelsSkipAngle={10}
                        radialLabelsTextColor="#333333"
                        radialLabelsLinkColor={{ from: "color" }}
                        sliceLabelsSkipAngle={10}
                        sliceLabelsTextColor="#333333"
                        defs={[
                          {
                            id: "dots",
                            type: "patternDots",
                            background: "inherit",
                            color: "rgba(255, 255, 255, 0.3)",
                            size: 4,
                            padding: 1,
                            stagger: true,
                          },
                          {
                            id: "lines",
                            type: "patternLines",
                            background: "inherit",
                            color: "rgba(255, 255, 255, 0.3)",
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10,
                          },
                        ]}
                        fill={[
                          {
                            match: {
                              id: "ruby",
                            },
                            id: "dots",
                          },
                          {
                            match: {
                              id: "c",
                            },
                            id: "dots",
                          },
                          {
                            match: {
                              id: "go",
                            },
                            id: "dots",
                          },
                          {
                            match: {
                              id: "python",
                            },
                            id: "dots",
                          },
                          {
                            match: {
                              id: "scala",
                            },
                            id: "lines",
                          },
                          {
                            match: {
                              id: "lisp",
                            },
                            id: "lines",
                          },
                          {
                            match: {
                              id: "elixir",
                            },
                            id: "lines",
                          },
                          {
                            match: {
                              id: "javascript",
                            },
                            id: "lines",
                          },
                        ]}
                        legends={[
                          {
                            anchor: "bottom",
                            direction: "row",
                            justify: false,
                            translateX: 0,
                            translateY: 56,
                            itemsSpacing: 0,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: "#999",
                            itemDirection: "left-to-right",
                            itemOpacity: 1,
                            symbolSize: 18,
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
              </Col>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>School Enrollment</CardTitle>
                    <LineExample />
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Something</CardTitle>
                    <LineExample />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <div className="mb-3 widget-chart card-hover-shadow-2x">
                  <Card>
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title">Others</div>
                    </CardHeader>
                  </Card>
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
