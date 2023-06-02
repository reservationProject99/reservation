import { useState } from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { Button as BootstrapButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import img01 from "../../assets/all-images/cars-img/bmw-offer.png";
import img02 from "../../assets/all-images/cars-img/mercedes-offer.png";
import img03 from "../../assets/all-images/cars-img/mercedes-offer.png";
import img04 from "../../assets/all-images/cars-img/mercedes-offer.png";
import img05 from "../../assets/all-images/cars-img/mercedes-offer.png";



const cardData = [
    {
        imageSrc: img01,
        title: 'Card 1',
        description: 'Some quick example text for Card 1.',
        listItems: ['Cras justo odio', 'Dapibus ac facilisis in', 'Vestibulum at eros'],
    },
    {
        imageSrc: img02,
        title: 'Card 2',
        description: 'Some quick example text for Card 2.',
        listItems: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
        imageSrc: img03,
        title: 'Card 2',
        description: 'Some quick example text for Card 2.',
        listItems: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
        imageSrc: img04,
        title: 'Card 2',
        description: 'Some quick example text for Card 2.',
        listItems: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
        imageSrc: img05,
        title: 'Card 2',
        description: 'Some quick example text for Card 2.',
        listItems: ['Item 1', 'Item 2', 'Item 3'],
    },
];


export default function ProfilePage() {
    const [showPopover, setShowPopover] = useState(false);

    const handlePopover = () => {
        setShowPopover(!showPopover);
    };


    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol>
                        <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                            <MDBBreadcrumbItem>
                                <Link to="/">Home</Link>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid
                                />
                                <p className="text-muted mb-1">User Name</p>
                                <div className="d-flex justify-content-center mb-2">

                                    <Link to="/Edit">
                                        <BootstrapButton variant="danger" className="btn-floating" onClick={handlePopover}>
                                            <FontAwesomeIcon icon={faMagic} />
                                        </BootstrapButton>
                                    </Link>

                                    {/* <MDBPopover className="btn-floating" show={showPopover} onHide={() => setShowPopover(false)}>
                                        <MDBPopoverHeader>Edit Profile</MDBPopoverHeader>
                                        <MDBPopoverBody>
                                            <MDBInput type="text" className="text-muted" placeholder="Edit Name" />
                                            <MDBInput type="email" className="text-muted" placeholder="Edit Email" />
                                        </MDBPopoverBody>
                                    </MDBPopover> */}

                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCol lg="12">
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <form>
                                        <MDBRow className="mb-4">
                                            <MDBCol sm="3">
                                                <MDBCardText>Full Name</MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBInput type="text" className="text-muted" placeholder="Johnatan Smith" />
                                            </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow className="mb-4">
                                            <MDBCol sm="3">
                                                <MDBCardText>Email</MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBInput type="email" className="text-muted" placeholder="example@example.com" />
                                            </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow className="mb-4">
                                            <MDBCol sm="3">
                                                <MDBCardText>Phone</MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBInput type="text" className="text-muted" placeholder="(097) 234-5678" />
                                            </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow className="mb-4">
                                            <MDBCol sm="3">
                                                <MDBCardText>Address</MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBInput type="text" className="text-muted" placeholder="Bay Area, San Francisco, CA" />
                                            </MDBCol>
                                        </MDBRow>
                                        
                                        <div className="d-flex justify-content-end">
                                        <Link to="/Edit">
                                        <BootstrapButton variant="danger" className="btn-floating" onClick={handlePopover}>
                                            <FontAwesomeIcon icon={faMagic} />
                                        </BootstrapButton>
                                    </Link>
                                    </div>

                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                    </MDBCol>
                </MDBRow>


            <div className="row d-flex justify-content-around">
                <h2 className="row d-flex justify-content-center">Last Preservations</h2>
                {cardData.map((card, index) => (
                    <div className="card" style={{ width: '25rem', marginTop: '1.5rem' }} key={index}>
                        <img src={card.imageSrc} className="card-img-top" alt="Card Image" />
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.description}</p>
                        </div>
                        {/* <ul className="list-group list-group-light list-group-small">
                            {card.listItems.map((item, idx) => (
                                <li className="list-group-item px-4" key={idx}>
                                    {item}
                                </li>
                            ))}
                        </ul> */}
                        <div className="card-body d-flex justify-content-around">
                            <Link to="/Checkout" className="card-link">
                                Rent Again
                            </Link>
                            <Link to="/" className="card-link">
                                Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            </MDBContainer>

        </section>
    );
}