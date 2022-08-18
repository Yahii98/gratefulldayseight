import React from 'react';
import ReactDragListView from 'react-drag-listview/lib/index.js';
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem } from 'reactstrap';

class Uinestable3 extends React.Component {
    constructor(props) {
        super(props);
        const data = [
            {
                id: 1, class: "nested-2", title: "行政への届出関連", icon: "mdi mdi-folder",
                set2: [{ id: 1, class: "nested-3", title: "開始届", icon: "mdi mdi-folder", iconClass: "secondary" },
                       { id: 2, class: "nested-3", title: "変更届", icon: "mdi mdi-folder", iconClass: "secondary" },
                       { id: 3, class: "nested-3", title: "体制届", icon: "mdi mdi-folder", iconClass: "secondary" },
                       { id: 4, class: "nested-3", title: "処遇改善加算計画書", icon: "mdi mdi-folder", iconClass: "secondary" },
                       { id: 5, class: "nested-3", title: "処遇改善加算実績報告書", icon: "mdi mdi-folder", iconClass: "secondary" }
                      ]
            },
            {
                id: 2, class: "nested-2", title: "社内様式", icon: "mdi mdi-folder",
                set2: [{ id: 1, class: "nested-3", title: "入社関連", icon: "mdi mdi-folder", iconClass: "info" }]
            },
            {
                id: 3, class: "nested-2", title: "就業規則", icon: "mdi mdi-folder",
                set2: [{ id: 1, class: "nested-3", title: "本則", icon: "mdi mdi-folder", iconClass: "warning" }]
            }
        ];

        this.state = {
            data
        };
    }

    render() {
        const that = this;
        const dragProps = {
            onDragEnd(fromIndex, toIndex) {
                const data = [...that.state.data];
                const item = data.splice(fromIndex, 1)[0];
                data.splice(toIndex, 0, item);
                that.setState({ data });
            },
            nodeSelector: 'li',
            handleSelector: 'li'
        };

        return (

            <Col lg={6}>
                <Card>
                    <CardHeader>
                        <h4 className="card-title mb-0">ファイルサーバー</h4>
                    </CardHeader>

                    <CardBody>
                        <p className="text-muted">ご覧になりたいフォルダを選択してください</p>
                        <ListGroup className="col nested-list nested-sortable">
                            <ListGroupItem className="nested-1"> <i className="mdi mdi-folder fs-16 align-middle text-warning me-2"></i> ファイルサーバー
                                <ListGroup className="nested-list nested-sortable">
                                    <ReactDragListView {...dragProps}>

                                        {this.state.data.map((item, key) => (
                                            <React.Fragment key={key}>
                                                {item.set1 ? <ListGroupItem className={item.class}> <i className={"fs-16 align-middle text-" + item.iconClass + " me-2 " + item.icon}></i> {item.title}</ListGroupItem>
                                                    : <ListGroupItem className={item.class}> <i className={"fs-16 align-middle text-warning me-2 " + item.icon}></i> {item.title}
                                                        <ListGroup className="nested-list nested-sortable">
                                                            {item.set2.map((item, key) => (<ListGroupItem className={item.class} key={key}><i className={"fs-16 align-middle text-" + item.iconClass + " me-2 " + item.icon}></i> {item.title}</ListGroupItem>))}
                                                        </ListGroup>
                                                    </ListGroupItem>}
                                            </React.Fragment>))}
                                    </ReactDragListView>
                                </ListGroup>
                            </ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
            </Col>

        );
    }
}

export default Uinestable3;