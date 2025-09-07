import BuildRowComp from "../components/BuildRow";
import ChampHeroCard from "../components/HeroCard";
import SupportCounterPanel from "../components/SupportCounterPanel";
import TopSections from "../components/TopSection";

// ChampionDetail.tsx
// Clone section chi tiết tướng giống UI bạn gửi

function ChampionDetail() {
  return (
    <section className=" text-black px-4 py-8">
      {/* GIỚI THIỆU */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 uppercase">
          GIỚI THIỆU VỀ AOV-BUILDS
        </h2>
        <p className="text-sm text-black">
          Chào mừng các game thủ đến với AOVBUILDS.COM – BÍ kíp leo rank hiệu
          quả nhất cho Liên Quân Mobile!
        </p>
      </div>

      {/* INFO CARD */}
      <ChampHeroCard
        name="Fennik"
        role="Xạ Thủ"
        avatarUrl="https://your-cdn.com/avatars/fennik.jpg"
        backgroundUrl="https://your-cdn.com/banners/fennik-wide.jpg"
        stats={{ hp: 4, dmg: 7, cc: 5, diff: 6 }}
        className="bg-black/60" // optional wrapper tweaks
      />

      {/* XÂY DỰNG TƯỚNG */}
      <section className=" text-black px-4 py-8">
        {/* Header */}
        <h2 className="text-lg font-bold mb-2 uppercase">XÂY DỰNG TƯỚNG</h2>
        <p className="text-sm text-black mb-2">
          Hướng dẫn chi tiết từng bước: Chúng tôi cung cấp hướng dẫn cách lên
          đồ, bảng ngọc và phù hiệu mạnh nhất để bạn nhanh chóng thành thạo...
        </p>
        <p className="text-sm text-black mb-6">
          Cập nhật meta mới nhất: Liên tục cập nhật các cách lên trang bị và
          chiến thuật mới nhất từ cộng đồng game thủ...
        </p>

        <BuildRowComp />

        <p className="mt-4 text-center italic text-black">Hướng dẫn lên đồ</p>
      </section>

      {/* KHẮC CHẾ */}
      <section className=" text-black px-4 py-8">
        {/* Heading + intro */}
        <h2 className="text-lg font-bold uppercase">KHẮC CHẾ TƯỚNG</h2>
        <p className="mt-2 text-sm text-black">
          Cách khắc chế hiệu quả: Biết cách đối đầu và hạn chế sức mạnh của các
          tướng mạnh trong meta hiện tại, từ các pháp sư cực mạnh như Liliana,
          Veera đến các sát thủ cơ động như Murad.
        </p>
        <p className="mt-1 text-sm text-black">
          Mẹo giao tranh thông minh: Chia sẻ chiến thuật khi solo và combat rõ
          ràng, cụ thể để bạn cùng đồng đội dễ dàng giành chiến thắng trước các
          kèo khó chịu.
        </p>

        {/* Callout mô tả chung phía trên (hàng đầu) */}
        <div className="mt-5 rounded-md border border-black p-3 bg-[#0f1a28] ">
          <p className="text-[15px] leading-6 text-white">
            Tướng khắc chế Florentino solo 1vs1 và giao tranh gồm:{" "}
            <strong className="font-semibold">
              Marja, Bolt Baron, Murad, Aleister, Arum…
            </strong>{" "}
            Khi đánh tay đôi với Flo nên chọn tướng cấu rỉa mạnh hoặc khống chế
            cứng. Trong combat tướng hỗ trợ khống chế sẽ ngăn không cho hắn múa
            tự do.
          </p>
        </div>

        {/* Panel chọn tướng khắc chế (dùng lại component đã làm) */}
        <div className="mt-4">
          <SupportCounterPanel
            title="TƯỚNG ĐẤU SĨ ĐI TOP/RỪNG KHẮC CHẾ FLORENTINO"
            champs={[
              {
                name: "Marja",
                avatar: "https://picsum.photos/seed/marja/140",
                content:
                  "Khi cầm Marja bạn hãy khéo léo nôi chiêu 2 để hút dame Florentino rồi dùng chiêu 1 và chiêu 3 đúng thời điểm né đi những nhịp thả hoa và chiêu cuối. Tài hoa của hắn ta là có thể gây rất nhiều khó khăn cho Flo.",
              },
              {
                name: "BoltBaron",
                avatar: "https://picsum.photos/seed/boltbaron/140",
                content:
                  "Bolt Baron khắc chế tốt nhờ khả năng chống chịu và khống chế cứng, mở giao tranh và làm chậm nhịp múa của Flo.",
              },
              {
                name: "Murad",
                avatar: "https://picsum.photos/seed/murad/140",
                content:
                  "Murad có khả năng cơ động cao, cấu rỉa an toàn và né đòn tốt; chọn thời điểm vào/ra khiến Florentino khó bắt.",
              },
            ]}
            defaultIndex={0}
          />
        </div>

        {/* Thẻ ghi chú/điểm nhấn cho 1 tướng (tùy chọn) — dùng lại CounterNoteCard */}
        <div className="mt-4">
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
              },
              {
                name: "Maloch",
                avatar: "https://picsum.photos/seed/maloch/120",
                content:
                  "Maloch có sát thương chuẩn diện rộng và khả năng mở giao tranh mạnh, ép góc Stuart hiệu quả.",
              },
            ]}
          />
        </div>
      </section>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <section
        className="relative flex items-center justify-start h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://your-cdn.com/banner.jpg')", // thay ảnh thật ở đây
        }}
      >
        {/* overlay tối nhẹ để chữ dễ đọc */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl px-6 lg:px-12">
          <div className="max-w-lg text-white">
            {/* Title */}
            <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
              AOV-BUILDS
            </h2>

            {/* Subtitle */}
            <h1 className="mt-1 text-2xl font-semibold sm:text-3xl">
              Thư viện Liên Quân
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-100">
              Hướng dẫn lên đồ, trang bị, bảng ngọc, lối chơi, combo và cách
              khắc chế cho toàn bộ tướng Liên Quân Mobile.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#"
                className="px-5 py-2 rounded-sm bg-[#1e3a8a] font-semibold text-white hover:bg-[#1d4ed8] transition"
              >
                BUILD TƯỚNG
              </a>
              <a
                href="#"
                className="px-5 py-2 rounded-sm border border-white font-semibold text-white hover:bg-white/10 transition"
              >
                KHẮC CHẾ
              </a>
            </div>
          </div>
        </div>
      </section>

      <TopSections />

      <ChampionDetail />

      <section className="py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          Thông tin đa dạng
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Trang Bị", "Phù Hiệu", "Bảng Ngọc"].map((t) => (
            <a
              key={t}
              href={
                "/" +
                (t === "Trang Bị"
                  ? "trang-bi"
                  : t === "Phù Hiệu"
                  ? "phu-hieu"
                  : "bang-ngoc")
              }
              className="group rounded-2xl border border-black/10 p-5 transition hover:bg-black/5"
            >
              <h3 className="text-lg font-bold text-gray-900">{t}</h3>
              <p className="mt-1 text-sm text-gray-600">Mô tả ngắn.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold group-hover:underline">
                Khám phá →
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
