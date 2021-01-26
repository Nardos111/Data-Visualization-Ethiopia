import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { ResponsiveLine } from '@nivo/line'

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    TabContent,
    TabPane,
    CardTitle, 
} from 'reactstrap';
import VectorMapsAnimated from '../../Components/Maps/Examples/VectorMaps/Animated'
import PageTitle from '../../../Layout/AppMain/PageTitle';
import { ResponsiveBar } from '@nivo/bar'
import PolarExample from "../../Charts/ChartJs/Examples/polar";
import BubbleExample from "../../Charts/ChartJs/Examples/bubble";
import {
    AreaChart, Area, Line,
    ResponsiveContainer,
    Bar,
    BarChart,
    ComposedChart,
    CartesianGrid,
    Tooltip,
    YAxis,
    XAxis,
    Legend,
    
    LineChart
} from 'recharts';
import { Polar } from 'react-chartjs-2';
import HorizontalBarExample from '../../Charts/ChartJs/Examples/horizontalBar';
const bdata = [
    {"name": "Page A", "uv": 4000, "pv": 2400},
    {"name": "Page B", "uv": 3000, "pv": 1398},
    {"name": "Page C", "uv": 2000, "pv": 9800},
    {"name": "Page D", "uv": 2780, "pv": 3908},
    {"name": "Page E", "uv": 1890, "pv": 4800},
    {"name": "Page F", "uv": 2390, "pv": 3800},
    {"name": "Page G", "uv": 3490, "pv": 4300}]
const ldata = [
        {"name": "Page A", "uv": 4000, "pv": 2400, "amt": 2400},
        {"name": "Page B", "uv": 3000, "pv": 1398, "amt": 2210},
        {"name": "Page C", "uv": 2000, "pv": 9800, "amt": 2290},
        {"name": "Page D", "uv": 2780, "pv": 3908, "amt": 2000},
        {"name": "Page E", "uv": 1890, "pv": 4800, "amt": 2181},
        {"name": "Page F", "uv": 2390, "pv": 3800, "amt": 2500},
        {"name": "Page G", "uv": 3490, "pv": 4300, "amt": 2100}
      ]
const tdata = [
        {"country": "AD", "hot dog": 94, "hot dogColor": "hsl(284, 70%, 50%)", "burger": 4, "burgerColor": "hsl(81, 70%, 50%)", "sandwich": 147,
          "sandwichColor": "hsl(290, 70%, 50%)",
          "kebab": 82,
          "kebabColor": "hsl(348, 70%, 50%)",
          "fries": 199,
          "friesColor": "hsl(332, 70%, 50%)",
          "donut": 135,
          "donutColor": "hsl(346, 70%, 50%)"
        },
        {
          "country": "AE",
          "hot dog": 117,
          "hot dogColor": "hsl(216, 70%, 50%)",
          "burger": 73,
          "burgerColor": "hsl(210, 70%, 50%)",
          "sandwich": 198,
          "sandwichColor": "hsl(255, 70%, 50%)",
          "kebab": 33,
          "kebabColor": "hsl(359, 70%, 50%)",
          "fries": 34,
          "friesColor": "hsl(222, 70%, 50%)",
          "donut": 87,
          "donutColor": "hsl(59, 70%, 50%)"
        },
        {
          "country": "AF",
          "hot dog": 6,
          "hot dogColor": "hsl(7, 70%, 50%)",
          "burger": 15,
          "burgerColor": "hsl(55, 70%, 50%)",
          "sandwich": 1,
          "sandwichColor": "hsl(8, 70%, 50%)",
          "kebab": 115,
          "kebabColor": "hsl(91, 70%, 50%)",
          "fries": 167,
          "friesColor": "hsl(139, 70%, 50%)",
          "donut": 181,
          "donutColor": "hsl(113, 70%, 50%)"
        },
        {
          "country": "AG",
          "hot dog": 81,
          "hot dogColor": "hsl(255, 70%, 50%)",
          "burger": 69,
          "burgerColor": "hsl(213, 70%, 50%)",
          "sandwich": 9,
          "sandwichColor": "hsl(1, 70%, 50%)",
          "kebab": 0,
          "kebabColor": "hsl(148, 70%, 50%)",
          "fries": 76,
          "friesColor": "hsl(200, 70%, 50%)",
          "donut": 124,
          "donutColor": "hsl(142, 70%, 50%)"
        },
        {
          "country": "AI",
          "hot dog": 21,
          "hot dogColor": "hsl(128, 70%, 50%)",
          "burger": 135,
          "burgerColor": "hsl(157, 70%, 50%)",
          "sandwich": 140,
          "sandwichColor": "hsl(135, 70%, 50%)",
          "kebab": 12,
          "kebabColor": "hsl(73, 70%, 50%)",
          "fries": 103,
          "friesColor": "hsl(76, 70%, 50%)",
          "donut": 107,
          "donutColor": "hsl(335, 70%, 50%)"
        },
        {
          "country": "AL",
          "hot dog": 166,
          "hot dogColor": "hsl(121, 70%, 50%)",
          "burger": 185,
          "burgerColor": "hsl(53, 70%, 50%)",
          "sandwich": 14,
          "sandwichColor": "hsl(348, 70%, 50%)",
          "kebab": 191,
          "kebabColor": "hsl(51, 70%, 50%)",
          "fries": 191,
          "friesColor": "hsl(132, 70%, 50%)",
          "donut": 31,
          "donutColor": "hsl(52, 70%, 50%)"
        },
        {
          "country": "AM",
          "hot dog": 11,
          "hot dogColor": "hsl(91, 70%, 50%)",
          "burger": 127,
          "burgerColor": "hsl(267, 70%, 50%)",
          "sandwich": 181,
          "sandwichColor": "hsl(199, 70%, 50%)",
          "kebab": 61,
          "kebabColor": "hsl(350, 70%, 50%)",
          "fries": 36,
          "friesColor": "hsl(54, 70%, 50%)",
          "donut": 190,
          "donutColor": "hsl(225, 70%, 50%)"
        }
      ]
      
