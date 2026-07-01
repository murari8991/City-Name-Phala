import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [result, setResult] = useState(null);

  const calculatePhala = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Basic validation
    if (!name.trim() || !city.trim()) {
      return;
    }

    // Remove spaces and count letters
    const nameLetters = name.replace(/\s+/g, '').length;
    const cityLetters = city.replace(/\s+/g, '').length;

    // Calculations
    const cityValue = cityLetters * 4;
    const total = cityValue + nameLetters;
    const remainder = total % 7;

    // Remainder meanings
    const resultsMap = {
      0: "Struggle, delays, and overall undesirable outcomes",
      1: "Good family life and growth of children",
      2: "Wealth and financial prosperity",
      3: "Expenses, setbacks, or demotion",
      4: "Good health and long life",
      5: "Rise, success, and victory over enemies",
      6: "Rajyog – authority, business success, recognition"
    };

    // Update state with results
    setResult({
      nameLetters,
      cityLetters,
      cityValue,
      total,
      remainder,
      outcome: resultsMap[remainder]
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* Header Section */}
        <div className="bg-indigo-600 p-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-1">Muhurta Ratnakar</h2>
          <p className="text-indigo-100 text-sm">Calculate Vastu outcome by Name & City</p>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <form onSubmit={calculatePhala} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., John Doe"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-slate-700 mb-1">
                City Name
              </label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g., New York"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md active:transform active:scale-[0.99]"
            >
              Calculate Outcome
            </button>
          </form>

          {/* Results Section */}
          {result && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-bold text-slate-800 border-b pb-2 mb-4">Calculation Breakdown</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-600">Name Letters:</span>
                  <span className="font-semibold text-slate-900">{result.nameLetters}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-600">City Letters:</span>
                  <span className="font-semibold text-slate-900">{result.cityLetters}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-600">City Value (×4):</span>
                  <span className="font-semibold text-slate-900">{result.cityValue}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-600">Total:</span>
                  <span className="font-semibold text-slate-900">{result.total}</span>
                </div>
                <div className="flex justify-between items-center py-1 bg-slate-50 px-2 rounded-md border border-slate-100">
                  <span className="text-slate-700 font-medium">Remainder:</span>
                  <span className="font-bold text-indigo-600">{result.remainder}</span>
                </div>
              </div>

              {/* Final Outcome Banner */}
              <div className="mt-5 bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r-lg">
                <p className="text-xs font-semibold text-indigo-800 uppercase tracking-wider mb-1">Final Result</p>
                <p className="text-indigo-950 font-bold leading-snug text-lg">
                  {result.outcome}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}