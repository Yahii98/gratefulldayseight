import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";

//import images
import progileBg from '../../../../assets/images/profile-bg.jpg';
import avatar1 from '../../../../assets/images/users/user-dummy-img.jpg';

const axios = require('axios');

const Settings = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [nameA, setNameA] = useState('');
    const [password, setPassword] = useState('');   
    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    const handleSend = (e) => {
        e.preventDefault();
        console.log(nameA);
        console.log(id);
        console.log(password);
        console.log(email);
      };
    const createNewUser = () => {
        axios.post('api/users', {
          user_name: nameA,
          user_id: id,
          user_password: password,
          user_email: email
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      }

    document.title="新規利用者登録";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg profile-setting-img">
                            <img src={progileBg} className="profile-wid-img" alt="" />
                            <div className="overlay-content">
                                <div className="text-end p-3">
                                    <div className="p-0 ms-auto rounded-circle profile-photo-edit">
                                        <Input id="profile-foreground-img-file-input" type="file"
                                            className="profile-foreground-img-file-input" />
                                        <Label htmlFor="profile-foreground-img-file-input"
                                            className="profile-photo-edit btn btn-light">
                                            <i className="ri-image-edit-line align-bottom me-1"></i> Change Cover
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Row>
                        <Col xxl={3}>
                            <Card className="mt-n5">
                                <CardBody className="p-4">
                                    <div className="text-center">
                                        <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                                            <img src={avatar1}
                                                className="rounded-circle avatar-xl img-thumbnail user-profile-image"
                                                alt="user-profile" />
                                            <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                <Input id="profile-img-file-input" type="file"
                                                    className="profile-img-file-input" />
                                                <Label htmlFor="profile-img-file-input"
                                                    className="profile-photo-edit avatar-xs">
                                                    <span className="avatar-title rounded-circle bg-light text-body">
                                                        <i className="ri-camera-fill"></i>
                                                    </span>
                                                </Label>
                                            </div>
                                        </div>
                                        <h5 className="fs-16 mb-1"></h5>  {/*空欄*/}
                                        <p className="text-muted mb-0"></p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xxl={9}>
                            <Card className="mt-xxl-n5">
                                <CardHeader>
                                    <Nav className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                        role="tablist">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === "1" })}
                                                onClick={() => {
                                                    tabChange("1");
                                                }}>
                                                <i className="fas fa-home"></i>
                                                基礎情報・
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "2" })}
                                                onClick={() => {
                                                    tabChange("2");
                                                }}
                                                type="button">
                                                <i className="far fa-user"></i>
                                                権限
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <Form>
                                                <Row>  
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="lastnameInput" className="form-label">姓</Label>
                                                            <Input type="text" className="form-control" id="lastnameInput"
                                                                placeholder="" defaultValue="" name="nameA"
                                                                onChange={(e) => setEmail(e.target.value)} />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">名</Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="" defaultValue="" name="nameB"
                                                                onChange={(e) => setEmail(e.target.value)} />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="skillsInput" className="form-label">会社</Label>
                                                            <select className="form-select mb-3">
                                                                <option >会社名を選択してください</option>
                                                                <option value="C01">サンクスラボ株式会社</option>
                                                                <option value="C02">関連会社</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="skillsInput" className="form-label">役職</Label>
                                                            <select className="form-select mb-3">
                                                                <option >役職を選択してください・</option>
                                                                <option value="Y01">取締役</option>
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
                                                                <option value="O01">本社</option>
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
                                                                <option value="B01">就労支援部</option>
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
                                                                <option value="T01">パートナー</option>
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
                                                                placeholder="" name="email"
                                                                defaultValue="" onChange={(e) => setEmail(e.target.value)}/>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="designationInput"
                                                                className="form-label">ログインID</Label>
                                                            <Input type="text" className="form-control"
                                                                id="designationInput" placeholder=""
                                                                defaultValue="" name="id"
                                                                onChange={(e) => setEmail(e.target.value)} />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="newpasswordInput" className="form-label">New
                                                                Password*</Label>
                                                            <Input type="password" className="form-control"
                                                                id="newpasswordInput" placeholder="" 
                                                                name="password"
                                                                onChange={(e) => setEmail(e.target.value)} />
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button type="button"
                                                                className="btn btn-primary" onClick={createNewUser}>登録</button>
                                                            <button type="button"
                                                                className="btn btn-soft-success">クリア</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </TabPane>

                                        <TabPane tabId="2">
                                            <div className="mb-3">
                                                <h5 className="card-title text-decoration-underline mb-3">権限:</h5>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex">
                                                        <div className="flex-grow-1">
                                                            <label htmlFor="directMessage"
                                                                className="form-check-label fs-14">利用者作成編集権限</label>
                                                            <p className="text-muted">利用者を作成したり、編集する権限</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch form-switch-lg">
                                                                <Input className="form-check-input" type="checkbox"
                                                                    role="switch" id="directMessage" defaultChecked />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex mt-2">
                                                        <div className="flex-grow-1">
                                                            <Label className="form-check-label fs-14"
                                                                htmlFor="desktopNotification">利用者閲覧権限</Label>
                                                            <p className="text-muted">利用者情報を閲覧する権限</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch form-switch-lg">
                                                                <Input className="form-check-input" type="checkbox"
                                                                    role="switch" id="desktopNotification" defaultChecked />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex mt-2">
                                                        <div className="flex-grow-1">
                                                            <Label className="form-check-label fs-14"
                                                                htmlFor="emailNotification">お知らせ作成編集権限</Label>
                                                            <p className="text-muted">お知らせを作成したり、編集する権限</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch form-switch-lg">
                                                                <Input className="form-check-input" type="checkbox"
                                                                    role="switch" id="emailNotification" />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex mt-2">
                                                        <div className="flex-grow-1">
                                                            <Label className="form-check-label fs-14"
                                                                htmlFor="chatNotification">お知らせ閲覧権限</Label>
                                                            <p className="text-muted">お知らせを閲覧する権限</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch form-switch-lg">
                                                                <Input className="form-check-input" type="checkbox"
                                                                    role="switch" id="chatNotification" />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex mt-2">
                                                        <div className="flex-grow-1">
                                                            <Label className="form-check-label fs-14"
                                                                htmlFor="purchaesNotification">WIKI作成編集権限</Label>
                                                            <p className="text-muted">WIKIを作成したり編集する権限</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch form-switch-lg">
                                                                <Input className="form-check-input" type="checkbox"
                                                                    role="switch" id="purchaesNotification" />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex mt-2">
                                                        <div className="flex-grow-1">
                                                            <Label className="form-check-label fs-14"
                                                                htmlFor="purchaesNotification">WIKI閲覧権限</Label>
                                                            <p className="text-muted">WIKIを閲覧する権限</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch form-switch-lg">
                                                                <Input className="form-check-input" type="checkbox"
                                                                    role="switch" id="purchaesNotification" />
                                                            </div>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>



                                        </TabPane>

                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Settings;