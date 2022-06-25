export interface UserProps {
  Nw: {
    accessToken: string;
    profileObj: {
      email: string;
      familyName: string;
      givenName: string;
      googleId: string;
      imageUrl: string;
      name: string;
    };
  };
}
