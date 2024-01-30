import { Button, Modal, Input, Select, InputNumber } from "antd";
import React, { useEffect, useState } from "react";
import { _fechCategory } from "@/api";

const Create = ({ handleOk, handleCancel }) => {
  const [opcCategory, setOpcCategory] = useState([]);

  const getCategories = async () => {
    try {
      const res = await _fechCategory.getAllCategories();
      console.log("💠  res--> ", res);
      const formattedOptions = parseFormatOpc(res);
      setOpcCategory(formattedOptions);
      console.log("💠  opcCategory--> ", opcCategory);
    } catch (error) {
      console.log(error);
    }
  };

  const parseFormatOpc = (categories) => {
    const format = categories.map((item) => ({
      label: item.name,
      value: item.id,
    }));
    return format;
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Modal
      title="Registro de producto"
      open={true}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Registrar"
      okButtonProps={false}
    >
      <form>
        <div className="flex flex-col gap-y-2">
          <div>
            <label>Nombre</label>
            <Input />
          </div>
          <div className="flex flex-col">
            <label>Categoria</label>
            <Select
              style={{
                width: 200,
              }}
              options={opcCategory}
            />
          </div>
          <div className="flex flex-col">
            <label>Precio unitario</label>
            <InputNumber
              style={{
                width: 200,
              }}
              defaultValue={0}
              formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </div>
          <div className="flex gap-x-3">
            {/* sizes */}
            {["XS", "S", "M", "L"].map((item) => (
              <div>
                <label> {item} </label>
                <InputNumber
                  defaultValue={0}
                  controls={false}
                  style={{
                    width: 65,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default Create;
