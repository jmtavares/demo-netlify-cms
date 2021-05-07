import React from "react";
import styled from "@emotion/styled";

const MapContainer = styled.div`
  max-width: 1152px;
  padding: 20px;
  color: #1c1c1c;
  flex-grow: 1;
  margin: 80px auto;
  position: relative;
  width: auto;
  height: 500px;
`;

const IframeMap = styled.iframe`
  width: 100%;
  height: 500px;
  border: 0;
`;

const Map = ({ data }) => {
  const src = `https://maps.google.com/maps?q=${data.coordinates[1]},${data.coordinates[0]}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <MapContainer>
      <IframeMap
        id="gmap_canvas"
        title="Mapa"
        src={src}
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        loading="lazy"
      />
    </MapContainer>
  );
};

export default Map;
