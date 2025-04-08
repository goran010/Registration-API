// components/CalendarGrid.tsx
import DayButton from "./DayButton";

interface CalendarGridProps {
  currentMonth: Date;
  onSelectDate: (date: string) => void;
  selectedDate: string | null;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
}

export default function CalendarGrid({
  currentMonth,
  selectedDate,
  onSelectDate,
  goToPreviousMonth,
  goToNextMonth,
}: CalendarGridProps) {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = firstDayOfMonth.getDay();

  const weeks: (number | null)[][] = [];
  let dayCounter = 1 - startDay;

  for (let i = 0; i < 6; i++) {
    const week: (number | null)[] = [];
    for (let j = 0; j < 7; j++) {
      if (dayCounter > 0 && dayCounter <= daysInMonth) {
        week.push(dayCounter);
      } else {
        week.push(null);
      }
      dayCounter++;
    }
    weeks.push(week);
  }

  const monthName = currentMonth.toLocaleString("default", { month: "long" });

  return (
    <div className="bg-gray-900 rounded-2xl shadow-xl p-2 sm:p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold">
          {monthName} {year}
        </h1>
        <div className="flex gap-2">
          <button
            onClick={goToPreviousMonth}
            className="text-gray-300 hover:text-blue-400 transition font-medium"
          >
            ← Prev
          </button>
          <button
            onClick={goToNextMonth}
            className="text-gray-300 hover:text-blue-400 transition font-medium"
          >
            Next →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-gray-400 mb-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-medium text-sm sm:text-sm">
            {day}
          </div>
        ))}
      </div>

      {weeks.map((week, i) => (
        <div key={i} className="grid grid-cols-7 gap-3 mb-2">
          {week.map((day, j) => {
            if (day) {
              const fullDate = new Date(year, month, day)
                .toISOString()
                .split("T")[0];
              const isSelected = selectedDate === fullDate;

              return (
                <DayButton
                  key={j}
                  day={day}
                  onClick={() => onSelectDate(fullDate)}
                  isSelected={isSelected}
                  year={year}
                  month={month}
                />
              );
            } else {
              return <div key={j}></div>;
            }
          })}
        </div>
      ))}
    </div>
  );
}
