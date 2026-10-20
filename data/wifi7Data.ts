export interface Wifi7Package {
  id: string;
  name: string;
  speedDownload: string;
  speedUpload: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  highlight?: boolean;
  devices: string[];
  features: string[];
}

export interface Wifi7WhyItem {
  title: string;
  desc: string;
  icon: string;
}

export interface Wifi7DemandItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  recommendedPkg: string;
}

export interface Wifi7ReviewItem {
  title: string;
  channel: string;
  image: string;
  youtubeId: string;
}

export const WIFI7_PACKAGES: Wifi7Package[] = [
  {
    id: "pkg-speedx1",
    name: "FPT SpeedX1",
    speedDownload: "1 Gbps Đối Xứng",
    speedUpload: "1 Gbps Đối Xứng",
    price: 345000,
    originalPrice: 420000,
    badge: "Wi-Fi 7 Tiêu Chuẩn",
    devices: ["Modem Wi-Fi 7 XGSPON"],
    features: [
      "Băng thông đối xứng 1 Gbps cả 2 chiều Upload & Download",
      "Kênh truyền siêu rộng 320MHz, giảm độ trễ 90%",
      "Trang bị Modem Wi-Fi 7 XGSPON thế hệ mới nhất",
      "Khả năng kết nối ổn định đồng thời trên 60 thiết bị",
    ],
  },
  {
    id: "pkg-speedx1-f1",
    name: "FPT SpeedX1 F1",
    speedDownload: "1 Gbps Đối Xứng",
    speedUpload: "1 Gbps Đối Xứng",
    price: 365000,
    originalPrice: 450000,
    badge: "Kèm 1 Mesh Wi-Fi 7",
    devices: ["1 Modem Wi-Fi 7", "1 Access Point Mesh Wi-Fi 7"],
    features: [
      "Trọn bộ 1 Modem chính + 1 Access Point Mesh Wi-Fi 7",
      "Phủ sóng xuyên sàn, xuyên tường không góc chết",
      "Công nghệ Multi-Link Operation (MLO) chuyển vùng siêu mượt",
      "Tốc độ gigabit phủ kín toàn bộ diện tích nhà",
    ],
  },
  {
    id: "pkg-combo-speedx1-vvip",
    name: "Combo SpeedX1 V.VIP",
    speedDownload: "1 Gbps Đối Xứng",
    speedUpload: "1 Gbps Đối Xứng",
    price: 369000,
    originalPrice: 480000,
    badge: "Bán chạy nhất",
    highlight: true,
    devices: ["Modem Wi-Fi 7 XGSPON", "Tài khoản FPT Play VVIP"],
    features: [
      "Tốc độ đối xứng 1 Gbps kết hợp truyền hình VVIP",
      "Trọn vẹn 380 trận Ngoại Hạng Anh & Cúp C1 bản quyền",
      "Thưởng thức kho phim 4K không độ trễ",
      "Trang bị Modem Wi-Fi 7 XGSPON cao cấp",
    ],
  },
  {
    id: "pkg-speedx2",
    name: "FPT SpeedX2",
    speedDownload: "2 Gbps Đối Xứng",
    speedUpload: "2 Gbps Đối Xứng",
    price: 660000,
    originalPrice: 850000,
    badge: "2 Gbps Khủng",
    devices: ["Modem Wi-Fi 7 XGSPON cổng 2.5GbE"],
    features: [
      "Tốc độ cực khủng 2 Gbps đối xứng cả 2 chiều",
      "Cổng LAN 2.5GbE cho PC và thiết bị lưu trữ NAS",
      "Tải file dữ liệu 100GB chỉ trong tích tắc",
      "Chuyên dụng cho Creator, Studio và Gamer hardcore",
    ],
  },
  {
    id: "pkg-speedx2-pro",
    name: "FPT SpeedX2 Pro",
    speedDownload: "2 Gbps Đối Xứng",
    speedUpload: "2 Gbps Đối Xứng",
    price: 1099000,
    originalPrice: 1400000,
    badge: "eSports Chuyên Nghiệp",
    devices: ["Modem Wi-Fi 7 XGSPON", "Gói Ultra Fast VIP"],
    features: [
      "Tốc độ 2 Gbps đối xứng kèm tính năng định tuyến game độc quyền",
      "Độ trễ tiệm cận 0ms chuẩn thi đấu eSports quốc tế",
      "Cam kết băng thông quốc tế siêu tốc độ cao",
      "Hỗ trợ kỹ thuật chuyên biệt 1-1",
    ],
  },
  {
    id: "pkg-speedx10-pro",
    name: "FPT SpeedX10 Pro",
    speedDownload: "10 Gbps Cực Đỉnh",
    speedUpload: "10 Gbps Cực Đỉnh",
    price: 1690000,
    originalPrice: 2200000,
    badge: "Đỉnh cao 10 Gbps",
    devices: ["Thiết bị Wi-Fi 7 XGSPON Enterprise", "IP Tĩnh"],
    features: [
      "Tốc độ 10 Gbps đối xứng – Nhanh nhất thị trường Việt Nam",
      "Hạ tầng cáp quang XGSPON tương lai độc quyền từ FPT Telecom",
      "Chuyên dụng cho Doanh nghiệp công nghệ, Gaming House, Studio 8K",
      "Miễn phí IP Tĩnh và hạ tầng đường truyền riêng biệt",
    ],
  },
];

