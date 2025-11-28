import React, { useState } from 'react';
import './Scheduling.css';

const Scheduling = () => {
  const [processes, setProcesses] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProcess, setNewProcess] = useState({
    arrival: '',
    burst: ''
  });
  const [results, setResults] = useState(null);
  const [ganttChart, setGanttChart] = useState([]);

  const handleAddProcess = (e) => {
    e.preventDefault();
    if (newProcess.arrival !== '' && newProcess.burst !== '') {
      // Auto-generate process name (P1, P2, P3, ...)
      // Find the highest process number and add 1, or start from 1
      const existingNumbers = processes
        .map(p => {
          const match = p.name.match(/^P(\d+)$/);
          return match ? parseInt(match[1]) : 0;
        })
        .filter(num => num > 0);
      
      const nextNumber = existingNumbers.length > 0 
        ? Math.max(...existingNumbers) + 1 
        : 1;
      
      const process = {
        id: Date.now(),
        name: `P${nextNumber}`,
        arrival: parseInt(newProcess.arrival),
        burst: parseInt(newProcess.burst)
      };
      setProcesses([...processes, process].sort((a, b) => a.arrival - b.arrival));
      setNewProcess({ arrival: '', burst: '' });
      setShowAddModal(false);
      setResults(null);
      setGanttChart([]);
    }
  };

  const handleDeleteProcess = (id) => {
    setProcesses(processes.filter(p => p.id !== id));
    setResults(null);
    setGanttChart([]);
  };

  const calculateFCFS = () => {
    if (processes.length === 0) {
      alert('Please add at least one process');
      return;
    }

    // Sort processes by arrival time
    const sortedProcesses = [...processes].sort((a, b) => a.arrival - b.arrival);
    
    let currentTime = 0;
    const gantt = [];
    const processResults = [];

    sortedProcesses.forEach((process, index) => {
      // Wait until process arrives
      if (currentTime < process.arrival) {
        currentTime = process.arrival;
      }

      const startTime = currentTime;
      const completionTime = startTime + process.burst;
      const turnaroundTime = completionTime - process.arrival;
      const waitingTime = turnaroundTime - process.burst;

      gantt.push({
        process: process.name,
        start: startTime,
        end: completionTime,
        duration: process.burst
      });

      processResults.push({
        ...process,
        startTime,
        completionTime,
        turnaroundTime,
        waitingTime
      });

      currentTime = completionTime;
    });

    setGanttChart(gantt);
    setResults(processResults);
  };

  const handleReset = () => {
    setProcesses([]);
    setResults(null);
    setGanttChart([]);
    setNewProcess({ arrival: '', burst: '' });
  };

  const averageWaitingTime = results ? 
    (results.reduce((sum, p) => sum + p.waitingTime, 0) / results.length).toFixed(2) : 0;
  
  const averageTurnaroundTime = results ? 
    (results.reduce((sum, p) => sum + p.turnaroundTime, 0) / results.length).toFixed(2) : 0;

  return (
    <div className="scheduling-container">
      <div className="scheduling-content">
        {/* Header */}
        <div className="scheduling-header">
          <div className="header-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="scheduling-title">FCFS CPU Scheduling</h1>
          <p className="scheduling-subtitle">
            Interactive visualization of First Come First Serve CPU scheduling algorithm
          </p>
        </div>

        {/* Processes Panel */}
        <div className="processes-panel">
          <div className="panel-header">
            <h2 className="panel-title">
              <span className="code-icon">&lt;/&gt;</span>
              Processes
            </h2>
            <button 
              className="add-process-btn"
              onClick={() => setShowAddModal(true)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Add Process
            </button>
          </div>

          {processes.length === 0 ? (
            <div className="empty-state">
              <p>No processes added. Click 'Add Process' to get started.</p>
            </div>
          ) : (
            <div className="processes-table-wrapper">
              <table className="processes-table">
                <thead>
                  <tr>
                    <th>Process</th>
                    <th>Arrival</th>
                    <th>Burst</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {processes.map((process) => (
                    <tr key={process.id}>
                      <td>{process.name}</td>
                      <td>{process.arrival}</td>
                      <td>{process.burst}</td>
                      <td>
                        <button 
                          className="delete-btn"
                          onClick={() => handleDeleteProcess(process.id)}
                        >
                          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                            <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button 
            className="run-btn"
            onClick={calculateFCFS}
            disabled={processes.length === 0}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 4L16 10L6 16V4Z" fill="currentColor"/>
            </svg>
            Run Algorithm
          </button>
          <button 
            className="reset-btn"
            onClick={handleReset}
            disabled={processes.length === 0}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 10C3 6.13 6.13 3 10 3C11.5 3 12.87 3.5 14 4.27M17 10C17 13.87 13.87 17 10 17C8.5 17 7.13 16.5 6 15.73M6 6L3 3M17 14L20 17M6 14L3 17M17 6L20 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Reset
          </button>
        </div>

        {/* Results Section */}
        {results && results.length > 0 && (
          <div className="results-section">
            <h2 className="results-title">Scheduling Results</h2>
            
            {/* Gantt Chart */}
            <div className="gantt-chart-container">
              <h3 className="chart-title">Gantt Chart</h3>
              <div className="gantt-chart">
                {ganttChart.map((item, index) => {
                  const width = (item.duration / (ganttChart[ganttChart.length - 1].end - ganttChart[0].start)) * 100;
                  return (
                    <div key={index} className="gantt-bar">
                      <div className="gantt-block" style={{ width: `${width}%` }}>
                        <span className="gantt-process">{item.process}</span>
                      </div>
                      <div className="gantt-times">
                        <span className="gantt-time">{item.start}</span>
                        <span className="gantt-time">{item.end}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Results Table */}
            <div className="results-table-container">
              <h3 className="chart-title">Process Metrics</h3>
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Process</th>
                    <th>Arrival Time</th>
                    <th>Burst Time</th>
                    <th>Start Time</th>
                    <th>Completion Time</th>
                    <th>Waiting Time</th>
                    <th>Turnaround Time</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((process, index) => (
                    <tr key={index}>
                      <td>{process.name}</td>
                      <td>{process.arrival}</td>
                      <td>{process.burst}</td>
                      <td>{process.startTime}</td>
                      <td>{process.completionTime}</td>
                      <td>{process.waitingTime}</td>
                      <td>{process.turnaroundTime}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="5" className="average-label">Average:</td>
                    <td className="average-value">{averageWaitingTime}</td>
                    <td className="average-value">{averageTurnaroundTime}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Add Process Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add New Process</h3>
              <button 
                className="modal-close"
                onClick={() => setShowAddModal(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleAddProcess} className="process-form">
              <div className="form-group">
                <label>Arrival Time</label>
                <input
                  type="number"
                  min="0"
                  value={newProcess.arrival}
                  onChange={(e) => setNewProcess({...newProcess, arrival: e.target.value})}
                  placeholder="0"
                  required
                />
              </div>
              <div className="form-group">
                <label>Burst Time</label>
                <input
                  type="number"
                  min="1"
                  value={newProcess.burst}
                  onChange={(e) => setNewProcess({...newProcess, burst: e.target.value})}
                  placeholder="1"
                  required
                />
              </div>
              <div className="form-info">
                <p>Process will be automatically named: <strong>
                  {(() => {
                    const existingNumbers = processes
                      .map(p => {
                        const match = p.name.match(/^P(\d+)$/);
                        return match ? parseInt(match[1]) : 0;
                      })
                      .filter(num => num > 0);
                    const nextNumber = existingNumbers.length > 0 
                      ? Math.max(...existingNumbers) + 1 
                      : 1;
                    return `P${nextNumber}`;
                  })()}
                </strong></p>
              </div>
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Add Process
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scheduling;
