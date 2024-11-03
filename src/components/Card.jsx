import { IoIosArrowDropleftCircle } from "react-icons/io";

const Card = ({ imge, title, description, color }) => {
  return (
    <div className="card mb-20 p-8 bg-white flex-1 max-w-[220px] md:max-w-[350px]  min-w-[280px] rounded-3xl pb-2">
      <div className="wrapper flex flex-col gap-2">
        <div
          className="icon"
          style={{
            width: "65px",
            height: "65px",
            marginInline: "auto",
            marginTop: "-60px",
            borderRadius: "50%",
            border: "3px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          {" "}
          <img
            src={imge}
            alt={title}
            className="object-cover"
            style={{ width: "60%", height: "60%" }}
          />
        </div>
        <h3
          className="text-xl font-bold mb-2 text-center"
          style={{ color: "#067DD3" }}
        >
          {title}
        </h3>
        <p className="text-center font-bold" style={{ color: "#3e4042" }}>
          {description}
        </p>
      </div>
      <div className="flex gap-1 justify-end items-center text-left mt-5">
        <div className="text-left text-main_color text-sm ">اقراء المزيد</div>
        <div className="text-main_color text-left mt-1 text-sm  ">
          <IoIosArrowDropleftCircle className="text-left" />
        </div>
      </div>
    </div>

    // <div className="bg-gradient-to-r from-orange-300 to-blue-400 rounded-lg p-6 m-2 shadow-lg">
    //   <div className="text-center mb-4">
    //     <img src={icon} alt={title} className="w-12 h-12 mx-auto" />
    //   </div>
    //   <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
    //   <p className="text-center">{description}</p>
    // </div>
  );
};

export default Card;
