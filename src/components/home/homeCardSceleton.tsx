import React from "react"
import ContentLoader from "react-content-loader"

const HomeSceleton = (props:any) => (
  <ContentLoader 
    speed={2}
    width={250}
    height={400}
    viewBox="0 0 250 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="250" height="370" />
  </ContentLoader>
)

export default HomeSceleton