export const WIFI7_WHY_ITEMS: Wifi7WhyItem[] = [
  {
    title: "Tốc độ vô cực lên đến 10 Gbps",
    desc: "Băng thông rộng gấp 5 lần Wi-Fi 6, kênh truyền siêu rộng 320MHz cho phép truyền tải khối lượng dữ liệu khổng lồ trong tích tắc.",
    icon: "/images/wifi-7/why_rocket.png",
  },
  {
    title: "Công nghệ Multi-Link Operation (MLO)",
    desc: "Cho phép thiết bị kết nối đồng thời trên nhiều dải tần (2.4GHz và 5GHz), tự động gộp băng thông và giảm độ trễ tiệm cận 0ms.",
    icon: "/images/wifi-7/why_network.png",
  },
  {
    title: "Chuẩn điều chế 4096-QAM tiên tiến",
    desc: "Tăng mật độ truyền dữ liệu thêm 20% so với Wi-Fi 6 (1024-QAM), mang lại tốc độ truyền tải thực tế cao hơn rõ rệt.",
    icon: "/images/wifi-7/why_shield.png",
  },
  {
    title: "Modem Wi-Fi 7 XGSPON đỉnh cao",
    desc: "Trang bị thiết bị chính hãng thế hệ mới nhất của FPT Telecom, hỗ trợ cổng LAN đa tốc độ 2.5Gbps và 10Gbps sẵn sàng cho tương lai.",
    icon: "/images/wifi-7/why_router.png",
  },
];

export const WIFI7_DEMAND_ITEMS: Wifi7DemandItem[] = [
  {
    id: "demand-esport",
    title: "eSports & Game Thủ Chuyên Nghiệp",
    desc: "Không chấp nhận độ trễ dù chỉ 1ms. Wi-Fi 7 mang lại phản hồi tức thì và triệt tiêu hoàn toàn hiện tượng nghẽn mạng trong các trận đấu giải.",
    recommendedPkg: "Gói SpeedX2 Pro hoặc SpeedX1",
    image: "/images/wifi-7/demand_esport.png",
  },
  {
    id: "demand-streamer",
    title: "Streamer & Creator Nội Dung 4K/8K",
    desc: "Livestream đa nền tảng cùng lúc ở bitrate cao nhất, render và upload video dung lượng hàng trăm GB lên cloud mượt mà.",
    recommendedPkg: "Gói SpeedX1 hoặc SpeedX2",
    image: "/images/wifi-7/demand_streamer.png",
  },
  {
    id: "demand-bands",
    title: "Gia Đình Đa Thiết Bị Smart Home",
    desc: "Nhà thông minh với hàng chục camera an ninh 2K/4K, cảm biến, robot hút bụi, TV thông minh cùng kết nối mà không bị nghẽn mạng.",
    recommendedPkg: "Gói Combo SpeedX1 V.VIP",
    image: "/images/wifi-7/demand_bands.png",
  },
  {
    id: "demand-business",
    title: "Doanh Nghiệp & Studio Công Nghệ",
    desc: "Đường truyền siêu tốc độ cao phục vụ hàng trăm nhân sự truyền tải dữ liệu lớn, vận hành máy chủ và hội nghị trực tuyến quốc tế.",
    recommendedPkg: "Gói SpeedX10 Pro",
    image: "/images/wifi-7/demand_business.png",
  },
];

