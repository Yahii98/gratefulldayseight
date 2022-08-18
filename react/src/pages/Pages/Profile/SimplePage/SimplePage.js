import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, Progress, Row, TabContent, Table, TabPane, UncontrolledCollapse, UncontrolledDropdown, Form } from 'reactstrap';
import classnames from 'classnames';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

//Images
import profileBg from '../../../../assets/images/profile-bg.jpg';
import avatar1 from '../../../../assets/images/users/avatar-1.jpg';
import avatar2 from '../../../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../../../assets/images/users/avatar-5.jpg';
import avatar6 from '../../../../assets/images/users/avatar-6.jpg';
import avatar7 from '../../../../assets/images/users/avatar-7.jpg';
import avatar8 from '../../../../assets/images/users/avatar-8.jpg';

import smallImage2 from '../../../../assets/images/small/img-2.jpg';
import smallImage3 from '../../../../assets/images/small/img-3.jpg';
import smallImage4 from '../../../../assets/images/small/img-4.jpg';
import smallImage5 from '../../../../assets/images/small/img-5.jpg';
import smallImage6 from '../../../../assets/images/small/img-6.jpg';
import smallImage7 from '../../../../assets/images/small/img-7.jpg';
import smallImage9 from '../../../../assets/images/small/img-9.jpg';


