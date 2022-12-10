import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { baseUrl, fetchApi } from "./utils/fetchApi";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./css/property.css";
import Property from "./subComponents/property";
import "./css/search.css";
import ScrollToTop from "react-scroll-to-top";

const Search = () => {
  const optionPurpose = [
    { value: "for-sale", label: "Properties for sale" },
    { value: "for-rent", label: "Properties for rent" },
  ];
  const optionRentFrequency = [
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];
  const [purpose, setPurpose] = useState("for-sale");
  const [rentFrequency, setRentFrequency] = useState("yearly");
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("2000000");
  const [roomsMin, setRoomsMin] = useState("0");
  const [bathsMin, setBathsMin] = useState("1");
  const [areaMax, setAreaMax] = useState("35000");

  const [searchParams, setSearchParams] = useSearchParams();
  const [changeValueToUpdateState, setChangeValueToUpdateState] = useState(
    true
  );

  const [properties, setProperties] = useState([]);

  const [loading, setLoading] = useState(true);
  const [toggleSearchFilters, setToggleSearchFilters] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setSearchParams({ purpose: purpose });
    const getFilteredData = async () => {
      const { hits } = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=${purpose}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&&areaMax=${areaMax}`
      );

      setProperties(hits);
      setLoading(false);
    };
    getFilteredData();
  }, []);

  useEffect(() => {
    setSearchParams({ purpose: purpose });
    const getFilteredData = async () => {
      const { hits } = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=${purpose}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&&areaMax=${areaMax}`
      );

      setProperties(hits);
      setLoading(false);
    };
    getFilteredData();
    window.scrollTo(0, 0);
  }, [changeValueToUpdateState]);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => setToggleSearchFilters(!toggleSearchFilters)}
          className="btn btn-danger mx-3 mt-3"
        >
          Toggle search
        </button>
        <button
          onClick={() => navigate("/")}
          className="btn btn-secondary mx-3 mt-3"
        >
          Back
        </button>
      </div>

      {toggleSearchFilters && (
        <div className="allInputs">
          <Select
            className="select selectItems "
            options={optionPurpose}
            isSearchable
            placeholder="Select purpose"
            onChange={(e) => setPurpose(e.value)}
          ></Select>
          <Select
            className="select selectItems "
            options={optionRentFrequency}
            onChange={(e) => setRentFrequency(e.value)}
            isSearchable
            placeholder="Select rent frequency"
          ></Select>

          <div className="inputHeader">
            <p className="leftinfo">Minimum price</p>
            <input
              type="text"
              className="form-item"
              value={minPrice}
              onChange={(e) => {
                setMinPrice(e.target.value);
              }}
            />
          </div>

          <ScrollToTop smooth />

          <div className="inputHeader">
            <p className="leftinfo">Maximum price</p>
            <input
              type="text"
              placeholder="Maximum price"
              className="form-item"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
            />
          </div>

          <div className="inputHeader">
            <p className="leftinfo">Minimum room</p>
            <input
              type="text"
              placeholder="Minimum room"
              value={roomsMin}
              className="form-item"
              onChange={(e) => {
                setRoomsMin(e.target.value);
              }}
            />
          </div>
          <div className="inputHeader">
            <p className="leftinfo">Minimum bath</p>
            <input
              type="text"
              value={bathsMin}
              placeholder="Minimum bath"
              className="form-item"
              onChange={(e) => {
                setBathsMin(e.target.value);
              }}
            />
          </div>
          <div className="inputHeader">
            <p className="leftinfo">Maximumum Area</p>
            <input
              type="text"
              placeholder="Maximum Area"
              value={areaMax}
              className="form-item"
              onChange={(e) => {
                setAreaMax(e.target.value);
              }}
            />
          </div>
        </div>
      )}
      <div className="d-flex align-items-center justify-content-center">
        {" "}
        <button
          className="button-90"
          onClick={() => {
            setChangeValueToUpdateState(!changeValueToUpdateState);
            setProperties([]);
            setLoading(true);
          }}
        >
          Submit
        </button>
      </div>

      <div className="below">
        <h3
          className="text-center fs-2 propHeader"
          style={{ marginTop: "65px", marginBottom: "60px" }}
        >
          {searchParams.get("purpose") === "for-sale"
            ? "PROPERTIES FOR SALE"
            : "PROPERTIES FOR RENT"}
        </h3>
        {loading ? (
          <div>
            <div className="d-flex  align-items-center justify-content-center">
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
          <div className="allproperties">
            {properties.map((property, index) => {
              return (
                <div key={index}>
                  <Property property={property} key={property.id}></Property>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
