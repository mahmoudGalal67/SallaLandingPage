import "./Services.css";

import { services } from "../../components/data/data";

function Services() {
  return (
    <div className="services">
      <div className="head">
        <h2>خدماتنا :</h2>
      </div>
      <div className="wrapper">
        {services.map((item, i) => (
          <div className="item" key={i}>
            <img src={`src/assets/services/${item.img}`} alt="" />
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
            <a href={`https://wa.me/+9660543842272?text=${item.name}`}>
              أطلب ألان
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
