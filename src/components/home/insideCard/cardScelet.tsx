import React from "react"
import ContentLoader from "react-content-loader"

const CardScelet = () => (
  <div className="cardContainer__card">
  <ContentLoader 
  speed={2}
  width={"100%"}
  height={600}
  viewBox="0 0 570 600"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
  
>
  <rect x="0" y="0" rx="0" ry="0" width="300" height="300" /> 
  <rect x="0" y="305" rx="0" ry="0" width="280" height="22" /> 
  <rect x="0" y="339" rx="0" ry="0" width="724" height="260" />
</ContentLoader>
</div>
)

export default CardScelet