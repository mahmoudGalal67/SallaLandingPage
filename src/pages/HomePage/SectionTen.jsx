import Button from "../../components/Button";

import { Link } from "react-router-dom";
export default function SectionTen() {
  return (
    <div className="md:px-[10%] px-[5%]">
      <div className="bg-[#57578E] py-14  rounded-lg sm:flex md:flex-row sm:justify-between px-8">
        <div className="flex flex-col  text-center">
          <div className="text-4xl font-bold text-[white]">
            {" "}
            الدفع إلكترونيا بخطوات بسيطة{" "}
          </div>
          <p className="text-[white] mt-2 text-xl">
            {" "}
            أنشى متجرك الآن بأدوات مرنة وحلول متكاملة تساعدك في كل خطوة <br />
            نحو نمو مبيعاتك وتسويق{" "}
          </p>
        </div>
        <div className="mt-5">
          <Link to="/register">
            <button
              className="custom-button"
              style={{ backgroundColor: "white", color: "#57578E" }}
            >
              أنشئ متجرك مجاناَ الان
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
