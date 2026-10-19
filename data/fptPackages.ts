export interface FptPackage {
  id: string;
  name: string;
  category: "ca_nhan" | "gia_dinh" | "game_thu" | "doanh_nghiep";
  categoryName: string;
  badge?: string;
  isHot?: boolean;
  downloadSpeed: string;
  uploadSpeed: string;
  price: number; // VNĐ / tháng đã gồm VAT
  pricePrepaid6M?: number;
  pricePrepaid12M?: number;
  gift6M?: string;
  gift12M?: string;
  image: string;
  modem: string;
  recommendedDevices: string;
  features: string[];
  description: string;
}

export interface FptVvipSportsCombo {
  id: string;
  name: string;
  image: string;
  priceNgoaiThanh: number;
  priceNoiThanh: number;
  downloadSpeed: string;
  uploadSpeed: string;
  features: string[];
}

// DANH SÁCH GÓI CƯỚC CHUẨN FPT TELECOM
export const FPT_PACKAGES: FptPackage[] = [
  // CÁ NHÂN
  {
    id: "giga",
    name: "Giga",
    category: "ca_nhan",
    categoryName: "Cá nhân",
    downloadSpeed: "150 Mbps",
    uploadSpeed: "150 Mbps",
    price: 180000,
    pricePrepaid6M: 1080000,
    pricePrepaid12M: 2160000,
    gift6M: "Tặng 01 tháng cước thứ 7",
    gift12M: "Tặng 02 tháng cước thứ 13, 14",
    image: "/images/giga.webp",
    modem: "Modem Wi-Fi 6 Băng tần kép AX1800",
    recommendedDevices: "1 - 5 thiết bị",
    description: "Tối ưu hóa chi phí, đường truyền ổn định phù hợp cho học tập, làm việc và giải trí cá nhân.",
    features: [
      "Tốc độ Download/Upload đối xứng 150 Mbps",
      "Trang bị miễn phí Modem Wi-Fi 6 thế hệ mới",
      "Phù hợp kết nối 1 - 5 thiết bị cùng lúc",
      "Không giới hạn dung lượng truy cập (Unlimited)",
      "Triển khai bàn giao thiết bị siêu tốc trong 24 giờ"
    ]
  },
  {
    id: "sky",
    name: "Sky",
    category: "ca_nhan",
    categoryName: "Cá nhân",
    badge: "Bán chạy nhất",
    isHot: true,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "150 Mbps",
    price: 225000,
    pricePrepaid6M: 1350000,
    pricePrepaid12M: 2700000,
    gift6M: "Tặng 01 tháng cước + Miễn phí hòa mạng",
    gift12M: "Tặng 02 tháng cước + Quà tặng FPT",
    image: "/images/sky.webp",
    modem: "Modem Wi-Fi 6 Chuẩn AX băng tần kép",
    recommendedDevices: "5 - 12 thiết bị",
    description: "Đột phá tốc độ Download 1Gbps, xem phim 4K, livestream và tải tài liệu lớn trong nháy mắt.",
    features: [
      "Tốc độ Download không giới hạn lên đến 1 Gbps (1024 Mbps)",
      "Tốc độ Upload cực nhanh 150 Mbps",
      "Trang bị Modem Wi-Fi 6 phủ sóng rộng xuyên tường",
      "Đáp ứng tốt Smart TV, máy tính, điện thoại cùng lúc",
      "Chăm sóc khách hàng tận tâm và chu đáo"
    ]
  },
  {
    id: "meta",
    name: "Meta",
    category: "ca_nhan",
    categoryName: "Cá nhân",
    badge: "1Gbps Đối xứng",
    downloadSpeed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    price: 330000,
    pricePrepaid6M: 1980000,
    pricePrepaid12M: 3960000,
    gift6M: "Tặng 01 tháng cước + Thiết bị Mesh Wi-Fi",
    gift12M: "Tặng 02 tháng cước + 01 Mesh Wi-Fi 6 cao cấp",
    image: "/images/meta.webp",
    modem: "Modem Wi-Fi 6 AX3000 + Mesh Wi-Fi 6",
    recommendedDevices: "10 - 25 thiết bị",
    description: "Băng thông đối xứng 1Gbps đỉnh cao, tải lên và tải xuống cực đại cho nhà nhiều tầng và Content Creator.",
    features: [
      "Download & Upload đối xứng 1 Gbps (1024 Mbps)",
      "Băng thông không giới hạn mở rộng trải nghiệm số",
      "Trang bị Modem Wi-Fi 6 AX3000 thế hệ mới nhất",
      "Tối ưu cho nhà phố nhiều tầng, biệt thự, căn hộ lớn",
      "Ưu tiên luồng kết nối mượt mà vào giờ cao điểm"
    ]
  },

  // GIA ĐÌNH
  {
    id: "giga-f1",
    name: "Giga F1 (Kèm Mesh)",
    category: "gia_dinh",
    categoryName: "Gia đình",
    downloadSpeed: "150 Mbps",
    uploadSpeed: "150 Mbps",
    price: 210000,
    pricePrepaid6M: 1260000,
    pricePrepaid12M: 2520000,
    gift6M: "Tặng 01 tháng cước",
    gift12M: "Tặng 02 tháng cước",
    image: "/images/giga.webp",
    modem: "Modem Wi-Fi 6 + 01 Cục phát Mesh Wi-Fi 6",
    recommendedDevices: "5 - 15 thiết bị",
    description: "Giải pháp mở rộng vùng phủ sóng WiFi cho căn hộ 2-3 phòng ngủ, triệt tiêu mọi điểm chết sóng.",
    features: [
      "Tốc độ Download/Upload 150 Mbps ổn định",
      "Trang bị 01 Modem Wi-Fi 6 + 01 Thiết bị Mesh phụ trợ",
      "Tự động chuyển vùng Seamless Roaming không ngắt quãng",
      "Bảo đảm sóng khỏe khắp mọi ngóc ngách trong nhà",
      "Bảo hành thiết bị trọn đời trong suốt quá trình sử dụng"
    ]
  },
  {
    id: "sky-f1",
    name: "Sky F1 (Kèm Mesh)",
    category: "gia_dinh",
    categoryName: "Gia đình",
    badge: "Gia đình khuyên dùng",
    isHot: true,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "150 Mbps",
    price: 255000,
    pricePrepaid6M: 1530000,
    pricePrepaid12M: 3060000,
    gift6M: "Tặng 01 tháng cước + Bàn giao thiết bị miễn phí",
    gift12M: "Tặng 02 tháng cước + Ưu đãi thiết bị",
    image: "/images/sky.webp",
    modem: "Modem Wi-Fi 6 + 01 Thiết bị Mesh Wi-Fi 6",
    recommendedDevices: "8 - 20 thiết bị",
    description: "Gói cước gia đình hoàn hảo: Tải 1Gbps, kèm thiết bị Mesh phủ sóng rộng khắp nhà phố nhiều tầng.",
    features: [
      "Download 1 Gbps cực đại + Upload 150 Mbps",
      "Trang bị 01 Modem Wi-Fi 6 + 01 Mesh Wi-Fi 6",
      "Hệ sinh thái Mesh phủ sóng từ tầng 1 đến tầng thượng",
      "Cân mọi thiết bị Smart TV 4K, Camera giám sát gia đình",
      "Cam kết đồng hành và chăm sóc khách hàng nhanh trong ngày"
    ]
  },
  {
    id: "meta-f1",
    name: "Meta F1 (Kèm Mesh)",
    category: "gia_dinh",
    categoryName: "Gia đình",
    downloadSpeed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    price: 360000,
    pricePrepaid6M: 2160000,
    pricePrepaid12M: 4320000,
    gift6M: "Tặng 01 tháng + 01 Mesh Wi-Fi",
    gift12M: "Tặng 02 tháng + 02 Mesh Wi-Fi",
    image: "/images/meta.webp",
    modem: "Modem Wi-Fi 6 + 01 Mesh Wi-Fi 6 AX3000",
    recommendedDevices: "15 - 35 thiết bị",
    description: "Đỉnh cao kết nối gia đình với băng thông 1Gbps đối xứng và hệ thống Mesh WiFi cao cấp.",
    features: [
      "Băng thông đối xứng 1 Gbps Download/Upload",
      "Trang bị trọn bộ Modem Wi-Fi 6 và thiết bị Mesh mở rộng",
      "Hỗ trợ kết nối đồng thời trên 30 thiết bị thông minh",
      "Tối ưu cho Smart Home, phòng chiếu phim, stream 4K",
      "Chăm sóc kỹ thuật ưu tiên riêng cho thuê bao VIP"
    ]
  },

  // GAME THỦ
  {
    id: "f-game",
    name: "F-Game",
    category: "game_thu",
    categoryName: "Game thủ",
    badge: "Độc quyền Ultra Fast",
    isHot: true,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "300 Mbps",
    price: 280000,
    pricePrepaid6M: 1680000,
    pricePrepaid12M: 3360000,
    gift6M: "Tặng 01 tháng + Code Game độc quyền",
    gift12M: "Tặng 02 tháng + Quà tặng Game thủ",
    image: "/images/f-game.webp",
    modem: "Modem Gaming Wi-Fi 6 chuyên dụng",
    recommendedDevices: "5 - 15 thiết bị",
    description: "Tích hợp công nghệ Ultra Fast ứng dụng AI tự động tối ưu tuyến cáp, giảm Ping tới 50+ tựa game eSports hot.",
    features: [
      "Băng thông tải 1 Gbps + Tải lên 300 Mbps siêu tốc",
      "Tích hợp sẵn tính năng Ultra Fast chống lag, giảm Ping",
      "Tối ưu đường truyền tới máy chủ Riot, Steam, Garena, EA",
      "Triệt tiêu hiện tượng Packet Loss khi combat",
      "Modem Gaming Wi-Fi 6 độ trễ siêu thấp chuyên biệt"
    ]
  },

  // DOANH NGHIỆP
  {
    id: "lux500",
    name: "LUX 500",
    category: "doanh_nghiep",
    categoryName: "Doanh nghiệp",
    badge: "Chuẩn Wi-Fi 6 Doanh Nghiệp",
    downloadSpeed: "500 Mbps",
    uploadSpeed: "500 Mbps",
    price: 800000,
    pricePrepaid6M: 4800000,
    pricePrepaid12M: 9600000,
    gift6M: "Tặng 01 tháng cước + 01 IP Tĩnh",
    gift12M: "Tặng 02 tháng cước + IP Tĩnh + Thiết bị cân bằng tải",
    image: "/images/lux800.webp",
    modem: "01 Router Wi-Fi 6 Doanh Nghiệp + 01 Mesh Wi-Fi 6",
    recommendedDevices: "30 - 60 thiết bị",
    description: "Giải pháp WiFi 6 doanh nghiệp cao cấp cho quán cafe, nhà hàng, văn phòng công ty đòi hỏi độ ổn định cao.",
    features: [
      "Băng thông 500 Mbps đối xứng trong nước",
      "Cam kết băng thông quốc tế tối thiểu 10.8 Mbps",
      "Trang bị thiết bị Wi-Fi 6 cao cấp chịu tải lớn",
      "Kèm 01 địa chỉ IP Tĩnh vận hành máy chủ & VPN",
      "Đội ngũ triển khai dịch vụ chuyên biệt trong vòng 2 giờ"
    ]
  },
  {
    id: "s300-biz",
    name: "Super 300 Biz",
    category: "doanh_nghiep",
    categoryName: "Doanh nghiệp",
    badge: "Doanh nghiệp vừa",
    downloadSpeed: "300 Mbps",
    uploadSpeed: "300 Mbps",
    price: 545000,
    pricePrepaid6M: 3270000,
    pricePrepaid12M: 6540000,
    gift6M: "Tặng 01 tháng + 01 IP Tĩnh",
    gift12M: "Tặng 02 tháng + IP Tĩnh",
    image: "/images/s300-biz.webp",
    modem: "Router MikroTik / DrayTek chuyên dụng",
    recommendedDevices: "20 - 40 nhân sự",
    description: "Đường truyền cáp quang doanh nghiệp tin cậy với IP Tĩnh cố định và hợp đồng pháp nhân xuất hóa đơn VAT.",
    features: [
      "Tốc độ 300 Mbps Download/Upload đối xứng",
      "Cam kết băng thông quốc tế ổn định",
      "Miễn phí 01 địa chỉ IP Tĩnh cố định",
      "Thiết bị Gateway công nghiệp chịu tải lớn liên tục xuyên suốt",
      "Xuất hóa đơn VAT điện tử nhanh chóng"
    ]
  }
];

