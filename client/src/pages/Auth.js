import React from 'react';
import {Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";

const Auth = () => {
    const location = useLocation()
    const isLogin=location.pathname === LOGIN_ROUTE

    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 250}}
        >
            <Card style={{width:500, backgroundColor:"#373810"}} className="p-5" >
                <h2 className="m-auto" style={{color:"#C4C4C4"}}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль"
                    />
                    <Row className={"d-flex justify-content-between mt-3 pl-3 pr-3"}>
                        {isLogin ?
                            <div style={{color: "#C4C4C4"}}>
                                Еще не с нами? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                            </div>
                            :
                            <div style={{color: "#C4C4C4"}}>
                                Уже с нами? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                            </div>
                        }
                        <Button
                            variant={"success"}
                            >
                            {isLogin ? 'Войти' : 'Регистрация'}

                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
};

export default Auth;