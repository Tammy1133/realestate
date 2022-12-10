import { useNavigate, useParams } from "react-router-dom";
import { fetchApi, baseUrl } from "./utils/fetchApi";
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Rent from "./utils/rent.jpg";
import buy from "./utils/buy.jpg";
import millify from "millify";
import bathimage from "./utils/bath.png";
import bedimage from "./utils/bed.png";
import areaimage from "./utils/area1.png";
import "./css/propertyDetail.css";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import ScrollToTop from "react-scroll-to-top";

const EachProperty = () => {
  const navigate = useNavigate();
  const { externalID } = useParams();

  const [propertyDetails, setPropertyDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
    referenceNumber,
    contactName,
    phoneNumber,
    score,
  } = propertyDetails;

  useEffect(() => {
    const getPropertyDetails = async () => {
      const propertyDetails = await fetchApi(
        `${baseUrl}/properties/detail?externalID=${externalID}`
      );

      setPropertyDetails(propertyDetails);
    };
    getPropertyDetails();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (propertyDetails.length !== 0) {
      setLoading(false);
    }
    console.log(propertyDetails);
  }, [propertyDetails]);

  return (
    <div>
      {loading && (
        <div>
          <div className="loadingbutton">
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </Button>{" "}
          </div>
        </div>
      )}
      {!loading && (
        <div className="eachProperty">
          <ScrollToTop smooth />
          <button
            className=" btn my-2 btn-secondary"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <img src={photos[0].url} alt="" className="propertyHeader" />
          <div className="propertydetail">
            <h4 className="propertyAmble">Details about property</h4>

            <div className="referenceNumber">
              <h5 className="referenceTop">
                Reference number: {referenceNumber}
              </h5>
              <h5 className="referenceTop">Contact name: {contactName}</h5>
              <h5 className="referenceTop">
                Contact number: {phoneNumber.mobile}
              </h5>
              <h5 className="referenceTop">Property score: {score}</h5>
            </div>

            <div className="carouseldiv">
              <Carousel>
                {photos.map((item, index) => (
                  <Carousel.Item key={index}>
                    <div className="d-flex justify-content-center">
                      <img
                        style={{ height: "350px" }}
                        src={item.url}
                        alt=""
                        className="carouselImage"
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <h5 className="property-titles ">{title}</h5>
            <div className="d-flex pt-4">
              {isVerified && <i className="bi bi-patch-check-fill"></i>}
              <h6 className="price ">
                ₦{millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </h6>
            </div>
            <div>
              <div className="d-flex my-3">
                <div className="d-flex align-items-center">
                  <h5 className="mx-1"> {rooms}</h5>{" "}
                  <img src={bedimage} alt="" className="descIcon" />
                </div>
                <p className="mx-2 mt-2">||</p>
                <div className="d-flex align-items-center">
                  <h5 className="mx-2"> {baths}</h5>{" "}
                  <img src={bathimage} alt="" className="descIcon" />
                </div>
                <p className="mx-2 mt-2">||</p>
                <div className="d-flex align-items-center">
                  <h5 className="mx-2 "> {millify(area)} sqft </h5>{" "}
                  <img src={areaimage} alt="" className="descIcon mb-2" />
                </div>
              </div>
            </div>

            <h6 className="strikeThrough">Description</h6>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>

            <div className=" mt-5">
              <h5 className="strikeThrough">Amenities</h5>
              {amenities && (
                <h4>
                  <div className="d-flex flex-wrap">
                    {amenities.map((item) => {
                      return item.amenities.map((item1, index) => (
                        <div key={index} className="amenities">
                          <p>{item1.text}</p>
                        </div>
                      ));
                    })}
                  </div>
                </h4>
              )}
            </div>
          </div>
        </div>
      )}

      <footer id="footer" className="footer" style={{ marginTop: "80px" }}>
        <div className="container mt-4">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Tammy</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/impact-bootstrap-business-website-template/ */}
            Designed by Tammy
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EachProperty;
