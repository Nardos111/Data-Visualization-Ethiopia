import React, { Component, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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
  { id: "make", label: "make", value: 411, color: "hsl(180, 70%, 50%)" },
  {
    id: "javascript",
    label: "javascript",
    value: 460,
    color: "hsl(68, 70%, 50%)",
  },
  { id: "ruby", label: "ruby", value: 531, color: "hsl(125, 70%, 50%)" },
  { id: "sass", label: "sass", value: 415, color: "hsl(197, 70%, 50%)" },
  { id: "hack", label: "hack", value: 70, color: "hsl(281, 70%, 50%)" },
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
              </Col>
            </Row>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}
