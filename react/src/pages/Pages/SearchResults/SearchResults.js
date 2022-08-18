import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, NavItem, NavLink, Offcanvas, OffcanvasBody, Pagination, PaginationItem, PaginationLink, Row, TabContent, TabPane } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import classnames from "classnames";

// import Images
import smallImage1 from '../../../assets/images/small/img-1.jpg';
import smallImage2 from '../../../assets/images/small/img-2.jpg';
import smallImage3 from '../../../assets/images/small/img-3.jpg';
import smallImage4 from '../../../assets/images/small/img-4.jpg';
import smallImage5 from '../../../assets/images/small/img-5.jpg';
import smallImage6 from '../../../assets/images/small/img-6.jpg';
import smallImage7 from '../../../assets/images/small/img-7.jpg';
import smallImage8 from '../../../assets/images/small/img-8.jpg';
import smallImage9 from '../../../assets/images/small/img-9.jpg';
import smallImage10 from '../../../assets/images/small/img-10.jpg';
import smallImage11 from '../../../assets/images/small/img-11.jpg';
import smallImage12 from '../../../assets/images/small/img-12.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

const SearchResults = () => {

    SwiperCore.use([Autoplay]);

    const swiper = [
        {
            id: 1,
            img: smallImage12,
            title: "Bootstrap"
        },
        {
            id: 2,
            img: smallImage11,
            title: "Website"
        },
    ];

    const gallery = [
        {
            id: 1,
            img: smallImage1,
            badgeClass: "success",
            badgeText: "Business",
            title: "Glasses and laptop from above",
            auther: "Ron Mackie",
            likes: "2.2K",
            comments: "1.3K"
        },
        {
            id: 2,
            img: smallImage2,
            title: "Working at a coffee shop",
            auther: "Nancy Martino",
            likes: "2.2K",
            comments: "1.3K"
        },

    ];

    const news = [
        {
            id: 1,
            img: smallImage1,
            badgeClass: "success",
            badgeText: "Business",
            title: "A mix of friends and strangers heading off to find an adventure",
            auther: "James Ballard",
            date: "23 Nov, 2021"
        },
        {
            id: 2,
            img: smallImage2,
            badgeClass: "warning",
            badgeText: "Development",
            title: "How to get creative in your work ?",
            auther: "Ruby Griffin",
            date: "23 Nov, 2021"
        },
    ];

    const video = [
        {
            id: 1,
            title: "Admin dashboard templates - Material Design for Velzon",
            badgeClass: "success",
            badgeText: "Business",
            siteLink: "https://themesbrand.com/velzon/index.html",
            videoLink: "https://www.youtube.com/embed/GfSZtaoc5bw",
            description: "Velzon admin is super flexible, powerful, clean, modern & responsive admin template based on bootstrap 5 stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Velzon it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.",
            likes: 335,
            comments: 102,
            auther: "Themesbrand"
        },
        {
            id: 2,
            title: "Create Responsive Admin Dashboard using Html CSS",
            siteLink: "https://themesbrand.com/velzon/index.html",
            videoLink: "https://www.youtube.com/embed/Z-fV2lGKnnU",
            description: "Velzon admin is super flexible, powerful, clean, modern & responsive admin template based on bootstrap 5 stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Velzon it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.",
            likes: 485,
            comments: 167,
            auther: "Themesbrand"
        },
    ];
    //Tab 
    const [activeTab, setActiveTab] = useState('1');
    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    //OffCanvas  
    const [isOpen, setIsOpen] = useState(false);

    const toggleOffCanvas = () => {
        setIsOpen(!isOpen);
    };

    //Dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggledropDown = () => {
        setDropdownOpen(!dropdownOpen);
    };

