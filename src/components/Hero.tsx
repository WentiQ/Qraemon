import { useState } from 'react';
import { ArrowRight, RotateCcw, Check, Sparkles, Layers } from 'lucide-react';
import { QraemonLogo } from './QraemonLogo';

interface HeroProps {
  onOpenContact: (mode?: string) => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  // Interactive mini simulation of the memory loop
  const [activeTrial, setActiveTrial] = useState<'with-memory' | 'without-memory'>('with-memory');
  const [stepIndex, setStepIndex] = useState<number>(3); // 0: Observe, 1: Recall/Miss, 2: Reason, 3: Outcome

  const stepsWithMemory = [
    { name: '1. Observe', desc: 'Stereo RGB-D senses pin misaligned 4mm to right of slot', badge: 'Perception' },
    { name: '2. Recall Memory', desc: 'Retrieved episode #042: straight downward insertion jammed with 18N shear force', badge: 'Experience' },
    { name: '3. Reason & Plan', desc: 'Plan candidate: compensate 4mm lateral offset, decelerate approach to 15mm/s', badge: 'Cognitive' },
    { name: '4. Adapted Act', desc: 'Safety guard verified envelope; clean insertion on Trial 2 without engineer intervention', badge: 'Result' },
  ];

  const stepsWithoutMemory = [
    { name: '1. Observe', desc: 'Stereo RGB-D senses pin misaligned 4mm to right of slot', badge: 'Perception' },
    { name: '2. No Experience', desc: 'No persistent operational memory; state re-evaluated from scratch', badge: 'Baseline' },
    { name: '3. Static Plan', desc: 'Executes standard linear descent script at full programmed speed', badge: 'Fixed Policy' },
    { name: '4. Repeat Jam', desc: 'Collision threshold triggered (22N); robot faults and demands technician reboot', badge: 'Failure' },
  ];

  const currentSteps = activeTrial === 'with-memory' ? stepsWithMemory : stepsWithoutMemory;

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background hand-drawn architectural subtle lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sketch-grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#D8D2C2" strokeWidth="0.5" strokeDasharray="3,3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sketch-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Unboxed editorial top kicker */}
        <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-[#8A8275] mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-[#FFB800]" />
          <span>The Experience Layer for Physical AI</span>
          <span aria-hidden="true" className="text-[#BAAF96]">·</span>
          <span>Robot-Agnostic Cognitive Architecture</span>
        </div>

        {/* 2-column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-[#15120E] tracking-tight leading-[1.08] text-balance">
              Robots can act.
              <br />
              <span className="relative inline-block mt-1">
                The next step is{' '}
                <span className="relative z-10 text-[#15120E]">learning from experience.</span>
                {/* Hand-drawn imperfect wavy underline path */}
                <svg
                  className="absolute left-0 -bottom-1 w-full h-4 -z-0 overflow-visible"
                  viewBox="0 0 400 16"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 2 8 C 80 14, 180 3, 270 11 C 330 16, 380 7, 398 9"
                    stroke="#FFB800"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeOpacity="0.75"
                  />
                  <path
                    d="M 12 11 C 95 6, 210 13, 310 8 C 360 5, 385 10, 395 8"
                    stroke="#15120E"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeDasharray="4 6"
                    opacity="0.35"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#443E37] leading-relaxed max-w-2xl font-normal">
              QRAEMON is developing a robot-agnostic cognitive layer: a persistent experience system that sits above existing control stacks, enabling machines to keep, reuse, and improve what they learn on the job.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenContact('pilot')}
                className="relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#15120E] bg-[#FFB800] hover:bg-[#e6a600] active:translate-y-0.5 rounded-[5px_12px_4px_10px] shadow-[3px_3px_0px_0px_#15120E] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15120E]"
              >
                <span>Discuss a Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#approach"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#15120E] bg-white hover:bg-[#FAF8F3] border-1.5 border-[#15120E] rounded-[10px_4px_12px_6px] transition-colors shadow-[2px_2px_0px_0px_rgba(21,18,14,0.15)]"
              >
                <span>Explore the Architecture</span>
              </a>
            </div>

