const { render, screen } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../../components/Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component with a login buton", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole('button');
  expect(loginBtn).toBeInTheDocument();

});
