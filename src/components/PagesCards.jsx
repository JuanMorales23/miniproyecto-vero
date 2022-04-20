import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../components/assets/css/Pages.css'

const PagesCards = ({ title, url, bone }) => {
    return (
        <div>
            <Card>
                <div className={bone}>
                <Card.Title className="title"><b>{title}</b></Card.Title>
                <Card.Body>
                    <Link to={url} variant="primary" className="btn btn-dark">
                        Ingresar
                    </Link>
                </Card.Body>
                </div>
            </Card>
        </div>
    )
}

export default PagesCards