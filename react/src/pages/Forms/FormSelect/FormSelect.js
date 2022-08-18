import React, { useState, useEffect, useRef } from "react";
import { Card, CardBody, CardHeader, Col, Label, Row } from "reactstrap";
import {
    Container,
    Form,
    Input,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import PreviewCardHeader from "../../../Components/Common/PreviewCardHeader";
import UiContent from "../../../Components/Common/UiContent";

import {
    DefaultSelect,
    MenuSize,
    SelectSize,
} from "../FormSelect/FormSelectCode";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import avatar1 from "../../../assets/images/users/user-dummy-img.jpg";
import classnames from "classnames";

import axios from "axios";
import { baseUrl } from "../../../baseUrl";

const animatedComponents = makeAnimated();

/*
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
*/
const getUserUrl = `${baseUrl}getUser`;
const userDetail = `${baseUrl}getUserDetail`;
const department = `${baseUrl}getDepartment`;
const officeData = `${baseUrl}getOffice`;
const editUserdata = `${baseUrl}editUser`;
const positionData = `${baseUrl}getPosition`;
const categoryAllData = `${baseUrl}getCategory`;
const companyAllData = `${baseUrl}getCompany`;

const FormSelect = () => {
    const [data, setData] = useState([]);
    const [position, setPosition] = useState([]);
    const [office, setOffice] = useState([]);
    const [deptValue, setDeptValue] = useState("");
    const [officeValue, setOfficeValue] = useState("");
    const [categoryData, setCategoryData] = useState([]);
    const [companyData, setCompanyData] = useState([]);
    const [newdata, setnewData] = useState([]);
    const [selectedSingle, setSelectedSingle] = useState(null);
    const [selectedGroup, setSelectedGroup] = useState([]);
    const [selectedGroup2, setSelectedGroup2] = useState(null);
    const [selectedNoSortingGroup, setSelectedNoSortingGroup] = useState(null);
    const [selectedMulti, setselectedMulti] = useState(null);
    const [selectedMulti2, setselectedMulti2] = useState(null);
    const [selectedMulti3, setselectedMulti3] = useState(null);

    const [activeTab, setActiveTab] = useState("1");
    const [userData, setUserData] = useState([]);
    const handleClear = () => {
        
        const newSt = {
            firstname: "",
            surname:"",
            email: "",
            department_id:"",
            office_id: "",
            login_id: "",
            position_id: "",
            category_id: "",
            company_id: "",
        };
        setUserData((s) => newSt); 
    };
const getUsers = async () => {
        const data = await axios.get("api/deptValue");
        console.log("test", data);
    };
    useEffect(() => {
        getUsers();
    }, []);
    useEffect(() => {
        console.log(1);
        axios.get(department).then((response) => {
            setData(response.data);
        });
        axios.get(officeData).then((response) => {
            setOffice(response.data);
        });
        axios.get(companyAllData).then((response) => {
            setCompanyData(response.data);
        });
        axios.get(positionData).then((response) => {
            setPosition(response.data);
        });
        axios.get(categoryAllData).then((response) => {
            setCategoryData(response.data);
        });
    }, []);




    useEffect(() => {
        // console.log("company data", deptValue, officeValue);

        ///api call
        if (deptValue !== "" && officeValue !== "") {
            axios
                .post(getUserUrl, {
                    department_id: deptValue,
                    office_id: officeValue,
                })
                .then((response) => {
                    
                    if (response.data !== "no record found") {
                        setnewData(response.data);
                    } else {
                        setnewData([]);
                        handleClear()
                    }
                });
        }
    }, [deptValue, officeValue]);

    

    const handleUserData =(e)=>{
    console.log("e.target.value.........",e.target.value)
    if (newdata.length > 0) {
           
    console.log('newData;;;;;;;;;;;;;;;;;;;;',newdata);
    axios
        .post(userDetail, {
            id : e.target.value,
        })
        .then((response) => {
            console.log("newData response .......",response.data);
            if (response.data !== "no record found") {
                let data = response.data;
                data = {
                    ...data,
                    firstname: data.name.split(" ")[0],
                    surname: data.name.split(" ")[1],
                };
                setUserData(data);
                console.log('data:::::',data);
            }
        })
        setSelectedGroup(e.target.value)
}
    }
    const onEdit = (e) => {
        e.preventDefault();
        console.log("userData ..............", userData);
        const { office_id,login_id,department_id, firstname, surname, email,position_id,category_id,company_id ,user_edit_r,user_refer_r,notice_edit_r,notice_refer_r,notice_reply_r,wiki_edit_r,wiki_refer_r,wf_edit_r,wf_refer_r,sns_edit_r,sns_refer_r,fs_edit_r,fs_refer_r} = userData;
        const data = {
            user_name: firstname + " " + surname,
            user_email: email,
            department_id,
            office_id,
            login_id,
            position_id,
            category_id,
            company_id,
            user_edit_r,
            user_refer_r,
            notice_edit_r,
            notice_reply_r,
            notice_refer_r,
            wiki_edit_r,
            wiki_refer_r,
            wf_edit_r,
            wf_refer_r,
            sns_edit_r,
            sns_refer_r,
            fs_edit_r,
            fs_refer_r,
        };

        console.log("updated data", data);
        axios
            .post(`${editUserdata}/${userData.id}`, data)
            .then((response) => {
                console.log("response::::::::", response);
                // setUserData(response);
                alert("User Updated Successfully");
            })
            .catch((err) => {
                console.log("err:::::", err);
            });

    };
    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    function handleSelectSingle(selectedSingle) {
        setSelectedSingle(selectedSingle);
    }

    function handleSelectGroups(selectedGroup) {
        setSelectedGroup(selectedGroup);
    }

    function handleSelectGroups2(selectedGroup2) {
        setSelectedGroup2(selectedGroup2);
    }

    function handleSelectNoSortingGroup(selectedNoSortingGroup) {
        setSelectedNoSortingGroup(selectedNoSortingGroup);
    }

    function handleMulti(selectedMulti) {
        setselectedMulti(selectedMulti);
    }

    function handleMulti2(selectedMulti2) {
        setselectedMulti2(selectedMulti2);
    }
    function handleMulti3(selectedMulti3) {
        setselectedMulti3(selectedMulti3);
    }

    const [user, setUser] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("/api/users");
            setUser(result.data);
        };
        fetchData();
    }, []);

    document.title = "Form Select | Velzon - React Admin & Dashboard Template";

    const handleSwitchChange = (e) => {
        setUserData((data)=>{
            const temp = {...data};
            temp[e.target.name] = e.target.checked ? 1 : 0;
            return temp;
        });
    }

    const handleInputChange = (e) => {
        const { name , value } = e.target;
        setUserData(
            {
                ...userData,
                [name]: value
            }
        )
    }

    return (
        <>
            <UiContent />
            <div className="page-content">
                <div className="container-fluid">
                    <BreadCrumb title="利用者検索・編集" pageTitle="Forms" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="利用者検索" />
                                <CardBody>
                                    <div className="live-preview">
                                        <Row className="align-items-center g-3">
                                            <Col lg={4}>
                                                <Label
                                                    htmlFor="dept"
                                                    className="form-label text-muted"
                                                >
                                                    部門
                                                </Label>
                                                <select
                                                    className="form-select"
                                                    aria-label=".form-select-sm example"
                                                    name="dept"
                                                    value={deptValue}
                                                    onChange={(e) =>
                                                        setDeptValue(
                                                            e.target.value
                                                        )
                                                    }   
                                                >
                                                    <option>
                                                    部門を選択してください
                                                    </option>

                                                    {data?.map(
                                                        (items, index) => (
                                                            <option
                                                                key={index}
                                                                value={items.id}
                                                            >
                                                                {
                                                                    items.dept_name
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </Col>
                                            <Col lg={4}>
                                                <Label
                                                    htmlFor="office"
                                                    className="form-label text-muted"
                                                >
                                                    オフィス
                                                </Label>
                                                <select
                                                    className="form-select"
                                                    aria-label=".form-select-sm example"
                                                    name="office"
                                                    value={officeValue}
                                                    onChange={(e) =>
                                                        setOfficeValue(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option>
                                                        オフィスを選択してください
                                                    </option>
                                                    {office?.map(
                                                        (items, index) => (
                                                            <option
                                                                key={index}
                                                                value={items.id}
                                                            >
                                                                {
                                                                    items.office_name
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </Col>

                                            <Col lg={4}>
                                                {/*<div className="mb-3">*/}
                                                <Label
                                                    htmlFor="user"
                                                    className="form-label text-muted"
                                                >
                                                    利用者名
                                                </Label>
                                                <select
                                                    className="form-select"
                                                    aria-label=".form-select-sm example"
                                                    name="user"
                                                    value={selectedGroup}
                                                    onChange={handleUserData}
                                                    >
                                                    <option>
                                                    ユーザーを選択してください
                                                    </option>
                                                    {newdata?.map(
                                                        (items, index) => (
                                                            <option
                                                                key={index}
                                                                value={items.id}
                                                            >
                                                                {
                                                                    items.user_name
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                                {/* <Select
                                                            value={selectedGroup}
                                                            // searchable
                                                            onChange={() => {
                                                                handleSelectGroups();
                                                            }}
                                                            options={GroupOptions}
                                                            name="user"
                                                        /> */}
                                                {/*</div>*/}
                                            </Col>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="情報編集" />
                                <CardBody>
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <Form>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label
                                                                htmlFor="lastnameInput"
                                                                className="form-label"
                                                            >
                                                                姓
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                className="form-control"
                                                                id="lastnameInput"
                                                                name="surname"
                                                                placeholder=""
                                                                defaultValue={
                                                                    ""
                                                                }
                                                                onChange={handleInputChange}
                                                                value={
                                                                    userData.surname
                                                                }
                                                            ></Input>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label
                                                                htmlFor="firstnameInput"
                                                                className="form-label"
                                                            >
                                                                名
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                className="form-control"
                                                                id="firstnameInput"
                                                                placeholder=""
                                                                name="firstname"
                                                                onChange={handleInputChange}
                                                                value={
                                                                    userData.firstname
                                                                }
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label
                                                                htmlFor="skillsInput"
                                                                className="form-label"
                                                            >
                                                                会社
                                                            </Label>
                                                            <select
                                                                className="form-select mb-3"
                                                                value={
                                                                    userData.company_id
                                                                }
                                                                name="company_id"
                                                                onChange={handleInputChange}
                                                            >
                                                                <option>
                                                                    オフィスを選択してください
                                                                </option>

                                                                {companyData?.map(
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
                                                                        >
                                                                            {
                                                                                items.company_name
                                                                            }
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label
                                                                htmlFor="skillsInput"
                                                                className="form-label"
                                                            >
                                                                役職
                                                            </Label>
                                                            <select
                                                                className="form-select mb-3"
                                                                value={
                                                                    userData.position_id
                                                                }
                                                                name="position_id"
                                                                onChange={handleInputChange} 
                                                            >
                                                                <option>
                                                                    役職を選択してください
                                                                </option>
                                                                {position?.map(
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
                                                                            selected={
                                                                                items.id ===
                                                                                userData.position_id
                                                                            }
                                                                        >
                                                                            {
                                                                                items.position_name
                                                                            }
                                                                        </option>
                                                                    )
                                                                )}

                                                                {/* <option value="Y01">
                                                                    取締役
                                                                </option>
                                                                <option value="Y02">
                                                                    部門長
                                                                </option>
                                                                <option value="Y03">
                                                                    マネージャー
                                                                </option>
                                                                <option value="Y04">
                                                                    リーダー
                                                                </option>
                                                                <option value="Y05">
                                                                    チーフ
                                                                </option> */}
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label
                                                                htmlFor="skillsInput"
                                                                className="form-label"
                                                            >
                                                                オフィス
                                                            </Label>
                                                            <select
                                                                className="form-select mb-3"
                                                                value={
                                                                    userData.office_id
                                                                }
                                                                name="office_id"
                                                                onChange={handleInputChange}
                                                            >
                                                                <option>
                                                                    オフィスを選択してください
                                                                </option>

                                                                {office?.map(
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
                                                                            selected={
                                                                                items.id ===
                                                                                userData.office_id
                                                                            }
                                                                        >
                                                                            {
                                                                                items.office_name
                                                                            }
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>
                                                            {/* <option >オフィスを選択してください</option>*/}
                                                            {/* <option value="O02">那覇オフィス</option>
                                                                <option value="O03">北谷オフィス</option>
                                                                <option value="O04">コザオフィス</option>
                                                                <option value="O05">浦添オフィス</option>
                                                                <option value="O06">名護オフィス</option> */}
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label
                                                                htmlFor="skillsInput"
                                                                className="form-label"
                                                            >
                                                                部門
                                                            </Label>
                                                            <select
                                                                className="form-select mb-3"
                                                                value={
                                                                    userData.department_id
                                                                }
                                                                name="department_id"
                                                                onChange={handleInputChange}
                                                            >
                                                                <option>
                                                                    部門を選択してください
                                                                </option>

                                                                {data?.map(
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
                                                                            selected={
                                                                                items.id ===
                                                                                userData.department_id
                                                                            }
                                                                        >
                                                                            {
                                                                                items.dept_name
                                                                            }
                                                                        </option>
                                                                    )
                                                                )}

                                                                {/* <option value="B02">生産支援部</option>
                                                                <option value="B03">業務推進室</option>
                                                                <option value="B04">活躍プロジェクト室</option>
                                                                <option value="B05">アフスク事業部</option> */}
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label
                                                                htmlFor="skillsInput"
                                                                className="form-label"
                                                            >
                                                                区分
                                                            </Label>
                                                            <select
                                                                className="form-select mb-3"
                                                                value={
                                                                    userData.category_id
                                                                }
                                                                name="category_id"
                                                                onChange={handleInputChange}
                                                            >
                                                                <option>
                                                                    区分を選択してください
                                                                </option>
                                                                {categoryData?.map(
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
                                                                            selected={
                                                                                items.id ===
                                                                                userData.category_id
                                                                            }
                                                                        >
                                                                            {
                                                                                items.cat_name
                                                                            }
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label
                                                                htmlFor="emailInput"
                                                                className="form-label"
                                                            >
                                                                メールアドレス
                                                            </Label>
                                                            <Input
                                                                type="email"
                                                                className="form-control"
                                                                id="emailInput"
                                                                placeholder=""
                                                                name="email"
                                                                onChange={handleInputChange}
                                                                value={
                                                                    userData.email
                                                                }
                                                                
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label
                                                                htmlFor="designationInput"
                                                                className="form-label"
                                                            >
                                                                ログインID
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                className="form-control"
                                                                // ref={inputRef}
                                                                id="designationInput"
                                                                placeholder=""
                                                                name="login_id"
                                                                onChange={handleInputChange}
                                                                value={
                                                                    userData.login_id
                                                                }

                                                            />
                                                        </div>
                                                    </Col>
                                                    {/*
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="newpasswordInput" className="form-label">New
                                                                Password*</Label>
                                                            <Input type="password" className="form-control"
                                                                id="newpasswordInput" placeholder="" />
                                                        </div>
                                                    </Col>
*/}
                                                    <h5 className="card-title text-decoration-underline mb-3">
                                                        権限:
                                                    </h5>
                                                    <ul className="list-unstyled mb-0">
                                                        <li className="d-flex">
                                                            <div className="flex-grow-1">
                                                                <label
                                                                    htmlFor="directMessage"
                                                                    className="form-check-label fs-14"
                                                                >
                                                                    利用者作成編集権限
                                                                </label>
                                                                <p className="text-muted">
                                                                    利用者を作成したり、編集する権限
                                                                </p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch form-switch-lg">
                                                                    <Input
                                                                        name="user_edit_r"
                                                                        checked={
                                                                            userData.user_edit_r
                                                                        }
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        id="directMessage"
                                                                        onChange={handleSwitchChange}
                                                                        // defaultChecked
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <Label
                                                                    className="form-check-label fs-14"
                                                                    htmlFor="desktopNotification"
                                                                >
                                                                    利用者閲覧権限
                                                                </Label>
                                                                <p className="text-muted">
                                                                    利用者情報を閲覧する権限
                                                                </p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch form-switch-lg">
                                                                    <Input
                                                                        name="user_refer_r"
                                                                        checked={
                                                                            userData.user_refer_r
                                                                        }
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        id="desktopNotification"
                                                                        onChange={handleSwitchChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <Label
                                                                    className="form-check-label fs-14"
                                                                    htmlFor="emailNotification"
                                                                >
                                                                    お知らせ作成編集権限
                                                                </Label>
                                                                <p className="text-muted">
                                                                    お知らせを作成したり、編集する権限
                                                                </p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch form-switch-lg">
                                                                    <Input
                                                                        name="notice_edit_r"
                                                                        checked={
                                                                            userData.notice_edit_r
                                                                        }
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        id="emailNotification"
                                                                        onChange={handleSwitchChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <Label
                                                                    className="form-check-label fs-14"
                                                                    htmlFor="chatNotification"
                                                                >
                                                                    お知らせ返信権限
                                                                </Label>
                                                                <p className="text-muted">
                                                                    お知らせに返信、コメントする権限
                                                                </p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch form-switch-lg">
                                                                    <Input
                                                                        name="notice_reply_r"
                                                                        checked={
                                                                            userData.notice_reply_r
                                                                        }
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        id="chatNotification"
                                                                        onChange={handleSwitchChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <Label
                                                                    className="form-check-label fs-14"
                                                                    htmlFor="chatNotification"
                                                                >
                                                                    お知らせ閲覧権限
                                                                </Label>
                                                                <p className="text-muted">
                                                                    お知らせを閲覧する権限
                                                                </p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch form-switch-lg">
                                                                    <Input
                                                                        name="notice_refer_r"
                                                                        checked={
                                                                            userData.notice_refer_r
                                                                        }
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        id="chatNotification"
                                                                        onChange={handleSwitchChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <Label
                                                                    className="form-check-label fs-14"
                                                                    htmlFor="purchaesNotification"
                                                                >
                                                                    WIKI作成編集権限
                                                                </Label>
                                                                <p className="text-muted">
                                                                    WIKIを作成したり編集する権限
                                                                </p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch form-switch-lg">
                                                                    <Input
                                                                        name="wiki_edit_r"
                                                                        checked={
                                                                            userData.wiki_edit_r
                                                                        }
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        id="purchaesNotification"
                                                                        onChange={handleSwitchChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <Label
                                                                    className="form-check-label fs-14"
                                                                    htmlFor="purchaesNotification"
                                                                >
                                                                    WIKI閲覧権限
                                                                </Label>
                                                                <p className="text-muted">
                                                                    WIKIを閲覧する権限
                                                                </p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch form-switch-lg">
                                                                    <Input
                                                                        name="wiki_refer_r"
                                                                        checked={
                                                                            userData.wiki_refer_r
                                                                        }
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        id="purchaesNotification"
                                                                        onChange={handleSwitchChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <Label
                                                                    className="form-check-label fs-14"
                                                                    htmlFor="purchaesNotification"
                                                                >
                                                                    ワークフロー作成編集権限
                                                                </Label>
                                                                <p className="text-muted">
                                                                    ワークフローを作成したり編集する権限
                                                                </p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch form-switch-lg">
                                                                    <Input
                                                                        name="wf_edit_r"
                                                                        checked={
                                                                            userData.wf_edit_r
                                                                        }
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        id="purchaesNotification"
                                                                        onChange={handleSwitchChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <Label
                                                                    className="form-check-label fs-14"
                                                                    htmlFor="purchaesNotification"
                                                                >
                                                                    ワークフロー閲覧権限
                                                                </Label>
                                                                <p className="text-muted">
                                                                    ワークフローを閲覧する権限
                                                                </p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch form-switch-lg">
                                                                    <Input
                                                                        name="wf_refer_r"
                                                                        checked={
                                                                            userData.wf_refer_r
                                                                        }
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        id="purchaesNotification"
                                                                        onChange={handleSwitchChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <Label
                                                                    className="form-check-label fs-14"
                                                                    htmlFor="purchaesNotification"
                                                                >
                                                                    SNS作成編集権限
                                                                </Label>
                                                                <p className="text-muted">
                                                                    チャット等SNSを作成したり編集する権限
                                                                </p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch form-switch-lg">
                                                                    <Input
                                                                        name="sns_edit_r"
                                                                        checked={
                                                                            userData.sns_edit_r
                                                                        }
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        id="purchaesNotification"
                                                                        onChange={handleSwitchChange}
                                                                    />
                                                                    
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <Label
                                                                    className="form-check-label fs-14"
                                                                    htmlFor="purchaesNotification"
                                                                >
                                                                    SNS閲覧権限
                                                                </Label>
                                                                <p className="text-muted">
                                                                    チャット等SNSを閲覧する権限
                                                                </p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch form-switch-lg">
                                                                    <Input
                                                                        name="sns_refer_r"
                                                                        checked={
                                                                            userData.sns_refer_r
                                                                        }
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        id="purchaesNotification"
                                                                        onChange={handleSwitchChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <Label
                                                                    className="form-check-label fs-14"
                                                                    htmlFor="purchaesNotification"
                                                                >
                                                                    ファイルサーバー編集権限
                                                                </Label>
                                                                <p className="text-muted">
                                                                    ファイルサーバーのフォルダ、ファイルを作成、編集する権限
                                                                </p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch form-switch-lg">
                                                                    <Input
                                                                        name="fs_edit_r"
                                                                        checked={
                                                                            userData.fs_edit_r
                                                                        }
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        id="purchaesNotification"
                                                                        onChange={handleSwitchChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <Label
                                                                    className="form-check-label fs-14"
                                                                    htmlFor="purchaesNotification"
                                                                >
                                                                    ファイルサーバー閲覧権限
                                                                </Label>
                                                                <p className="text-muted">
                                                                    ファイルサーバーのフォルダ、ファイルを閲覧する権限
                                                                </p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch form-switch-lg">
                                                                    <Input
                                                                        name="fs_refer_r"
                                                                        checked={userData.fs_refer_r}
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        id="purchaesNotification"
                                                                        onChange={handleSwitchChange}
                                                                        
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                    <Col lg={12}>
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                onClick={onEdit}
                                                            >
                                                                登録
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-soft-success"
                                                                onClick={() =>
                                                                    handleClear()
                                                                }
                                                            >
                                                                クリア
                                                            </button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </TabPane>

                                        <TabPane tabId="2">
                                            <div className="mb-3">
                                                <h5 className="card-title text-decoration-underline mb-3">
                                                    権限:
                                                </h5>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex">
                                                        <div className="flex-grow-1">
                                                            <label
                                                                htmlFor="directMessage"
                                                                className="form-check-label fs-14"
                                                            >
                                                                利用者作成編集権限
                                                            </label>
                                                            <p className="text-muted">
                                                                利用者を作成したり、編集する権限
                                                            </p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch form-switch-lg">
                                                                <Input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    id="directMessage"
                                                                    defaultChecked
                                                                />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex mt-2">
                                                        <div className="flex-grow-1">
                                                            <Label
                                                                className="form-check-label fs-14"
                                                                htmlFor="desktopNotification"
                                                            >
                                                                利用者閲覧権限
                                                            </Label>
                                                            <p className="text-muted">
                                                                利用者情報を閲覧する権限
                                                            </p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch form-switch-lg">
                                                                <Input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    id="desktopNotification"
                                                                    defaultChecked
                                                                />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex mt-2">
                                                        <div className="flex-grow-1">
                                                            <Label
                                                                className="form-check-label fs-14"
                                                                htmlFor="emailNotification"
                                                            >
                                                                お知らせ作成編集権限
                                                            </Label>
                                                            <p className="text-muted">
                                                                お知らせを作成したり、編集する権限
                                                            </p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch form-switch-lg">
                                                                <Input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    id="emailNotification"
                                                                />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex mt-2">
                                                        <div className="flex-grow-1">
                                                            <Label
                                                                className="form-check-label fs-14"
                                                                htmlFor="chatNotification"
                                                            >
                                                                お知らせ閲覧権限
                                                            </Label>
                                                            <p className="text-muted">
                                                                お知らせを閲覧する権限
                                                            </p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch form-switch-lg">
                                                                <Input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    id="chatNotification"
                                                                />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex mt-2">
                                                        <div className="flex-grow-1">
                                                            <Label
                                                                className="form-check-label fs-14"
                                                                htmlFor="purchaesNotification"
                                                            >
                                                                WIKI作成編集権限
                                                            </Label>
                                                            <p className="text-muted">
                                                                WIKIを作成したり編集する権限
                                                            </p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch form-switch-lg">
                                                                <Input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    id="purchaesNotification"
                                                                />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex mt-2">
                                                        <div className="flex-grow-1">
                                                            <Label
                                                                className="form-check-label fs-14"
                                                                htmlFor="purchaesNotification"
                                                            >
                                                                WIKI閲覧権限
                                                            </Label>
                                                            <p className="text-muted">
                                                                WIKIを閲覧する権限
                                                            </p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch form-switch-lg">
                                                                <Input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    id="purchaesNotification"
                                                                />
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
                </div>
            </div>
        </>
    );
};

export default FormSelect;
