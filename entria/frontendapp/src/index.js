import { StackNavigator } from "react-navigation";

import Home from "./routes/home";
import itemDetail from "./routes/itemDetail";

export default StackNavigator(
  {
    Home: { screen: Home },
    ItemDetail: { screen: itemDetail }
  },
  {
    initialRouteName: "Home",
    cardStyle: { backgroundColor: "#fff" }
  }
);
