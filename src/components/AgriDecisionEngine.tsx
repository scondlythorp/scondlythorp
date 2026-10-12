import React, { useState } from 'react';
import { Sprout, CloudRain, AlertTriangle, CheckCircle2, Sliders, Info } from 'lucide-react';

interface CropProfile {
  name: string;
  scientificName: string;
  idealPh: [number, number];
  minRainfallMm: number;
  nutrientDemand: { N: 'Low' | 'Medium' | 'High'; P: 'Low' | 'Medium' | 'High'; K: 'Low' | 'Medium' | 'High' };
  suitableSoils: string[];
  growingSeasonDays: number;
}

const CROP_CATALOGUE: Record<string, CropProfile> = {
  "Groundnut": {
    name: "Groundnut (Peanut)",
    scientificName: "Arachis hypogaea",
    idealPh: [5.8, 6.5],
    minRainfallMm: 500,
    nutrientDemand: { N: 'Low', P: 'Medium', K: 'Medium' }, // Legume, fixes nitrogen
    suitableSoils: ["Sandy upland soil", "Loamy river terrace"],
    growingSeasonDays: 95
  },
  "Maize": {
    name: "Maize (Corn)",
    scientificName: "Zea mays",
    idealPh: [6.0, 7.2],
    minRainfallMm: 650,
    nutrientDemand: { N: 'High', P: 'High', K: 'Medium' },
    suitableSoils: ["Loamy river terrace", "Heavy clay lowland"],
    growingSeasonDays: 110
  },
  "Lowland Rice": {
    name: "Lowland Rice",
    scientificName: "Oryza sativa / glaberrima",
    idealPh: [5.5, 6.8],
    minRainfallMm: 900,
    nutrientDemand: { N: 'High', P: 'Medium', K: 'High' },
    suitableSoils: ["Heavy clay lowland", "Coastal alluvium"],
    growingSeasonDays: 125
  },
  "Cassava": {
    name: "Cassava",
    scientificName: "Manihot esculenta",
    idealPh: [5.0, 6.8],
    minRainfallMm: 450,
    nutrientDemand: { N: 'Medium', P: 'Low', K: 'High' },
    suitableSoils: ["Sandy upland soil", "Loamy river terrace"],
    growingSeasonDays: 240
  },
  "Chia": {
    name: "Chia",
    scientificName: "Salvia hispanica",
    idealPh: [6.0, 7.5],
    minRainfallMm: 400,
    nutrientDemand: { N: 'Low', P: 'Medium', K: 'Low' },
    suitableSoils: ["Sandy upland soil", "Loamy river terrace"],
    growingSeasonDays: 100
  }
};

