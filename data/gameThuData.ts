export interface GameThuBanner {
  id: string;
  title: string;
  desc: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
}

export interface GameThuPackage {
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

export const GAME_THU_BANNERS: GameThuBanner[] = [
  {
    id: "banner-fgame",
    title: "Internet Game Thủ FPT - Chiến Game Siêu Mượt",
    desc: "Tích hợp công nghệ Ultra Fast giảm ping, loại bỏ giật lag, tối ưu đường truyền cho hơn 50+ tựa game online đỉnh cao.",
    desktopImage: "/images/game-thu/banner_gamethu_desktop.jpg",
    mobileImage: "/images/game-thu/banner_gamethu_mobile.jpg",
    alt: "Gói cước Internet Game thủ FPT",
  },
  {
    id: "banner-vvip-game",
    title: "Combo Thể Thao & Giải Trí VVIP",
    desc: "Vừa chiến game mượt mà vừa thưởng thức trọn vẹn 380 trận Ngoại Hạng Anh trên cùng đường truyền Wi-Fi 6.",
    desktopImage: "/images/ca-nhan/banner_vvip_desktop.jpg",
    mobileImage: "/images/ca-nhan/banner_vvip_mobile.jpg",
    alt: "Combo Net VVIP",
  },
];

export const GAME_THU_FGAME_PACKAGES: GameThuPackage[] = [
  {
    id: "pkg-fgame",
    name: "Internet F-Game",
    speedDownload: "1 Gbps (1024 Mbps)",
    speedUpload: "300 Mbps",
    price: 225000,
    originalPrice: 280000,
    badge: "Phổ biến nhất",
    highlight: true,
    devices: ["Modem Wi-Fi 6 AX1800GZ 2 băng tần"],
    features: [
      "Tích hợp độc quyền công nghệ Ultra Fast giảm ping",
      "Tốc độ Download lên đến 1 Gbps cực nhanh",
      "Tối ưu hơn 50+ game hot: Liên Quân, Tốc Chiến, LOL, Valorant, CS:GO",
      "Giảm giật lag và chống rớt gói (packet loss) vượt trội",
    ],
  },
  {
    id: "pkg-fgame-f1",
    name: "Internet F-Game F1",
    speedDownload: "1 Gbps (1024 Mbps)",
    speedUpload: "300 Mbps",
    price: 245000,
    originalPrice: 310000,
    badge: "Kèm 1 Mesh Wi-Fi 6",
    devices: ["1 Modem Wi-Fi 6", "1 Thiết bị Mesh Wi-Fi 6"],
    features: [
      "Bộ 2 thiết bị: 1 Modem Wi-Fi 6 + 1 Access Point Mesh",
      "Tích hợp Ultra Fast giảm ping cho toàn bộ phòng",
      "Phủ sóng xuyên tường, chơi game góc nào cũng mượt",
      "Chuyển vùng roaming tự động không ngắt kết nối",
    ],
  },
  {
    id: "pkg-meta-game",
    name: "Internet Meta Game",
    speedDownload: "1 Gbps (1024 Mbps)",
    speedUpload: "1 Gbps (1024 Mbps)",
    price: 295000,
    originalPrice: 360000,
    badge: "Băng thông đối xứng",
    devices: ["Modem Wi-Fi 6 AX1800GZ 2 băng tần"],
    features: [
      "Tốc độ Đối Xứng 1 Gbps cả 2 chiều Upload & Download",
      "Lý tưởng cho Streamer vừa chơi game vừa phát sóng trực tiếp",
      "Tải bản cập nhật game hàng chục GB chỉ trong 1-2 phút",
      "Độ trễ thấp, kết nối server quốc tế ổn định",
    ],
  },
];

export const SPEEDX_WIFI7_PACKAGES: GameThuPackage[] = [
  {
    id: "pkg-speedx2-pro",
    name: "FPT SpeedX2 Pro",
    speedDownload: "2 Gbps Đối Xứng",
    speedUpload: "2 Gbps Đối Xứng",
    price: 1099000,
    originalPrice: 1400000,
    badge: "Wi-Fi 7 XGSPON",
    highlight: true,
    devices: ["Modem Wi-Fi 7 XGSPON", "Hỗ trợ cổng 2.5Gbps / 10Gbps"],
    features: [
      "Tốc độ khủng 2 Gbps đối xứng tiên phong tại Việt Nam",
      "Độ trễ tiệm cận 0ms với công nghệ Multi-Link Operation (MLO)",
      "Chuyên biệt cho Game thủ thi đấu, phòng luyện tập eSports",
      "Băng thông không giới hạn mọi trận đấu rank",
    ],
  },
  {
    id: "pkg-speedx10-pro",
    name: "FPT SpeedX10 Pro",
    speedDownload: "10 Gbps Cực Đỉnh",
    speedUpload: "10 Gbps Cực Đỉnh",
    price: 1690000,
    originalPrice: 2200000,
    badge: "Đỉnh cao công nghệ",
    devices: ["Thiết bị Wi-Fi 7 XGSPON Doanh nghiệp", "Hỗ trợ IP Tĩnh"],
    features: [
      "Tốc độ 10 Gbps đối xứng – Đường truyền Internet nhanh nhất Việt Nam",
      "Chuyên dụng cho Gaming House, Studio Game, Đấu trường eSports",
      "Hạ tầng cáp quang XGSPON tương lai độc quyền từ FPT Telecom",
      "Hỗ trợ kỹ thuật VIP 1-1 chuyên biệt",
    ],
  },
];

export const ULTRA_FAST_TECH_ITEMS = [
  {
    title: "Trí tuệ nhân tạo (AI) nhận diện gói tin game",
    desc: "Hệ thống tự động phát hiện luồng dữ liệu game và ưu tiên truyền tải trên làn đường riêng biệt với độ ưu tiên cao nhất.",
    image: "/images/game-thu/feature_gamethu_1.jpg",
  },
  {
    title: "Định tuyến tối ưu đến 50+ máy chủ game",
    desc: "Kết nối trực tiếp với các nhà phát hành game lớn như Riot Games, Garena, Steam, Mihoyo, VNG giúp giảm ping từ 10ms - 16ms.",
    image: "/images/game-thu/feature_gamethu_2.jpg",
  },
  {
    title: "Chống rớt gói (Packet Loss) tuyệt đối",
    desc: "Loại bỏ hoàn toàn hiện tượng 'teleport', giật lag, mất phản hồi trong các pha combat quyết định của trận đấu rank.",
    image: "/images/game-thu/feature_gamethu_3.jpg",
  },
];

export const GAME_THU_FAQS = [
  {
    question: "Tính năng Ultra Fast trong gói F-Game hoạt động như thế nào?",
    answer: "Ultra Fast là tính năng độc quyền của FPT Telecom ứng dụng công nghệ Trí tuệ Nhân tạo (AI) và Dữ liệu lớn (Big Data). Tính năng này tự động nhận diện gói tin khi bạn chơi game và ưu tiên truyền trên đường truyền tối ưu nhất đến thẳng máy chủ game, giúp hạ ping và chống giật lag tức thì.",
  },
  {
    question: "Tôi có cần cài đặt phần mềm nào trên máy tính hay điện thoại để dùng Ultra Fast không?",
    answer: "Hoàn toàn không. Tính năng Ultra Fast được tích hợp trực tiếp trên hệ thống đường truyền của FPT Telecom. Bạn chỉ cần kết nối vào mạng Wi-Fi hoặc cắm dây LAN là tính năng sẽ tự động kích hoạt khi bạn mở game.",
  },
  {
    question: "Gói F-Game hỗ trợ những tựa game online nào?",
    answer: "Ultra Fast hỗ trợ hơn 50+ tựa game phổ biến nhất hiện nay trên cả PC, Mobile và Console: Liên Quân Mobile, Tốc Chiến, PUBG Mobile, Free Fire, Liên Minh Huyền Thoại (LOL), Valorant, CS:GO, FIFA Online 4 (FC Online), Genshin Impact, Dota 2...",
  },
  {
    question: "Streamer vừa live vừa chơi game nặng thì nên chọn gói cước nào?",
    answer: "Với các bạn Streamer hoặc Creator, gói Internet Meta (1 Gbps đối xứng cả chiều tải lên và tải xuống) hoặc gói SpeedX2 Pro (Wi-Fi 7 XGSPON 2 Gbps) là sự lựa chọn hoàn hảo để vừa phát sóng livestream 4K ở bitrate cao vừa chơi game không bị delay.",
  },
];
