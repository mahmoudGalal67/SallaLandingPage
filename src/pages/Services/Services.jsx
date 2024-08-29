import "./Services.css";

import { services } from "../../components/data/data";

function Services() {
  return (
    <div className="services">
      <div className="head">
        <img src="ourservices.png" alt="" />
        <h2>خدماتنا :</h2>
      </div>
      <div className="wrapper">
        {services.map((item, i) => (
          <div className="item" key={i}>
            <img src={`/${item.img}`} alt="" />
            <div className="name">{item.name}</div>
            <div className="price">{`${item.price}  ر.س`}</div>
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
