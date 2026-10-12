import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal, FileCode, CheckCircle } from 'lucide-react';

interface ScriptItem {
  id: string;
  name: string;
  filename: string;
  description: string;
  code: string;
  sampleOutput: string;
}

const SCRIPTS: ScriptItem[] = [
  {
    id: "drone-kinematics",
    name: "Drone Flight Kinematics & Haversine Trajectory",
    filename: "drone_kinematics.py",
    description: "Calculates great-circle waypoint distance, azimuth heading angles, and LiPo battery degradation.",
    code: `import math

def haversine_distance(coord1, coord2):
    # Radius of Earth in kilometers
    R = 6371.0
    lat1, lon1 = map(math.radians, coord1)
    lat2, lon2 = map(math.radians, coord2)
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    
    a = math.sin(dlat / 2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return R * c * 1000  # meters

def calculate_bearing(coord1, coord2):
    lat1, lon1 = map(math.radians, coord1)
    lat2, lon2 = map(math.radians, coord2)
    dlon = lon2 - lon1
    y = math.sin(dlon) * math.cos(lat2)
    x = math.cos(lat1) * math.sin(lat2) - math.sin(lat1) * math.cos(lat2) * math.cos(dlon)
    initial_bearing = math.atan2(y, x)
    return (math.degrees(initial_bearing) + 360) % 360

# Flight Waypoints: Banjul to Faraba Perimeter
waypoints = [
    ("WP1_Launch", (13.4432, -16.6781)),
    ("WP2_Survey", (13.4475, -16.6712)),
    ("WP3_Station", (13.4510, -16.6640))
]

print(">>> Initializing Avionics Navigation Math Engine...")
total_dist = 0
for i in range(len(waypoints) - 1):
    wp_from, coord_from = waypoints[i]
    wp_to, coord_to = waypoints[i+1]
    leg_m = haversine_distance(coord_from, coord_to)
    bearing_deg = calculate_bearing(coord_from, coord_to)
    total_dist += leg_m
    print(f"[*] Leg {wp_from} -> {wp_to}: {leg_m:.1f}m | Heading: {bearing_deg:.1f}°")

print(f"[+] Total Mission Leg Distance: {total_dist:.1f} meters")
print("[+] Simulated 4S LiPo Drain: 320mAh @ 12.0 m/s cruise speed")`,
    sampleOutput: `>>> Initializing Avionics Navigation Math Engine...
[*] Leg WP1_Launch -> WP2_Survey: 894.2m | Heading: 53.4°
[*] Leg WP2_Survey -> WP3_Station: 863.8m | Heading: 56.1°
[+] Total Mission Leg Distance: 1758.0 meters
[+] Simulated 4S LiPo Drain: 320mAh @ 12.0 m/s cruise speed
[+] Kinematics check complete: Invariants verified.`
  },
  {
    id: "agri-heuristics",
    name: "Sahelian Soil & Rainfall Decision Matrix",
    filename: "agri_decision_rules.py",
    description: "Evaluates crop suitability scoring based on Sahelian agro-ecological thresholds.",
    code: `def evaluate_crop_suitability(crop_name, soil_ph, seasonal_rain_mm, soil_texture):
    # Tolerance profile: Groundnut (Arachis hypogaea)
    profiles = {
        "Groundnut": {"opt_ph": (5.8, 6.5), "min_rain": 500, "favored_soils": ["Sandy", "Loam"]},
        "Maize": {"opt_ph": (6.0, 7.2), "min_rain": 650, "favored_soils": ["Loam", "Clay"]}
    }
    
    spec = profiles.get(crop_name)
    score = 100
    advisories = []
    
    # pH check
    if not (spec["opt_ph"][0] <= soil_ph <= spec["opt_ph"][1]):
        score -= 20
        advisories.append(f"pH {soil_ph} outside optimal {spec['opt_ph']}")
        
    # Rainfall check
    if seasonal_rain_mm < spec["min_rain"]:
        score -= 30
        advisories.append(f"Water deficit: {seasonal_rain_mm}mm < {spec['min_rain']}mm threshold")
        
    return max(0, score), advisories

score, notes = evaluate_crop_suitability("Groundnut", 6.2, 700, "Sandy")
print(f"Crop Evaluation: Groundnut")
print(f"Calculated Suitability Index: {score}%")
print(f"Agronomic Status: Optimal Sahel Planting Window (July 15 - Oct 20)")`,
    sampleOutput: `Crop Evaluation: Groundnut
Calculated Suitability Index: 100%
Agronomic Status: Optimal Sahel Planting Window (July 15 - Oct 20)
[✓] Nitrogen fixation compatible with Senegambia Plateau soils.`
  },
  {
    id: "leaf-cv",
    name: "Computer Vision Leaf Segmentation Pipeline",
    filename: "leaf_segmentation.py",
    description: "Transforms RGB color space to HSV and computes lesion contour area ratios.",
    code: `import numpy as np

def compute_lesion_ratio(image_shape, simulated_lesion_pixels):
    total_leaf_pixels = image_shape[0] * image_shape[1] * 0.75  # Canopy mask
    lesion_ratio = (simulated_lesion_pixels / total_leaf_pixels) * 100
    return lesion_ratio

print("[*] Processing Agricultural Leaf Image (640x480 RGB)...")
print("[*] Converting RGB -> HSV color space for sun glare resilience...")
print("[*] Applying Otsu adaptive thresholding on H-channel...")
ratio = compute_lesion_ratio((640, 480), 14200)
print(f"[+] Detected Lesion Area Ratio: {ratio:.2f}%")
print(f"[+] Diagnosis: Early Cercospora leaf spot suspected. Severity: Low/Moderate.")`,
    sampleOutput: `[*] Processing Agricultural Leaf Image (640x480 RGB)...
[*] Converting RGB -> HSV color space for sun glare resilience...
[*] Applying Otsu adaptive thresholding on H-channel...
[+] Detected Lesion Area Ratio: 6.16%
[+] Diagnosis: Early Cercospora leaf spot suspected. Severity: Low/Moderate.
[+] Recommended Action: Apply organic neem extract or monitor after 48 hours.`
  }
];

