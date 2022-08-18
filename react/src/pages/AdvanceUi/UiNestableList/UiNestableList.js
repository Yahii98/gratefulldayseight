import React from 'react';
import { Container, Row, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Table } from 'reactstrap';
//import Components
import BreadCrumb from '../../../Components/Common/BreadCrumb';

// Import Nestable Lists
import Uinestable1 from './uinestable1';
import Uinestable2 from './uinestable2';
import Uinestable3 from './uinestable3';
import Uinestable4 from './uinestable4';
import Uinestable5 from './uinestable5';

import { Link } from 'react-router-dom';  

const UiNestableList = () => {
document.title="ファイルサーバー";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="ファイルサーバー" pageTitle="Forms" />
                    <Row>
                        <Uinestable3 />

            <Col lg={6}>
                <Card>
                    <CardHeader>
                        <h4 className="card-title mb-0">ファイルサーバー</h4>
                    </CardHeader>
                    <CardBody>






                                        <div className="live-preview">
                                            <div className="table-responsive">
                                                <Table className="table-striped table-nowrap align-middle mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">ID</th>
                                                            <th scope="col">ファイル名</th>
                                                            <th scope="col">更新者</th>
                                                            <th scope="col">更新日時</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="fw-medium">01</td>
                                                            <td>沖縄オフィス計画書</td>
                                                            <td>山中</td>
                                                            <td>Nov 14, 2021</td>
                                                            <td>                                                                                                                                     <div className="hstack gap-3 flex-wrap">
                                                                    <Link to="#" className="link-success fs-15"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link>
                                                                    <Link to="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-medium">02</td>
                                                            <td>九州オフィス計画書</td>
                                                            <td>山田</td>
                                                            <td>Nov 21, 2021</td>
                                                            <td>                                                                                                                                     <div className="hstack gap-3 flex-wrap">
                                                                    <Link to="#" className="link-success fs-15"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link>
                                                                    <Link to="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                   </tbody>
                                                </Table>
                                            </div>
                                        </div>









                    </CardBody>
                </Card>
            </Col>


                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default UiNestableList;
