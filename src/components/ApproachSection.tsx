import { useState } from 'react';
import { Eye, Brain, Database, ArrowRight, Activity, Filter, Trash2, Cpu } from 'lucide-react';

export function ApproachSection() {
  const [activeSchemaTab, setActiveSchemaTab] = useState<'fields' | 'json'>('fields');

  const cognitiveLoopSteps = [
    {
      num: '01',
      title: 'Observe',
      desc: 'Samples robot joint state, torque, vision (RGB-D), and environmental context via the adapter layer.',
      tag: 'State Ingestion',
    },
    {
      num: '02',
      title: 'Build Context',
      desc: 'Normalizes sensor coordinates, verifies timestamp freshness, and tracks task-level uncertainty.',
      tag: 'Canonical Frame',
    },
    {
      num: '03',
      title: 'Recall Memory',
      desc: 'Queries persistent experience indices for similar past tasks, physical geometries, and prior failure modes.',
      tag: 'Experience Retrieval',
    },
    {
      num: '04',
      title: 'Reason & Plan',
      desc: 'Generates candidate strategies, ranks alternatives against retrieved outcomes, and verifies safety envelopes.',
      tag: 'Cognitive Planning',
    },
    {
      num: '05',
      title: 'Act via Adapter',
      desc: 'Transmits bounded task/skill-level commands to the existing robot controller without bypassing safety PLCs.',
      tag: 'Guarded Execution',
    },
    {
      num: '06',
      title: 'Evaluate Outcome',
      desc: 'Quantifies success, failure characteristics, contact resistance, and execution latency against expectations.',
      tag: 'Outcome Attribution',
    },
    {
      num: '07',
      title: 'Consolidate & Evolve',
      desc: 'Encodes the new trial into persistent episodic storage, strengthens winning patterns, and decays stale traces.',
      tag: 'Continual Learning',
    },
  ];

  const memoryLifecycleStages = [
    {
      title: 'Encode',
      desc: 'Extracts salient state, action parameters, physical outcome, and causal attribution rather than storing raw video feeds.',
    },
    {
      title: 'Retrieve',
      desc: 'Scores multi-dimensional similarity across task geometry, grasp dynamics, and failure signatures within milliseconds.',
    },
    {
      title: 'Rank',
      desc: 'Evaluates candidate memories based on outcome reliability, recency, recurrence frequency, and transferability.',
    },
    {
      title: 'Consolidate',
      desc: 'Merges repeated episodic encounters into compact generalized operational policies and adaptive parameters.',
    },
    {
      title: 'Forget',
      desc: 'Selectively prunes or compresses outdated, contradictory, or low-utility memory traces to maintain bounded computation.',
    },
  ];

  const experienceSchemaData = [
    { field: 'context', type: 'Object', desc: 'Task ID, environmental geometry, object pose, friction conditions, sensor freshness.' },
    { field: 'goal', type: 'String', desc: 'Target physical state (e.g., insertion depth, peg alignment, stable grasp verification).' },
    { field: 'action', type: 'ActionSchema', desc: 'Canonical skill commanded (MOVE_TO, GRASP, INSERT), parameters, force limits.' },
    { field: 'outcome', type: 'ResultEnum', desc: 'Success, collision jam, slip, timeout, or safety override with sensor logs.' },
    { field: 'cause_explanation', type: 'String', desc: 'Inferred physical root cause (e.g., lateral friction mismatch, 4mm horizontal offset).' },
    { field: 'utility', type: 'Float [0..1]', desc: 'Estimated future decision value, surprise factor, and reliability score.' },
    { field: 'associations', type: 'Array<ID>', desc: 'Graph links to related object classes, previous episodes, and shared workcells.' },
    { field: 'temporal_signals', type: 'Metadata', desc: 'Monotonic timestamps, repetition counter, decay coefficient, consolidation level.' },
  ];

  return (
    <section id="approach" className="py-20 md:py-28 border-t border-[#D8D2C2]/70 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A8275] mb-3">
            <span>02 · The Cognitive Layer</span>
            <span aria-hidden="true" className="text-[#BAAF96]">·</span>
            <span>How QRAEMON Operates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#15120E] tracking-tight leading-tight text-balance">
            Observe. Remember. Reason. Act. Learn.
          </h2>
          <p className="mt-4 text-lg text-[#443E37] leading-relaxed">
            QRAEMON does not replace the robot&apos;s physical controller. It introduces a persistent cognitive loop above it—evaluating every trial, forming structured memories, and converting operational experience into measurably better future decisions.
          </p>
        </div>

        {/* The 7-Step Cognitive Cycle Diagram */}
        <div className="bg-[#FAF8F3] border border-[#D8D2C2] rounded-md p-6 sm:p-8 mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#E8DFC8] gap-2 mb-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8A8275]">
                Continuous Runtime Loop
              </span>
              <h3 className="text-xl font-bold text-[#15120E]">
                The Forward Cognitive Path
              </h3>
            </div>
            <span className="text-xs text-[#6B6358] font-mono">
              Observe → Context → Remember → Reason → Act → Evaluate → Learn
            </span>
          </div>

          {/* Stepped Loop Cards with Organic Asymmetric Radii & Subtle Alternating Tilts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cognitiveLoopSteps.slice(0, 4).map((step, idx) => {
              const tilts = ['-rotate-0.5', 'rotate-0.5', '-rotate-[0.3deg]', 'rotate-[0.6deg]'];
              const radii = [
                'rounded-[14px_4px_16px_5px]',
                'rounded-[5px_15px_6px_14px]',
                'rounded-[12px_6px_15px_4px]',
                'rounded-[6px_14px_4px_16px]',
              ];
              return (
                <div 
                  key={step.num} 
                  className={`bg-white border-1.5 border-[#15120E]/30 ${radii[idx % 4]} ${tilts[idx % 4]} hover:rotate-0 p-5 relative flex flex-col justify-between shadow-[2px_2px_0px_0px_rgba(21,18,14,0.08)] transition-all`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#FFB800] bg-[#15120E] px-2 py-0.5 rounded-[3px_5px_2px_4px]">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#8A8275] bg-[#FAF8F3] px-1.5 py-0.5 rounded border border-[#E8DFC8]">
                        {step.tag}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#15120E]">{step.title}</h4>
                    <p className="text-xs text-[#554E44] mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {cognitiveLoopSteps.slice(4).map((step, idx) => {
              const tilts = ['rotate-[0.4deg]', '-rotate-[0.5deg]', 'rotate-[0.3deg]'];
              const radii = [
                'rounded-[7px_16px_5px_14px]',
                'rounded-[15px_5px_14px_6px]',
                'rounded-[6px_14px_5px_16px]',
              ];
              return (
                <div 
                  key={step.num} 
                  className={`bg-white border-1.5 border-[#15120E]/30 ${radii[idx % 3]} ${tilts[idx % 3]} hover:rotate-0 p-5 relative flex flex-col justify-between shadow-[2px_2px_0px_0px_rgba(21,18,14,0.08)] transition-all`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#15120E] bg-[#FFB800] px-2 py-0.5 rounded-[3px_5px_2px_4px]">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#8A8275] bg-[#FAF8F3] px-1.5 py-0.5 rounded border border-[#E8DFC8]">
                        {step.tag}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#15120E]">{step.title}</h4>
                    <p className="text-xs text-[#554E44] mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-[#E8DFC8] text-xs text-[#6B6358] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span className="font-medium text-[#15120E]">
              Crucial Principle: Storing more data alone is not learning.
            </span>
            <span>
              Memory is an active computational process: scored, consolidated, and bound to physical consequences.
            </span>
          </div>
        </div>

        {/* Deep Dive: Memory Lifecycle vs Raw Storage with Offset Sketch Backing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: The 5-stage Memory Lifecycle with subtle inclination */}
          <div className="lg:col-span-6 relative">
            <div 
              className="absolute inset-0 bg-[#E8DFC8] border border-[#D8D2C2] rounded-[16px_5px_18px_6px] -rotate-1 translate-x-1.5 translate-y-1.5 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative bg-white border-1.5 border-[#15120E]/40 rounded-[14px_6px_16px_5px] p-6 sm:p-7 rotate-0.5 hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F3F1EA]">
                <h3 className="text-lg font-bold text-[#15120E]">
                  The Memory Lifecycle
                </h3>
                <span className="text-xs font-mono text-[#8A8275] bg-[#FAF8F3] px-2 py-0.5 rounded-[4px_2px_5px_2px] border border-[#E8DFC8]">Active Management</span>
              </div>
              <p className="text-xs text-[#554E44] mb-6 leading-relaxed">
                Robots generate vast streams of high-bandwidth sensor feeds. Indiscriminate logging floods storage and slows retrieval. QRAEMON manages memory as a selective lifecycle:
              </p>

              <div className="space-y-3">
                {memoryLifecycleStages.map((stage, idx) => {
                  const itemCorners = [
                    'rounded-[8px_3px_9px_4px]',
                    'rounded-[4px_8px_3px_7px]',
                    'rounded-[7px_4px_8px_3px]',
                    'rounded-[3px_7px_4px_8px]',
                    'rounded-[6px_3px_7px_4px]',
                  ];
                  return (
                    <div key={stage.title} className={`p-3.5 bg-[#FAF8F3] border border-[#E8DFC8] ${itemCorners[idx % 5]} shadow-2xs`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-[#15120E] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                          Stage {idx + 1}: {stage.title}
                        </span>
                      </div>
                      <p className="text-xs text-[#554E44] leading-relaxed">{stage.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 p-3 bg-[#FFF8E7] border border-[#FFD875] rounded-[6px_3px_7px_4px] text-xs text-[#6B6358]">
                <strong className="text-[#15120E]">Selective Forgetting:</strong> Just as biological nervous systems prune insignificant synapses, QRAEMON bounds memory footprint by consolidating repeated experiences into compact rules.
              </div>
            </div>
          </div>

          {/* Right: The Structured Experience Schema with Offset Sketch Backing */}
          <div className="lg:col-span-6 relative">
            <div 
              className="absolute inset-0 bg-[#E8DFC8] border border-[#D8D2C2] rounded-[7px_17px_5px_15px] rotate-1 translate-x-1 translate-y-2 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative bg-white border-1.5 border-[#15120E]/40 rounded-[6px_16px_5px_14px] p-6 sm:p-7 -rotate-0.5 hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F3F1EA]">
                <div>
                  <h3 className="text-lg font-bold text-[#15120E]">
                    Canonical Experience Record
                  </h3>
                  <p className="text-[11px] text-[#8A8275]">Standardized Representation Schema v1.0</p>
                </div>

                {/* Tab Selector */}
                <div className="flex p-0.5 bg-[#FAF8F3] border border-[#15120E]/30 rounded-[4px_2px_5px_3px] text-[11px]">
                  <button
                    onClick={() => setActiveSchemaTab('fields')}
                    className={`px-2.5 py-1 rounded-[3px_2px_4px_2px] transition-colors ${
                      activeSchemaTab === 'fields' ? 'bg-[#15120E] text-white' : 'text-[#6B6358]'
                    }`}
                  >
                    Fields
                  </button>
                  <button
                    onClick={() => setActiveSchemaTab('json')}
                    className={`px-2.5 py-1 rounded-[3px_2px_4px_2px] transition-colors ${
                      activeSchemaTab === 'json' ? 'bg-[#15120E] text-white' : 'text-[#6B6358]'
                    }`}
                  >
                    JSON Payload
                  </button>
                </div>
              </div>

              {activeSchemaTab === 'fields' ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-[#E8DFC8] text-[#8A8275]">
                        <th className="py-2 font-mono font-medium">Field</th>
                        <th className="py-2 font-mono font-medium">Type</th>
                        <th className="py-2 font-medium">Semantic Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F3F1EA]">
                      {experienceSchemaData.map((row) => (
                        <tr key={row.field} className="hover:bg-[#FAF8F3]/60 transition-colors">
                          <td className="py-2.5 font-mono font-bold text-[#15120E] pr-3">{row.field}</td>
                          <td className="py-2.5 font-mono text-[11px] text-[#6B6358] pr-3 whitespace-nowrap">{row.type}</td>
                          <td className="py-2.5 text-[#554E44] leading-relaxed">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <pre className="p-4 bg-[#15120E] text-[#F3F1EA] rounded-[8px_4px_9px_3px] text-xs font-mono overflow-x-auto leading-relaxed max-h-[380px] shadow-inner">
{`{
  "experience_id": "exp_7f90a21",
  "timestamp": 1729501420.481,
  "task": "precision_peg_insertion",
  "context": {
    "target_id": "socket_fixture_B",
    "measured_offset_mm": [3.8, -0.4, 0.0],
    "surface_friction_est": 0.28
  },
  "action": {
    "skill": "INSERT_SPIRAL_SEARCH",
    "parameters": {
      "nominal_force_n": 10.0,
      "max_shear_n": 18.0,
      "approach_velocity_mms": 12.0
    }
  },
  "outcome": {
    "status": "SUCCEEDED",
    "cycles_to_settle": 3,
    "max_contact_force_n": 14.2
  },
  "cause_attribution": "lateral_offset_precompensation",
  "utility_score": 0.94,
  "associations": ["exp_7f89b14", "skill_spiral_insert"],
  "consolidation_level": 2
}`}
                </pre>
              )}

              <div className="mt-4 pt-3 border-t border-[#E8DFC8] text-[11px] text-[#6B6358]">
                Schema ensures experience remains embodiment-agnostic, transferable across workcells.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
