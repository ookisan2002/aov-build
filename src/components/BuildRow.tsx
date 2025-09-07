// BuildSection.tsx
// React + Tailwind clone UI "Xây dựng tướng" như ảnh bạn gửi

import { useState } from "react";

type BuildRow = { title: string; items: Item[] };

type Item = {
  name: string;
  img: string;
  desc: string[];
};

function ItemCard({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex flex-col items-center text-center text-xs text-gray-200">
        <img
          src={item.img}
          alt={item.name}
          className="h-14 w-14 rounded-md border border-white/20 object-cover"
        />
        <span className="mt-1">{item.name}</span>
      </div>

      {open && (
        <div className="absolute bottom-full left-1/2 z-20 mb-2 w-64 -translate-x-1/2 rounded-md border border-blue-400 bg-[#0a0f18] p-3 text-sm text-gray-200 shadow-lg">
          <div className="flex items-start gap-2">
            <img
              src={item.img}
              alt={item.name}
              className="h-10 w-10 rounded-md border border-white/20"
            />
            <h4 className="font-bold text-yellow-300">{item.name}</h4>
          </div>
          <div className="mt-2 space-y-1">
            {item.desc.map((line, i) => (
              <p key={i} className="text-xs leading-snug text-gray-300">
                {line}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const items = [
  {
    name: "Giày du mục",
    img: "https://picsum.photos/seed/item1/64",
    desc: [
      "+20% Tốc đánh",
      "+60 Tốc chạy – Nội tại duy nhất: Gia tốc",
      "Nội tại: Đánh thường hồi 20 máu (Hồi chiêu: 0.3s)",
      "Hoán đổi miễn phí với giày cấp II, hồi chiêu 3 phút",
    ],
  },
  {
    name: "Thánh kiếm",
    img: "https://picsum.photos/seed/item2/64",
    desc: ["+100 Công vật lý", "+25% Tỷ lệ chí mạng"],
  },
  // ... thêm item khác
];

export default function BuildRow() {
  return (
    <div className="flex flex-wrap gap-6 bg-black p-4 rounded-md">
      {items.map((it) => (
        <ItemCard key={it.name} item={it} />
      ))}
    </div>
  );
}
