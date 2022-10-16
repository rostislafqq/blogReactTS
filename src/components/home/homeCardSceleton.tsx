import React from "react"
import ContentLoader from "react-content-loader"

const HomeSceleton = () => (
  <div>
  <div className="home__item">
  <ContentLoader 
    speed={2}
    width={250}
    height={400}
    viewBox="0 0 250 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
     
  >
    <rect x="0" y="0" rx="0" ry="0" width="250" height="370" />
  </ContentLoader>
  </div>
  <div className='margin'></div>
  </div>
)


export default HomeSceleton