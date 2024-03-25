import BentoBox from "@/components/bento/BentoBox";
import { ButtonIcon } from "@/components/global";
import { useNavigate } from "react-router-dom";
import React from "react";

const MainBento = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[90%] grid grid-cols-4 gap-2">
      <BentoBox className="flex items-center justify-center">
        <img
          src="https://static.dafiti.com.co/p/mattelsa-0077-4875081-1-zoom.jpg"
          className="brightness-[72%]"
          alt="hombre category"
        />
        <ButtonIcon
          action={() => navigate("/category/man")}
          properties={{
            text: "HOMBRE",
            styles: "hover:translate-x-1 border-2 p-2 absolute",
            stylesText: "hover:border-l-indigo-500 text-white hover:underline underline-offset-8",
          }}
        />
      </BentoBox>
      <BentoBox className="col-span-2">
        <img
          className="w-[100%] h-[100%] brightness-[80%]"
          src="https://b2cmattelsa.vtexassets.com/assets/vtex.file-manager-graphql/images/869826eb-0d54-44c4-8869-615b08584acf___3094529ef0abfa17f8d1c6b87dfd5249.jpg"
          alt="Mattelsa"
        />
      </BentoBox>
      <BentoBox className="flex items-center justify-center">
        <img
          src="https://static.dafiti.com.co/p/mattelsa-6895-4065032-1-catalog-new.jpg"
          className="brightness-[72%] h-[100%]"
          alt="mujer category"
        />
        <ButtonIcon
          action={() => navigate("/category/woman")}
          properties={{
            text: "MUJER",
            styles: "hover:translate-x-1 border-2 p-2 absolute",
            stylesText: "hover:border-l-indigo-500 text-white hover:underline underline-offset-8",
          }}
        />
      </BentoBox>
    </div>
  );
};

export default MainBento;