document.title="Home | ThanksLab.inc";

    return (
        <React.Fragment>
            <div className="page-content">
                
                <div className="container-fluid">
                    <BreadCrumb title="Home" pageTitle="Pages" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader className="border-0">
                                    <Row className="justify-content-center mb-4">
                                        <Col lg={6}>
                                            <Row className="g-2">
                                                <Col>
                                                    <div className="position-relative mb-3">
                                                        <Input type="text" className="form-control form-control-lg bg-light border-light" placeholder="" defaultValue="" />
                                                        <Link to="#" className="btn btn-link link-success btn-lg position-absolute end-0 top-0" onClick={toggleOffCanvas}><i className="ri-mic-fill"></i></Link>
                                                    </div>
                                                </Col>
                                                <div className="col-auto">
                                                    <button type="submit" className="btn btn-primary btn-lg waves-effect waves-light"><i className="mdi mdi-magnify me-1"></i> 検索</button>
                                                </div>
                                            </Row>
                                        </Col>
                                        <Col lg={12}>

{/*                                            <h5 className="fs-16 fw-semibold text-center mb-0">Showing results for "<span className="text-primary fw-medium fst-italic">Admin Dashboard</span> "</h5>
*/}
                                        </Col>
                                    </Row>

                                    <Offcanvas isOpen={isOpen}
                                        direction="top"
                                        toggle={toggleOffCanvas}
                                        tabIndex="-1"
                                    >
                                        <OffcanvasBody>
                                            <button type="button" className="btn-close text-reset float-end" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                                                <div className="search-voice">
                                                    <i className="ri-mic-fill align-middle"></i>
                                                    <span className="voice-wave"></span>
                                                    <span className="voice-wave"></span>
                                                    <span className="voice-wave"></span>
                                                </div>
                                                <h4>Talk to me, what can I do for you?</h4>
                                            </div>
                                        </OffcanvasBody>
                                    </Offcanvas>
                                </CardHeader>
                                <div>
                                    <Nav className="nav-tabs nav-tabs-custom" role="tablist">
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() => { toggleTab('1'); }}
                                            >
                                                <i className="ri-search-2-line text-muted align-bottom me-1"></i> 重要・未読
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggleTab('2'); }}
                                            >
                                                <i className="ri-image-fill text-muted align-bottom me-1"></i> 確認済み
                                            </NavLink>
                                        </NavItem>
{/*
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                className={classnames({ active: activeTab === '3' })}
                                                onClick={() => { toggleTab('3'); }}
                                            >
                                                <i className="ri-list-unordered text-muted align-bottom me-1"></i> 検索結果
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                className={classnames({ active: activeTab === '4' })}
                                                onClick={() => { toggleTab('4'); }}
                                            >
                                                <i className="ri-video-line text-muted align-bottom me-1"></i> Videos
                                            </NavLink>
                                        </NavItem>
                                        <li className="nav-item ms-auto">
                                            <Dropdown isOpen={dropdownOpen} toggle={toggledropDown} >
                                                <DropdownToggle className="nav-link fw-medium text-reset mb-n1" role="button">
                                                    <i className="ri-settings-4-line align-middle me-1"></i> Settings
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Search Settings</DropdownItem>
                                                    <DropdownItem>Advanced Search</DropdownItem>
                                                    <DropdownItem>Search History</DropdownItem>
                                                    <DropdownItem>Search Help</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Dark Mode:Off</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </li>
*/}
                                    </Nav>
                                </div>
                                <CardBody className="p-4">
                                    <TabContent activeTab={activeTab} className="text-muted">
                                        <TabPane tabId="1">
                                            <div className="pb-3">
                                                <h5 className="mb-1"><Link to="#">駐車場変更のご案内</Link></h5>
                                                <p className="text-success mb-2"></p>
                                                <p className="text-muted mb-2">駐車場の場所が変わります。誤った場所に停車しないように注意してください。</p>
                                                <ul className="list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0">
                                                    <li className="list-inline-item me-3"><i className="ri-thumb-up-line align-middle me-1"></i></li>
                                                    <li className="list-inline-item me-3"><i className="ri-question-answer-line align-middle me-1"></i></li>
                                                    <li className="list-inline-item">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <i className="ri-user-line"></i>
                                                            </div>
                                                            <div className="flex-grow-1 fs-13 ms-1">
                                                                <span className="fw-medium">ThanksLab</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="border border-dashed"></div>


                                            <div className="py-3">
                                                <h5 className="mb-1"><Link to="#">健康診断受診のお願い</Link></h5>
                                                <p className="text-success mb-2"></p>
                                                <p className="text-muted mb-2">年に一度の健康診断の時期になります。必ず、10月までに受診してください。因みに、ご家族も受けられます。詳細は管理部まで。</p>
                                                <ul className="list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0">
                                                    <li className="list-inline-item me-3"><i className="ri-thumb-up-line align-middle me-1"></i></li>
                                                    <li className="list-inline-item me-3"><i className="ri-question-answer-line align-middle me-1"></i></li>
                                                    <li className="list-inline-item">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <i className="ri-user-line"></i>
                                                            </div>
                                                            <div className="flex-grow-1 fs-13 ms-1">
                                                                <span className="fw-medium">ThanksLab</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="border border-dashed"></div>

                                            <Pagination listClassName="justify-content-center" className="pagination-separated mb-0">
                                                <PaginationItem disabled> <PaginationLink to="#"> <i className="mdi mdi-chevron-left" /> </PaginationLink> </PaginationItem>
                                                <PaginationItem active> <PaginationLink to="#"> 1 </PaginationLink> </PaginationItem>
{/*                                                <PaginationItem> <PaginationLink to="#"> 2 </PaginationLink> </PaginationItem>
                                                <PaginationItem> <PaginationLink to="#"> 3 </PaginationLink> </PaginationItem>
*/}
                                                <PaginationItem> <PaginationLink to="#"> <i className="mdi mdi-chevron-right" /> </PaginationLink> </PaginationItem>
                                            </Pagination>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col lg={12}>

                                            <div className="pb-3">
                                                <h5 className="mb-1"><Link to="#">処遇改善加算計画届の提出期限について</Link></h5>
                                                <p className="text-success mb-2"></p>
                                                <p className="text-muted mb-2">今年の提出期限は4/15までです。提出先、提出資料に過不足がないか確認してください。</p>
                                                <ul className="list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0">
                                                    <li className="list-inline-item me-3"><i className="ri-thumb-up-line align-middle me-1"></i></li>
                                                    <li className="list-inline-item me-3"><i className="ri-question-answer-line align-middle me-1"></i></li>
                                                    <li className="list-inline-item">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <i className="ri-user-line"></i>
                                                            </div>
                                                            <div className="flex-grow-1 fs-13 ms-1">
                                                                <span className="fw-medium">ThanksLab</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="border border-dashed"></div>


                                            <div className="py-3">
                                                <h5 className="mb-1"><Link to="#">自己評価シートの提出について</Link></h5>
                                                <p className="text-success mb-2"></p>
                                                <p className="text-muted mb-2">人事考課の自己評価シートの提出は6/30が期限です。遅れないように十分注意してください。</p>
                                                <ul className="list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0">
                                                    <li className="list-inline-item me-3"><i className="ri-thumb-up-line align-middle me-1"></i></li>
                                                    <li className="list-inline-item me-3"><i className="ri-question-answer-line align-middle me-1"></i></li>
                                                    <li className="list-inline-item">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <i className="ri-user-line"></i>
                                                            </div>
                                                            <div className="flex-grow-1 fs-13 ms-1">
                                                                <span className="fw-medium">ThanksLab</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="border border-dashed"></div>

                                            <Pagination listClassName="justify-content-center" className="pagination-separated mb-0">
                                                <PaginationItem disabled> <PaginationLink to="#"> <i className="mdi mdi-chevron-left" /> </PaginationLink> </PaginationItem>
                                                <PaginationItem active> <PaginationLink to="#"> 1 </PaginationLink> </PaginationItem>
{/*
                                                <PaginationItem> <PaginationLink to="#"> 2 </PaginationLink> </PaginationItem>
                                                <PaginationItem> <PaginationLink to="#"> 3 </PaginationLink> </PaginationItem>
*/}
                                                <PaginationItem> <PaginationLink to="#"> <i className="mdi mdi-chevron-right" /> </PaginationLink> </PaginationItem>
                                            </Pagination>

                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </div>

            </div>
        </React.Fragment>
    );
};

export default SearchResults;