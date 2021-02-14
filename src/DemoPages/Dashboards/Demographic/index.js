import React, { Component, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Row, Col, Button, Card, CardBody, CardTitle } from "reactstrap";
import VectorMapsAnimated from "../../Components/Maps/Examples/VectorMaps/Animated";
import PageTitle from "../../../Layout/AppMain/PageTitle";
import { ResponsiveBar } from "@nivo/bar";
import PolarExample from "../../Charts/ChartJs/Examples/polar";
import BubbleExample from "../../Charts/ChartJs/Examples/bubble";
import { ResponsiveContainer } from "recharts";
import HorizontalBarExample from "../../Charts/ChartJs/Examples/horizontalBar";
import * as ddata from "../../../assets/json_data/population.json"
const tdata = [
  {
    country: "AD",
  },
  {
    country: "AE",
    "hot dog": 117,
    "hot dogColor": "hsl(216, 70%, 50%)",
    burger: 73,
    burgerColor: "hsl(210, 70%, 50%)",
    sandwich: 198,
    sandwichColor: "hsl(255, 70%, 50%)",
    kebab: 33,
    kebabColor: "hsl(359, 70%, 50%)",
    fries: 34,
    friesColor: "hsl(222, 70%, 50%)",
    donut: 87,
    donutColor: "hsl(59, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 6,
    "hot dogColor": "hsl(7, 70%, 50%)",
    burger: 15,
    burgerColor: "hsl(55, 70%, 50%)",
    sandwich: 1,
    sandwichColor: "hsl(8, 70%, 50%)",
    kebab: 115,
    kebabColor: "hsl(91, 70%, 50%)",
    fries: 167,
    friesColor: "hsl(139, 70%, 50%)",
    donut: 181,
    donutColor: "hsl(113, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 81,
    "hot dogColor": "hsl(255, 70%, 50%)",
    burger: 69,
    burgerColor: "hsl(213, 70%, 50%)",
    sandwich: 9,
    sandwichColor: "hsl(1, 70%, 50%)",
    kebab: 0,
    kebabColor: "hsl(148, 70%, 50%)",
    fries: 76,
    friesColor: "hsl(200, 70%, 50%)",
    donut: 124,
    donutColor: "hsl(142, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 21,
    "hot dogColor": "hsl(128, 70%, 50%)",
    burger: 135,
    burgerColor: "hsl(157, 70%, 50%)",
    sandwich: 140,
    sandwichColor: "hsl(135, 70%, 50%)",
    kebab: 12,
    kebabColor: "hsl(73, 70%, 50%)",
    fries: 103,
    friesColor: "hsl(76, 70%, 50%)",
    donut: 107,
    donutColor: "hsl(335, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 166,
    "hot dogColor": "hsl(121, 70%, 50%)",
    burger: 185,
    burgerColor: "hsl(53, 70%, 50%)",
    sandwich: 14,
    sandwichColor: "hsl(348, 70%, 50%)",
    kebab: 191,
    kebabColor: "hsl(51, 70%, 50%)",
    fries: 191,
    friesColor: "hsl(132, 70%, 50%)",
    donut: 31,
    donutColor: "hsl(52, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 11,
    "hot dogColor": "hsl(91, 70%, 50%)",
    burger: 127,
    burgerColor: "hsl(267, 70%, 50%)",
    sandwich: 181,
    sandwichColor: "hsl(199, 70%, 50%)",
    kebab: 61,
    kebabColor: "hsl(350, 70%, 50%)",
    fries: 36,
    friesColor: "hsl(54, 70%, 50%)",
    donut: 190,
    donutColor: "hsl(225, 70%, 50%)",
  },
];


export default class demographicDashboard extends Component {
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
              heading="Demographic"
              subheading="This section provides the options to visualize Ethiopia's population at different timeframes via map and charts."
              icon="pe-7s-map-2 icon-gradient bg-night-sky"
            />
            <Row>
              <Col lg="12">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Male and Female Population</CardTitle>
                    <ResponsiveContainer height={300}>
                      <ResponsiveBar
                        data={ddata}
                        keys={[
                          "male",
                          "female",
                        ]}
                        indexBy="year"
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                        padding={0.3}
                        valueScale={{ type: "linear" }}
                        indexScale={{ type: "band", round: true }}
                        colors={{ scheme: "nivo" }}
                        defs={[
                          {
                            id: "dots",
                            type: "patternDots",
                            background: "inherit",
                            color: "#38bcb2",
                            size: 4,
                            padding: 1,
                            stagger: true,
                          },
                          {
                            id: "lines",
                            type: "patternLines",
                            background: "inherit",
                            color: "#eed312",
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10,
                          },
                        ]}
                        fill={[
                          {
                            match: {
                              id: "fries",
                            },
                            id: "dots",
                          },
                          {
                            match: {
                              id: "sandwich",
                            },
                            id: "lines",
                          },
                        ]}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", 1.6]],
                        }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                          legend: "country",
                          legendPosition: "middle",
                          legendOffset: 32,
                        }}
                        axisLeft={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                          legend: "food",
                          legendPosition: "middle",
                          legendOffset: -40,
                        }}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{
                          from: "color",
                          modifiers: [["darker", 1.6]],
                        }}
                        legends={[
                          {
                            dataFrom: "keys",
                            anchor: "bottom-right",
                            direction: "column",
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: "left-to-right",
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                              {
                                on: "hover",
                                style: {
                                  itemOpacity: 1,
                                },
                              },
                            ],
                          },
                        ]}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                      />
                    </ResponsiveContainer>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="8">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Population Distribution</CardTitle>
                    <VectorMapsAnimated />
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Ethiopia's Population</CardTitle>
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
              <Col lg="12"></Col>
            </Row>
            <Row>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Languages</CardTitle>
                    <PolarExample />
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Language Distribution</CardTitle>
                    <HorizontalBarExample />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="12" lg="12">
                <Card className="mb-3">
                  <CardBody>
                    <CardTitle>Language Distribution</CardTitle>
                    <BubbleExample />
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
