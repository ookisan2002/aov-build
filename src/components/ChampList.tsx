// ChampionsListing.tsx
import React, { useMemo, useState } from "react";
import { ChampCard } from "./TopSection";

type Role =
  | "Đỡ Đòn"
  | "Đấu Sĩ"
  | "Sát Thủ"
  | "Xạ Thủ"
  | "Pháp Sư"
  | "Trợ Thủ";

type Lane = "Tất cả" | "Đường Rồng" | "Đường Giữa" | "Đường Tà Thần" | "Rừng";

export type Champion = {
  name: string;
  img: string;
  role: Role;
  lane: Lane | "Tất cả";
  link: string;
};

type Props = {
  champions: Champion[];
};

const ROLES: ("Tất cả loại tướng" | Role)[] = [
  "Tất cả loại tướng",
  "Đỡ Đòn",
  "Đấu Sĩ",
  "Sát Thủ",
  "Xạ Thủ",
  "Pháp Sư",
  "Trợ Thủ",
];

const LANES: Lane[] = [
  "Tất cả",
  "Đường Rồng",
  "Đường Giữa",
  "Đường Tà Thần",
  "Rừng",
];

export default function ChampionsListing({ champions }: Props) {
  const [role, setRole] =
    useState<"Tất cả loại tướng" | Role>("Tất cả loại tướng");
  const [lane, setLane] = useState<Lane>("Tất cả");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    return champions.filter((c) => {
      const okRole = role === "Tất cả loại tướng" || c.role === role;
      const okLane = lane === "Tất cả" || c.lane === lane;
      const okQ = !t || c.name.toLowerCase().includes(t);
      return okRole && okLane && okQ;
    });
  }, [champions, role, lane, q]);

  return (
    <section className="px-4 py-6 text-white">
      <h2 className="mb-4 text-2xl font-extrabold">
        Build Tướng Liên Quân 2025: Cách Chơi, Lên Đồ và Combo
      </h2>

      {/* Filter bar */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as any)}
          className="rounded-md border border-white/15 bg-[#0e1f33] px-3 py-2 text-sm outline-none focus:border-white/30"
        >
          {ROLES.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>

        <select
          value={lane}
          onChange={(e) => setLane(e.target.value as Lane)}
          className="rounded-md border border-white/15 bg-[#0e1f33] px-3 py-2 text-sm outline-none focus:border-white/30"
        >
          {LANES.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>

        {/* Search */}
        <div className="relative ml-auto w-full sm:w-72">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Tìm kiếm"
            className="w-full rounded-md border border-white/15 bg-[#0e1f33] px-3 py-2 pr-9 text-sm placeholder-white/60 outline-none focus:border-white/30"
          />
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-white/70"
            fill="currentColor"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16a6.471 6.471 0 004.23-1.57l.27.28v.79L20 21.49 21.49 20 15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {list.map((c) => (
          <ChampCard
            key={c.name}
            data={{ name: c.name, img: c.img }}
            link={c.link}
            variant="build" // dùng viền xanh style Build
          />
        ))}
      </div>
    </section>
  );
}