export const AgriDecisionEngine: React.FC = () => {
  const [selectedSoil, setSelectedSoil] = useState("Sandy upland soil");
  const [soilPh, setSoilPh] = useState(6.2);
  const [soilN, setSoilN] = useState<'Low' | 'Medium' | 'High'>('Medium');
  const [soilP, setSoilP] = useState<'Low' | 'Medium' | 'High'>('Medium');
  const [soilK, setSoilK] = useState<'Low' | 'Medium' | 'High'>('Medium');
  const [projectedRainMm, setProjectedRainMm] = useState(680);
  const [selectedCropKey, setSelectedCropKey] = useState("Groundnut");

  const crop = CROP_CATALOGUE[selectedCropKey];

  // Calculate suitability score based on agronomic heuristics
  let score = 100;
  const warnings: string[] = [];
  const positiveNotes: string[] = [];

  // Soil texture match
  if (!crop.suitableSoils.includes(selectedSoil)) {
    score -= 25;
    warnings.push(`Soil texture mismatch: ${crop.name} prefers well-drained ${crop.suitableSoils.join(' or ')}.`);
  } else {
    positiveNotes.push(`Well-suited to ${selectedSoil} soil conditions.`);
  }

  // pH evaluation
  const [minPh, maxPh] = crop.idealPh;
  if (soilPh < minPh) {
    const diff = minPh - soilPh;
    score -= Math.min(30, Math.round(diff * 20));
    warnings.push(`Soil is moderately acidic for ${crop.name} (pH ${soilPh} vs optimal ${minPh}-${maxPh}). Consider agricultural lime.`);
  } else if (soilPh > maxPh) {
    const diff = soilPh - maxPh;
    score -= Math.min(25, Math.round(diff * 18));
    warnings.push(`Soil is slightly alkaline for ${crop.name} (pH ${soilPh} vs optimal ${minPh}-${maxPh}).`);
  } else {
    positiveNotes.push(`Soil pH (${soilPh}) is in the optimal physiological range.`);
  }

  // Rainfall suitability
  if (projectedRainMm < crop.minRainfallMm) {
    const deficit = crop.minRainfallMm - projectedRainMm;
    score -= Math.min(35, Math.round((deficit / 100) * 12));
    warnings.push(`Rainfall deficit: Projected ${projectedRainMm}mm is below ${crop.name}'s requirement of ${crop.minRainfallMm}mm. Supplementary irrigation recommended.`);
  } else {
    positiveNotes.push(`Projected precipitation (${projectedRainMm}mm) meets the seasonal water budget.`);
  }

  // Nutrient matching
  const levelOrder = { 'Low': 1, 'Medium': 2, 'High': 3 };
  if (levelOrder[soilN] < levelOrder[crop.nutrientDemand.N]) {
    score -= 10;
    warnings.push(`Nitrogen deficiency: ${crop.name} has high nitrogen demand; split-dose urea application advised.`);
  }
  if (levelOrder[soilP] < levelOrder[crop.nutrientDemand.P]) {
    score -= 8;
    warnings.push(`Phosphorus limitation: May limit root establishment; basal phosphate fertilizer suggested.`);
  }

  score = Math.max(10, Math.min(98, score));

  let suitabilityLabel = "Highly Recommended";
  let badgeColor = "text-emerald-400 border-emerald-500/40 bg-emerald-950/30";
  if (score < 50) {
    suitabilityLabel = "High Risk / Marginal";
    badgeColor = "text-rose-400 border-rose-500/40 bg-rose-950/30";
  } else if (score < 75) {
    suitabilityLabel = "Moderate / Conditional";
    badgeColor = "text-amber-400 border-amber-500/40 bg-amber-950/30";
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <div className="p-4 sm:p-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-100 flex items-center gap-2">
            <Sprout className="w-4 h-4 text-emerald-400" />
            Sahelian Agricultural Decision Support Engine
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Interactive agronomic heuristic rules engine modeling soil parameters, crop physiology, and seasonal rainfall
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <span>Target Region: The Gambia</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 p-4 sm:p-6 space-y-5">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-300">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" /> Input Agronomic Parameters
          </div>

          {/* Select Target Crop */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Select Crop to Evaluate
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {Object.keys(CROP_CATALOGUE).map((cKey) => (
                <button
                  key={cKey}
                  type="button"
                  onClick={() => setSelectedCropKey(cKey)}
                  className={`px-2.5 py-2 rounded text-xs font-medium transition-all text-center border ${
                    selectedCropKey === cKey
                      ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  {cKey}
                </button>
              ))}
            </div>
          </div>

          {/* Soil Type & pH */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Soil Texture Category
              </label>
              <select
                value={selectedSoil}
                onChange={(e) => setSelectedSoil(e.target.value)}
                className="w-full text-xs bg-slate-950 border border-slate-700 text-slate-200 rounded p-2 focus:outline-none focus:border-cyan-500"
              >
                <option value="Sandy upland soil">Sandy upland soil (Senegambia Plateau)</option>
                <option value="Loamy river terrace">Loamy river terrace (Middle River)</option>
                <option value="Heavy clay lowland">Heavy clay lowland (Banto Faros)</option>
                <option value="Coastal alluvium">Coastal alluvium (Kombo coastal)</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1.5">
                <span>Soil pH Level</span>
                <span className="font-mono text-cyan-400">{soilPh.toFixed(1)} ({soilPh < 6 ? 'Acidic' : soilPh > 7.5 ? 'Alkaline' : 'Neutral'})</span>
              </div>
              <input
                type="range"
                min="4.8"
                max="8.4"
                step="0.1"
                value={soilPh}
                onChange={(e) => setSoilPh(parseFloat(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>4.8 (Very Acidic)</span>
                <span>6.5 (Optimal)</span>
                <span>8.4 (Alkaline)</span>
              </div>
            </div>
          </div>

          {/* Seasonal Rainfall */}
          <div>
            <div className="flex justify-between text-xs font-medium text-slate-300 mb-1.5">
              <span className="flex items-center gap-1.5"><CloudRain className="w-3.5 h-3.5 text-sky-400" /> Projected Seasonal Rainfall</span>
              <span className="font-mono text-sky-400">{projectedRainMm} mm</span>
            </div>
            <input
              type="range"
              min="350"
              max="1200"
              step="25"
              value={projectedRainMm}
              onChange={(e) => setProjectedRainMm(parseInt(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>350mm (Severe Drought)</span>
              <span>750mm (Average Sahelian Season)</span>
              <span>1200mm (High Flood)</span>
            </div>
          </div>

          {/* N-P-K Nutrients */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">
              Soil Nutrient Profile (N - P - K)
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['N', 'P', 'K'] as const).map(nutrient => {
                const curVal = nutrient === 'N' ? soilN : nutrient === 'P' ? soilP : soilK;
                const setVal = nutrient === 'N' ? setSoilN : nutrient === 'P' ? setSoilP : setSoilK;
                const label = nutrient === 'N' ? 'Nitrogen (N)' : nutrient === 'P' ? 'Phosphorus (P)' : 'Potassium (K)';

                return (
                  <div key={nutrient} className="bg-slate-950 p-2.5 rounded border border-slate-800">
                    <div className="text-[11px] text-slate-400 mb-1 font-medium">{label}</div>
                    <div className="flex gap-1">
                      {(['Low', 'Medium', 'High'] as const).map(lvl => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setVal(lvl)}
                          className={`flex-1 text-[10px] py-1 rounded transition-colors ${
                            curVal === lvl
                              ? 'bg-cyan-900/60 text-cyan-200 border border-cyan-700'
                              : 'bg-slate-900 text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          {lvl[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Output Dashboard (5 cols) */}
        <div className="lg:col-span-5 p-4 sm:p-6 bg-slate-950/40 flex flex-col justify-between space-y-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-3">
              Agronomic Evaluation Result
            </div>

            {/* Score Card */}
            <div className={`p-4 rounded-lg border ${badgeColor} mb-4`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-300">Suitability Index</div>
                  <div className="text-2xl font-bold font-mono tracking-tight mt-0.5">
                    {score}%
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold">{suitabilityLabel}</div>
                  <div className="text-[11px] opacity-80 mt-0.5">{crop.name}</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-800/80 h-1.5 rounded mt-3 overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    score > 75 ? 'bg-emerald-400' : score > 50 ? 'bg-amber-400' : 'bg-rose-400'
                  }`}
                  style={{ width: `${score}%` }}
                ></div>
              </div>
            </div>

            {/* Scientific details */}
            <div className="bg-slate-900/70 p-3 rounded border border-slate-800 text-xs space-y-1.5 mb-4">
              <div className="flex justify-between text-slate-400">
                <span>Species:</span>
                <span className="italic text-slate-200">{crop.scientificName}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Growth Duration:</span>
                <span className="font-mono text-slate-200">{crop.growingSeasonDays} days</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Minimum Water Need:</span>
                <span className="font-mono text-slate-200">{crop.minRainfallMm} mm</span>
              </div>
            </div>

            {/* Positives & Warnings */}
            <div className="space-y-2 text-xs">
              {positiveNotes.map((note, idx) => (
                <div key={idx} className="flex items-start gap-2 text-emerald-300/90 bg-emerald-950/20 p-2 rounded border border-emerald-900/40">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" />
                  <span>{note}</span>
                </div>
              ))}

              {warnings.map((warn, idx) => (
                <div key={idx} className="flex items-start gap-2 text-amber-300/90 bg-amber-950/20 p-2 rounded border border-amber-900/40">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" />
                  <span>{warn}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-[11px] text-slate-500 pt-3 border-t border-slate-800 flex items-start gap-1.5">
            <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span>
              Decision-support model designed as an advisory decision aid for farmers and extension agents, based on West African agro-ecological thresholds.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
