// Replace your WeeklyPnLChart component file with this updated version

import React, { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Cell,
} from "recharts";
import { BsDownload } from "react-icons/bs";
import monthlyPnLData from "../Components/monthlydata";
import { format, parseISO } from "date-fns";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

// Group by trading weeks (Mon–Fri)
const groupByTradingWeeks = (data) => {
  const weeks = {};
  let weekNumber = 1;
  let count = 0;

  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

  sortedData.forEach((item) => {
    const dateObj = new Date(item.date);
    const dayOfWeek = dateObj.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return;

    const weekKey = `Week${weekNumber}`;
    if (!weeks[weekKey]) weeks[weekKey] = {};
    const day = format(dateObj, "EEE dd");
    weeks[weekKey][day] = item.value;

    count++;
    if (count === 5) {
      weekNumber++;
      count = 0;
    }
  });

  const allDays = new Set();
  Object.values(weeks).forEach((week) =>
    Object.keys(week).forEach((day) => allDays.add(day))
  );

  const chartData = Array.from(allDays).map((day) => {
    const entry = { day };
    Object.keys(weeks).forEach((weekKey) => {
      entry[weekKey] = weeks[weekKey][day] ?? 0;
    });
    return entry;
  });

  chartData.sort((a, b) => {
    const dayA = parseInt(a.day.slice(4));
    const dayB = parseInt(b.day.slice(4));
    return dayA - dayB;
  });

  return { chartData, weeks };
};

// get highest profit week
const getHighestProfitWeek = (weeks) => {
  const totals = {};
  Object.entries(weeks).forEach(([weekKey, days]) => {
    totals[weekKey] = Object.values(days).reduce((sum, val) => sum + val, 0);
  });
  const highestWeek = Object.keys(totals).length
    ? Object.keys(totals).reduce((a, b) => (totals[a] > totals[b] ? a : b))
    : null;
  return { highestWeek, total: highestWeek ? totals[highestWeek] : 0 };
};

// Build monthly totals with month-year keys (safe for multi-month)
const buildMonthlyTotalsByMonth = (data) => {
  // returns: { "Jan-2025": [{ day: "01-Jan-2025", value }...], "Feb-2025": [...], "All": [...] }
  const byMonth = {};
  data.forEach((item) => {
    const dt = new Date(item.date);
    const monthKey = format(dt, "MMM-yyyy"); // e.g. "Jan-2025"
    const dayLabel = format(dt, "dd-MMM-yyyy"); // e.g. "01-Jan-2025"
    if (!byMonth[monthKey]) byMonth[monthKey] = {};
    byMonth[monthKey][dayLabel] = (byMonth[monthKey][dayLabel] || 0) + item.value;
  });

  // convert each month map to array of { day, value } sorted
  const result = {};
  Object.entries(byMonth).forEach(([monthKey, daysMap]) => {
    const arr = Object.entries(daysMap).map(([day, value]) => ({ day, value }));
    arr.sort((a, b) => new Date(a.day) - new Date(b.day));
    result[monthKey] = arr;
  });

  // Also build 'All Months' aggregated (keeps separate day labels with year, so safe)
  const allMap = {};
  data.forEach((item) => {
    const dayLabel = format(new Date(item.date), "dd-MMM-yyyy");
    allMap[dayLabel] = (allMap[dayLabel] || 0) + item.value;
  });
  const allArr = Object.entries(allMap).map(([day, value]) => ({ day, value }));
  allArr.sort((a, b) => new Date(a.day) - new Date(b.day));
  result["All Months"] = allArr;

  return result;
};

