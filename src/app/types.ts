// very very contrived and probably inaccurate theme object for POC
export interface Theme {
  name: string;
  tokens: {
    components: {
      button: {
        primary: {
          backgroundColor: { value: string };
          _hover: { backgroundColor: { value: string } };
          _focus: { backgroundColor: { value: string } };
          _active: { backgroundColor: { value: string } };
        };
      };
    };
  };
}