const SimplePage = () => {
    const projects = [
        {
            id: 1,
            title: "Chat App Update",
            updatedTime: "2 year Ago",
            badgeText: "Inprogress",
            badgeClass: "warning",
            member: [
                {
                    id: 1,
                    img: avatar1
                },
                {
                    id: 2,
                    img: avatar3
                }
            ],
            cardBorderColor: "warning",
            memberName: [
                {
                    id: 1,
                    memberText: "J"
                }
            ]
        },
        {
            id: 2,
            title: "ABC Project Customization",
            updatedTime: "2 month Ago",
            badgeText: "Progress",
            badgeClass: "primary",
            member: [
                {
                    id: 1,
                    img: avatar8
                },
                {
                    id: 2,
                    img: avatar7
                },
                {
                    id: 3,
                    img: avatar6
                },
            ],
            cardBorderColor: "success",
            memberName: [
                {
                    id: 1,
                    memberText: "2+"
                }
            ]
        },
        {
            id: 3,
            title: "Client - Frank Hook",
            updatedTime: "1 hr Ago",
            badgeText: "New",
            badgeClass: "info",
            member: [
                {
                    id: 1,
                    img: avatar4
                },
                {
                    id: 2,
                    img: avatar3
                },

            ],
            cardBorderColor: "info",
            memberName: [
                {
                    id: 1,
                    memberText: "M"
                }
            ]
        },
        {
            id: 4,
            title: "Velzon Project",
            updatedTime: "11 hr Ago",
            badgeText: "Completed",
            badgeClass: "success",
            member: [
                {
                    id: 1,
                    img: avatar7
                },
                {
                    id: 2,
                    img: avatar5
                },

            ],
            cardBorderColor: "primary",
        },
    ];

    const document = [
        {
            id: 1,
            icon: "ri-file-zip-fill",
            iconBackgroundClass: "primary",
            fileName: "Artboard-documents.zip",
            fileType: "Zip File",
            fileSize: "4.57 MB",
            updatedDate: "12 Dec 2021"
        },
        {
            id: 2,
            icon: "ri-file-pdf-fill",
            iconBackgroundClass: "danger",
            fileName: "Bank Management System",
            fileType: "PDF File",
            fileSize: "8.89 MB",
            updatedDate: "24 Nov 2021"
        },
        {
            id: 3,
            icon: "ri-video-line",
            iconBackgroundClass: "secondary",
            fileName: "Tour-video.mp4",
            fileType: "MP4 File",
            fileSize: "14.62 MB",
            updatedDate: "19 Nov 2021"
        },
        {
            id: 4,
            icon: "ri-file-excel-fill",
            iconBackgroundClass: "secondary",
            fileName: "Tour-video.mp4",
            fileType: "XSL File",
            fileSize: "2.38 KB",
            updatedDate: "14 Nov 2021"
        },
        {
            id: 5,
            icon: "ri-folder-line",
            iconBackgroundClass: "info",
            fileName: "Project Screenshots Collection",
            fileType: "Folder File",
            fileSize: "87.24 MB",
            updatedDate: "08 Nov 2021"
        },
        {
            id: 6,
            icon: "ri-image-2-fill",
            iconBackgroundClass: "danger",
            fileName: "Velzon-logo.png",
            fileType: "PNG File",
            fileSize: "879 KB",
            updatedDate: "02 Nov 2021"
        },
    ];
    SwiperCore.use([Autoplay]);

    const [activeTab, setActiveTab] = useState('1');
    const [activityTab, setActivityTab] = useState('1');

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const toggleActivityTab = (tab) => {
        if (activityTab !== tab) {
            setActivityTab(tab);
        }
    };

    document.title="マイページ";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="profile-foreground position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg">
                            <img src={profileBg} alt="" className="profile-wid-img" />
                        </div>
                    </div>
                    <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
                        <Row className="g-4">
                            <div className="col-auto">
                                <div className="avatar-lg">
                                    <img src={avatar1} alt="user-img"
                                        className="img-thumbnail rounded-circle" />
                                </div>
                            </div>

                            <Col>
                                <div className="p-2">
                                    <h3 className="text-white mb-1">ThanksLab</h3>
                                    <p className="text-white-75">取締役</p>
                                    <div className="hstack text-white-50 gap-1">
                                        <div className="me-2"><i
                                            className="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle"></i>本社</div>
                                        <div><i
                                            className="ri-building-line me-1 text-white-75 fs-16 align-middle"></i>部門
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} className="col-lg-auto order-last order-lg-0">
                                <Row className="text text-white-50 text-center">
                                    <Col lg={6} xs={4}>
                                        <div className="p-2">
                                            <h4 className="text-white mb-1"></h4>
                                            <p className="fs-14 mb-0"></p>
                                        </div>
                                    </Col>
                                    <Col lg={6} xs={4}>
                                        <div className="p-2">
                                            <h4 className="text-white mb-1"></h4>
                                            <p className="fs-14 mb-0"></p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                    <Row>
                        <Col lg={12}>
                            <div>
                                <div className="d-flex">
                                    <Nav pills className="animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1"
                                        role="tablist">
                                        <NavItem>
                                            <NavLink
                                                href="#overview-tab"
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() => { toggleTab('1'); }}
                                            >
                                                <i className="ri-airplay-fill d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">概要</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#activities"
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggleTab('2'); }}
                                            >
                                                <i className="ri-list-unordered d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">お知らせ検索</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#projects"
                                                className={classnames({ active: activeTab === '3' })}
                                                onClick={() => { toggleTab('3'); }}
                                            >
                                                <i className="ri-price-tag-line d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">本人情報編集</span>
                                            </NavLink>
                                        </NavItem>
{/*
                                        <NavItem>
                                            <NavLink
                                                href="#documents"
                                                className={classnames({ active: activeTab === '4' })}
                                                onClick={() => { toggleTab('4'); }}
                                            >
                                                <i className="ri-folder-4-line d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Documents</span>
                                            </NavLink>
                                        </NavItem>
*/}
                                    </Nav>
                                    <div className="flex-shrink-0">
                                        <Link to="/pages-profile-settings" className="btn btn-success"><i
                                            className="ri-edit-box-line align-bottom"></i> Edit Profile</Link>
                                    </div>
                                </div>

                                <TabContent activeTab={activeTab} className="pt-4">
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col xxl={3}>
                                                <Card>
                                                    <CardBody>
                                                        <h5 className="card-title mb-3">本人情報</h5>
                                                        <div className="table-responsive">
                                                            <Table className="table-borderless mb-0">
                                                                <tbody>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">氏名 :</th>
                                                                        <td className="text-muted">ThanksLab</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">ID :</th>
                                                                        <td className="text-muted">ThanksLab</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">E-mail :</th>
                                                                        <td className="text-muted">info@thankslab.biz</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">区分 :</th>
                                                                        <td className="text-muted">パートナー</td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </CardBody>
                                                </Card>

                                                <Card>
                                                    <CardBody>
                                                        <h5 className="card-title mb-4">自己紹介文</h5>
                                                        <p>がんばります。私はとにかく頑張ります</p>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col xxl={9}>
                                                <Card>
                                                    <CardBody>



                                            <h5 className="card-title mb-3">重要、新着お知らせ</h5>
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

                                            <Pagination listClassName="justify-content-center" className="pagination-separated mb-0">
                                                <PaginationItem disabled> <PaginationLink to="#"> <i className="mdi mdi-chevron-left" /> </PaginationLink> </PaginationItem>
                                                <PaginationItem active> <PaginationLink to="#"> 1 </PaginationLink> </PaginationItem>
{/*                                                <PaginationItem> <PaginationLink to="#"> 2 </PaginationLink> </PaginationItem>
                                                <PaginationItem> <PaginationLink to="#"> 3 </PaginationLink> </PaginationItem>
*/}
                                                <PaginationItem> <PaginationLink to="#"> <i className="mdi mdi-chevron-right" /> </PaginationLink> </PaginationItem>
                                            </Pagination>




                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-3">お知らせ検索</h5>


                                    <Row className="justify-content-center mb-4">
                                        <Col lg={6}>
                                            <Row className="g-2">
                                                <Col>
                                                    <div className="position-relative mb-3">
                                                        <Input type="text" className="form-control form-control-lg bg-light border-light" placeholder="" defaultValue="" />
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




                                            </CardBody>
                                        </Card>
                                    </TabPane>

                                    <TabPane tabId="3">
                                        <Card>
                                            <CardBody>
                                            <Form>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="lastnameInput" className="form-label">姓</Label>
                                                            <Input type="text" className="form-control" id="lastnameInput"
                                                                placeholder="" defaultValue="Thanks" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">名</Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="" defaultValue="Lab" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="skillsInput" className="form-label">会社</Label>
                                                            <select className="form-select mb-3">
                                                                <option >会社名を選択してください</option>
                                                                <option value="C01" selected="selected">サンクスラボ株式会社</option>
                                                                <option value="C02">関連会社</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="skillsInput" className="form-label">役職</Label>
                                                            <select className="form-select mb-3">
                                                                <option >役職を選択してください</option>
                                                                <option value="Y01" selected="selected">取締役</option>
                                                                <option value="Y02">部門長</option>
                                                                <option value="Y03">マネージャー</option>
                                                                <option value="Y04">リーダー</option>
                                                                <option value="Y05">チーフ</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="skillsInput" className="form-label">オフィス</Label>
                                                            <select className="form-select mb-3">
                                                                <option >オフィスを選択してください</option>
                                                                <option value="O01" selected="selected">本社</option>
                                                                <option value="O02">那覇オフィス</option>
                                                                <option value="O03">北谷オフィス</option>
                                                                <option value="O04">コザオフィス</option>
                                                                <option value="O05">浦添オフィス</option>
                                                                <option value="O06">名護オフィス</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="skillsInput" className="form-label">部門</Label>
                                                            <select className="form-select mb-3">
                                                                <option >部門を選択してください</option>
                                                                <option value="B01" selected="selected">就労支援部</option>
                                                                <option value="B02">生産支援部</option>
                                                                <option value="B03">業務推進室</option>
                                                                <option value="B04">活躍プロジェクト室</option>
                                                                <option value="B05">アフスク事業部</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="skillsInput" className="form-label">区分</Label>
                                                            <select className="form-select mb-3">
                                                                <option >区分を選択してください</option>
                                                                <option value="T01" selected="selected">パートナー</option>
                                                                <option value="T02">タレント</option>
                                                                <option value="T03">サテラボ社員</option>
                                                                <option value="T04">ジュニアタレント</option>
                                                                <option value="T05">関連会社</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="emailInput" className="form-label">メールアドレス</Label>
                                                            <Input type="email" className="form-control" id="emailInput"
                                                                placeholder=""
                                                                defaultValue="info@thankslab.biz" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="designationInput"
                                                                className="form-label">ログインID</Label>
                                                            <Input type="text" className="form-control"
                                                                id="designationInput" placeholder=""
                                                                defaultValue="thankslab" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="newpasswordInput" className="form-label">New
                                                                Password*</Label>
                                                            <Input type="password" className="form-control"
                                                                id="newpasswordInput" placeholder="" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="newpasswordInput" className="form-label">自己紹介</Label>
                                                            <textarea className="form-control" id="VertimeassageInput" rows="3" placeholder=""></textarea>
                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button type="button"
                                                                className="btn btn-primary">登録</button>
                                                            <button type="button"
                                                                className="btn btn-soft-success">クリア</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                            </CardBody>
                                        </Card>
                                    </TabPane>

                                </TabContent>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default SimplePage;