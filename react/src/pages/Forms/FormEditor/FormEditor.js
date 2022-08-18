import React, { useState, useEffect } from "react";
import {
    Card,
    CardBody,
    Col,
    Row,
    CardHeader,
    Form,
    Container,
    Input,
    InputGroup,
    Label,
} from "reactstrap";
import UiContent from "../../../Components/Common/UiContent";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import axios from "axios";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import moment from "moment";
import FormData from "form-data";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { baseUrl } from "../../../baseUrl";
const animatedComponents = makeAnimated();

const FormEditor = () => {
    const department = `${baseUrl}getDepartment`;
    const officeData = `${baseUrl}getOffice`;
    const noticeDetail = `${baseUrl}getNoticeType`;
    const store_notice =`${baseUrl}store-notice`; 

    const [notice, setNotice] = useState([]);
    const [getnotice, setGetNotice] = useState("");
    const [deptOffice, setDeptOffice] = useState([]);
    const { quill, quillRef } = useQuill();

    useEffect(() => {
        if (deptOffice.length == 0) {
            axios.get(department).then((response) => {
                // console.log('department...........',response)
                setDeptOffice((e) => [
                    ...e,
                    {
                        label: "管理部",
                        options: [
                            ...response.data.map((item) => ({
                                key: item.id,
                                label: item.dept_name,
                                value: `dept_${item.id}`,
                            })),
                        ],
                    },
                ]);
                //setDeptOffice(e=>([...e,...response.data]));
            });
            axios.get(officeData).then((response) => {
                // console.log('office...........',response)
                //setDeptOffice(e=>([...e,...response.data]));
                setDeptOffice((e) => [
                    ...e,
                    {
                        label: "IT",
                        options: [
                            ...response.data.map((item) => ({
                                key: item.id,
                                label: item.office_name,
                                value: `it_${item.id}`,
                            })),
                        ],
                    },
                ]);
            });
        }
    }, []);

    // console.log("officedataa...............", deptOffice);
    const [addData, setAddData] = useState([]);
    
    const handleAddData = async (e) => {
        e.preventDefault();

        try {
            let data = new FormData();
            data.append("title", addData.title);
            data.append("notice_type", getnotice);
            data.append("notice_duedate",moment(moment(addData.notice_duedate).format("L")).format("YYYY-MM-DD","DD-MM-YYYY")
            );
            data.append("att", selected.join(","));
            data.append("contents", quill.getContents().ops[0].insert);

            console.log("data........", data);
            let astroDetails = await axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/store-notice",
                data: data,
                headers: { "Content-Type": "multipart/form-data" },
            });
            if(astroDetails.status === true){
                alert("Record has been inserted successfully");
            }
            else
            {
                alert("Please,Fill-up Data Properly");
            }
            console.log("newnoticedata.........", astroDetails);
            
            //   return astroDetails.data
        } catch (err) {
            console.log("err...............", err);
        }
    };

    const handleInputChange = (e, keyName = "") => {
        const data = { ...addData };
        console.log("event.......", e, keyName);
        if (keyName === "notice_duedate") {
            data[keyName] = e[0];
        } else {
            const { name, value } = e.target;
            data[name] = value;
        }
        console.log("Data---", data);
        setAddData(data);
    };

    useEffect(() => {
        axios.get(noticeDetail).then((response) => {
            // console.log("notice.........", response);
            setNotice(response.data);
        });

    }, []);

    // useEffect(() => {
    //     if (quill) {
    //       quill.on('text-change', () => {
    //         console.log("quill............",quill.getContents().ops[0].insert); // Get delta contents
    //       });
    //     }
    //   }, [quill]);

    const [selected, setselected] = useState([]);
    const [selectedMulti3, setselectedMulti3] = useState([]);
    // console.log("selected group...", selectedMulti3);
    const handleMulti3 = (selectedMulti3) => {
        console.log("selectedMulti3,,,,,,,,,,", selectedMulti3);
        let tempArr = [];
        for (let i of selectedMulti3) {
            tempArr.push(i.value);
        }
        console.log("tempArr.............", tempArr);
        setselected(tempArr);
        setselectedMulti3(selectedMulti3);
    };
    document.title = "お知らせ作成";

    return (
        <>
            <UiContent />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="お知らせ作成、編集" pageTitle="Forms" />
                    <Row className="mt-2">
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">
                                        お知らせ作成
                                    </h4>
                                </CardHeader>
                                <CardBody>
                                    <div className="live-preview">
                                        <Form>
                                            <Row>
                                                <Col md={12}>
                                                    <div className="mb-3">
                                                        <Label
                                                            htmlFor="compnayNameinput"
                                                            className="form-label"
                                                        >
                                                            タイトル
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder=""
                                                            name="title"
                                                            value={
                                                                addData.title
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            id="compnayNameinput"
                                                        />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="mb-3">
                                                        <Label
                                                            htmlFor="skillsInput"
                                                            className="form-label"
                                                        >
                                                            お知らせ区分
                                                        </Label>
                                                        <select
                                                            className="form-select mb-3"
                                                            value = {getnotice}
                                                            onChange={(e) =>
                                                                setGetNotice(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        >
                                                            <option>
                                                                お知らせ区分を選択してください
                                                            </option>
                                                            {notice?.map(
                                                                (
                                                                    items,
                                                                    index
                                                                ) => (
                                                                    <option
                                                                        key={
                                                                            index
                                                                        }
                                                                        value={
                                                                            items.id
                                                                        }
                                                                        // selected={items.id ==
                                                                        // getnotice.notice_id}
                                                                    >
                                                                        {
                                                                            items.notice_type_name
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="mb-3">
                                                        <Label
                                                            htmlFor="dateInput"
                                                            className="form-label"
                                                        >
                                                            表示期限（もしあれば）
                                                        </Label>
                                                        <Flatpickr
                                                            className="form-control"
                                                            options={{
                                                                dateFormat:
                                                                    "d M, Y",
                                                            }}
                                                            name="notice_duedate"
                                                            value={
                                                                addData.notice_duedate
                                                            }
                                                            onChange={(e) =>
                                                                handleInputChange(
                                                                    e,
                                                                    "notice_duedate"
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="mb-3">
                                                        <Label
                                                            htmlFor="choices-multiple-groups"
                                                            className="form-label text-muted"
                                                        >
                                                            周知範囲
                                                        </Label>
                                                        <Select
                                                            value={
                                                                selectedMulti3
                                                            }
                                                            // value={deptOffice}
                                                            isMulti={true}
                                                            onChange={
                                                                handleMulti3
                                                            }
                                                            options={deptOffice}
                                                            closeMenuOnSelect={
                                                                false
                                                            }
                                                            components={
                                                                animatedComponents
                                                            }
                                                        />
                                                    </div>
                                                </Col>

                                                <Col lg={12}>
                                                    <div
                                                        className="snow-editor"
                                                        style={{ height: 300 }}
                                                        name="contents"
                                                        value={addData.contents}
                                                        onChange={
                                                            handleInputChange}
                                                    >
                                                        <div ref={quillRef} />
                                                    </div>
                                                </Col>

                                                <Col lg={12}>
                                                    <div className="hstack gap-2 justify-content-end">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary"
                                                            onClick={
                                                                handleAddData
                                                            }
                                                        >
                                                            登録
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-soft-success"
                                                            value={addData}
                                                        >
                                                            クリア
                                                        </button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default FormEditor;
