// SupportCounterPanel.tsx
// React + Tailwind component: “TƯỚNG HỖ TRỢ/SP KHẮC CHẾ …”
// - Header với nút thu gọn/mở rộng
// - Hàng avatar có thể bấm (thumbnail active có viền xanh; còn lại xám)
// - Nội dung bên dưới thay đổi theo avatar đang chọn

import React, { useState } from "react";

type Champ = {
  name: string;
  avatar: string;
  content: string | string[]; // 1 hoặc nhiều đoạn mô tả
};

type Props = {
  title: string;
  champs: Champ[];
  defaultIndex?: number;
  defaultOpen?: boolean;
};

export default function SupportCounterPanel({
  title,
  champs,
  defaultIndex = 0,
  defaultOpen = true,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const [idx, setIdx] = useState(defaultIndex);

  const active = champs[idx];

  return (
    <section className="rounded-md border border-white/10 bg-[#0f1a28]/95 text-white shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-md bg-[#14263b] px-3 py-2">
        <h3 className="text-[13px] font-bold tracking-wide uppercase text-white/90">
          {title}
        </h3>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex h-6 w-6 items-center justify-center rounded bg-white/5 text-white/80 hover:bg-white/10"
          title={open ? "Thu gọn" : "Mở rộng"}
        >
          <svg
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </button>
      </div>

      {/* Body */}
      {open && (
        <div className="px-3 py-3">
          {/* Thumbnails */}
          <div className="mb-3 flex flex-wrap gap-3">
            {champs.map((c, i) => {
              const activeThumb = i === idx;
              return (
                <button
                  key={c.name}
                  onClick={() => setIdx(i)}
                  className={[
                    "relative h-[58px] w-[82px] overflow-hidden rounded-md border",
                    activeThumb
                      ? "border-[#60a5fa] ring-2 ring-[#60a5fa]"
                      : "border-white/25",
                  ].join(" ")}
                  title={c.name}
                >
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className={[
                      "h-full w-full object-cover",
                      activeThumb ? "" : "grayscale brightness-75",
                    ].join(" ")}
                    loading="lazy"
                  />
                  <span className="absolute bottom-1 left-1 right-1 truncate rounded bg-black/70 px-1.5 text-[10px] font-semibold">
                    {c.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content for active champ */}
          <div className="rounded-md border border-white/10 bg-[#0e1f33]/60 p-3">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_2px_rgba(0,0,0,.35)]" />
              <span className="text-sm font-semibold">{active.name}</span>
            </div>
            <div className="space-y-3 text-[15px] leading-6 text-white/95">
              {(Array.isArray(active.content)
                ? active.content
                : [active.content]
              ).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* --------- Example usage ----------
<SupportCounterPanel
  title="TƯỚNG HỖ TRỢ/ĐI SP KHẮC CHẾ STUART"
  champs={[
    {
      name: "Tachi",
      avatar: "https://picsum.photos/seed/tachi/120",
      content: [
        "Một vị tướng ít người chơi nhưng khắc chế Stuart cực kì hiệu quả chính là Tachi. Bộ combo áp sát gây sát thương chuẩn cực mạnh kèm hồi phục và tạo giáp liên tục của vị tướng này sẽ đè bẹp Stuart.",
        "Bạn có thể cầm Tachi đi hỗ trợ hay đi top và lên semi để đạt hiệu quả cao nhất nhé.",
      ],
    },
    {
      name: "Enzo",
      avatar: "https://picsum.photos/seed/enzo/120",
      content:
        "Enzo có khả năng khống chế và burst mạnh, chủ động mở/đóng giao tranh khiến Stuart khó chơi an toàn.",
    },
    {
      name: "Toro",
      avatar: "https://picsum.photos/seed/toro/120",
      content:
        "Toro cực trâu, nhiều khống chế. Lao vào che chắn cho xạ thủ, câu chiêu và làm rối đội hình đối phương.",
    },D
    {
      name: "Maloch",
      avatar: "https://picsum.photos/seed/maloch/120",
      content:
        "Maloch có sát thương chuẩn diện rộng và khả năng mở giao tranh mạnh, ép góc Stuart hiệu quả.",
    },
  ]}
/>
----------------------------------- */
