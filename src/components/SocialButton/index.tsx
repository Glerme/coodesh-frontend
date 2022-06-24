import { useEffect } from "react";

import { gapi } from "gapi-script";
import { useNavigate } from "react-router";
import { GoogleLogin } from "react-google-login";

import styles from "./styles.module.scss";

interface SocialLoginProps {}

export const SocialButton: React.FC<SocialLoginProps> = ({}) => {
  const navigate = useNavigate();

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        plugin_name: "chat",
      });
    });
  }, []);

  const handleLogin = async (resp: any) => {
    console.log(resp);

    if (resp.accessToken) {
      navigate("/home");
    }
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
      buttonText="Login with Google"
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={"single_host_origin"}
      className={styles["social-button"]}
    />
  );
};
