import { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, ArrowRight, Building, HelpCircle } from 'lucide-react';

interface ContactSectionProps {
  initialMode?: string;
}

export function ContactSection({ initialMode }: ContactSectionProps) {
  const [partnerType, setPartnerType] = useState<string>('robotics_startup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [robotPlatform, setRobotPlatform] = useState('');
  const [failureDescription, setFailureDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !email.includes('@')) {
      setError('Please provide your name and a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[#D8D2C2]/70 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A8275] mb-3">
            <span>08 · Collaboration</span>
            <span aria-hidden="true" className="text-[#BAAF96]">·</span>
            <span>Design Partnerships & Technical Dialogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#15120E] tracking-tight leading-tight text-balance">
            Start a conversation.
            <br />
            Explore a technical pilot.
          </h2>
          <p className="mt-4 text-lg text-[#443E37] leading-relaxed">
            We are actively talking with robotics founders, manipulation engineers, research labs, and automation leaders. If your machines encounter recurring failures that require engineering intervention, we want to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: The Central Discovery Question & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Notebook Tilt Card with Masking Tape Accent */}
            <div className="relative">
              <div 
                className="absolute inset-0 bg-[#E8DFC8] border border-[#D8D2C2] rounded-[16px_5px_18px_6px] -rotate-2 translate-x-1.5 translate-y-1.5 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative bg-[#FAF8F3] border-1.5 border-[#15120E] rounded-[14px_6px_16px_5px] p-6 sm:p-7 shadow-[3px_3px_0px_0px_#15120E] -rotate-1 hover:rotate-0 transition-transform">
                {/* Wobbly masking tape graphic */}
                <div 
                  className="absolute -top-3.5 left-8 bg-[#FFB800] text-[#15120E] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-[1px_4px_2px_5px] shadow-xs border border-[#15120E] -rotate-2"
                  aria-hidden="true"
                >
                  FIELD DISCOVERY
                </div>

                <blockquote className="text-lg font-bold text-[#15120E] mt-3 leading-snug">
                  &ldquo;What happens when your robot encounters a failure it has seen before?&rdquo;
                </blockquote>
                <p className="text-xs text-[#554E44] mt-3 leading-relaxed">
                  If the answer is &ldquo;an operator resets the cell&rdquo; or &ldquo;an engineer modifies the script,&rdquo; your workcell represents the exact beachhead problem QRAEMON is built to solve.
                </p>
              </div>
            </div>

            <div className="bg-white border-1.5 border-[#15120E]/40 rounded-[6px_14px_5px_15px] p-6 space-y-4 text-xs shadow-[2px_3px_0px_0px_rgba(21,18,14,0.06)] rotate-[0.4deg] hover:rotate-0 transition-transform">
              <h4 className="font-bold text-[#15120E] text-sm">Direct Contact</h4>
              <p className="text-[#554E44] leading-relaxed">
                For research discussions, technical briefs, or pilot proposals, contact the founding team directly:
              </p>
              
              <div className="pt-2">
                <a
                  href="mailto:dineshpolavarapu66@gmail.com"
                  className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#15120E] hover:text-[#B27F00] transition-colors py-1 bg-[#FAF8F3] px-3 py-1.5 rounded-[4px_8px_3px_7px] border border-[#E8DFC8]"
                >
                  <Mail className="w-4 h-4 text-[#8A8275]" />
                  <span>dineshpolavarapu66@gmail.com</span>
                </a>
              </div>

              <div className="pt-3 border-t border-[#F3F1EA] text-[11px] text-[#8A8275]">
                Dinesh Polavarapu · Founder & CEO
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F3] border border-[#E8DFC8] rounded-[8px_4px_9px_5px] text-xs text-[#6B6358] leading-relaxed">
              <strong>Pilot Availability Notice:</strong> QRAEMON is in active R&D. Early design partner slots are limited to controlled manipulation setups and simulation co-validations.
            </div>

          </div>

          {/* Right Column: Interactive Collaboration & Inquiry Form with Offset Sketch Backing */}
          <div className="lg:col-span-7 relative">
            <div 
              className="absolute inset-0 bg-[#E8DFC8] border border-[#D8D2C2] rounded-[18px_6px_20px_8px] rotate-1 translate-x-1.5 translate-y-2 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative bg-white border-1.5 border-[#15120E] rounded-[16px_6px_17px_5px] p-7 sm:p-9 shadow-[4px_4px_0px_0px_#15120E] -rotate-[0.3deg] hover:rotate-0 transition-transform">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#FFF8E7] text-[#15120E] flex items-center justify-center mx-auto border border-[#FFD875]">
                    <CheckCircle2 className="w-6 h-6 text-[#15120E]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#15120E]">
                    Inquiry Received
                  </h3>
                  <p className="text-xs text-[#554E44] max-w-md mx-auto leading-relaxed">
                    Thank you, {name}. We will review your failure profile and respond from <span className="font-mono text-[#15120E]">dineshpolavarapu66@gmail.com</span> shortly to discuss technical feasibility.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 text-xs font-semibold text-[#15120E] bg-[#FAF8F3] hover:bg-[#EFECE3] border border-[#D8D2C2] rounded transition-colors"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#F3F1EA] pb-3">
                    <h3 className="text-lg font-bold text-[#15120E]">
                      Explore a Design Partnership
                    </h3>
                    <p className="text-xs text-[#6B6358]">
                      Tell us about your robotic setup and recurring failure patterns.
                    </p>
                  </div>

                  {/* Partner Type Selector */}
                  <div>
                    <label className="text-xs font-semibold text-[#15120E] block mb-2">
                      Your Organization / Profile:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'robotics_startup', label: 'Robotics Startup' },
                        { id: 'industrial_rd', label: 'Industrial R&D' },
                        { id: 'research_lab', label: 'Academic Lab' },
                        { id: 'integrator', label: 'System Integrator' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setPartnerType(item.id)}
                          className={`py-2 px-2.5 text-xs font-semibold rounded text-center transition-colors whitespace-nowrap ${
                            partnerType === item.id
                              ? 'bg-[#15120E] text-white'
                              : 'bg-[#FAF8F3] text-[#554E44] border border-[#E8DFC8] hover:text-[#15120E]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#15120E] block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Dr. Alex Mercer"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F3] border border-[#D8D2C2] rounded focus:outline-none focus:border-[#15120E] text-[#15120E] placeholder:text-[#8A8275]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#15120E] block mb-1.5">
                        Work / Academic Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. alex@robotics-lab.org"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F3] border border-[#D8D2C2] rounded focus:outline-none focus:border-[#15120E] text-[#15120E] placeholder:text-[#8A8275]"
                      />
                    </div>
                  </div>

                  {/* Organization & Robot Platform */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#15120E] block mb-1.5">
                        Company or Institution
                      </label>
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Apex Automation"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F3] border border-[#D8D2C2] rounded focus:outline-none focus:border-[#15120E] text-[#15120E] placeholder:text-[#8A8275]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#15120E] block mb-1.5">
                        Robotic Platform / Stack
                      </label>
                      <input
                        type="text"
                        value={robotPlatform}
                        onChange={(e) => setRobotPlatform(e.target.value)}
                        placeholder="e.g. UR5e / ROS 2 / ABB / Custom"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F3] border border-[#D8D2C2] rounded focus:outline-none focus:border-[#15120E] text-[#15120E] placeholder:text-[#8A8275]"
                      />
                    </div>
                  </div>

                  {/* Recurring Failure Pattern */}
                  <div>
                    <label className="text-xs font-semibold text-[#15120E] block mb-1.5">
                      What failure pattern recurs most frequently in your operations?
                    </label>
                    <textarea
                      rows={3}
                      value={failureDescription}
                      onChange={(e) => setFailureDescription(e.target.value)}
                      placeholder="e.g. Jamming during peg insertion when fixture alignment shifts; slip during grasping of oily parts; recurring need to manually recalibrate approach angles."
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF8F3] border border-[#D8D2C2] rounded focus:outline-none focus:border-[#15120E] text-[#15120E] placeholder:text-[#8A8275] leading-relaxed resize-none"
                    />
                  </div>

                  {error && (
                    <div className="text-xs text-[#A63232] font-semibold bg-[#FDF2F2] p-2 rounded border border-[#F5C2C2]">
                      {error}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#15120E] bg-[#FFB800] hover:bg-[#e6a600] active:translate-y-0.5 rounded transition-all shadow-xs"
                    >
                      <span>Send Pilot Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#8A8275] text-center">
                    Direct communications are treated as strictly confidential technical discussions.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
