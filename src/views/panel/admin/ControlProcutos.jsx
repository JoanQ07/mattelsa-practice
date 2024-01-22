import Loading from "../../../components/global/Loading";
import React, { useState, lazy, Suspense } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

const CreateProduct = lazy(() => import("../../../components/product/Create"));

const ControlProcutos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="">
      <Button type="text" icon={<PlusOutlined />} onClick={showModal}>
        Crear
      </Button>
      {isModalOpen && (
        <Suspense>
          <CreateProduct handleCancel={() => setIsModalOpen(false)} handleOk={() => setIsModalOpen(false)} />
        </Suspense>
      )}
    </div>
  );
};

export default ControlProcutos;
