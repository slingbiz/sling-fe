import React from "react";
import AppPage from "../../../@sling/hoc/AppPage";
import asyncComponent from "../../../@sling/utility/asyncComponent";

const Invoice1 = asyncComponent(() => import("../../../utils/ecommerce/Invoice1"));
export default AppPage(() => <Invoice1/>);
