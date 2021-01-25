import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

import { ResponsiveCalendar } from '@nivo/calendar'


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

// let csvToJson = require('convert-csv-to-json');
// let json = csvToJson.getJsonFromCsv("/src/DemoPages/Dashboards/Basic/index.js");
// for(let i=0; i<json.length;i++){
//     console.log(json[i]);
// }
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

export default class AnalyticsDashboard1 extends Component {
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
                            heading="Environmental"
                            subheading="This section provides the options to visualize historical climate data for different timeframes via map and annual cycle chart."
                            icon="pe-7s-leaf icon-gradient bg-night-sky"
                        />
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2 fsize-1">
                                                    <div className="widget-numbers mt-0 fsize-3 text-night-sky">71%</div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <div className="progress-bar-xs progress">
                                                        <div className="progress-bar bg-night-sky" role="progressbar" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100" style={{ width: '71%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left fsize-1">
                                                <div className="text-muted opacity-6 "><i className="header-icon lnr-earth icon-gradient bg-primary"></i>  Carbon Emission</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2 fsize-1">
                                                    <div className="widget-numbers mt-0 fsize-3">54%</div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <div className="progress-bar-xs progress">
                                                        <div className="progress-bar bg-night-sky" role="progressbar" aria-valuenow="54" aria-valuemin="0" aria-valuemax="100" style={{ width: '54%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left fsize-1">
                                                <div className="text-muted opacity-6"> <i className="header-icon lnr-sun icon-gradient bg-warning"> </i>Current Temperature in A.A</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2 fsize-1">
                                                    <div className="widget-numbers mt-0 fsize-3">32%</div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <div className="progress-bar-xs progress">
                                                        <div className="progress-bar bg-night-sky" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" style={{ width: '32%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left fsize-1">
                                                <div className="text-muted opacity-6"><i className="header-icon lnr-cloud icon-gradient bg-happy-green"> </i>Mean Annual Temperature</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2 fsize-1">
                                                    <div className="widget-numbers mt-0 fsize-3">89%</div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <div className="progress-bar-xs progress">
                                                        <div className="progress-bar bg-night-sky" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{ width: '89%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left fsize-1">
                                                <div className="text-muted opacity-6"><i className="header-icon lnr-drop icon-gradient bg-happy-fisher"> </i>Mean Annual Precipitation</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Row>
                        <Col lg="6">
                                        <div className="card mb-3 widget-chart">
                                            <div className="widget-chart-content">
                                                <div className="icon-wrapper rounded-circle">
                                                    <div className="icon-wrapper-bg bg-night-sky"/>
                                                    <i className="lnr-laptop-phone text-night-sky"/>
                                                </div>
                                                <div className="widget-numbers">
                                                    5.82k
                                                </div>
                                                <div className="widget-subheading">
                                                    Weather Pattern
                                                </div>
                                                <div className="widget-description text-danger">
                                                    <FontAwesomeIcon icon={faAngleDown}/>
                                                    <span className="pl-1">54.1%</span>
                                                </div>
                                            </div>
                                            <div className="widget-chart-wrapper chart-wrapper-relative">
                                                <ResponsiveContainer height={100}>
                                                    <BarChart data={data}>
                                                        <Bar dataKey='uv' fill='#81a4ff' stroke='#3f6ad8' strokeWidth={2}/>
                                                    </BarChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                    <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Ethiopia's Climate</CardTitle>
                                    <p align="justify">Ethiopia’s large land area and diverse topography results in different climates across the country. Thus, Ethiopia’s climate is tropical in the south-east and north-east lowlands and cooler in the highland regions in the central and north of the country. Seasonal rainfall is driven mainly by the migration of the Inter‐Tropical Convergence Zone (ITCZ). Mean annual rainfall distribution is approximately 2,000 mm over the south-western highlands and less than 300 mm over the south-eastern and north-eastern lowlands.  Temperatures across Ethiopia can range from below 15ºC, over the highlands to above 25ºC in the lowlands.</p>
                                    <br/>
                                    <a href="http://sdwebx.worldbank.org/climateportal/countryprofile/doc/GFDRRCountryProfiles/wb_gfdrr_climate_change_country_profile_for_ETH.pdf" target="_blank"><Button color="primary">Details</Button></a>
                                </CardBody>
                            </Card>
                            </Col>
                                </Row>
                                <Row>
                                    <Col lg="6">
                                    <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Temperature</CardTitle>
                                    <p align="justify">Average temperatures in Ethiopia have increased by an average of 1ºC since 1960 at an average rate of 0.25ºC per decade; most noticeable increases have occurred July through September. <br/> <br/>The average number of ‘hot nights’ (the hottest 10% of nights annually) increased by 37.5% between 1960 and 2003 and the average number of ‘hot days’ per year, increased by 20%.<br/> <br/></p>

                                    <Button color="primary">Details</Button>
                                </CardBody>
                            </Card>
                                    </Col>
                                    <Col lg="6">
                                    <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Precipitation</CardTitle>
                                    <p align="justify">Long-term trends in rainfall are difficult to determine for Ethiopia due to strong inter‐annual and inter‐decadal variability in rainfall data. <br/> The south-central region of the country has experienced a 20% decrease in rainfall since 1960. <br/> The rise of sea surface temperatures in the Indian Ocean influences the migration of the ITCZ which can further increase variability in the timing and duration of rainfall seasons, altering traditional rainfall patterns and cause more frequent drought.</p>

                                    <Button color="primary">Details</Button>
                                </CardBody>
                            </Card>
                                    </Col>
                                </Row>
                                <Row>
                            <Col md="12" lg="12">
                                <Card className="mb-3">
                                    <CardHeader className="card-header-tab">
                                        <div className="card-header-title">
                                            
                                            Rainfall Pattern
                                        </div>
                                    </CardHeader>
                                    <TabContent activeTab={this.state.activeTab1}>
                                        <TabPane tabId="11">
                                            <div className="widget-chart p-0">
                                                <ResponsiveContainer height={600}>
                                                <ResponsiveCalendar
                                                    data={cdata}
                                                    from="2017-03-01"
                                                    to="2019-07-12"
                                                    emptyColor="#eeeeee"
                                                    colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
                                                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                                                    yearSpacing={40}
                                                    monthBorderColor="#ffffff"
                                                    dayBorderWidth={2}
                                                    dayBorderColor="#ffffff"
                                                    legends={[
                                                        {
                                                            anchor: 'bottom-right',
                                                            direction: 'row',
                                                            translateY: 36,
                                                            itemCount: 4,
                                                            itemWidth: 42,
                                                            itemHeight: 50,
                                                            itemsSpacing: 14,
                                                            itemDirection: 'right-to-left'
                                                        }
                                                    ]}
                                                />
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
                                            <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                            Rainfall Pattern Graph
                                        </div>
                                    </CardHeader>
                                    <TabContent activeTab={this.state.activeTab1}>
                                        <TabPane tabId="11">
                                            <div className="widget-chart p-0">
                                                <ResponsiveContainer height={179}>
                                                    <ComposedChart data={data2}>
                                                        <CartesianGrid stroke="#ffffff"/>
                                                        <Area type="monotone" dataKey="amt" fill="#f7ffd0" stroke="#85a200"/>
                                                        <Bar dataKey="pv" barSize={16} fill="var(--primary)"/>
                                                        <Line type="monotone" dataKey="uv" strokeWidth="3" stroke="var(--danger)"/>
                                                    </ComposedChart>
                                                </ResponsiveContainer>
                                                <div className="widget-chart-content mt-3 mb-2">
                                                    <div className="widget-description mt-0 text-success">
                                                        <FontAwesomeIcon icon={faArrowUp}/>
                                                        <span className="pl-2 pr-2">37.2%</span>
                                                        <span className="text-muted opacity-8">Rainfall increase</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPane>
                                    </TabContent>
                                </Card>
                              
                            </Col>
                        </Row>
                        
                     </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
