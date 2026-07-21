import ChartContainer from "./ChartContainer";
import RecentExpenseCard from "./RecentExpenseCard";

function RecentTransactions({ items = [] }) {
  return (
    <ChartContainer title="Recent Transactions">
      <div className="space-y-3">
        {items.map((item) => (
          <RecentExpenseCard
            key={item.id}
            expenseName={item.expenseName}
            category={item.category}
            date={item.date}
            amount={item.amount}
            categoryIcon={<span className="text-lg">💳</span>}
          />
        ))}
      </div>
    </ChartContainer>
  );
}

export default RecentTransactions;
