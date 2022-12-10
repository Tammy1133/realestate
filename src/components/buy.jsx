import React, { useState, useEffect } from "react";
import { baseUrl, fetchApi } from "./utils/fetchApi";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./css/property.css";
import Property from "./subComponents/property";
import "./css/intro.css";
import bintro from "./utils/bintro.jpg";
import ScrollToTop from "react-scroll-to-top";

const Buy = () => {
  const [propertyForSale, setPropertiesForSale] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getPropertiesForSale = async () => {
      const propertyForSale = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=21`
      );

      setPropertiesForSale(propertyForSale?.hits);
    };
    getPropertiesForSale();
  }, []);

  useEffect(() => {
    if (propertyForSale.length > 0) {
      setLoading(false);
    }

    console.log(propertyForSale);
  }, [propertyForSale]);

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
            <ScrollToTop smooth />
            <img src={bintro} alt="bintro" className="introimg" />
            <div className="introDetails">
              <p className="top">Buy A Modern House </p>
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
            PROPERTIES FOR SALE
          </h3>
          <div className="allproperties">
            {propertyForSale.map((property, index) => {
              console.log(property.id);
              return (
                <div key={index}>
                  <Property property={property} key={property.id}></Property>
                </div>
              );
            })}
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

export default Buy;
