import {
  Calendar,
  Database,
  Globe,
  Mail,
  MessageSquare,
  Phone,
  Plug,
  Share2,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

type Node = { label: string; icon: LucideIcon };

const INPUTS: Node[] = [
  { label: "Website", icon: Globe },
  { label: "Email", icon: Mail },
  { label: "WhatsApp", icon: MessageSquare },
  { label: "Social", icon: Share2 },
  { label: "Phone", icon: Phone },
];

const OUTPUTS: Node[] = [
  { label: "CRM", icon: Users },
  { label: "Calendar", icon: Calendar },
  { label: "Database", icon: Database },
  { label: "APIs", icon: Plug },
  { label: "Human", icon: UserCheck },
];

// Diagram coordinate space
const W = 520;
const H = 540;
const COL = [52, 156, 260, 364, 468];
const IN_Y = 62;
const OUT_Y = 478;
const CORE = { x: 130, y: 196, w: 260, h: 148 };

function inPath(x: number) {
  const ty = CORE.y;
  const tx = 260 + (x - 260) * 0.35;
  return `M ${x} ${IN_Y + 26} C ${x} ${IN_Y + 90}, ${tx} ${ty - 70}, ${tx} ${ty}`;
}

function outPath(x: number) {
  const sy = CORE.y + CORE.h;
  const sx = 260 + (x - 260) * 0.35;
  return `M ${sx} ${sy} C ${sx} ${sy + 70}, ${x} ${OUT_Y - 90}, ${x} ${OUT_Y - 26}`;
}

function NodeChip({ node, x, y }: { node: Node; x: number; y: number }) {
  const Icon = node.icon;
  return (
    <div
      className="hero-node group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
      style={{ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` }}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-md border border-electric/30 bg-background/90 text-electric transition-colors duration-300 group-hover:border-electric group-hover:bg-electric/10 sm:h-11 sm:w-11">
        <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={1.6} />
      </span>
      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground sm:text-[10px]">
        {node.label}
      </span>
    </div>
  );
}

export function HeroSystem() {
  return (
    <div
      className="relative mx-auto aspect-[520/540] w-full max-w-[520px]"
      role="img"
      aria-label="Diagram: website, email, WhatsApp, social and phone inputs flow into the Alligentics intelligence layer, which understands, decides and acts, then connects to CRM, calendar, database, APIs and a human team member."
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hs-line" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--electric)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--electric)" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="hs-line-out" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--electric)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--electric)" stopOpacity="0.15" />
          </linearGradient>
          <filter id="hs-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Tier labels */}
        <text x="0" y="14" className="fill-muted-foreground font-mono" fontSize="9" letterSpacing="2">
          01 / SIGNALS
        </text>
        <line x1="0" y1="25" x2="92" y2="25" stroke="var(--electric)" strokeOpacity="0.45" />
        <circle cx="98" cy="25" r="2" fill="var(--electric)" className="hs-step" />
        <text x="0" y={H - 4} className="fill-muted-foreground font-mono" fontSize="9" letterSpacing="2">
          03 / BUSINESS SYSTEMS
        </text>
        <line x1="0" y1={H - 18} x2="120" y2={H - 18} stroke="var(--electric)" strokeOpacity="0.45" />

        {COL.map((x, i) => (
          <g key={`in-${x}`}>
            <path id={`hs-in-${i}`} d={inPath(x)} fill="none" stroke="url(#hs-line)" strokeWidth="1" />
            <circle r="2.8" fill="var(--electric)" className="hs-dot hs-dot--in">
              <animateMotion dur={`${2.8 + i * 0.35}s`} begin={i === 0 ? "0s" : `-${i * 0.45}s`} repeatCount="indefinite">
                <mpath href={`#hs-in-${i}`} />
              </animateMotion>
            </circle>
          </g>
        ))}

        {COL.map((x, i) => (
          <g key={`out-${x}`}>
            <path id={`hs-out-${i}`} d={outPath(x)} fill="none" stroke="url(#hs-line-out)" strokeWidth="1" />
            <circle r="2.8" fill="var(--electric)" className="hs-dot hs-dot--out">
              <animateMotion dur={`${2.6 + i * 0.3}s`} begin={`-${1.2 + i * 0.4}s`} repeatCount="indefinite">
                <mpath href={`#hs-out-${i}`} />
              </animateMotion>
            </circle>
          </g>
        ))}

        {/* Intelligence core */}
        <circle cx={260} cy={270} r="78" fill="none" stroke="var(--electric)" strokeOpacity="0.08" strokeDasharray="2 9" className="hs-orbit" />
        <circle cx={260} cy={270} r="55" fill="none" stroke="var(--electric)" strokeOpacity="0.06" strokeDasharray="1 8" className="hs-orbit hs-orbit--inner" />
        <rect
          x={CORE.x - 6}
          y={CORE.y - 6}
          width={CORE.w + 12}
          height={CORE.h + 12}
          rx="10"
          fill="none"
          stroke="var(--electric)"
          strokeOpacity="0.5"
          filter="url(#hs-glow)"
          className="hs-core-glow"
        />
        <rect
          x={CORE.x}
          y={CORE.y}
          width={CORE.w}
          height={CORE.h}
          rx="6"
          fill="var(--background)"
          stroke="var(--electric)"
          strokeOpacity="0.7"
        />
        {/* corner ticks */}
        {[
          [CORE.x, CORE.y, 1, 1],
          [CORE.x + CORE.w, CORE.y, -1, 1],
          [CORE.x, CORE.y + CORE.h, 1, -1],
          [CORE.x + CORE.w, CORE.y + CORE.h, -1, -1],
        ].map(([x, y, dx, dy]) => (
          <path
            key={`${x}-${y}`}
            d={`M ${x} ${y + 12 * dy} L ${x} ${y} L ${x + 12 * dx} ${y}`}
            fill="none"
            stroke="var(--electric)"
            strokeWidth="1.5"
          />
        ))}
        <text x={CORE.x + 16} y={CORE.y + 26} className="fill-muted-foreground font-mono" fontSize="9" letterSpacing="2">
          02 / INTELLIGENCE LAYER
        </text>
        <text x={CORE.x + 16} y={CORE.y + 52} className="fill-foreground font-display" fontSize="17" fontWeight="600" letterSpacing="1">
          ALLIGENTICS
        </text>
        <line
          x1={CORE.x + 16}
          x2={CORE.x + CORE.w - 16}
          y1={CORE.y + 70}
          y2={CORE.y + 70}
          stroke="var(--color-border)"
        />
        {["Understand", "Decide", "Act"].map((step, i) => {
          const cx = CORE.x + 16 + i * 80;
          return (
            <g key={step}>
              <circle cx={cx + 4} cy={CORE.y + 100} r="3" fill="var(--electric)" className="hs-step" style={{ animationDelay: `${i * 0.6}s` }} />
              {i < 2 && (
                <line x1={cx + 12} x2={cx + 72} y1={CORE.y + 100} y2={CORE.y + 100} stroke="var(--electric)" strokeOpacity="0.35" strokeDasharray="2 4" className="hs-dash" />
              )}
              <text x={cx} y={CORE.y + 126} className="fill-foreground font-mono" fontSize="10" letterSpacing="1">
                {step.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>

      {INPUTS.map((n, i) => (
        <NodeChip key={n.label} node={n} x={COL[i]} y={IN_Y} />
      ))}
      {OUTPUTS.map((n, i) => (
        <NodeChip key={n.label} node={n} x={COL[i]} y={OUT_Y} />
      ))}
    </div>
  );
}