const vdata = [{"id": "japan", "color": "hsl(328, 70%, 50%)",
          "data": [{"x": "plane", "y": 217}, 
                {"x": "helicopter", "y": 44},
                {"x": "boat", "y": 45},
                {"x": "train", "y": 49},
                {"x": "subway", "y": 205},
                {"x": "bus", "y": 283},
                {"x": "car", "y": 113},
                {"x": "moto", "y": 270},
                {"x": "bicycle", "y": 293},
                {"x": "horse", "y": 163},
                {"x": "skateboard", "y": 5},
                {"x": "others", "y": 122}]},
        {"id": "france", "color": "hsl(93, 70%, 50%)",
          "data": [{"x": "plane", "y": 156},
                {"x": "helicopter", "y": 286},
                {"x": "boat", "y": 233},
                {"x": "train", "y": 261},
                {"x": "subway", "y": 45},
                {"x": "bus", "y": 25},
                {"x": "car", "y": 124},
                {"x": "moto", "y": 279},
                {"x": "bicycle", "y": 58},
                {"x": "horse", "y": 90},
                {"x": "skateboard", "y": 79},
                {"x": "others", "y": 112}]},
        {"id": "us", "color": "hsl(284, 70%, 50%)", 
            "data": [{"x": "plane", "y": 293},
                {"x": "helicopter", "y": 6},
                {"x": "boat", "y": 224},
                {"x": "train", "y": 165},
                {"x": "subway", "y": 157},
                {"x": "bus", "y": 58},
                {"x": "car", "y": 7},
                {"x": "moto", "y": 224},
                {"x": "bicycle", "y": 219},
                {"x": "horse", "y": 42},
                {"x": "skateboard", "y": 158},
                {"x": "others", "y": 70}]},
        {"id": "germany", "color": "hsl(263, 70%, 50%)",
          "data": [
                {"x": "plane", "y": 185},
                {"x": "helicopter", "y": 117},
                {"x": "boat", "y": 84},
                {"x": "train", "y": 190},
                {"x": "subway", "y": 154},
                {"x": "bus", "y": 258},
                {"x": "car", "y": 195},
                {"x": "moto", "y": 52},
                {"x": "bicycle", "y": 101},
                {"x": "horse", "y": 165},
                {"x": "skateboard", "y": 234},
                {"x": "others", "y": 87}]},
        {"id": "norway", "color": "hsl(64, 70%, 50%)",
            "data": [
                {"x": "plane", "y": 121},
                {"x": "helicopter", "y": 157},
                {"x": "boat", "y": 288},
                {"x": "train", "y": 39},
                {"x": "subway", "y": 225},
                {"x": "bus", "y": 73},
                {"x": "car", "y": 140},
                {"x": "moto", "y": 32},
                {"x": "bicycle", "y": 282},
                {"x": "horse", "y": 167},
                {"x": "skateboard", "y": 130},
                {"x": "others","y": 227}]}]
