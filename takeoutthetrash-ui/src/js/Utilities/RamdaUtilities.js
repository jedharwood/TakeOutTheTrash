import * as R from "ramda";

export const mapOptions = R.map((item) => (
  <option key={item.id} value={item.id}>
    {item.name}
  </option>
));
