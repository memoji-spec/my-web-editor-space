import React, { useCallback, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LineKind = "normal" | "added" | "removed" | "comment" | "gap";

interface DiffLine {
  ln?: number | null;
  text: string;
  kind?: LineKind;
}

interface DiffBlock {
  fileTag: string;
  added: number;
  removed: number;
  lines: DiffLine[];
}

interface BulletItem {
  title: string;
  desc: string;
  diff: DiffBlock;
}

const baseDiff: DiffBlock = {
  fileTag: "1/2 custom-platform.config.ts",
  added: 8,
  removed: 2,
  lines: [
    { ln: null, text: "", kind: "gap" },
    { ln: 1, text: "import { PlatformConfig } from '@pentagonware/core';", kind: "normal" },
    { ln: 2, text: "import { SecurityModule } from './modules/security';", kind: "normal" },
    { ln: 3, text: "import { AIEngine } from '@pentagonware/ai';", kind: "added" },
    { ln: 4, text: "import { Analytics } from './modules/analytics';", kind: "normal" },
    { ln: 5, text: "import { DatabaseConnector } from './db';", kind: "normal" },
    { ln: null, text: "/* … */", kind: "comment" },
    { ln: 18, text: "export const platformConfig = {", kind: "normal" },
    { ln: 19, text: "  engine: {", kind: "normal" },
    { ln: 20, text: "    aiPowered: true,", kind: "added" },
    { ln: 20, text: "    aiPowered: false,", kind: "removed" },
    { ln: 21, text: "    scalable: true,", kind: "normal" },
    { ln: 22, text: "    multiTenant: true,", kind: "normal" },
    { ln: 24, text: "    realtime: true,", kind: "added" },
    { ln: 23, text: "    realtime: false,", kind: "removed" },
    { ln: 25, text: "    security: 'enterprise-grade',", kind: "normal" },
    { ln: 26, text: "    deployment: 'cloud-native',", kind: "added" },
    { ln: 27, text: "  }", kind: "normal" },
  ],
};

const items: BulletItem[] = [
  {
    title: "Tailored Architecture",
    desc: "Custom-built platforms designed to your exact specifications.",
    diff: baseDiff,
  },
  {
    title: "Scalable Infrastructure",
    desc: "Systems that grow seamlessly with your business.",
    diff: {
      ...baseDiff,
      added: 5,
      removed: 1,
      lines: [
        { ln: 1, text: "// Infrastructure configuration", kind: "comment" },
        { ln: 2, text: "const infra = createCluster({ autoScale: true });", kind: "added" },
        { ln: 3, text: "infra.on('load', balancer.distribute);", kind: "normal" },
        { ln: 4, text: "infra.on('spike', scaling.handle);", kind: "added" },
        { ln: 5, text: "// …", kind: "comment" },
      ],
    },
  },
  {
    title: "Enterprise Security",
    desc: "Built-in compliance, encryption, and access control from day one.",
    diff: {
      ...baseDiff,
      added: 3,
      removed: 0,
      lines: [
        { ln: 1, text: "// security.config.ts", kind: "comment" },
        { ln: 2, text: "- Enable end-to-end encryption", kind: "added" },
        { ln: 3, text: "- SOC2 & GDPR compliant by default", kind: "added" },
        { ln: 4, text: "- Role-based access control (RBAC)", kind: "added" },
      ],
    },
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04, delayChildren: 0.06 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" as const } },
};

function CodeDiff({ diff }: { diff: DiffBlock }) {
  const lineStyles: Record<string, string> = useMemo(
    () => ({
      normal: "",
      added: "bg-emerald-500/10",
      removed: "bg-rose-500/10",
      comment: "text-muted-foreground italic",
      gap: "opacity-0 select-none h-3",
    }),
    []
  );

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-xl">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/50">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground">
            {diff.fileTag}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-emerald-500">+{diff.added}</span>
          <span className="text-rose-500">-{diff.removed}</span>
        </div>
      </div>

      <motion.div
        className="px-2 py-3 font-mono text-xs leading-6 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        key={diff.fileTag + diff.added}
      >
        {diff.lines.map((l, i) => (
          <motion.div
            key={i}
            variants={lineVariants}
            className={`flex ${lineStyles[l.kind || "normal"]}`}
          >
            <span className="w-8 shrink-0 text-right pr-3 select-none text-muted-foreground/50">
              {l.ln ?? ""}
            </span>
            <span className="text-foreground/90">
              {l.text}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-muted/30">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="text-accent">→</span>
          Add a follow-up
        </div>
        <div className="hidden md:flex items-center gap-2 text-[10px] text-muted-foreground/60">
          a to keep · z to undo · ← → to switch files
        </div>
      </div>
    </div>
  );
}

const TerminalAnimation = () => {
  const [active, setActive] = useState(0);

  const onKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => Math.min(items.length - 1, i + 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => Math.max(0, i - 1));
      }
    },
    []
  );

  return (
    <div
      className="relative w-full"
      role="listbox"
      tabIndex={0}
      onKeyDown={onKey}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="relative flex flex-col gap-3">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
          {items.map((it, i) => {
            const isActive = i === active;
            return (
              <div key={i} className="relative pl-10">
                <button
                  onClick={() => setActive(i)}
                  className={`group w-full rounded-xl border px-4 py-3 text-left transition ${
                    isActive
                      ? "border-brand bg-brand text-primary-foreground shadow-sm"
                      : "border-border bg-card hover:bg-muted"
                  }`}
                >
                  <p className="font-semibold text-sm">{it.title}</p>
                  <p className={`text-xs mt-1 ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {it.desc}
                  </p>
                </button>
              </div>
            );
          })}
        </div>

        <div className="sticky top-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <CodeDiff diff={items[active].diff} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TerminalAnimation;
