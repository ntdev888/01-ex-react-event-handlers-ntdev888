import { render, fireEvent } from "@testing-library/react";
import Product from "../components/Product";

test("alerts the product name when the buy now button is clicked", () => {
  window.alert = vi.fn();

  const { getByText } = render(
    <Product
      image="/img/src.jpg"
      name="Test product"
      description="Test description"
    />
  );
  const button = getByText(/buy now/i);
  fireEvent.click(button);
  expect(window.alert).toHaveBeenCalledTimes(1);
});