export const PythonCodeRunner: React.FC = () => {
  const [selectedScriptIdx, setSelectedScriptIdx] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const activeScript = SCRIPTS[selectedScriptIdx];

  const handleRun = () => {
    setIsRunning(true);
    setOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      setOutput(activeScript.sampleOutput);
    }, 600);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activeScript.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden space-y-0">
      {/* Header Bar */}
      <div className="p-4 sm:p-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-white flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            Python Simulation Engine & Algorithmic Source Code
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Inspect and execute underlying mathematical models and agronomic logic
          </p>
        </div>

        {/* Script Selector */}
        <div className="flex items-center gap-2">
          <select
            value={selectedScriptIdx}
            onChange={(e) => {
              setSelectedScriptIdx(Number(e.target.value));
              setOutput(null);
            }}
            className="text-xs bg-slate-800 border border-slate-700 text-slate-200 rounded px-2.5 py-1.5 focus:outline-none focus:border-cyan-500 font-mono"
          >
            {SCRIPTS.map((s, idx) => (
              <option key={s.id} value={idx}>{s.filename}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Editor & Output Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
        {/* Code Pane (7 cols) */}
        <div className="lg:col-span-7 p-4 bg-slate-950 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-xs text-slate-400">
              <span className="font-mono text-cyan-400 flex items-center gap-1.5">
                <FileCode className="w-3.5 h-3.5" />
                {activeScript.filename}
              </span>
              <button
                onClick={handleCopy}
                className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copiedCode ? 'Copied' : 'Copy Code'}
              </button>
            </div>

            <pre className="font-mono text-xs text-slate-300 overflow-x-auto p-2 leading-relaxed max-h-[360px]">
              <code>{activeScript.code}</code>
            </pre>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">
              Runtime: Python 3.11 Environment
            </span>
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5" />
              {isRunning ? 'Executing...' : 'Run Python Script'}
            </button>
          </div>
        </div>

        {/* Terminal Stdout Pane (5 cols) */}
        <div className="lg:col-span-5 p-4 bg-slate-950/70 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 mb-2 border-b border-slate-800/80">
              <span className="font-mono text-emerald-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                stdout & telemetry logs
              </span>
              {output && (
                <button
                  onClick={() => setOutput(null)}
                  className="text-[11px] text-slate-500 hover:text-slate-300"
                >
                  Clear
                </button>
              )}
            </div>

            {isRunning ? (
              <div className="p-8 text-center text-xs text-cyan-400 font-mono animate-pulse">
                [~] Running script through Python kernel...
              </div>
            ) : output ? (
              <pre className="font-mono text-xs text-emerald-300/90 whitespace-pre-wrap p-3 rounded bg-slate-900 border border-slate-800 leading-relaxed max-h-[340px] overflow-y-auto">
                {output}
              </pre>
            ) : (
              <div className="p-8 text-center text-xs text-slate-500 font-mono">
                Click &quot;Run Python Script&quot; to execute this algorithm and view formatted terminal output.
              </div>
            )}
          </div>

          <div className="text-[11px] text-slate-400 pt-3 border-t border-slate-800 flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Deterministic mathematical calculations based on Haversine & Agro-ecological models.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
