import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import CardBill from "../components/Fragments/Dashboard/CardBilll";
import CardExpenseBreakdown from "../components/Fragments/Dashboard/CardExpenseBreakdownn";
import CardTransaction from "../components/Fragments/Dashboard/CardTransaction2.jsx";
import CardBalance from "../components/Fragments/Dashboard/CardBalance";
import CardStatistic from "../components/Fragments/Dashboard/CardStatistic";
import CardGoal from "../components/Fragments/Dashboard/CardGoal";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <CardBalance />
        <CardGoal />
        <CardBill />
        <CardTransaction />
        <CardStatistic />
        <CardExpenseBreakdown />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;