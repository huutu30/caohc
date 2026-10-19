export interface CaNhanBanner {
  id: string;
  title: string;
  desc: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
}

export interface CaNhanPackage {
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

export interface CaNhanNeedItem {
  id: string;
  title: string;
  tag: string;
  desc: string;
  recommendedPkg: string;
  image: string;
}

export interface CaNhanWhyItem {
  title: string;
  desc: string;
  icon: string;
}

export const CA_NHAN_BANNERS: CaNhanBanner[] = [
  {
    id: "banner-vvip",
    title: "Internet Cá Nhân FPT - Tốc Độ Vượt Trội",
    desc: "Trang bị Modem Wi-Fi 6 thế hệ mới, đường truyền gigabit siêu nhanh đáp ứng mọi nhu cầu làm việc và giải trí.",
    desktopImage: "/images/ca-nhan/banner_vvip_desktop.jpg",
    mobileImage: "/images/ca-nhan/banner_vvip_mobile.jpg",
    alt: "Internet cá nhân FPT",
  },
  {
    id: "banner-hifpt",
    title: "Thanh Toán Tiện Lợi Qua Hi FPT",
    desc: "Quản lý modem, đổi mật khẩu Wi-Fi và thanh toán cước dễ dàng chỉ với một chạm trên điện thoại.",
    desktopImage: "/images/ca-nhan/banner_hifpt_desktop.jpg",
    mobileImage: "/images/ca-nhan/banner_hifpt_mobile.png",
    alt: "Ưu đãi thanh toán Hi FPT",
  },
  {
    id: "banner-gtbb",
    title: "Giới Thiệu Bạn Bè - Nhận Quà Liền Tay",
    desc: "Cùng bạn bè hòa mạng cáp quang FPT để nhận ngay nhiều phần quà tri ân hấp dẫn.",
    desktopImage: "/images/ca-nhan/banner_gtbb_desktop.jpg",
    mobileImage: "/images/ca-nhan/banner_gtbb_mobile.jpg",
    alt: "Giới thiệu bạn bè hòa mạng",
  },
];

export const CA_NHAN_PACKAGES: CaNhanPackage[] = [
  {
    id: "pkg-giga",
    name: "Internet Giga",
    speedDownload: "150 – 300 Mbps",
    speedUpload: "150 – 300 Mbps",
    price: 180000,
    originalPrice: 220000,
    badge: "Tiết kiệm nhất",
    devices: ["Modem Wi-Fi 6 AX1800GZ 2 băng tần"],
    features: [
      "Tốc độ cao 150 – 300 Mbps ổn định",
      "Phù hợp cá nhân, sinh viên, người thuê nhà",
      "Đáp ứng lướt web, học tập, xem phim Full HD mượt mà",
      "Trang bị Modem Wi-Fi 6 thế hệ mới chuẩn AX",
    ],
  },
  {
    id: "pkg-sky",
    name: "Internet Sky",
    speedDownload: "1 Gbps (1024 Mbps)",
    speedUpload: "300 Mbps",
    price: 195000,
    originalPrice: 250000,
    badge: "Bán chạy nhất",
    highlight: true,
    devices: ["Modem Wi-Fi 6 AX1800GZ 2 băng tần"],
    features: [
      "Tốc độ Download không giới hạn lên đến 1 Gbps",
      "Tải file dung lượng lớn trong vài giây",
      "Xem video 4K/8K không giật lag",
      "Khả năng kết nối cùng lúc hơn 20 thiết bị",
    ],
  },
  {
    id: "pkg-meta",
    name: "Internet Meta",
    speedDownload: "1 Gbps (1024 Mbps)",
    speedUpload: "1 Gbps (1024 Mbps)",
    price: 295000,
    originalPrice: 350000,
    badge: "Băng thông đối xứng",
    devices: ["Modem Wi-Fi 6 AX1800GZ 2 băng tần"],
    features: [
      "Tốc độ Đối Xứng 1 Gbps cả tải lên và tải xuống",
      "Chuyên dụng cho Freelancer, Designer, Streamer",
      "Độ trễ siêu thấp, tốc độ upload dữ liệu tức thì",
      "Trang bị công nghệ Wi-Fi 6 chuẩn AX",
    ],
  },
  {
    id: "pkg-fgame",
    name: "Internet F-Game",
    speedDownload: "1 Gbps (1024 Mbps)",
    speedUpload: "300 Mbps",
    price: 225000,
    originalPrice: 290000,
    badge: "Tích hợp Ultra Fast",
    devices: ["Modem Wi-Fi 6 AX1800GZ 2 băng tần"],
    features: [
      "Tích hợp độc quyền công nghệ Ultra Fast giảm ping",
      "Tối ưu đường truyền cho hơn 50+ tựa game online hot nhất",
      "Chống rớt gói (packet loss), đảm bảo combat mượt mà",
      "Tốc độ Download siêu khủng lên đến 1 Gbps",
    ],
  },
];

export const CA_NHAN_SPORTS_COMBOS: CaNhanPackage[] = [
  {
    id: "combo-giga-sport",
    name: "Combo Giga Thể Thao",
    speedDownload: "300 Mbps",
    speedUpload: "300 Mbps",
    price: 220000,
    originalPrice: 280000,
    devices: ["Modem Wi-Fi 6 AX1800GZ", "Tài khoản FPT Play VVIP"],
    features: [
      "Internet Wi-Fi 6 300 Mbps tốc độ cao",
      "Trọn vẹn 380 trận Ngoại Hạng Anh & Cúp C1",
      "Xem mượt mà trên Smart TV, máy tính bảng, điện thoại",
    ],
  },
  {
    id: "combo-sky-sport",
    name: "Combo Sky Thể Thao",
    speedDownload: "1 Gbps",
    speedUpload: "300 Mbps",
    price: 239000,
    originalPrice: 320000,
    badge: "Khuyên dùng",
    highlight: true,
    devices: ["Modem Wi-Fi 6 AX1800GZ", "Tài khoản FPT Play VVIP"],
    features: [
      "Tốc độ Download 1 Gbps cực nhanh",
      "Bản quyền phát sóng thể thao Ngoại Hạng Anh đỉnh cao",
      "Hơn 170 kênh truyền hình trong nước và quốc tế",
    ],
  },
  {
    id: "combo-meta-sport",
    name: "Combo Meta Thể Thao",
    speedDownload: "1 Gbps",
    speedUpload: "1 Gbps",
    price: 339000,
    originalPrice: 420000,
    devices: ["Modem Wi-Fi 6 AX1800GZ", "Tài khoản FPT Play VVIP"],
    features: [
      "Tốc độ Đối Xứng 1 Gbps không giới hạn",
      "Trọn vẹn thể thao đỉnh cao và kho phim bom tấn 4K",
      "Tối ưu cho gia đình và cá nhân đam mê công nghệ",
    ],
  },
];

export const CA_NHAN_NEEDS: CaNhanNeedItem[] = [
  {
    id: "need-student",
    title: "Học sinh, Sinh viên & Người ở trọ",
    tag: "Tiết kiệm & Tiện ích",
    desc: "Cần đường truyền mạng ổn định để học tập trực tuyến, giải trí cơ bản và chi phí hợp lý hàng tháng. Thủ tục đăng ký nhanh gọn chỉ cần CCCD.",
    recommendedPkg: "Gói cước Internet Giga (180.000đ/tháng)",
    image: "/images/ca-nhan/feature_canhan_1.jpg",
  },
  {
    id: "need-wfh",
    title: "Người đi làm & Làm việc tại nhà (WFH)",
    tag: "Tốc độ cao & Ổn định",
    desc: "Nhu cầu họp online qua Zoom/Meet hàng ngày, tải tài liệu nhanh, xem video 4K giải trí mượt mà sau giờ làm việc mà không lo chập chờn.",
    recommendedPkg: "Gói cước Internet Sky 1Gbps (195.000đ/tháng)",
    image: "/images/ca-nhan/feature_canhan_2.jpg",
  },
  {
    id: "need-creator",
    title: "Creator, Designer & Streamer",
    tag: "Băng thông đối xứng",
    desc: "Thường xuyên upload video độ phân giải cao lên YouTube/TikTok, sao lưu dữ liệu đám mây dung lượng lớn, cần tốc độ tải lên ngang ngửa tải xuống.",
    recommendedPkg: "Gói cước Internet Meta 1Gbps Đối Xứng (295.000đ/tháng)",
    image: "/images/ca-nhan/feature_canhan_3.jpg",
  },
  {
    id: "need-gamer",
    title: "Game thủ & Trải nghiệm thi đấu",
    tag: "Ultra Fast giảm ping",
    desc: "Đòi hỏi đường truyền phản hồi tức thì, không bị rớt gói gián đoạn giữa trận đấu rank, tối ưu cho Liên Quân, FIFA, Valorant, CS:GO...",
    recommendedPkg: "Gói cước Internet F-Game (225.000đ/tháng)",
    image: "/images/ca-nhan/feature_canhan_4.jpg",
  },
];

export const CA_NHAN_WHY_ITEMS = [
  {
    title: "Giá cước ưu đãi, tiết kiệm",
    desc: "Chỉ từ 180.000đ/tháng bạn đã sở hữu đường truyền cáp quang Wi-Fi 6 tốc độ cao, tặng thêm tháng cước khi hòa mạng trực tuyến.",
    icon: "/images/gia-dinh/exp_icon_1.png",
  },
  {
    title: "Trang bị Modem Wi-Fi 6 chuẩn AX",
    desc: "Modem thế hệ mới 2 băng tần (2.4GHz & 5GHz) tăng tốc độ kết nối, phát sóng xa và ổn định trong không gian phòng.",
    icon: "/images/gia-dinh/exp_icon_home.png",
  },
  {
    title: "Thủ tục đăng ký online đơn giản",
    desc: "Chỉ cần ảnh chụp Căn cước công dân (CCCD) hai mặt, hoàn tất đăng ký trong 3 phút mà không cần đến quầy giao dịch.",
    icon: "/images/gia-dinh/exp_icon_3.png",
  },
  {
    title: "Bàn giao thiết bị nhanh chóng 24H",
    desc: "Đội ngũ chuyên viên FPT Telecom hỗ trợ kết nối tận phòng chu đáo, kiểm tra tốc độ mạng thực tế trước khi bàn giao.",
    icon: "/images/gia-dinh/exp_icon_4.png",
  },
];

export const CA_NHAN_FAQS = [
  {
    question: "Đăng ký mạng Internet cá nhân FPT cần những thủ tục giấy tờ gì?",
    answer: "Thủ tục đăng ký rất đơn giản, quý khách chỉ cần cung cấp ảnh chụp Căn cước công dân (CCCD) còn hiệu lực. Quý khách là sinh viên hoặc người thuê trọ hoàn toàn không cần sổ hộ khẩu hay giấy tờ tạm trú.",
  },
  {
    question: "Tôi ở trọ một mình thì nên chọn gói cước nào phù hợp nhất?",
    answer: "Nếu sử dụng từ 1 - 3 thiết bị cho nhu cầu học tập, làm việc và giải trí cơ bản, gói Internet Giga (180.000đ - 190.000đ/tháng) là sự lựa chọn vừa vặn và tiết kiệm nhất. Nếu bạn có nhu cầu tải file nặng hoặc chơi game, gói Internet Sky (195.000đ/tháng) với tốc độ lên đến 1 Gbps sẽ đem lại trải nghiệm mượt mà tuyệt đối.",
  },
  {
    question: "Khi đăng ký gói cá nhân, tôi có phải trả phí mua modem không?",
    answer: "Không. Quý khách được trang bị hoàn toàn miễn phí Modem Wi-Fi 6 thế hệ mới chuẩn AX 2 băng tần trong suốt quá trình sử dụng đường truyền.",
  },
  {
    question: "Tôi có thể thanh toán cước phí hàng tháng qua những hình thức nào?",
    answer: "FPT Telecom hỗ trợ đa dạng phương thức thanh toán tiện lợi: thanh toán qua ứng dụng Hi FPT, chuyển khoản ngân hàng, ví điện tử (MoMo, ZaloPay, ShopeePay), quét mã QR hoặc đăng ký thanh toán tự động.",
  },
  {
    question: "Thời gian bàn giao và kết nối mạng mất bao lâu sau khi đăng ký?",
    answer: "Sau khi chuyên viên FPT tiếp nhận và xác nhận thông tin thành công, đội ngũ kỹ thuật sẽ tiến hành bàn giao thiết bị và kết nối mạng tận phòng cho quý khách trong vòng 24 giờ.",
  },
];