// GÓI COMBO THỂ THAO VVIP NGOẠI HẠNG ANH
export const VVIP_SPORTS_PACKAGES: FptVvipSportsCombo[] = [
  {
    id: "combo-giga-vvip",
    name: "Combo Giga - V.VIP",
    image: "/images/giga.webp",
    priceNgoaiThanh: 220000,
    priceNoiThanh: 240000,
    downloadSpeed: "150 Mbps",
    uploadSpeed: "150 Mbps",
    features: [
      "Modem Wi-Fi 6 thế hệ mới tốc độ 150 Mbps",
      "Kết nối mượt mà trên 10 thiết bị cùng lúc",
      "Trọn vẹn 380 trận Ngoại Hạng Anh chất lượng Full HD, 4K",
      "Gần 170 kênh truyền hình trong & ngoài nước trên FPT Play",
      "Trang bị đầu thu thông minh điều khiển giọng nói"
    ]
  },
  {
    id: "combo-sky-vvip",
    name: "Combo Sky - V.VIP",
    image: "/images/sky.webp",
    priceNgoaiThanh: 239000,
    priceNoiThanh: 269000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "150 Mbps",
    features: [
      "Băng thông Download không giới hạn 1 Gbps (1024 Mbps)",
      "Bản quyền độc quyền Ngoại Hạng Anh & Cúp C1 UEFA",
      "Trang bị Modem Wi-Fi 6 + Box FPT Play Voice 4K",
      "Đăng nhập và xem đồng thời trên 3 thiết bị",
      "Kho phim điện ảnh chiếu rạp không quảng cáo"
    ]
  },
  {
    id: "combo-meta-vvip",
    name: "Combo Meta - V.VIP",
    image: "/images/meta.webp",
    priceNgoaiThanh: 345000,
    priceNoiThanh: 375000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    features: [
      "Download/Upload đối xứng 1 Gbps cực đại",
      "Gói kênh truyền hình VIP & Thể thao đỉnh cao",
      "Trang bị Modem Wi-Fi 6 AX3000 + Box FPT Play",
      "Xem mượt mà đồng thời trên 5 thiết bị",
      "Đặc quyền chăm sóc và phục vụ ưu tiên số 1"
    ]
  }
];