const WeeklyPnLChart = () => {
  const [mode, setMode] = useState("weekly"); // 'weekly' | 'monthly'
  const [selectedWeek, setSelectedWeek] = useState(null); // 'Week1' etc or null
  // for monthly: selectedMonthKey: "All Months" or "Jan-2025" etc
  const [selectedMonthKey, setSelectedMonthKey] = useState("All Months");

  const { chartData, weeks } = useMemo(() => groupByTradingWeeks(monthlyPnLData), []);
  const monthlyByMonth = useMemo(() => buildMonthlyTotalsByMonth(monthlyPnLData), []);
  const monthOptions = useMemo(() => Object.keys(monthlyByMonth), [monthlyByMonth]); // includes "All Months"
  const { highestWeek, total } = useMemo(() => getHighestProfitWeek(weeks), [weeks]);

  // Data to display depending on mode & selections
  const displayedData = useMemo(() => {
    if (mode === "monthly") {
      // use selectedMonthKey dataset
      return monthlyByMonth[selectedMonthKey] || [];
    }
    // weekly mode
    if (selectedWeek) {
      return chartData.map((d) => ({ day: d.day, [selectedWeek]: d[selectedWeek] ?? 0 }));
    }
    return chartData;
  }, [mode, selectedWeek, chartData, monthlyByMonth, selectedMonthKey]);

  const weekKeys = Object.keys(weeks);

  // download current displayedData
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(displayedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Portfolio");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "Portfolio_Data.xlsx");
  };

  return (
    <div className="w-full min-h-full bg-gray-900 text-gray-100 py-12 px-4">
      <h2 className="text-4xl text-center font-bold mb-4">
        Portfolio Realized P&L (Daily Comparison)
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => { setMode("weekly"); setSelectedWeek(null); }}
            className={`py-2 px-3 rounded font-semibold shadow ${mode === "weekly" ? "bg-green-600 text-white" : "bg-gray-800 text-gray-200"}`}
          >
            Weekly View
          </button>
          <button
            onClick={() => { setMode("monthly"); setSelectedWeek(null); }}
            className={`py-2 px-3 rounded font-semibold shadow ${mode === "monthly" ? "bg-green-600 text-white" : "bg-gray-800 text-gray-200"}`}
          >
            Monthly View
          </button>
        </div>

        {/* Week selector visible only in weekly mode */}
        {mode === "weekly" && (
          <div className="flex items-center gap-2 flex-wrap">
            <button onClick={() => setSelectedWeek(null)} className={`py-1.5 px-3 rounded ${selectedWeek === null ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-200"}`}>All Weeks</button>
            {weekKeys.map((wk) => (
              <button key={wk} onClick={() => setSelectedWeek(wk)} className={`py-1.5 px-3 rounded ${selectedWeek === wk ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-200"}`}>{wk}</button>
            ))}
          </div>
        )}

        {/* Month selector visible only in monthly mode */}
        {mode === "monthly" && (
          <div className="flex items-center gap-2">
            <label className="text-sm">Select Month:</label>
            <select
              value={selectedMonthKey}
              onChange={(e) => setSelectedMonthKey(e.target.value)}
              className="bg-gray-800 text-gray-100 py-1 px-2 rounded"
            >
              {monthOptions.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Highest profit week badge */}
      <div className="text-center mb-6">
        <span className="inline-block bg-green-600 text-white font-bold py-2 px-4 rounded shadow-lg">
          Highest Profit Week: {highestWeek ?? "N/A"} ({total.toFixed(2)})
        </span>
      </div>

      <div className="w-full h-96 mt-4">
        <ResponsiveContainer>
          {mode === "monthly" ? (
            <BarChart data={displayedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid stroke="#555" strokeDasharray="3 3" />
              <XAxis dataKey="day" stroke="#eee" />
              <YAxis stroke="#eee" />
              <Tooltip contentStyle={{ backgroundColor: "#333", border: "none", color: "#eee" }} itemStyle={{ color: "#fff" }} />
              <Legend wrapperStyle={{ color: "#fff" }} />
              <Bar dataKey="value" name={selectedMonthKey} radius={[4,4,0,0]}>
                {displayedData.map((entry, idx) => (
                  <Cell key={`cell-mon-${idx}`} fill={entry.value >= 0 ? "#34d399" : "#f87171"} />
                ))}
              </Bar>
            </BarChart>
          ) : (
            <BarChart data={displayedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid stroke="#555" strokeDasharray="3 3" />
              <XAxis dataKey="day" stroke="#eee" />
              <YAxis stroke="#eee" />
              <Tooltip contentStyle={{ backgroundColor: "#333", border: "none", color: "#eee" }} itemStyle={{ color: "#fff" }} />
              <Legend wrapperStyle={{ color: "#fff" }} />
              {selectedWeek ? (
                <Bar dataKey={selectedWeek} name={selectedWeek} radius={[4,4,0,0]}>
                  {displayedData.map((entry, idx) => (
                    <Cell key={`cell-sel-${idx}`} fill={(entry[selectedWeek] ?? 0) >= 0 ? "#34d399" : "#f87171"} />
                  ))}
                </Bar>
              ) : (
                weekKeys.map((weekKey) => (
                  <Bar key={weekKey} dataKey={weekKey} name={weekKey} radius={[4,4,0,0]}>
                    {displayedData.map((entry, idx) => (
                      <Cell key={`cell-${weekKey}-${idx}`} fill={entry[weekKey] >= 0 ? "#34d399" : "#f87171"} />
                    ))}
                  </Bar>
                ))
              )}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      <div className="w-full flex justify-center mt-8">
        <button onClick={downloadExcel} className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-100 font-bold py-3 px-6 rounded shadow-lg transition-colors">
          <BsDownload size={20} />
          Download Portfolio
        </button>
      </div>
    </div>
  );
};

export default WeeklyPnLChart;
