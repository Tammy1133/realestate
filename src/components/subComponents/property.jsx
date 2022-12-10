import buy from "../utils/buy.jpg";
import millify from "millify";
import bathimage from "../utils/bath.png";
import loc from "../utils/loc.png";
import bedimage from "../utils/bed.png";
import areaimage from "../utils/area1.png";
import "../css/property.css";
import { useNavigate } from "react-router-dom";

const Property = ({ property }) => {
  const {
    coverPhoto,
    location,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  } = property;

  const navigate = useNavigate();

  return (
    <div className="eachCard " data-aos="fade-up" data-aos-duration="2000">
      <div class="card" style={{ width: "18rem" }}>
        <img
          src={coverPhoto ? coverPhoto.url : buy}
          class="card-img-top"
          alt="..."
          style={{ height: "200px", backgroundSize: "contain" }}
        />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center mt-4">
              <img src={loc} alt="" style={{ height: "20px" }} />
              <h6 className="mx-2">{location[0]?.name}</h6>
            </div>
            <div className=" mt-4">
              {isVerified && <i className="bi bi-patch-check-fill"></i>}
              <h6 className="price mx-3">
                ₦{millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </h6>
            </div>
          </div>

          <div className="d-flex my-3 detailsIcon align-items-center">
            <div className="d-flex align-items-center">
              <h5 className="mx-1 mt-1"> {rooms}</h5>
              <img src={bedimage} alt="" />
            </div>
            <p className="mx-2 mt-2">||</p>
            <div className="d-flex align-items-center">
              <h5 className="mt-1"> {baths}</h5>
              <img src={bathimage} alt="" />
            </div>
            <p className="mx-2 mt-2">||</p>
            <div className="d-flex align-items-center">
              <h5 className="mx-2 mt-2" style={{ fontSize: "12px" }}>
                {" "}
                {millify(area)} sqft{" "}
              </h5>{" "}
              <img src={areaimage} alt="" />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button
              className="button-18 nav-button mb-2"
              style={{ fontSize: "16px" }}
              role="button"
              onClick={() => navigate(`/property/${externalID}`)}
            >
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