export const FPT_VVIP_COMBOS = VVIP_SPORTS_PACKAGES;

// 5 DỊCH VỤ NỔI BẬT DƯỚI HERO BANNER (QUICK ACCESS CIRCLES)
export const QUICK_SERVICES = [
  {
    id: "internet",
    title: "Internet FPT",
    desc: "Cáp quang WiFi 6",
    href: "#goi-cuoc",
    icon: "Globe"
  },
  {
    id: "fptplay",
    title: "FPT Play",
    desc: "Ngoại Hạng Anh 4K",
    href: "#vvip-sports",
    icon: "Tv"
  },
  {
    id: "camera",
    title: "FPT Camera",
    desc: "Cloud AI thông minh",
    href: "#kham-pha-fpt",
    icon: "Camera"
  },
  {
    id: "smarthome",
    title: "Smart Home",
    desc: "Nhà thông minh",
    href: "#kham-pha-fpt",
    icon: "Home"
  },
  {
    id: "thiet-bi",
    title: "Thiết bị Wi-Fi 6",
    desc: "Mesh phủ sóng rộng",
    href: "#goi-cuoc",
    icon: "Wifi"
  }
];

export function getPackageById(id: string): FptPackage | undefined {
  return FPT_PACKAGES.find((p) => p.id.toLowerCase() === id.toLowerCase());
}

