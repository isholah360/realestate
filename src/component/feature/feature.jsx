import React from "react";
import "./feature.css";
import { CiLocationOn, CiLight, CiWifiOn } from "react-icons/ci";
import {} from "react-icons/ci";
import { FiAward } from "react-icons/fi";
import { GrYoga } from "react-icons/gr";
import { FaCarAlt } from "react-icons/fa";
import { GiEcology } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export default function Feature() {
  return (
    <>
      <div className="comp-feature">
        <div className="feat-title">Features</div>

        <div className="featurelist">
          <FeatCard
            title="Central Location"
            titImg={<CiLocationOn />}
            titcontent="All you may need is at your doorstep: central location with all infrastructure"
          />
          <FeatCard
            title="Award-Winning Design"
            titImg={<FiAward />}
            titcontent="The apartment was designed by Lucy De Vito with great attention to details"
          />
          <FeatCard
            title="Central Location"
            titImg={<CiLight />}
            titcontent="The apartment is bright and spacious with spectacular river views"
          />
          <FeatCard
            title="Smart Apartment"
            titImg={<CiWifiOn />}
            titcontent="Smart apartment technology designed by famous architecture group"
          />
          <FeatCard
            title="Club & Wellness"
            titImg={<GrYoga />}
            titcontent="All amenities your may need and more to enjoy your living"
          />
          <FeatCard
            title="Ecological Materials"
            titImg={<GiEcology />}
            titcontent="The partment is build using the most ecological materials possible"
          />
          <FeatCard
            title="Underground Parking"
            titImg={<FaCarAlt />}
            titcontent="Underground parking accessible right from your floor by lift"
          />
          <FeatCard
            title="Spacious Terrace"
            titImg={<VscWorkspaceTrusted />}
            titcontent="The apartment has really spacious terrance facing the revier"
          />
        </div>
      </div>
    </>
  );
}

export function FeatCard({ title, titImg, titcontent }) {
  return (
    <div>
      <div className="comp_card">
        <div className="com-symbol">{titImg}</div>
        <div className="com-title">{title}</div>
        <div className="com-content">{titcontent}</div>
      </div>
    </div>
  );
}
