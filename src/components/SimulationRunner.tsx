import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Compass, Navigation, Battery, Wind, AlertCircle } from 'lucide-react';

interface Waypoint {
  id: number;
  name: string;
  x: number; // 0 to 600 canvas coordinate
  y: number; // 0 to 400 canvas coordinate
  alt: number; // meters
}

const PRESET_MISSIONS: { name: string; description: string; waypoints: Waypoint[] }[] = [
  {
    name: "Faraba Agricultural Perimeter",
    description: "Multi-hectare farmland boundary aerial monitoring path",
    waypoints: [
      { id: 1, name: "Home Base / Launch", x: 80, y: 320, alt: 10 },
      { id: 2, name: "North-West Orchard", x: 120, y: 90, alt: 45 },
      { id: 3, name: "Northern Ridge Check", x: 340, y: 70, alt: 50 },
      { id: 4, name: "East Irrigation Basin", x: 510, y: 160, alt: 45 },
      { id: 5, name: "South Granary Point", x: 440, y: 330, alt: 35 },
      { id: 6, name: "Return to Launch (RTL)", x: 80, y: 320, alt: 15 }
    ]
  },
  {
    name: "River Gambia Mangrove Transect",
    description: "Linear environmental baseline transect along wetlands",
    waypoints: [
      { id: 1, name: "Dock Station", x: 60, y: 220, alt: 10 },
      { id: 2, name: "Creek Delta 1", x: 200, y: 150, alt: 35 },
      { id: 3, name: "Islet Canopy Hub", x: 380, y: 260, alt: 40 },
      { id: 4, name: "Tributary Junction", x: 530, y: 120, alt: 45 },
      { id: 5, name: "Station Return", x: 60, y: 220, alt: 15 }
    ]
  }
];

