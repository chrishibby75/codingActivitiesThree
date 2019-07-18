import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export function RecipeList({ children }) {
    return <ul className="list-group">{children}</ul>
}

export function RecipeListItem({
    noImage="https://i.ytimg.com/vi/O7Z7fQr3r5o/hqdefault.jpg/300x300",
    thumbnail="https://placehold.it/300x300",
    title,
    ingredients,
    href
}) {
    return(
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={!thumbnail ? noImage : thumbnail} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <a rel="noreferrer noopener" target="_blank" href={href}><h3>{title}</h3></a>
                        <p>Ingredients: {ingredients}</p>
                        {/* <a rel="noreferrer noopener" target="_blank" href={href}>
                            Go To Recipe!
                        </a> */}
                    </Col>
                </Row>
            </Container>
        </li>
    );
}