            {/* Quiet trust markers / scope discipline */}
            <div className="pt-6 border-t border-[#D8D2C2]/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#6B6358]">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#15120E]">Safety Guarded:</span>
                <span>Retains independent E-stop & servo control</span>
              </div>
              <span className="hidden sm:inline text-[#D8D2C2]">|</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#15120E]">Hardware Agnostic:</span>
                <span>Adapts across 6-DOF, cobots, & mobiles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual - The Cognitive Loop with Authored Imperfection */}
          <div className="lg:col-span-5 relative">
            
            {/* Background offset card shadow giving physical sketchbook depth */}
            <div 
              className="absolute inset-0 bg-[#E8DFC8] border border-[#D8D2C2] rounded-[18px_6px_20px_5px] -rotate-1.5 translate-x-1.5 translate-y-2 pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Interactive Testbed Card with subtle intentional tilt */}
            <div className="relative bg-[#FAF8F3] border-1.5 border-[#15120E] rounded-[14px_6px_16px_5px] p-6 sm:p-7 shadow-[4px_4px_0px_0px_rgba(21,18,14,0.08)] rotate-0.5 hover:rotate-0 transition-transform duration-300">
              
              {/* Masking tape-like angled corner tag */}
              <div className="absolute -top-3.5 -right-2 bg-[#FFB800] text-[#15120E] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-[2px_8px_3px_6px] shadow-xs border border-[#15120E] -rotate-2">
                Cognitive Loop · Live Trace
              </div>

              {/* Header inside simulation card */}
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#E8DFC8]">
                <div className="flex items-center gap-2.5">
                  <QraemonLogo size={24} />
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-[#15120E]">
                      Memory-Driven Adaptation
                    </h2>
                    <p className="text-[11px] text-[#8A8275]">Controlled Insertion Task Comparison</p>
                  </div>
                </div>

                {/* Interactive Mode Toggle with slightly rounded-asymmetric outline */}
                <div className="inline-flex p-0.5 bg-[#EFECE3] border border-[#15120E]/30 rounded-[6px_3px_7px_4px] text-[11px] font-semibold">
                  <button
                    onClick={() => { setActiveTrial('with-memory'); setStepIndex(3); }}
                    className={`px-2.5 py-1 rounded-[4px_2px_5px_3px] transition-colors whitespace-nowrap ${
                      activeTrial === 'with-memory'
                        ? 'bg-[#15120E] text-white shadow-2xs'
                        : 'text-[#6B6358] hover:text-[#15120E]'
                    }`}
                  >
                    With QRAEMON
                  </button>
                  <button
                    onClick={() => { setActiveTrial('without-memory'); setStepIndex(3); }}
                    className={`px-2.5 py-1 rounded-[4px_2px_5px_3px] transition-colors whitespace-nowrap ${
                      activeTrial === 'without-memory'
                        ? 'bg-[#15120E] text-white shadow-2xs'
                        : 'text-[#6B6358] hover:text-[#15120E]'
                    }`}
                  >
                    No Memory
                  </button>
                </div>
              </div>

              {/* Visual Trajectory / Memory Trace Canvas Graphic with subtle hand-drawn offset */}
              <div className="relative h-44 bg-[#F3F1EA] border border-[#D8D2C2] rounded-[10px_4px_12px_6px] p-3 mb-5 overflow-hidden flex flex-col justify-between">
                
                {/* SVG diagram of trajectory trace with organic lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 150" fill="none">
                  {/* Target slot - intentionally slightly rotated */}
                  <g transform="rotate(1 310 75)">
                    <rect x="290" y="55" width="40" height="40" rx="4" stroke="#8A8275" strokeWidth="1.5" strokeDasharray="4 3" fill="#E8DFC8" fillOpacity="0.5" />
                    <text x="310" y="78" textAnchor="middle" fontSize="9" fontWeight="700" fill="#6B6358">TARGET</text>
                    <text x="310" y="89" textAnchor="middle" fontSize="8" fill="#8A8275">SLOT</text>
                  </g>

                  {/* Gripper start position */}
                  <circle cx="50" cy="75" r="8" fill="#15120E" />
                  <circle cx="50" cy="75" r="12" stroke="#FFB800" strokeWidth="1.5" strokeDasharray="3 2" />
                  <text x="50" y="104" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#15120E">Robot End-Effector</text>

                  {/* Trajectory lines */}
                  {activeTrial === 'without-memory' ? (
                    <>
                      {/* Repeat linear attempt hitting the edge */}
                      <path
                        d="M 58 75 Q 160 74 290 75"
                        stroke="#D32F2F"
                        strokeWidth="2.5"
                        strokeDasharray="5 3"
                      />
                      {/* Collision burst */}
                      <circle cx="290" cy="75" r="11" fill="#D32F2F" fillOpacity="0.2" />
                      <circle cx="290" cy="75" r="4" fill="#D32F2F" />
                      <text x="278" y="44" fontSize="9.5" fontWeight="800" fill="#D32F2F">Collision Jam (22N)</text>
                      <text x="278" y="32" fontSize="8" fill="#8A8275">No experience recall</text>
                    </>
                  ) : (
                    <>
                      {/* Past failed ghost line (faded) */}
                      <path
                        d="M 58 75 L 290 75"
                        stroke="#BAAF96"
                        strokeWidth="1.2"
                        strokeDasharray="2 3"
                        opacity="0.6"
                      />
                      <circle cx="290" cy="75" r="3" fill="#BAAF96" opacity="0.6" />
                      <text x="180" y="68" fontSize="8" fill="#8A8275" fontStyle="italic">Previous Jam Trace #042</text>

                      {/* Adapted trajectory with memory - organic smooth spline */}
                      <path
                        d="M 58 75 C 130 73, 165 116, 230 115 C 270 114, 282 81, 290 75"
                        stroke="#FFB800"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                      />
                      <circle cx="290" cy="75" r="5" fill="#15120E" />
                      <circle cx="290" cy="75" r="2.5" fill="#FFB800" />
                      <text x="175" y="134" fontSize="9" fontWeight="700" fill="#15120E">Compensated curve (+4mm shift)</text>
                    </>
                  )}
                </svg>

                <div className="z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-medium text-[#6B6358] bg-[#FAF8F3]/90 px-2 py-0.5 rounded-[3px_6px_2px_5px] border border-[#E8DFC8]">
                    Trial #02 · Variable Part Position
                  </span>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-[4px_2px_5px_2px] ${
                    activeTrial === 'with-memory'
                      ? 'bg-[#FFB800] text-[#15120E] shadow-2xs'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {activeTrial === 'with-memory' ? 'Success: Reused Memory' : 'Failure: Same Miss'}
                  </span>
                </div>

                <div className="z-10 text-[11px] text-[#443E37] bg-[#FAF8F3]/90 p-1.5 rounded-[5px_3px_6px_2px] border border-[#E8DFC8] flex items-center justify-between">
                  <span>Cycle result:</span>
                  <span className="font-semibold text-[#15120E]">
                    {activeTrial === 'with-memory' ? '0 human interventions needed' : 'Line stop: engineering reset required'}
                  </span>
                </div>
              </div>

              {/* Staged Cognitive Steps with subtle varied rounded corners */}
              <div className="space-y-2 mb-4">
                {currentSteps.map((step, idx) => {
                  const cornerVariants = [
                    'rounded-[8px_3px_9px_4px]',
                    'rounded-[4px_9px_3px_8px]',
                    'rounded-[9px_4px_7px_3px]',
                    'rounded-[3px_8px_4px_9px]',
                  ];
                  return (
                    <div
                      key={step.name}
                      onClick={() => setStepIndex(idx)}
                      className={`cursor-pointer p-2.5 transition-all flex items-start justify-between gap-3 text-xs border ${cornerVariants[idx % 4]} ${
                        stepIndex === idx
                          ? 'bg-[#F3F1EA] border-[#FFB800] shadow-[2px_2px_0px_0px_#15120E] translate-x-0.5'
                          : 'bg-white border-[#E8DFC8] hover:border-[#BAAF96]'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-[#15120E]">{step.name}</div>
                        <p className="text-[11px] text-[#554E44] mt-0.5">{step.desc}</p>
                      </div>
                      <span className="text-[9.5px] uppercase font-mono font-bold tracking-wider text-[#8A8275] shrink-0 bg-[#EFECE3] px-1.5 py-0.5 rounded-[3px_5px_2px_4px]">
                        {step.badge}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom footer inside hero card */}
              <div className="text-[11px] text-[#8A8275] flex items-center justify-between pt-1 border-t border-[#E8DFC8]/60">
                <span>Core Research Objective:</span>
                <span className="font-bold text-[#15120E]">Experience → Better Decision → Physical Outcome</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
