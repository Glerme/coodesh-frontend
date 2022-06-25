import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

import styles from "./styles.module.scss";

interface SocialLoginProps {
  handleLogin: (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => Promise<void>;
}

export const SocialButton: React.FC<SocialLoginProps> = ({ handleLogin }) => {
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
      buttonText="Login with Google"
      onSuccess={(res) => handleLogin(res)}
      onFailure={handleLogin}
      cookiePolicy={"single_host_origin"}
      className={styles["social-button"]}
    />
  );
};