const adata = [
  {"name": "Page A", "uv": 4000, "pv": 2400, "amt": 2400},
  {"name": "Page B", "uv": 3000, "pv": 1398, "amt": 2210},
  {"name": "Page C", "uv": 2000, "pv": 9800, "amt": 2290},
  {"name": "Page D", "uv": 2780, "pv": 3908, "amt": 2000},
  {"name": "Page E", "uv": 1890, "pv": 4800, "amt": 2181},
  {"name": "Page F", "uv": 2390, "pv": 3800, "amt": 2500},
  {"name": "Page G", "uv": 3490, "pv": 4300,"amt": 2100
  }
]
const data = [
    {name: 'Page A', uv: 1000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
    {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
    {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
    {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];


export default class demographicDashboard extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',

        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
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
                    transitionLeave={false}>
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
                                        data={tdata}
                                        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
                                        indexBy="country"
                                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                        padding={0.3}
                                        valueScale={{ type: 'linear' }}
                                        indexScale={{ type: 'band', round: true }}
                                        colors={{ scheme: 'nivo' }}
                                        defs={[
                                        {
                                            id: 'dots',
                                            type: 'patternDots',
                                            background: 'inherit',
                                            color: '#38bcb2',
                                            size: 4,
                                            padding: 1,
                                            stagger: true
                                        },
                                        {
                                            id: 'lines',
                                            type: 'patternLines',
                                            background: 'inherit',
                                            color: '#eed312',
                                            rotation: -45,
                                            lineWidth: 6,
                                            spacing: 10
                                        }
                                    ]}
                                    fill={[
                                        {
                                            match: {
                                                id: 'fries'
                                            },
                                            id: 'dots'
                                        },
                                        {
                                            match: {
                                                id: 'sandwich'
                                            },
                                            id: 'lines'
                                        }
                                    ]}
                                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                    axisTop={null}
                                    axisRight={null}
                                    axisBottom={{
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: 'country',
                                        legendPosition: 'middle',
                                        legendOffset: 32
                                    }}
                                    axisLeft={{
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: 'food',
                                        legendPosition: 'middle',
                                        legendOffset: -40
                                    }}
                                    labelSkipWidth={12}
                                    labelSkipHeight={12}
                                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                    legends={[
                                {
                                    dataFrom: 'keys',
                                    anchor: 'bottom-right',
                                    direction: 'column',
                                    justify: false,
                                    translateX: 120,
                                    translateY: 0,
                                    itemsSpacing: 2,
                                    itemWidth: 100,
                                    itemHeight: 20,
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 0.85,
                                    symbolSize: 20,
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemOpacity: 1
                                            }
                                        }
                                    ]
                                }
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
                                    <CardTitle>
                                        Population Distribution
                                    </CardTitle>
                                    <VectorMapsAnimated/>
                                </CardBody>
                            </Card>
                                    </Col>
                                    <Col lg="4">
                                    <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Ethiopia's Population</CardTitle>
                                    <p align="justify">Ethiopia’s location gives it strategic dominance as a jumping off point in the Horn of Africa, close to the Middle East and its markets. Ethiopia is landlocked, bordering Eritrea, Somalia, Kenya, South Sudan, and Sudan, and has been using neighboring Djibouti's main port for the last two decades. However, with the recent peace with Eritrea, Ethiopia is set to resume accessing the Eritrean ports of Assab and Massawa for its international trade.

With more than 112 million people (2019), Ethiopia is the second most populous nation in Africa after Nigeria, and the fastest growing economy in the region. However, it is also one of the poorest, with a per capita income of $850. Ethiopia aims to reach lower-middle-income status by 2025.</p>
                                    <br/>
                                    <a href="https://www.worldbank.org/en/country/ethiopia/overview" target="_blank"><Button color="primary">Details</Button></a>
                                </CardBody>
                            </Card>
                            </Col>
                                </Row>
                                <Row>
                                    <Col lg="12">
                                    
                                    </Col>
                                    
                                </Row>
                                <Row>
                                <Col lg="6">
                                    <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>
                                        Gender
                                    </CardTitle>
                                    <PolarExample/>
                                </CardBody>
                            </Card>
                                    </Col>
                                    <Col lg="6">
                                    <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>
                                        Language Distribution
                                    </CardTitle>
                                    <HorizontalBarExample/>
                                </CardBody>
                            </Card>
                                    </Col>
                                </Row>
                                <Row>
                            <Col md="12" lg="12">
                                <Card className="mb-3">
                                <CardBody>
                                    <CardTitle>
                                        Language Distribution
                                    </CardTitle>
                                    <BubbleExample/>
                                </CardBody>
                                </Card>
                              
                            </Col>
                        </Row>
                </div>
            </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
