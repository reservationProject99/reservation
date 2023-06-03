import { useState } from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { Button as BootstrapButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




const cardData = [
    {
        cars_id: 6,
        rating: 4,
        description: 'toyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyota',
        type: "toyota",
        energy_type: "electric",
        model: "T-120",
        year: 2020,
        rental_price: 100,
        available: true,
        start_date: null,
        end_date: null,
        is_delete: false,
        provider_id: 1,
        start_location: null,
        end_location: null,
        seats_number: 4,
        user_id: null,
        images_data: "https://www.vhv.rs/dpng/d/483-4831619_outlander-phev-mitsubishi-outlander-phev-2020-ruby-black.png"
    },
    {
        cars_id: 5,
        rating: 2,
        description: 'toyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyota',
        type: "mitsubishi",
        energy_type: "electric",
        model: "m-120",
        year: 2020,
        rental_price: 100,
        available: true,
        start_date: null,
        end_date: null,
        is_delete: false,
        provider_id: 1,
        start_location: null,
        end_location: null,
        seats_number: 4,
        user_id: null,
        images_data: "https://www.vhv.rs/dpng/d/483-4831619_outlander-phev-mitsubishi-outlander-phev-2020-ruby-black.png"
    },
    {

        cars_id: 4,
        rating: 3,
        description: 'toyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyotatoyota',
        type: "mitsubishi",
        energy_type: "electric",
        model: "m-120",
        year: 2020,
        rental_price: 100,
        available: true,
        start_date: null,
        end_date: null,
        is_delete: false,
        provider_id: 1,
        start_location: null,
        end_location: null,
        seats_number: 3,
        user_id: null,
        images_data: "https://www.vhv.rs/dpng/d/483-4831619_outlander-phev-mitsubishi-outlander-phev-2020-ruby-black.png"
    }
];

export default function ProfilePage() {
    const [showPopover, setShowPopover] = useState(false);

    const handlePopover = () => {
        setShowPopover(!showPopover);
    };


    return (
        <section style={{ backgroundColor: '#eee' }}>
            <div className='text-center'>
                <h1 className='fw-bold' style={{ color: '#000d6b' }}>Profile Page</h1>
            </div>
            <MDBContainer className="py-5">
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
                    <h1 className="row d-flex justify-content-center fw-bold mb-4" style={{ color: '#000d6b' }}>Last Preservations</h1>

                    {cardData.map((card, index) => (
                        <div key={index} className="col-lg-4 col-md-4 col-sm-6 mb-5">
                            <div className="car__item" style={{ backgroundColor: "white" }}>
                                <div className="car__img">
                                    <img src={`http://localhost:8000/${card.images_data}`} alt="" className="w-100" />
                                </div>

                                <div className="car__item-content mt-4">
                                    <h4 className="section__title text-center">{card.model}</h4>
                                    <h6 className="rent__price text-center mt-">
                                        ${card.rental_price}.00 <span>/ Day</span>
                                    </h6>

                                    <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                                        <span className="d-flex align-items-center gap-1">
                                            <i className="ri-car-line"></i> {card.type}
                                        </span>
                                        <span className="d-flex align-items-center gap-1">
                                            <i className="ri-settings-2-line"></i> {card.energy_type}
                                        </span>
                                        <span className="d-flex align-items-center gap-1">
                                            <i class="ri-calendar-line" style={{ color: "#f9a826" }}></i>{card.year}
                                        </span>
                                    </div>
                                    <Link to="/Checkout">
                                        <button className="w-50 car__item-btn car__btn-rent">
                                            Rent it again 
                                        </button>
                                    </Link>
                                    <Link to={`/cars/${card.model}`}>
                                        <button className="w-50 car__item-btn car__btn-details">
                                            Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </MDBContainer>

        </section >
    );
}