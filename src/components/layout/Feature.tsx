import featureImage from "../../assets/image_wrap.svg";

const Feature = () => {
  return (
    <div className="bg-[#F9FAFB] py-5 px-4 rounded-[8px]">
      <h2 className="font-semibold text-sm mb-1">New features available!</h2>
      <p className="text-[#667085] text-xs mb-4">
        Check out the new dashboard view. Pages now load faster.{" "}
      </p>
      <img src={featureImage} alt="" />
    </div>
  );
};

export default Feature;
