import React from "react";
import AppPage from "../../../@sling/hoc/AppPage";
import asyncComponent from "../../../@sling/utility/asyncComponent";

const Invoice2 = asyncComponent(() => import("../../../utils/ecommerce/Invoice2"));
export default AppPage(() => <Invoice2/>);
