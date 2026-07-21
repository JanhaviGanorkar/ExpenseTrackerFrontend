import { PencilLine, Sparkles } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import { useThemeStore } from "../store/store";

const history = [
  { month: "June", budget: "₹30,000", spent: "₹22,500" },
  { month: "May", budget: "₹30,000", spent: "₹19,800" },
  { month: "April", budget: "₹30,000", spent: "₹24,100" },
];

const Budget = () => {
  const { isdark } = useThemeStore();

  return (
    <div className={`min-h-full w-full p-4 transition-colors duration-300 sm:p-6 lg:p-8 ${isdark ? "text-white" : "text-slate-900"}`}>
      <div className={`mb-6 rounded-3xl border p-6 shadow-sm ${isdark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">Budget</p>
            <h1 className="mt-2 text-2xl font-semibold">Plan your month with confidence</h1>
            <p className={`mt-2 text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>Keep your spending in check and make every rupee count.</p>
          </div>
          <div className={`inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium ${isdark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
            <Sparkles size={16} />
            Budget health: good
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">Monthly Budget</p>
              <h2 className="mt-2 text-3xl font-semibold">₹30,000</h2>
            </div>
            <div className={`rounded-2xl px-3 py-2 text-sm font-semibold ${isdark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>On Track</div>
          </div>

          <div className={`mt-6 h-3 overflow-hidden rounded-full ${isdark ? "bg-slate-800" : "bg-slate-100"}`}>
            <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-emerald-500 to-lime-400" />
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <span className={isdark ? "text-slate-400" : "text-slate-500"}>Spent</span>
            <span className="font-semibold">₹12,600</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className={isdark ? "text-slate-400" : "text-slate-500"}>Remaining</span>
            <span className="font-semibold">₹17,400</span>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold">Update budget</h3>
          <div className="mt-4 space-y-3">
            <div>
              <label className="mb-2 block text-sm font-medium">Monthly budget</label>
              <Input placeholder="₹30,000" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Currency</label>
              <select className={`w-full rounded-xl border p-3 text-sm ${isdark ? "border-slate-800 bg-slate-950 text-white" : "border-slate-200 bg-slate-50 text-slate-900"}`}>
                <option>INR</option>
                <option>USD</option>
              </select>
            </div>
            <Button variant="primary">Save Budget</Button>
          </div>
        </Card>
      </div>

      <div className={`mt-6 rounded-3xl border p-6 shadow-sm ${isdark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Budget history</h3>
          <div className={`inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm ${isdark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"}`}>
            <PencilLine size={16} />
            Adjusted regularly
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {history.map((item) => (
            <div key={item.month} className={`flex items-center justify-between rounded-2xl px-4 py-3 ${isdark ? "bg-slate-800/60" : "bg-slate-50"}`}>
              <div>
                <p className="font-semibold">{item.month}</p>
                <p className={`text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>Budget: {item.budget}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-emerald-500">Spent {item.spent}</p>
                <p className={`text-sm ${isdark ? "text-slate-400" : "text-slate-500"}`}>Healthy pacing</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budget;