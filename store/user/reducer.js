import { produce } from "immer";

const initialState = {
  user: {
    id: null,
    userName: "",
  },
};

const userReducer = (state = initialState) =>
  produce(state, (draft) => {
    switch (draft.type) {
      case "hello":
        break;
    }
  });

export default userReducer;