export const SimulationRunner: React.FC = () => {
  const [selectedPresetIdx, setSelectedPresetIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [targetSpeed, setTargetSpeed] = useState(12); // m/s
  const [windSpeed, setWindSpeed] = useState(4); // m/s
  const [windHeading, setWindHeading] = useState(65); // degrees
  
  // Drone state
  const [currentWpIdx, setCurrentWpIdx] = useState(0);
  const [pos, setPos] = useState({ x: 80, y: 320 });
  const [altitude, setAltitude] = useState(10);
  const [heading, setHeading] = useState(0);
  const [batteryPct, setBatteryPct] = useState(100);
  const [distanceTraveled, setDistanceTraveled] = useState(0);
  const [flightTimeSeconds, setFlightTimeSeconds] = useState(0);
  const [telemetryPackets, setTelemetryPackets] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeMission = PRESET_MISSIONS[selectedPresetIdx];
  const waypoints = activeMission.waypoints;

  // Reset simulation when preset changes
  const resetSimulation = () => {
    setIsPlaying(false);
    setCurrentWpIdx(0);
    const start = waypoints[0];
    setPos({ x: start.x, y: start.y });
    setAltitude(start.alt);
    setHeading(0);
    setBatteryPct(100);
    setDistanceTraveled(0);
    setFlightTimeSeconds(0);
    setTelemetryPackets(0);
  };

  useEffect(() => {
    resetSimulation();
  }, [selectedPresetIdx]);

  // Physics animation loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setFlightTimeSeconds(t => t + 1);
      setTelemetryPackets(p => p + 4);

      setPos(prevPos => {
        const targetWp = waypoints[currentWpIdx];
        if (!targetWp) {
          setIsPlaying(false);
          return prevPos;
        }

        const dx = targetWp.x - prevPos.x;
        const dy = targetWp.y - prevPos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 4) {
          // Arrived at current waypoint
          if (currentWpIdx + 1 < waypoints.length) {
            setCurrentWpIdx(idx => idx + 1);
            setAltitude(targetWp.alt);
          } else {
            // Mission complete
            setIsPlaying(false);
          }
          return { x: targetWp.x, y: targetWp.y };
        }

        // Calculate heading in degrees
        const angleRad = Math.atan2(dy, dx);
        const angleDeg = (angleRad * 180 / Math.PI + 90 + 360) % 360;
        setHeading(Math.round(angleDeg));

        // Step movement
        const step = (targetSpeed * 0.4 * speedMultiplier);
        const moveRatio = Math.min(step / dist, 1);
        const nextX = prevPos.x + dx * moveRatio;
        const nextY = prevPos.y + dy * moveRatio;

        setDistanceTraveled(d => Math.round(d + (step * 2.5)));
        setBatteryPct(b => Math.max(0, +(b - (0.08 * (targetSpeed / 10) * speedMultiplier)).toFixed(1)));

        // Interpolate altitude
        const targetAlt = targetWp.alt;
        setAltitude(curAlt => {
          const altDiff = targetAlt - curAlt;
          return +(curAlt + altDiff * 0.05).toFixed(1);
        });

        return { x: nextX, y: nextY };
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, currentWpIdx, waypoints, targetSpeed, speedMultiplier]);

  // Render simulation canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas dimensions
    const width = canvas.width;
    const height = canvas.height;

    // Clear
    ctx.fillStyle = '#090d16';
    ctx.fillRect(0, 0, width, height);

    // Grid lines (UTM / Coordinate grid)
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Planned flight path
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    waypoints.forEach((wp, i) => {
      if (i === 0) ctx.moveTo(wp.x, wp.y);
      else ctx.lineTo(wp.x, wp.y);
    });
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw waypoints
    waypoints.forEach((wp, i) => {
      const isReached = i < currentWpIdx;
      const isCurrent = i === currentWpIdx;

      ctx.fillStyle = isCurrent ? '#06b6d4' : isReached ? '#059669' : '#334155';
      ctx.beginPath();
      ctx.arc(wp.x, wp.y, isCurrent ? 8 : 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Waypoint label
      ctx.fillStyle = isCurrent ? '#e0f2fe' : '#94a3b8';
      ctx.font = '11px Plus Jakarta Sans, sans-serif';
      ctx.fillText(`WP${wp.id}: ${wp.name}`, wp.x + 10, wp.y - 6);
    });

    // Draw Drone Position
    ctx.save();
    ctx.translate(pos.x, pos.y);
    ctx.rotate((heading - 90) * Math.PI / 180);

    // Quadcopter arms
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-12, -12);
    ctx.lineTo(12, 12);
    ctx.moveTo(-12, 12);
    ctx.lineTo(12, -12);
    ctx.stroke();

    // Rotors
    const rotorColor = isPlaying ? '#38bdf8' : '#94a3b8';
    ctx.fillStyle = rotorColor;
    [[-12, -12], [12, -12], [-12, 12], [12, 12]].forEach(([rx, ry]) => {
      ctx.beginPath();
      ctx.arc(rx, ry, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // Central chassis
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.arc(0, 0, 7, 0, Math.PI * 2);
    ctx.fill();

    // Heading nose indicator
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.moveTo(0, -10);
    ctx.lineTo(4, -4);
    ctx.lineTo(-4, -4);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }, [pos, heading, currentWpIdx, waypoints, isPlaying]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      {/* Top Header */}
      <div className="p-4 sm:p-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-100 flex items-center gap-2">
            <Navigation className="w-4 h-4 text-cyan-400" />
            Autonomous Drone Flight Kinematics & Telemetry Simulator
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Real-time trajectory tracking, waypoint progression, and battery discharge math
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={selectedPresetIdx}
            onChange={(e) => setSelectedPresetIdx(Number(e.target.value))}
            className="text-xs bg-slate-800 border border-slate-700 text-slate-200 rounded px-2.5 py-1.5 focus:outline-none focus:border-cyan-500"
          >
            {PRESET_MISSIONS.map((m, idx) => (
              <option key={m.name} value={idx}>{m.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Simulation Viewport & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* Left: Canvas Area */}
        <div className="lg:col-span-3 p-4 bg-slate-950 flex flex-col items-center justify-center relative">
          <canvas
            ref={canvasRef}
            width={600}
            height={400}
            className="w-full max-w-[600px] h-auto border border-slate-800/80 rounded-lg shadow-inner"
          />

          {/* Canvas Overlay Status */}
          <div className="absolute top-6 left-6 text-xs font-mono text-slate-400 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded backdrop-blur flex items-center gap-3">
            <span>Lat: 13.2842° N</span>
            <span className="text-slate-600">|</span>
            <span>Lon: -16.5921° W</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">Target WP: {waypoints[currentWpIdx]?.name || "Mission End"}</span>
          </div>

          {/* Controls Bar */}
          <div className="w-full max-w-[600px] mt-3 flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  isPlaying 
                    ? 'bg-amber-600/90 text-white hover:bg-amber-600' 
                    : 'bg-cyan-600 text-white hover:bg-cyan-500'
                }`}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isPlaying ? 'Pause Simulation' : 'Execute Mission'}
              </button>

              <button
                onClick={resetSimulation}
                className="px-3 py-1.5 rounded text-xs font-medium bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>

              <div className="flex items-center gap-1 ml-2 text-xs text-slate-400">
                <span>Speed:</span>
                {[1, 2, 4].map(mul => (
                  <button
                    key={mul}
                    onClick={() => setSpeedMultiplier(mul)}
                    className={`px-2 py-0.5 rounded text-[11px] ${
                      speedMultiplier === mul ? 'bg-cyan-900/60 text-cyan-300 border border-cyan-700' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {mul}x
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs text-slate-400 font-mono">
              Flight Time: {Math.floor(flightTimeSeconds / 60)}m {flightTimeSeconds % 60}s
            </div>
          </div>
        </div>

        {/* Right: Telemetry Metrics Board */}
        <div className="p-4 sm:p-5 border-t lg:border-t-0 lg:border-l border-slate-800 bg-slate-900/60 flex flex-col justify-between space-y-4">
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-3">
              Live Telemetry Stream
            </h4>

            <div className="space-y-3 font-mono">
              <div className="bg-slate-950/70 p-2.5 rounded border border-slate-800/80">
                <div className="text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1"><Compass className="w-3 h-3 text-cyan-400" /> Heading</span>
                  <span className="text-slate-100 font-semibold">{heading}°</span>
                </div>
                <div className="w-full bg-slate-800 h-1 rounded mt-1.5 overflow-hidden">
                  <div className="bg-cyan-500 h-full" style={{ width: `${(heading / 360) * 100}%` }}></div>
                </div>
              </div>

              <div className="bg-slate-950/70 p-2.5 rounded border border-slate-800/80">
                <div className="text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Ground Speed</span>
                  <span className="text-slate-100 font-semibold">{targetSpeed} m/s</span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center justify-between mt-1">
                  <span>Altitude (AGL)</span>
                  <span className="text-cyan-400 font-semibold">{altitude} m</span>
                </div>
              </div>

              <div className="bg-slate-950/70 p-2.5 rounded border border-slate-800/80">
                <div className="text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1"><Battery className="w-3 h-3 text-emerald-400" /> 4S Battery</span>
                  <span className={`font-semibold ${batteryPct < 20 ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {batteryPct}%
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded mt-1.5 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${batteryPct < 20 ? 'bg-rose-500' : 'bg-emerald-500'}`} 
                    style={{ width: `${batteryPct}%` }}
                  ></div>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Est. Voltage: {(14.8 * (batteryPct / 100) + 1.2).toFixed(2)} V</div>
              </div>

              <div className="bg-slate-950/70 p-2.5 rounded border border-slate-800/80">
                <div className="text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1"><Wind className="w-3 h-3 text-sky-400" /> Wind Vector</span>
                  <span className="text-slate-300">{windSpeed} m/s @ {windHeading}°</span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center justify-between mt-1">
                  <span>Distance Run</span>
                  <span className="text-slate-200">{distanceTraveled} m</span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center justify-between mt-1">
                  <span>Packets Logged</span>
                  <span className="text-slate-200">{telemetryPackets}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-950/80 rounded border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
            <span className="text-cyan-400 font-semibold block mb-0.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> Note on Implementation
            </span>
            Simulated using Cartesian coordinates and kinematic vector equations. Demonstrates flight navigation logic, waypoint sequencing, and battery depletion mathematics. Physical avionics testing is a planned phase.
          </div>
        </div>
      </div>
    </div>
  );
};
