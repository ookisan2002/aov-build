import ChampionsListing, { Champion } from "../components/ChampList";

const champions: Champion[] = [
  {
    name: "Airi",
    img: "https://picsum.photos/seed/airi/160",
    role: "Sát Thủ",
    lane: "Đường Tà Thần",
    link: "/tuong/airi",
  },
  {
    name: "Aleister",
    img: "https://picsum.photos/seed/aleister/160",
    role: "Pháp Sư",
    lane: "Đường Giữa",
    link: "/tuong/aleister",
  },
  {
    name: "Alice",
    img: "https://picsum.photos/seed/alice/160",
    role: "Trợ Thủ",
    lane: "Đường Rồng",
    link: "/tuong/alice",
  },
  {
    name: "Allain",
    img: "https://picsum.photos/seed/allain/160",
    role: "Đấu Sĩ",
    lane: "Đường Tà Thần",
    link: "/tuong/allain",
  },
  {
    name: "Amily",
    img: "https://picsum.photos/seed/amily/160",
    role: "Đấu Sĩ",
    lane: "Đường Tà Thần",
    link: "/tuong/amily",
  },
  {
    name: "Annette",
    img: "https://picsum.photos/seed/annette/160",
    role: "Trợ Thủ",
    lane: "Đường Rồng",
    link: "/tuong/annette",
  },
  {
    name: "Arduin",
    img: "https://picsum.photos/seed/arduin/160",
    role: "Đỡ Đòn",
    lane: "Đường Tà Thần",
    link: "/tuong/arduin",
  },
  {
    name: "Arthur",
    img: "https://picsum.photos/seed/arthur/160",
    role: "Đỡ Đòn",
    lane: "Đường Tà Thần",
    link: "/tuong/arthur",
  },
  {
    name: "Astrid",
    img: "https://picsum.photos/seed/astrid/160",
    role: "Đấu Sĩ",
    lane: "Đường Tà Thần",
    link: "/tuong/astrid",
  },
  {
    name: "Ata",
    img: "https://picsum.photos/seed/ata/160",
    role: "Đỡ Đòn",
    lane: "Đường Rồng",
    link: "/tuong/ata",
  },
  {
    name: "Aya",
    img: "https://picsum.photos/seed/aya/160",
    role: "Trợ Thủ",
    lane: "Đường Rồng",
    link: "/tuong/aya",
  },
  {
    name: "Azzen'Ka",
    img: "https://picsum.photos/seed/azzenka/160",
    role: "Pháp Sư",
    lane: "Đường Giữa",
    link: "/tuong/azzenka",
  },
  {
    name: "Baldum",
    img: "https://picsum.photos/seed/baldum/160",
    role: "Đỡ Đòn",
    lane: "Đường Tà Thần",
    link: "/tuong/baldum",
  },
  {
    name: "Batman",
    img: "https://picsum.photos/seed/batman/160",
    role: "Sát Thủ",
    lane: "Rừng",
    link: "/tuong/batman",
  },
  {
    name: "Bright",
    img: "https://picsum.photos/seed/bright/160",
    role: "Xạ Thủ",
    lane: "Đường Rồng",
    link: "/tuong/bright",
  },
  {
    name: "Butterfly",
    img: "https://picsum.photos/seed/butterfly/160",
    role: "Sát Thủ",
    lane: "Rừng",
    link: "/tuong/butterfly",
  },
  {
    name: "Capheny",
    img: "https://picsum.photos/seed/capheny/160",
    role: "Xạ Thủ",
    lane: "Đường Rồng",
    link: "/tuong/capheny",
  },
  {
    name: "Celica",
    img: "https://picsum.photos/seed/celica/160",
    role: "Xạ Thủ",
    lane: "Đường Rồng",
    link: "/tuong/celica",
  },
  {
    name: "Chaugnar",
    img: "https://picsum.photos/seed/chaugnar/160",
    role: "Trợ Thủ",
    lane: "Đường Rồng",
    link: "/tuong/chaugnar",
  },
  {
    name: "Cresht",
    img: "https://picsum.photos/seed/cresht/160",
    role: "Đỡ Đòn",
    lane: "Đường Rồng",
    link: "/tuong/cresht",
  },
  {
    name: "D'arcy",
    img: "https://picsum.photos/seed/darcy/160",
    role: "Pháp Sư",
    lane: "Đường Giữa",
    link: "/tuong/darcy",
  },
  {
    name: "Dextra",
    img: "https://picsum.photos/seed/dextra/160",
    role: "Đấu Sĩ",
    lane: "Đường Tà Thần",
    link: "/tuong/dextra",
  },
  {
    name: "Điêu Thuyền",
    img: "https://picsum.photos/seed/dieuthuyen/160",
    role: "Pháp Sư",
    lane: "Đường Giữa",
    link: "/tuong/dieuthuyen",
  },
  {
    name: "Dirak",
    img: "https://picsum.photos/seed/dirak/160",
    role: "Pháp Sư",
    lane: "Đường Giữa",
    link: "/tuong/dirak",
  },
];

export default function BuildTướng() {
  return (
    // <div className='space-y-4'>
    //   <h1 className='text-2xl sm:text-3xl font-extrabold'>Build Tướng</h1>
    //   <p className='text-gray-600'>Danh sách tướng + filter (vai trò/lane).</p>
    // </div>
    <ChampionsListing champions={champions} />
  );
}
