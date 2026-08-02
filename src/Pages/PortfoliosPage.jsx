/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import portfolios from "../data/portfolios";
import Menu from "../Components/Menu";
import Button from "../Components/Button";

const allButtons = ["All", ...new Set([...portfolios.map((p) => p.category)])];
function PortfoliosPage() {
  const [button, setButtons] = useState(allButtons);
  const [filter, setFilter] = useState("All");
  const [showOlder, setShowOlder] = useState(false);

  const menuItem =
    filter === "All"
      ? portfolios
      : portfolios.filter((item) => item?.category === filter);
  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"portfolios"} />
      <InnerLayout>
        <Button filter={filter} setFilter={setFilter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfoliosPage;
