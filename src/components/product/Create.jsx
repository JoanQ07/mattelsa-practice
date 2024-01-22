import { Button, Modal, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { _fechCategory } from "@/api";

const Create = ({ handleOk, handleCancel }) => {
  const [opcCategory, setOpcCategory] = useState([]);

  const getCategories = async () => {
    try {
      const res = await _fechCategory.getAllCategories();
      setOpcCategory(res);
      parseFormatOpc();
    } catch (error) {
      console.log(error);
    }
  };

  const parseFormatOpc = () => {
    console.log("💠  opcCategory--> ", opcCategory);
    const format = opcCategory.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });
    console.log("💠  format--> ", format);

    setOpcCategory(format);
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
        <div>
          <label>Nombre</label>
          <Input />
          <Select
            defaultValue={[opcCategory]}
            style={{
              width: 120,
            }}
            disabled
            options={opcCategory}
          />
        </div>
      </form>
    </Modal>
  );
};

export default Create;
