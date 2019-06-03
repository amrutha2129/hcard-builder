import React from "react";
import "./style.css";
import HCardPreview from "./HCardPreview";
import { string, number } from "prop-types";

export default class HCardPreviewContainer extends React.PureComponent {
  static propTypes = {
    name: string,
    surname: string,
    email: string,
    phone: number,
    housename: string,
    street: string,
    suburb: string,
    state: string,
    postcode: number,
    country: string
  };
  render() {
    const {
      name,
      surname,
      email,
      phone,
      housename,
      street,
      suburb,
      country,
      postcode,
      state
    } = this.props;
    return (
      <div className="previewContainer">
        <HCardPreview
          name={name}
          surname={surname}
          email={email}
          phone={phone}
          housename={housename}
          street={street}
          suburb={suburb}
          country={country}
          postcode={postcode}
          state={state}
        />
      </div>
    );
  }
}
