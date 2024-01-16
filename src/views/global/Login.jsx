import GoogleLogin from "react-google-login";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import "../../../src/index.css";
import { Modal } from "antd";

const Login = ({ closeLogin }) => {
  const navigate = useNavigate();
  const clientId = "1059518119572-1fl0ujdrjpi8e64eaifo092l7h7mvc10.apps.googleusercontent.com";
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientId,
      });
    };

    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (res) => {
    console.log("🟢 response --> ", res);
    closeLogin();
    return navigate("/panel");
  };

  const onFailure = (err) => {
    console.log("❌ err --> ", err);
  };

  return (
    <Modal
      styles={{ content: { padding: 3 } }}
      className="rounded-lg user-drag"
      onCancel={closeLogin}
      onOk={closeLogin}
      footer={null}
      open={true}
      width={700}
      centered
    >
      <div className="flex flex-1 items-centerF">
        <div className="flex-1">
          <img
            className="rounded-lg"
            src="https://todoservy.com.co/storage/18103/Mattelsa-Barranquilla-Prado---Tienda-de-Ropa---f1.webp"
            alt="mattelsa"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold ">Iniciar sesión</h2>
            <span className="text-xs  mb-2">Elige alguna de las opciones</span>
            <GoogleLogin
              cookiePolicy="single_host_policy"
              onSuccess={onSuccess}
              onFailure={onFailure}
              clientId={clientId}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Login;
