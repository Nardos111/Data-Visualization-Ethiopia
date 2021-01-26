import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

import { ResponsiveCalendar } from '@nivo/calendar'
import { ResponsiveLine } from '@nivo/line'

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
    CardImg, 
    CardText,
    CardTitle, 
    CardSubtitle, 
    CardLink, 
    CardFooter
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

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

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';

const sdata = [
    {"name": "Page A", "uv": 4000, "pv": 2400, "amt": 2400},
    {"name": "Page B", "uv": 3000, "pv": 1398, "amt": 2210},
    {"name": "Page C", "uv": 2000, "pv": 9800, "amt": 2290},
    {"name": "Page D", "uv": 2780, "pv": 3908, "amt": 2000},
    {"name": "Page E", "uv": 1890, "pv": 4800, "amt": 2181},
    {"name": "Page F", "uv": 2390, "pv": 3800, "amt": 2500},
    {"name": "Page G", "uv": 3490, "pv": 4300,"amt": 2100}]
const data3 = {
                country_name: "Ethiopia",
                country_code: "ETH",
                series_name: "Ratio of female to male labor force participation rate (%) (modeled ILO estimate)",
                series_code: "SL.TLF.CACT.FM.ZS",
                2005: 82.6449448125566,
                2006: 82.6998002193071,
                2007: 82.7590429857776,
                2008: 82.826659753454,
                2009: 82.9029678814905,
                2010: 82.9853293287766,
                2011: 83.0761254269609,
                2012: 83.1696965130941,
                2013: 83.2632059290146,
                2014: 83.7476815109764,
                2015: 84.2361016647291,
                2016: 84.6458540526964,
                2017: 85.0760885061858,
                2018: 85.4952278253771,
                2019: 85.6404923844396,
                2020: 85.7780853424301 
                }
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
const cdata = [
    {"day": "2017-04-13", "value": 54},
    {"day": "2017-11-29", "value": 366},
    {"day": "2018-01-15","value": 96},
    {"day": "2019-10-09", "value": 179},
    {"day": "2017-11-15", "value": 152},
    {"day": "2018-08-28", "value": 351},
    {"day": "2019-09-21","value": 274},
    ]
const new_data = [
    {name: "2005", score: 82.6449448125566},
    {name: "2006", score: 82.6998002193071},
    {name: "2007", score: 82.7590429857776},
    {name: "2008", score: 82.826659753454},
    {name: "2009", score: 82.9029678814905},
    {name: "2010", score: 82.9853293287766},
    {name: "2011", score: 83.0761254269609},
    {name: "2012", score: 83.1696965130941},
    {name: "2013", score: 83.2632059290146},
    {name: "2014", score: 83.7476815109764},
    {name: "2015", score: 84.2361016647291},
    {name: "2016", score: 84.6458540526964},
    {name: "2017", score: 85.0760885061858},
    {name: "2018", score: 85.4952278253771},
    {name: "2019", score: 85.6404923844396},
    {name: "2020", score: 85.7780853424301},
    
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

const data2 = [
    {name: 'Page A', uv: 4000, pv: 1, amt: 10000},
    {name: 'Page B', uv: 7300, pv: 4139, amt: 3221},
    {name: 'Page C', uv: 8200, pv: 7980, amt: 5229},
    {name: 'Page D', uv: 6278, pv: 4390, amt: 3200},
    {name: 'Page E', uv: 3189, pv: 7480, amt: 6218},
    {name: 'Page D', uv: 9478, pv: 6790, amt: 2200},
    {name: 'Page E', uv: 1289, pv: 1980, amt: 7218},
    {name: 'Page F', uv: 3139, pv: 2380, amt: 5150},
    {name: 'Page G', uv: 5349, pv: 3430, amt: 3210},
];

export default class economyDashboard extends Component {
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
                            heading="Economy"
                            subheading="This section provides the options to visualize historical climate data for different timeframes via map and annual cycle chart."
                            icon="pe-7s-leaf icon-gradient bg-night-sky"
                        />
                        <Row>
                                    <Col lg="12">
                                    <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Ethiopia's Economy</CardTitle>
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
                                    <Card className="mb-3">
                                    <CardHeader className="card-header-tab">
                                        <div className="card-header-title">
                                            
                                            GDP
                                        </div>
                                    </CardHeader>
                                    <TabContent activeTab={this.state.activeTab1}>
                                        <TabPane tabId="11">
                                            <div className="widget-chart p-0">
                                                <ResponsiveContainer height={300}>
                                                <LineChart width={730} height={250} data={adata}
                                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="name" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
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
                                        <div className="card-header-title">
                                            
                                            GDP Per Capita
                                        </div>
                                    </CardHeader>
                                    <TabContent activeTab={this.state.activeTab1}>
                                        <TabPane tabId="11">
                                            <div className="widget-chart p-0">
                                                <ResponsiveContainer height={300}>
                                                <AreaChart width={730} height={250} data={ldata}
                                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                                    <defs>
                                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                                        </linearGradient>
                                                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                                        </linearGradient>
                                                    </defs>
                                                    <XAxis dataKey="name" />
                                                    <YAxis />
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <Tooltip />
                                                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                                                    </AreaChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </TabPane>
                                    </TabContent>
                                </Card>
                                    </Col>
                                    
                                </Row>
                                <Row>
                            <Col md="12" lg="12">
                                <Card className="mb-3">
                                    <CardHeader className="card-header-tab">
                                        <div className="card-header-title">
                                            
                                           Exchange Rates
                                        </div>
                                    </CardHeader>
                                </Card>
                              
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="3">
                            
                                <div className="card mb-3 widget-chart card-hover-shadow-2x">
                                    <div className="icon-wrapper border-light rounded">
                                        <div className="icon-wrapper-bg bg-light"/>
                                        <i className="lnr-diamond icon-gradient bg-happy-itmeo"/>
                                    </div>
                                    <div className="widget-numbers">
                                        63.2k
                                    </div>
                                    <div className="widget-subheading">
                                        United States Dollar
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                            
                                <div className="card mb-3 widget-chart card-hover-shadow-2x">
                                    <div className="icon-wrapper border-light rounded">
                                        <div className="icon-wrapper-bg bg-light"/>
                                        <i className="lnr-diamond icon-gradient bg-happy-itmeo"/>
                                    </div>
                                    <div className="widget-numbers">
                                        63.2k
                                    </div>
                                    <div className="widget-subheading">
                                       Euro
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg="3">
                            
                            <div className="card mb-3 widget-chart card-hover-shadow-2x">
                                <div className="icon-wrapper border-light rounded">
                                    <div className="icon-wrapper-bg bg-light"/>
                                    <i className="lnr-diamond icon-gradient bg-happy-itmeo"/>
                                </div>
                                <div className="widget-numbers">
                                    63.2k
                                </div>
                                <div className="widget-subheading">
                                    Pound
                                </div>
                            </div>
                        </Col>
                        <Col lg="3">
                        
                            <div className="card mb-3 widget-chart card-hover-shadow-2x">
                                <div className="icon-wrapper border-light rounded">
                                    <div className="icon-wrapper-bg bg-light"/>
                                    <i className="lnr-diamond icon-gradient bg-happy-itmeo"/>
                                </div>
                                <div className="widget-numbers">
                                    63.2k
                                </div>
                                <div className="widget-subheading">
                                    Yuan
                                </div>
                            </div>
                        </Col>
                       
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
                                                    <Area type="monotone" dataKey="amt" fill="blue" stroke="green" />
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
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
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
        )
    }
}
