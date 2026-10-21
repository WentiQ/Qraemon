import { Cpu, Binary, Award, GraduationCap, Building2 } from 'lucide-react';
import { QraemonLogo } from './QraemonLogo';

export function TeamSection() {
  const founders = [
    {
      name: 'Dinesh Polavarapu',
      role: 'Founder & CEO',
      domain: 'Robotics & Mechanical Systems',
      missionFocus: 'Builds the machine: the hardware, controls, and embedded systems the memory runs on.',
      education: 'B.Tech Mechanical Engineering, IIT Tirupati',
      highlights: [
        'Won Nation Builder competition with Guardian (AI health wearable)',
        'Built LifeLine AI (healthcare assistant)',
        'Specialization in embedded controls & Arduino PID closed-loop systems',
      ],
      avatarInitials: 'DP',
    },
    {
      name: 'Mokshagna Anurag Kankati',
      role: 'Co-founder & CTO',
      domain: 'Cognitive Systems & Memory',
      missionFocus: 'Builds the memory: how an artificial architecture encodes, indexes, recalls, and consolidates physical experience.',
      education: 'B.Tech Electronics & Communication Engineering, MVGR College',
      highlights: [
        '3+ years in robotics and UAV research',
        'Internships at NITK, IIT Tirupati (CubeSat), Zebu Intelligent Systems, and Daloft Aerospace',
        '2nd place, AVISHKAR national competition',
      ],
      avatarInitials: 'MA',
    },
  ];

  return (
    <section id="team" className="py-20 md:py-28 border-t border-[#D8D2C2]/70 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A8275] mb-3">
            <span>07 · Founders</span>
            <span aria-hidden="true" className="text-[#BAAF96]">·</span>
            <span>One Team · The Mind and the Machine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#15120E] tracking-tight leading-tight text-balance">
            Two builders. One mission.
          </h2>
          <p className="mt-4 text-lg text-[#443E37] leading-relaxed">
            QRAEMON is founded by two interdisciplinary engineers uniting physical robot systems and artificial cognitive architecture to solve deployed machine learning.
          </p>
        </div>

        {/* Founders Grid with Asymmetric Tilts and Offset Sketch Frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {founders.map((founder, idx) => {
            const tilts = ['-rotate-[0.6deg]', 'rotate-[0.7deg]'];
            const shadowOffsets = ['-rotate-1 translate-x-1 translate-y-2', 'rotate-1 translate-x-1.5 translate-y-2'];
            const radii = ['rounded-[16px_5px_15px_7px]', 'rounded-[6px_16px_7px_15px]'];
            return (
              <div key={founder.name} className="relative">
                {/* Offset sketch shadow layer */}
                <div 
                  className={`absolute inset-0 bg-[#E8DFC8] border border-[#D8D2C2] ${radii[idx]} ${shadowOffsets[idx]} pointer-events-none`}
                  aria-hidden="true"
                />

                <div
                  className={`relative bg-white border-1.5 border-[#15120E] ${radii[idx]} p-7 sm:p-8 flex flex-col justify-between hover:rotate-0 transition-transform shadow-[3px_3px_0px_0px_#15120E] ${tilts[idx]} h-full`}
                >
                  <div>
                    {/* Founder Identity Header */}
                    <div className="flex items-start gap-4 mb-6">
                      {/* Subtle authentic initials badge with asymmetric border */}
                      <div className="w-14 h-14 rounded-[12px_4px_14px_6px] bg-[#FAF8F3] border-1.5 border-[#15120E] flex items-center justify-center font-bold text-base text-[#15120E] shrink-0 font-mono shadow-[2px_2px_0px_0px_#FFB800] -rotate-1">
                        {founder.avatarInitials}
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#15120E]">
                          {founder.name}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#8A8275] mt-0.5">
                          <span className="text-[#15120E]">{founder.role}</span>
                          <span aria-hidden="true">·</span>
                          <span>{founder.domain}</span>
                        </div>
                      </div>
                    </div>

                    {/* Mission Focus */}
                    <div className="p-3.5 bg-[#FAF8F3] border border-[#E8DFC8] rounded-[8px_3px_9px_4px] mb-5 text-xs text-[#443E37] leading-relaxed">
                      <span className="font-semibold text-[#15120E] block mb-1">Architectural Focus:</span>
                      {founder.missionFocus}
                    </div>

                    {/* Education */}
                    <div className="flex items-center gap-2.5 text-xs text-[#6B6358] mb-5">
                      <GraduationCap className="w-4 h-4 text-[#8A8275] shrink-0" />
                      <span>{founder.education}</span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 border-t border-[#F3F1EA] pt-4">
                      <span className="text-[11px] font-mono uppercase text-[#8A8275] block mb-2">
                        Verified Technical Background
                      </span>
                      {founder.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#554E44]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8DFC8] text-[11px] text-[#8A8275] flex items-center justify-between">
                    <span>QRAEMON Co-founder</span>
                    <span className="font-mono text-[#15120E] bg-[#FFF8E7] px-2 py-0.5 rounded border border-[#FFD875]">Full-Time R&D</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Development Base Notice */}
        <div className="bg-[#FAF8F3] border border-[#D8D2C2] rounded-md p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-[#8A8275] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#15120E]">
                Engineering & Validation Base
              </h4>
              <p className="text-xs text-[#554E44] mt-0.5 leading-relaxed">
                Initial development and laboratory validation are conducted in India, leveraging deep engineering talent and rapid access to expanding industrial robotics testbeds, with a global commercial focus for design partnerships.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-[#8A8275] shrink-0">
            Stage: Pre-Seed · Ideation & Prototype Build
          </span>
        </div>

      </div>
    </section>
  );
}
