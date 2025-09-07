// TopSections.tsx
// React + Tailwind: “Top Build Tướng” & “Top Khắc Chế Tướng” giống giao diện bạn gửi
// - Card nền tối, góc bo, ảnh vuông 1:1
// - Build: viền xanh đậm (#0ea5e9-ish) – hover sáng hơn
// - Khắc chế: viền đỏ (#ef4444-ish) – hover sáng hơn
// - Tên tướng nền tối, chữ trắng, canh giữa

type Champ = { name: string; img: string }

const buildList: Champ[] = [
  { name: "Wisp", img: "https://picsum.photos/seed/wisp/200" },
  { name: "Bolt Baron", img: "https://picsum.photos/seed/bolt/200" },
  { name: "Elsu", img: "https://picsum.photos/seed/elsu/200" },
  { name: "Yorn", img: "https://picsum.photos/seed/yorn/200" },
  { name: "Goverra", img: "https://picsum.photos/seed/goverra/200" },
  { name: "Stuart", img: "https://picsum.photos/seed/stuart/200" },
  { name: "Moren", img: "https://picsum.photos/seed/moren/200" },
  { name: "Tel'Annas", img: "https://picsum.photos/seed/telannas/200" },
  { name: "Slimz", img: "https://picsum.photos/seed/slimz/200" },
  { name: "Violet", img: "https://picsum.photos/seed/violet/200" },
  { name: "Heino", img: "https://picsum.photos/seed/heino/200" },
  { name: "Fennik", img: "https://picsum.photos/seed/fennik/200" },
  { name: "Billow", img: "https://picsum.photos/seed/billow/200" },
  { name: "Valhein", img: "https://picsum.photos/seed/valhein/200" },
  { name: "Lindis", img: "https://picsum.photos/seed/lindis/200" },
  { name: "Biron", img: "https://picsum.photos/seed/biron/200" },
];

const counterList: Champ[] = [
  { name: "Amily", img: "https://picsum.photos/seed/amily/200" },
  { name: "Biron", img: "https://picsum.photos/seed/biron2/200" },
  { name: "Capheny", img: "https://picsum.photos/seed/capheny/200" },
  { name: "Bright", img: "https://picsum.photos/seed/bright/200" },
  { name: "Bolt Baron", img: "https://picsum.photos/seed/bolt2/200" },
  { name: "Bijan", img: "https://picsum.photos/seed/bijan/200" },
  { name: "Aoi", img: "https://picsum.photos/seed/aoi/200" },
  { name: "Darcy", img: "https://picsum.photos/seed/darcy/200" },
  { name: "Allain", img: "https://picsum.photos/seed/allain/200" },
  { name: "Butterfly", img: "https://picsum.photos/seed/butterfly/200" },
  { name: "Aleister", img: "https://picsum.photos/seed/aleister/200" },
  { name: "Arum", img: "https://picsum.photos/seed/arum/200" },
  { name: "Billow", img: "https://picsum.photos/seed/billow2/200" },
  { name: "Aya", img: "https://picsum.photos/seed/aya/200" },
  { name: "Alice", img: "https://picsum.photos/seed/alice/200" },
  { name: "Airi", img: "https://picsum.photos/seed/airi/200" },
];

export function ChampCard({
  data,
  variant = "build", // 'build' (blue) | 'counter' (red)
  link,
}: {
  data: Champ;
  variant?: "build" | "counter";
  link?: string;
}) {
  const base =
    "flex w-full flex-col items-center rounded-md bg-[#0f1a28] shadow-md";
  const ring =
    variant === "build"
      ? "ring-2 ring-[#0ea5e9] ring-offset-2 ring-offset-[#0f1a28] hover:ring-[#38bdf8]"
      : "ring-2 ring-[#ef4444] ring-offset-2 ring-offset-[#0f1a28] hover:ring-[#f87171]";

  return (
    <a className={`${base} ${ring} transition`} href={link}>
      <div className="m-2 w-[86px] sm:w-[96px]">
        <div className="aspect-square overflow-hidden rounded-sm bg-black/30">
          <img
            src={data.img}
            alt={data.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mb-3 mt-1 w-full px-2">
        <div className="rounded-sm bg-[#0a1421] px-2 py-1 text-center text-[13px] font-semibold text-white">
          {data.name}
        </div>
      </div>
    </a>
  );
}

export default function TopSections() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 text-black">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Top Build Tướng */}
        <div>
          <h3 className="mb-4 text-2xl font-extrabold drop-shadow">
            Top Build Tướng
          </h3>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-4">
            {buildList.map((c) => (
              <ChampCard key={c.name} data={c} variant="build" />
            ))}
          </div>
        </div>

        {/* Top Khắc Chế Tướng */}
        <div>
          <h3 className="mb-4 text-2xl font-extrabold drop-shadow">
            Top Khắc Chế Tướng
          </h3>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-4">
            {counterList.map((c) => (
              <ChampCard key={c.name} data={c} variant="counter" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
