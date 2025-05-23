import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Button, Affix, Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { logout } from "redux_modules/auth/actions";
import styles from "./Navbar.module.css";

const { Header } = Layout;

const navigation = [
    { name: "Home", link: "home" },
    { name: "Application", link: "application" },
    { name: "Results", link: "results" },
    { name: "Species", link: "species" },
    { name: "Participate", link: "participate" },
];

const Navbar = (props) => {
    const { isAuthenticated } = props;
    const [visible, setVisible] = useState(false);

    return (
        <Affix offsetTop={0}>
            <div>
                <Header className={styles.headerContainer}>
                    <Row className={styles.navContainer} align={"middle"}>
                        <Col xs={20} lg={4}>
                            <Link className={styles.logo} to="/">
                                <img
                                    src="/assets/logos/logoName.webp"
                                    alt="Logo of Dive Reporter"
                                />
                            </Link>
                        </Col>
                        <Col xs={4} lg={20}>
                            <div className={styles.hidden}>
                                <Row type="flex" justify="end">
                                    <>
                                        {navigation.map((element) => (
                                            <Link
                                                className={styles.navbarLink}
                                                key={element.name}
                                                to={{
                                                    pathname: "/",
                                                }}
                                                onClick={() => {
                                                    let el = document.getElementById(`${element.link}`);
                                                    if (el) {
                                                        el.scrollIntoView({ behavior: "smooth" });
                                                    }
                                                }}
                                            >
                                                {element.name}
                                            </Link>
                                        ))}
                                        <Link
                                            className={styles.navbarLink}
                                            key="about"
                                            to={{
                                                pathname: "/about",
                                            }}
                                        >
                                            About
                                        </Link>
                                    </>
                                    {isAuthenticated ? (
                                        <>
                                            <div className={styles.spacer}>|</div>

                                            <Link
                                                className={styles.navbarLink}
                                                key={"dashboard"}
                                                to={"/dashboard"}
                                            >
                                                Dashboard
                                            </Link>
                                            <Link
                                                className={styles.navbarLink}
                                                key={"logout"}
                                                to=""
                                                onClick={() => {
                                                    props.logout();
                                                }}
                                            >
                                                Logout
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <div className={styles.spacer}>|</div>
                                            <Link
                                                className={styles.navbarLink}
                                                key={"login"}
                                                to={"/login"}
                                            >
                                                Login
                                            </Link>
                                        </>
                                    )}
                                </Row>
                            </div>

                            <div className={styles.menuButton}>
                                <Row type="flex" justify="end">
                                    <Button
                                        onClick={() => setVisible(true)}
                                        style={{ margin: "15px" }}
                                        type="primary"
                                    >
                                        <MenuOutlined />
                                    </Button>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Header>
                <Drawer
                    className={styles.drawerNavbar}
                    open={visible}
                    onClose={() => setVisible(false)}
                    placement="right"
                >
                    <Menu>
                        {isAuthenticated ? (
                            <>
                                <Menu.Item key={"dashboard"}>
                                    <Link
                                        className={styles.navbarLink}
                                        onClick={() => setVisible(false)}
                                        to="/dashboard"
                                    >
                                        <b>Dashboard</b>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key={"logout"}>
                                    <Link
                                        className={styles.navbarLink}
                                        to=""
                                        onClick={() => {
                                            props.logout();
                                        }}
                                    >
                                        <b>Logout</b>
                                    </Link>
                                </Menu.Item>
                            </>
                        ) : (
                            <Menu.Item key={"login"}>
                                <Link
                                    className={styles.navbarLink}
                                    onClick={() => setVisible(false)}
                                    to="/login"
                                >
                                    <b>Login</b>
                                </Link>
                            </Menu.Item>
                        )}

                        {navigation.map((element) => (
                            <Menu.Item key={element.name}>
                                <Link
                                    className={styles.navbarLink}
                                    key={element.name}
                                    to={`/`}
                                    onClick={() => {
                                        let el = document.getElementById(`${element.link}`);
                                        if (el) {
                                            el.scrollIntoView({ behavior: "smooth" });
                                        }
                                        setVisible(false);
                                    }}
                                >
                                    {element.name}
                                </Link>
                            </Menu.Item>
                        ))}
                        <Menu.Item key="about">
                            <Link
                                className={styles.navbarLink}
                                key="about"
                                to={`/about`}
                            >
                                About
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Drawer>
            </div>
        </Affix>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
