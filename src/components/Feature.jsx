import React from 'react';
import FeatureBox from "./FeatureBox.jsx";
import featureImg1 from "../images/feature_1.png";
import featureImg2 from "../images/feature_2.png";
import featureImg3 from "../images/feature_3.png";

function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
            <FeatureBox image={featureImg1} title="Development Course"/>
            <FeatureBox image={featureImg2} title="Money Saving Services"/>
            <FeatureBox image={featureImg3} title="Usability Interface"/>
        </div>
    </div>
  )
};

export default Feature;