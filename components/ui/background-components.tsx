"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BackgroundProps {
  children?: ReactNode;
  className?: string;
}

/* ── Soft yellow radial glow — centered ────────────────────── */
export const YellowGlowBackground = ({ children, className }: BackgroundProps) => {
  return (
    <div className={cn("min-h-screen w-full relative bg-white", className)}>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255, 249, 145, 0.45) 0%, transparent 65%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

/* ── Teal radial glow — top right corner ───────────────────── */
export const TealGlowBackground = ({ children, className }: BackgroundProps) => {
  return (
    <div className={cn("w-full relative bg-white", className)}>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at top right, rgba(14, 157, 135, 0.12) 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

/* ── Dual glow — teal top-right + soft blue bottom-left ────── */
export const DualGlowBackground = ({ children, className }: BackgroundProps) => {
  return (
    <div className={cn("w-full relative bg-white", className)}>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at top right, rgba(14, 157, 135, 0.13) 0%, transparent 55%),
            radial-gradient(ellipse at bottom left, rgba(79, 171, 255, 0.10) 0%, transparent 55%)
          `,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
