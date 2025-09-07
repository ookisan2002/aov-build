// ChampHeroCard.tsx
// Reusable React + Tailwind component cloning the champion header card you showed.
// Usage example is at bottom (comment).

import React from "react";

type Stats = {
  hp: number;          // 0..10  (Sinh mệnh)
  dmg: number;         // 0..10  (Sát thương)
  cc: number;          // 0..10  (Hiệu ứng kỹ năng)
  diff: number;        // 0..10  (Độ khó)
};

type Props = {
  name: string;
  role: string;                 // e.g. "Xạ Thủ"
  avatarUrl: string;            // small square portrait
  backgroundUrl: string;        // wide banner image
  stats: Stats;
  className?: string;
};

export default function ChampHeroCard({
  name,
  role,
  avatarUrl,
  backgroundUrl,
  stats,
  className = "",
}: Props) {
  return (
    <section
      className={`relative overflow-hidden rounded-md shadow-2xl ${className}`}
    >
      {/* Background image */}
      <img
        src={backgroundUrl}
        alt={name}
        className="h-[260px] w-full object-cover md:h-[300px]"
        loading="eager"
      />

      {/* Dark gradient to bottom (like screenshot) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/95" />

      {/* Content (left) */}
      <div className="absolute inset-0 p-4 sm:p-6 md:p-7">
        <div className="flex items-start gap-3">
          {/* avatar */}
          <img
            src={avatarUrl}
            alt={`${name} avatar`}
            className="h-12 w-12 rounded-md border border-white/20 object-cover"
          />
          {/* name + role */}
          <div>
            <div className="text-white text-lg sm:text-xl font-extrabold leading-tight">
              {name}
            </div>
            <div className="mt-0.5 flex items-center gap-1 text-[13px] text-white/85">
              {/* simple role icon (bow/arrow style). Replace if you have specific icons */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="opacity-80"
              >
                <path d="M4 12h10l-4 4 1.4 1.4L18.8 11 11.4 3.6 10 5l4 4H4z" />
              </svg>
              {role}
            </div>
          </div>
        </div>

        {/* Stats block */}
        <div className="mt-4 grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-2 text-sm">
          <span className="text-white/90">Sinh mệnh:</span>
          <Bar value={stats.hp} />

          <span className="text-white/90">Sát thương:</span>
          <Bar value={stats.dmg} />

          <span className="text-white/90">Hiệu ứng kỹ năng:</span>
          <Bar value={stats.cc} />

          <span className="text-white/90">Độ khó:</span>
          <Bar value={stats.diff} />
        </div>
      </div>
    </section>
  );
}

/** Horizontal segmented bar with 10 ticks */
function Bar({ value, total = 10 }: { value: number; total?: number }) {
  const v = Math.max(0, Math.min(value, total));
  return (
    <div className="flex h-2.5 items-center gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={[
            "inline-block h-2 w-5 rounded-sm",
            i < v ? "bg-[#3b82f6]" : "bg-white/20",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

/*
//// Example usage:

<ChampHeroCard
  name="Fennik"
  role="Xạ Thủ"
  avatarUrl="https://your-cdn.com/avatars/fennik.jpg"
  backgroundUrl="https://your-cdn.com/banners/fennik-wide.jpg"
  stats={{ hp: 4, dmg: 7, cc: 5, diff: 6 }}
  className="bg-black/60"  // optional wrapper tweaks
/>

*/
