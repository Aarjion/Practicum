import React, {useContext} from 'react';
import {Context} from "../index";


import {Button, Form, FormControl, Nav, Navbar, NavLink} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {BASKET_ROUTE, CATALOG_ROUTE, CONTACT_ROUTE, FAVORITES_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const NavBar = observer (() => {
    const {user} = useContext(Context)
    return (
            <Navbar className="headmenu" bg="dark">
                <div className="container">
                    <Form inline>
                        <FormControl type="text"  placeholder="Введите название товара" className="mr-sm-2" />
                        <Button variant="outline-secondary">Найти</Button>
                    </Form>
                    <Nav >
                        <Nav.Link href={CATALOG_ROUTE}>Каталог</Nav.Link>
                        <Nav.Link href={FAVORITES_ROUTE}>Избранное</Nav.Link>
                        <Nav.Link href={BASKET_ROUTE}>Корзина</Nav.Link>
                        <Nav.Link href={CONTACT_ROUTE}>Контакты</Nav.Link>
                        {/*<Nav.Link href="#5"></Nav.Link>*/}

                        {user.isAuth ?
                            <Nav>
                            <Button variant="outline-secondary">Админ панель</Button>
                            <Button variant="outline-secondary" className={"ml-2"}>Войти</Button>

                            </Nav>
                            :
                            <Nav>
                                <Nav.Link href="#7">|</Nav.Link>
                                <Nav.Link href={LOGIN_ROUTE} onClick={() => user.setIsAuth(true)}>Авторизация</Nav.Link>

                            </Nav>
                        }

                    </Nav>
                </div>
            </Navbar>

    );
});

export default NavBar;