import React from "react";
import AppPage from "../../../@sling/hoc/AppPage";
import asyncComponent from "../../../@sling/utility/asyncComponent";

const Products = asyncComponent(() => import("../../../utils/ecommerce/Products"));
export default AppPage(() => <Products/>);
