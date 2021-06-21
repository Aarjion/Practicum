import React from 'react';
import {Container, Row} from "react-bootstrap";

const Shop = () => {
    return (
        <Container>
            <div className="d-flex justify-content-center align-items-center" class="welcomeWord" >
                Военторг 15 это первый специализированный магазин для силовых структур в Петропавловске!
                <br/> Мы работает более 20 лет и знаем что вам нужно!
            </div>
            <Row>
            <div class="section-blocks">

                <div class="block" id="i1">
                   <div class="block-title" > Военное </div>
                </div>

                    <div class="block" id="i2">
                        <div class="block-title"> Полиция </div>
                    </div>
                <div class="block" id="i3">
                    <div class="block-title"> МЧС </div>
                </div>
                    <div class="block" id="i4">
                        <div class="block-title"> Пограничное </div>
                    </div>
                <div class="block" id="i5">
                    <div class="block-title"> Фурнитура </div>
                </div>
                    <div class="block" id="i6">
                        <div class="block-title"> Сувениры </div>
                    </div>
                <div class="block" id="i7">
                    <div class="block-title"> Уценённый товар </div>
                </div>
                    <div class="block" id="i8">
                        <div class="block-title">  Охота и рыбалка </div>
                    </div>
            </div>
                <div class="short-info">
                    <div class="short-section" id="i9"></div><span class="short-text">Все размеры</span>
                    <div class="short-section" id="i10"></div><span class="short-text">Примерка перед <br /> покупкой</span>
                    <div class="short-section" id="i11"></div><span class="short-text">Доставка в течении <br /> 2 дней</span>
                    <div class="short-section" id="i12"></div><span class="short-text">Оплата наличными <br /> и переводом</span>
                </div>
            </Row>
            <div class="footer"></div>
        </Container>
    );
};

export default Shop;