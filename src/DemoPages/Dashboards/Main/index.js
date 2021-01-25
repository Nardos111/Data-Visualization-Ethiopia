import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';



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
                            heading="Data Visualization"
                            subheading="Graphical representation of Ethiopia's information and data."
                            icon="pe-7s-graph3 icon-gradient bg-mean-fruit"
                        />
                          <Row>
                                    <Col lg="6">
                                    <Card className="main-card mb-3">
                                <CardHeader>ECONOMY</CardHeader>
                                <CardBody>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate purus at ex pulvinar, eget dignissim dui consectetur. Vestibulum sit amet ultrices magna, sed cursus risus. Suspendisse potenti. Proin eu porta orci, sit amet vestibulum dolor. Nullam ut faucibus arcu, eleifend posuere lorem. Nullam faucibus at tellus non tristique. Aliquam malesuada leo nunc, nec tincidunt nulla volutpat id.</p>
                                    <Button color="warning">Go somewhere</Button>
                                </CardBody>
                                <CardFooter>Footer</CardFooter>
                            </Card>
                                    </Col>
                                    <Col lg="6">
                                    <Card className="main-card mb-3">
                                <CardHeader>HEALTH</CardHeader>
                                <CardBody>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate purus at ex pulvinar, eget dignissim dui consectetur. Vestibulum sit amet ultrices magna, sed cursus risus. Suspendisse potenti. Proin eu porta orci, sit amet vestibulum dolor. Nullam ut faucibus arcu, eleifend posuere lorem. Nullam faucibus at tellus non tristique. Aliquam malesuada leo nunc, nec tincidunt nulla volutpat id.</p>
                                    <Button color="warning">Go somewhere</Button>
                                </CardBody>
                                <CardFooter>Footer</CardFooter>
                            </Card>
                            </Col>
                                </Row>
                                <Row>
                                    <Col lg="6">
                                    <Card className="main-card mb-3">
                                <CardHeader>EDUCATION</CardHeader>
                                <CardBody>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate purus at ex pulvinar, eget dignissim dui consectetur. Vestibulum sit amet ultrices magna, sed cursus risus. Suspendisse potenti. Proin eu porta orci, sit amet vestibulum dolor. Nullam ut faucibus arcu, eleifend posuere lorem. Nullam faucibus at tellus non tristique. Aliquam malesuada leo nunc, nec tincidunt nulla volutpat id.</p>
                                    <Button color="warning">Go somewhere</Button>
                                </CardBody>
                                <CardFooter>Footer</CardFooter>
                            </Card>
                                    </Col>
                                    <Col lg="6">
                                    <Card className="main-card mb-3">
                                <CardHeader>POPULATION</CardHeader>
                                <CardBody>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate purus at ex pulvinar, eget dignissim dui consectetur. Vestibulum sit amet ultrices magna, sed cursus risus. Suspendisse potenti. Proin eu porta orci, sit amet vestibulum dolor. Nullam ut faucibus arcu, eleifend posuere lorem. Nullam faucibus at tellus non tristique. Aliquam malesuada leo nunc, nec tincidunt nulla volutpat id.</p>
                                    <Button color="warning">Go somewhere</Button>
                                </CardBody>
                                <CardFooter>Footer</CardFooter>
                            </Card>
                            </Col>
                                </Row>
                        <Row>
                            <Col md="12" lg="12">
                                <Card className="mb-3">
                                    <CardHeader className="card-header-tab">
                                        <div className="card-header-title">
                                            <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                            Bandwidth Reports
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
                                                        <span className="text-muted opacity-8">performance increase</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <CardBody className="pt-2">
                                                <Row>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            23%
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                            Deploys
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="warning"
                                                                        value="23"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            76%
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                            Traffic
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="info"
                                                                        value="76"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="divider mt-4"/>
                                                <Row>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            83%
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                            Servers Load
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="danger"
                                                                        value="83"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            48%
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                            Reported Bugs
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="alternate"
                                                                        value="48"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>

                                            </CardBody>
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
