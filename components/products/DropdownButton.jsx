import { TbHandFinger } from "react-icons/tb";

const DropdopwnButton = (props) => {
  return (
    <button
      type="button"
      onClick={props.toggleDetailsVisibility}
      className="w-full border-2 border-secondary-150 rounded-full bg-white text-secondary-150 text-[20px] py-2 px-6 flex justify-between items-center mt-4 cursor-pointer relative"
    >
      <h3 className="text-left">{props.title}</h3>
      <TbHandFinger
        className={`text-2xl transition-transform duration-300 ${
          props.isDetailsVisible ? "rotate-180" : "rotate-90"
        }`}
      />
    </button>
  );
};

export default DropdopwnButton;
