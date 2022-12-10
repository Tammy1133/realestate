import React, { useState, useEffect } from "react";
import { baseUrl, fetchApi } from "./utils/fetchApi";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./css/property.css";
import Property from "./subComponents/property";
import "./css/intro.css";
import rintro from "./utils/rintro.jpeg";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Rent = () => {
  const [propertyForRent, setPropertiesForRent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPropertiesForRent = async () => {
      const propertyForRent = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=21`
      );

      setPropertiesForRent(propertyForRent?.hits);
    };
    getPropertiesForRent();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (propertyForRent.length > 0) {
      setLoading(false);
    }
  }, [propertyForRent]);

  return (
    <div className="rent">
      {loading ? (
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
      ) : (
        <div className="">
          <div className="intro">
            <img src={rintro} alt="introImg" className="introimg" />
            <div className="introDetails">
              <p className="top">Rent A Modern House </p>
              <p className="bottom">Within Your Budget </p>
              <div className="pt-3 otherIntro">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
                aut id nulla in minima ab et officia. Similique, vitae
                necessitatibus?
              </div>
            </div>
          </div>
          <h3
            className="text-center fs-2 propHeader"
            style={{ marginTop: "90px", marginBottom: "90px" }}
          >
            PROPERTIES FOR RENT
          </h3>
          <div className="allproperties">
            {propertyForRent.map((property, index) => {
              return (
                <div key={index}>
                  <Property property={property} key={property.id}></Property>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <ScrollToTop smooth />

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

export default Rent;
