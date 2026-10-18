import { useState } from 'react'
import { useMode } from '../context/ModeContext'
import { analyticsData } from '../data/content'
import { BarChart3, Play, CheckCircle } from 'lucide-react'
import BlurFadeIn from './ui/BlurFadeIn'

export default function AnalyticsDashboard() {
  const { accent, mode } = useMode()
  const [activeTab, setActiveTab] = useState('chart') // 'chart' | 'heatmap' | 'sql'
  const [hoveredBar, setHoveredBar] = useState(null)
  const [hoveredCell, setHoveredCell] = useState(null)
  
  // SQL Simulator state
  const [sqlQuery, setSqlQuery] = useState(`SELECT category, SUM(amount) AS total 
FROM transactions 
GROUP BY category 
ORDER BY total DESC;`)
  const [sqlResult, setSqlResult] = useState([
    { category: 'Rent', total: '$1,500' },
    { category: 'Food', total: '$560' },
    { category: 'Utilities', total: '$355' },
    { category: 'Others', total: '$820' },
  ])
  const [isRunning, setIsRunning] = useState(false)

  const runMockQuery = () => {
    setIsRunning(true)
    setTimeout(() => {
      setIsRunning(false)
      if (sqlQuery.toUpperCase().includes('INDEX')) {
        setSqlResult([
          { status: 'Index Created Successfully', response_time: '0.002s (was 0.054s)' },
          { index_name: 'idx_transactions_user_date', columns: 'user_id, date' }
        ])
      } else if (sqlQuery.toUpperCase().includes('AVG') || sqlQuery.toUpperCase().includes('MEAN')) {
        setSqlResult([
          { average_transaction: '$142.30', count: '1,042 rows' }
        ])
      } else {
        setSqlResult([
          { category: 'Rent', total: '$1,500' },
          { category: 'Food', total: '$560' },
          { category: 'Utilities', total: '$355' },
          { category: 'Others', total: '$820' },
        ])
      }
    }, 600)
  }

  const isDimmed = mode === 'dev'

  return (
    <section 
      id="analytics" 
      className={`py-16 border-t border-[var(--border)] bg-[var(--section-alt)] transition-opacity duration-500 ${
        isDimmed ? 'opacity-35 blur-[0.4px]' : 'opacity-100'
      }`}
    >
      <BlurFadeIn>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 text-left">
            <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--foreground)] mb-2 flex items-center gap-2">
              <BarChart3 size={24} style={{ color: accent }} />
              Analytics Dashboard
            </h2>
            <p className="text-sm text-[var(--muted)] max-w-lg">
              Interactive analytical charts and SQL console demonstrating hands-on exploratory data analysis (EDA) and pipeline construction.
            </p>
          </div>

          {/* KPIs Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {analyticsData.kpis.map((kpi, idx) => (
              <div key={idx} className="bg-[var(--card)] border border-[var(--border)] p-4.5 rounded-xl hover:bg-[var(--card-hover)] transition shadow-sm">
                <div className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-wide">{kpi.title}</div>
                <div className="text-lg md:text-xl font-bold text-[var(--foreground)] mt-1.5 font-display">{kpi.value}</div>
                <div className="text-[10px] text-[var(--muted)] mt-1">{kpi.desc}</div>
              </div>
            ))}
          </div>

          {/* Dashboard Shell */}
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm">
            {/* Header Controls */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--background)] flex-wrap gap-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-[var(--muted)]">dataset_engine: active</span>
              </div>
              
              <div className="flex bg-[var(--background)] border border-[var(--border)] rounded-lg p-[3px] gap-0.5">
                <button
                  onClick={() => setActiveTab('chart')}
                  className={`text-[10px] font-mono px-3 py-1 rounded transition ${
                    activeTab === 'chart' ? 'bg-[var(--card)] shadow-sm text-[var(--foreground)] border border-[var(--border)]' : 'text-[var(--muted)] hover:text-[var(--foreground)] border border-transparent'
                  }`}
                >
                  Monthly Aggregates (SVG)
                </button>
                <button
                  onClick={() => setActiveTab('heatmap')}
                  className={`text-[10px] font-mono px-3 py-1 rounded transition ${
                    activeTab === 'heatmap' ? 'bg-[var(--card)] shadow-sm text-[var(--foreground)] border border-[var(--border)]' : 'text-[var(--muted)] hover:text-[var(--foreground)] border border-transparent'
                  }`}
                >
                  Correlation Heatmap
                </button>
                <button
                  onClick={() => setActiveTab('sql')}
                  className={`text-[10px] font-mono px-3 py-1 rounded transition ${
                    activeTab === 'sql' ? 'bg-[var(--card)] shadow-sm text-[var(--foreground)] border border-[var(--border)]' : 'text-[var(--muted)] hover:text-[var(--foreground)] border border-transparent'
                  }`}
                >
                  SQL Query Console
                </button>
              </div>
            </div>

            {/* Interactive Screen Panel */}
            <div className="p-6 min-h-[300px] flex items-center justify-center bg-[var(--card)]">
              {activeTab === 'chart' && (
                <div className="w-full flex flex-col items-center">
                  <div className="text-[11px] font-mono text-[var(--muted)] mb-4">
                    Visualizing Category Expenditures &bull; Hover on bars to inspect parameters
                  </div>
                  
                  {/* SVG Bar Chart */}
                  <div className="relative w-full max-w-xl h-44 flex items-end justify-between border-b border-l border-[var(--border)] px-4 pb-1">
                    {analyticsData.edaCharts.monthlySpend.map((d, i) => {
                      const total = d.food + d.rent + d.utilities + d.others
                      const pct = (total / 1000) * 100 // max total around 1000
                      return (
                        <div 
                          key={i} 
                          className="flex-1 flex flex-col items-center group relative cursor-pointer mx-2"
                          onMouseEnter={() => setHoveredBar(d)}
                          onMouseLeave={() => setHoveredBar(null)}
                        >
                          {/* Bar */}
                          <div 
                            className="w-8 sm:w-12 rounded-t transition-all duration-300"
                            style={{ 
                              height: `${pct}px`, 
                              background: `linear-gradient(to top, ${accent}, rgba(79, 140, 255, 0.4))` 
                            }}
                          />
                          <span className="text-[9px] font-mono text-[var(--muted)] mt-1.5">{d.month}</span>
                        </div>
                      )
                    })}

                    {/* Hover Tooltip inside SVG Area */}
                    {hoveredBar && (
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[var(--card)] border border-[var(--border)] p-3 rounded-lg text-[9.5px] font-mono shadow-xl z-20 text-[var(--muted)] min-w-[130px]">
                        <div className="text-[var(--foreground)] font-bold mb-1 border-b border-[var(--border)] pb-1">{hoveredBar.month} Breakdown</div>
                        <div className="flex justify-between mt-1"><span>Rent:</span><span className="text-[var(--foreground)]">${hoveredBar.rent}</span></div>
                        <div className="flex justify-between"><span>Food:</span><span className="text-[var(--foreground)]">${hoveredBar.food}</span></div>
                        <div className="flex justify-between"><span>Utilities:</span><span className="text-[var(--foreground)]">${hoveredBar.utilities}</span></div>
                        <div className="flex justify-between"><span>Others:</span><span className="text-[var(--foreground)]">${hoveredBar.others}</span></div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'heatmap' && (
                <div className="w-full flex flex-col items-center">
                  <div className="text-[11px] font-mono text-[var(--muted)] mb-6">
                    Pearson Correlation Matrix &bull; Medical Insurance Features
                  </div>

                  <div className="grid grid-cols-4 gap-1.5 w-full max-w-sm font-mono text-[9px] text-center">
                    {/* Heatmap header cells */}
                    <div className="h-6 flex items-center justify-center text-[var(--muted)]">Features</div>
                    <div className="h-6 flex items-center justify-center text-[var(--foreground)]">Age</div>
                    <div className="h-6 flex items-center justify-center text-[var(--foreground)]">Premium</div>
                    <div className="h-6 flex items-center justify-center text-[var(--foreground)]">BMI</div>

                    {/* Matrix row 1 */}
                    <div className="h-10 flex items-center justify-start text-[var(--foreground)] pl-2">Age</div>
                    <div className="h-10 flex items-center justify-center bg-[#4F8CFF] text-white font-bold opacity-100">1.00</div>
                    <div 
                      className="h-10 flex items-center justify-center bg-[#4F8CFF] text-white font-bold opacity-80 cursor-pointer hover:scale-95 transition"
                      onMouseEnter={() => setHoveredCell('Age-Premium: 0.85')}
                      onMouseLeave={() => setHoveredCell(null)}
                    >0.85</div>
                    <div 
                      className="h-10 flex items-center justify-center bg-[#4F8CFF] text-white font-bold opacity-60 cursor-pointer hover:scale-95 transition"
                      onMouseEnter={() => setHoveredCell('Age-BMI: 0.62')}
                      onMouseLeave={() => setHoveredCell(null)}
                    >0.62</div>

                    {/* Matrix row 2 */}
                    <div className="h-10 flex items-center justify-start text-[var(--foreground)] pl-2">Premium</div>
                    <div 
                      className="h-10 flex items-center justify-center bg-[#4F8CFF] text-white font-bold opacity-80 cursor-pointer hover:scale-95 transition"
                      onMouseEnter={() => setHoveredCell('Age-Premium: 0.85')}
                      onMouseLeave={() => setHoveredCell(null)}
                    >0.85</div>
                    <div className="h-10 flex items-center justify-center bg-[#4F8CFF] text-white font-bold opacity-100">1.00</div>
                    <div 
                      className="h-10 flex items-center justify-center bg-[#4F8CFF] text-white font-bold opacity-70 cursor-pointer hover:scale-95 transition"
                      onMouseEnter={() => setHoveredCell('BMI-Premium: 0.74')}
                      onMouseLeave={() => setHoveredCell(null)}
                    >0.74</div>

                    {/* Matrix row 3 */}
                    <div className="h-10 flex items-center justify-start text-[var(--foreground)] pl-2">BMI</div>
                    <div 
                      className="h-10 flex items-center justify-center bg-[#4F8CFF] text-white font-bold opacity-60 cursor-pointer hover:scale-95 transition"
                      onMouseEnter={() => setHoveredCell('Age-BMI: 0.62')}
                      onMouseLeave={() => setHoveredCell(null)}
                    >0.62</div>
                    <div 
                      className="h-10 flex items-center justify-center bg-[#4F8CFF] text-white font-bold opacity-70 cursor-pointer hover:scale-95 transition"
                      onMouseEnter={() => setHoveredCell('BMI-Premium: 0.74')}
                      onMouseLeave={() => setHoveredCell(null)}
                    >0.74</div>
                    <div className="h-10 flex items-center justify-center bg-[#4F8CFF] text-white font-bold opacity-100">1.00</div>
                  </div>

                  {hoveredCell && (
                    <div className="mt-4 text-xs font-mono text-[var(--foreground)] flex items-center gap-1.5 bg-[var(--card)] border border-[var(--border)] px-3 py-1.5 rounded-full shadow-sm">
                      <CheckCircle size={12} className="text-emerald-500" />
                      {hoveredCell}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'sql' && (
                <div className="w-full grid md:grid-cols-2 gap-4 items-stretch font-mono text-xs">
                  {/* Query Input */}
                  <div className="flex flex-col border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--background)]">
                    <div className="bg-[var(--section-alt)] px-3 py-2 border-b border-[var(--border)] text-[9.5px] text-[var(--muted)] flex justify-between items-center">
                      <span>SQLite Sandbox Console</span>
                      <span className="text-[var(--accent)] hover:underline cursor-pointer" onClick={() => setSqlQuery(`CREATE INDEX idx_transactions_user_date \nON transactions(user_id, date);`)}>Index Query</span>
                    </div>
                    <textarea
                      value={sqlQuery}
                      onChange={(e) => setSqlQuery(e.target.value)}
                      className="flex-1 p-3 bg-transparent text-[var(--foreground)] outline-none resize-none min-h-[110px]"
                    />
                    <div className="p-2 bg-[var(--section-alt)] border-t border-[var(--border)] flex justify-end">
                      <button
                        onClick={runMockQuery}
                        disabled={isRunning}
                        className="flex items-center gap-1 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--card-hover)] transition px-3 py-1.5 rounded-md font-semibold text-[10px] shadow-sm"
                      >
                        <Play size={10} className="fill-current" />
                        {isRunning ? 'Running...' : 'Run Query'}
                      </button>
                    </div>
                  </div>

                  {/* Query Output Result Table */}
                  <div className="border border-[var(--border)] rounded-lg overflow-hidden flex flex-col bg-[var(--background)]">
                    <div className="bg-[var(--section-alt)] px-3 py-2 border-b border-[var(--border)] text-[9.5px] text-[var(--muted)]">
                      QueryResult Table ({sqlResult.length} rows)
                    </div>
                    <div className="flex-1 p-3 overflow-auto">
                      {isRunning ? (
                        <div className="flex flex-col items-center justify-center h-full gap-2 text-[var(--muted)] text-[10px]">
                          <span className="w-4 h-4 rounded-full border-2 border-t-transparent border-current animate-spin" />
                          Fetching rows...
                        </div>
                      ) : (
                        <table className="w-full text-left text-[10px] text-[var(--muted)] border-collapse">
                          <thead>
                            <tr className="border-b border-[var(--border)]">
                              {Object.keys(sqlResult[0] || {}).map((k) => (
                                <th key={k} className="pb-1.5 font-bold uppercase tracking-wider text-[var(--foreground)] pr-2">
                                  {k}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {sqlResult.map((row, idx) => (
                              <tr key={idx} className="border-b border-[var(--border)] last:border-b-0">
                                {Object.values(row).map((val, colIdx) => (
                                  <td key={colIdx} className="py-2 pr-2 font-mono text-[var(--foreground)] truncate max-w-[120px]">
                                    {val}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </BlurFadeIn>
    </section>
  )
}