export const WIFI7_REVIEWS: Wifi7ReviewItem[] = [
  {
    title: "Trải nghiệm thực tế gói cước FPT SpeedX Wi-Fi 7 đầu tiên tại Việt Nam",
    channel: "Vật Vờ Studio",
    image: "/images/wifi-7/review_1.jpg",
    youtubeId: "kqlB9X20ClU",
  },
  {
    title: "Đo tốc độ Wi-Fi 7 xuyên tường: Liệu có thực sự nhanh như quảng cáo?",
    channel: "Tinh Tế",
    image: "/images/wifi-7/review_2.jpg",
    youtubeId: "kqlB9X20ClU",
  },
  {
    title: "Test ping thi đấu Valorant và CS2 trên mạng Wi-Fi 7 FPT XGSPON",
    channel: "Troll Game",
    image: "/images/wifi-7/review_3.jpg",
    youtubeId: "kqlB9X20ClU",
  },
  {
    title: "Trên tay Modem Wi-Fi 7 XGSPON thế hệ mới của FPT Telecom",
    channel: "Schannel",
    image: "/images/wifi-7/review_4.jpg",
    youtubeId: "kqlB9X20ClU",
  },
];

export const WIFI7_FAQS = [
  {
    question: "Wi-Fi 7 khác gì so với Wi-Fi 6 hiện nay?",
    answer: "Wi-Fi 7 (chuẩn 802.11be) mang lại bước nhảy vọt về tốc độ và độ trễ: băng thông lên đến 10 Gbps (gấp 5 lần Wi-Fi 6), kênh truyền mở rộng tới 320MHz, công nghệ Multi-Link Operation (MLO) cho phép gộp các dải tần đồng thời và mã hóa 4096-QAM giúp truyền nhiều dữ liệu hơn trên cùng một sóng.",
  },
  {
    question: "Các thiết bị cũ (chỉ có Wi-Fi 5 hoặc Wi-Fi 6) có kết nối được vào Modem Wi-Fi 7 không?",
    answer: "Hoàn toàn tương thích ngược 100%. Mọi thiết bị điện thoại, máy tính bảng, laptop, Smart TV... đời cũ đều kết nối bình thường vào Modem Wi-Fi 7 và còn được hưởng lợi từ khả năng phát sóng khỏe hơn, ít nhiễu hơn của Modem mới.",
  },
  {
    question: "Công nghệ XGSPON của FPT Telecom là gì?",
    answer: "XGSPON là công nghệ mạng cáp quang thụ động thế hệ mới nhất với khả năng truyền tải đối xứng 10 Gbps cả chiều tải lên và tải xuống trên cùng một sợi quang đơn, vượt xa chuẩn GPON truyền thống.",
  },
  {
    question: "Quy trình đăng ký trang bị gói SpeedX Wi-Fi 7 như thế nào?",
    answer: "Quý khách chỉ cần liên hệ Hotline đăng ký 0784 930 338 hoặc để lại thông tin trên website. Chuyên viên FPT sẽ tư vấn gói cước phù hợp và đội ngũ kỹ thuật sẽ đến tận nơi bàn giao, kết nối thiết bị Modem Wi-Fi 7 XGSPON chuẩn chỉ trong vòng 24 giờ.",
  },
];