export function getComboById(id: string): FptVvipSportsCombo | undefined {
  return FPT_VVIP_COMBOS.find((c) => c.id.toLowerCase() === id.toLowerCase());
}

export function findPackageOrCombo(slug: string): 
  | { type: "internet"; data: FptPackage }
  | { type: "combo"; data: FptVvipSportsCombo }
  | null {
  const clean = slug.toLowerCase().replace(/^goi-/, "").replace(/-f1$/, "");
  
  // Try exact ID match in packages
  const directPkg = FPT_PACKAGES.find((p) => p.id.toLowerCase() === slug.toLowerCase() || p.id.toLowerCase() === clean);
  if (directPkg) return { type: "internet", data: directPkg };

  // Try exact ID match in combos
  const directCombo = FPT_VVIP_COMBOS.find(
    (c) => c.id.toLowerCase() === slug.toLowerCase() || c.id.toLowerCase().replace("combo-", "") === clean
  );
  if (directCombo) return { type: "combo", data: directCombo };

  // Substring search
  const subPkg = FPT_PACKAGES.find((p) => slug.toLowerCase().includes(p.id.toLowerCase()));
  if (subPkg) return { type: "internet", data: subPkg };

  const subCombo = FPT_VVIP_COMBOS.find((c) => slug.toLowerCase().includes(c.id.toLowerCase().replace("combo-", "")));
  if (subCombo) return { type: "combo", data: subCombo };

  return null;
}

