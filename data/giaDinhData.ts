export interface GiaDinhBanner {
  id: string;
  title: string;
  desc: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
}

export interface GiaDinhPackage {
  id: string;
  name: string;
  speedDownload: string;
  speedUpload: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  devices: string[];
  features: string[];
  highlight?: boolean;
}

export interface HousingNeedItem {
  type: string;
  title: string;
  desc: string;
  area: string;
  recommendedPkg: string;
  image: string;
}

export interface WhyChooseFptItem {
  title: string;
  desc: string;
  icon: string;
}

export const GIA_DINH_BANNERS: GiaDinhBanner[] = [
  {
    id: "banner-vvip",
    title: "Combo Internet Truyền Hình VVIP FPT",
    desc: "Trọn vẹn giải trí đỉnh cao cùng gia đình với gói thể thao bản quyền và đường truyền Wi-Fi 6 siêu tốc.",
    desktopImage: "/images/gia-dinh/banner_combo_vvip_desktop.jpg",
    mobileImage: "/images/gia-dinh/banner_combo_vvip_mobile.jpg",
    alt: "Internet gia đình - Combo VVIP",
  },
  {
    id: "banner-gioi-thieu",
    title: "Giới Thiệu Bạn Bè - Mở Lối Ưu Đãi",
    desc: "Nhận thêm nhiều phần quà và ưu đãi cước hấp dẫn khi giới thiệu người thân hòa mạng mới FPT.",
    desktopImage: "/images/gia-dinh/banner_gioi_thieu_desktop.jpg",
    mobileImage: "/images/gia-dinh/banner_gioi_thieu_mobile.jpg",
    alt: "Giới thiệu bạn bè",
  },
  {
    id: "banner-loyalty",
    title: "Khách Hàng Thân Thiết FPT Telecom",
    desc: "Đặc quyền chăm sóc tận tâm và hàng ngàn điểm thưởng đổi quà hấp dẫn trên ứng dụng Hi FPT.",
    desktopImage: "/images/gia-dinh/banner_loyalty_desktop.jpg",
    mobileImage: "/images/gia-dinh/banner_loyalty_mobile.jpg",
    alt: "Khách hàng thân thiết Hi FPT",
  },
];

export const GIA_DINH_VVIP_COMBOS: GiaDinhPackage[] = [
  {
    id: "combo-giga-vvip",
    name: "Combo Giga - V.VIP",
    speedDownload: "300 Mbps",
    speedUpload: "300 Mbps",
    price: 220000,
    originalPrice: 280000,
    devices: ["Modem Wi-Fi 6 AX1800GZ", "Tài khoản FPT Play VVIP"],
    features: [
      "Đường truyền tốc độ 300 Mbps ổn định",
      "Trọn vẹn 380 trận Ngoại Hạng Anh & Cúp C1",
      "Xem cùng lúc trên 5 thiết bị (Smart TV, Điện thoại...)",
      "Trang bị Modem Wi-Fi 6 thế hệ mới chuẩn AX",
    ],
  },
  {
    id: "combo-sky-vvip",
    name: "Combo Sky - V.VIP",
    speedDownload: "1 Gbps",
    speedUpload: "300 Mbps",
    price: 239000,
    originalPrice: 320000,
    badge: "Phổ biến nhất",
    highlight: true,
    devices: ["Modem Wi-Fi 6 AX1800GZ", "Tài khoản FPT Play VVIP"],
    features: [
      "Tốc độ Download không giới hạn lên đến 1 Gbps",
      "Thưởng thức trọn vẹn giải Ngoại Hạng Anh & Phim 4K",
      "Khả năng chịu tải trên 30 thiết bị kết nối cùng lúc",
      "Tối ưu băng thông xem truyền hình và chơi game mượt mà",
    ],
  },
  {
    id: "combo-meta-vvip",
    name: "Combo Meta - V.VIP",
    speedDownload: "1 Gbps",
    speedUpload: "1 Gbps",
    price: 339000,
    originalPrice: 420000,
    devices: ["Modem Wi-Fi 6 AX1800GZ", "Tài khoản FPT Play VVIP"],
    features: [
      "Tốc độ Đối Xứng 1 Gbps cả tải lên và tải xuống",
      "Chuyên dụng cho gia đình sáng tạo nội dung, livestream",
      "Xem Ngoại Hạng Anh và hàng trăm kênh truyền hình đặc sắc",
      "Độ trễ ping cực thấp, không giật lag",
    ],
  },
  {
    id: "combo-speedx1-vvip",
    name: "Combo SpeedX1 - V.VIP",
    speedDownload: "1 Gbps",
    speedUpload: "1 Gbps",
    price: 369000,
    originalPrice: 480000,
    badge: "Wi-Fi 7 XGSPON",
    devices: ["Modem Wi-Fi 7 XGSPON", "Tài khoản FPT Play VVIP"],
    features: [
      "Công nghệ Wi-Fi 7 mới nhất với độ trễ cực thấp",
      "Băng thông khổng lồ, công nghệ XGSPON tiên phong",
      "Kho phim điện ảnh bom tấn và thể thao đỉnh cao",
      "Trải nghiệm giải trí chuẩn rạp tại gia",
    ],
  },
  {
    id: "combo-lux800-vvip",
    name: "Combo Lux 800 - V.VIP",
    speedDownload: "800 Mbps",
    speedUpload: "800 Mbps",
    price: 1030000,
    originalPrice: 1300000,
    devices: ["2 Thiết bị Ultra Wi-Fi 6 cao cấp", "Tài khoản FPT Play VVIP"],
    features: [
      "Gói cước cao cấp dành riêng cho biệt thự và gia đình lớn",
      "2 thiết bị Ultra Wi-Fi 6 phủ sóng không góc chết",
      "Ưu tiên đường truyền quốc tế và hỗ trợ kỹ thuật chuyên biệt",
      "Tặng kèm gói bảo mật F-Safe độc quyền",
    ],
  },
];

export const GIA_DINH_MESH_PACKAGES: GiaDinhPackage[] = [
  {
    id: "pkg-giga-f1",
    name: "Internet Giga F1",
    speedDownload: "300 Mbps",
    speedUpload: "300 Mbps",
    price: 205000,
    originalPrice: 250000,
    devices: ["1 Modem Wi-Fi 6", "1 Thiết bị Mesh Wi-Fi 6"],
    features: [
      "Tốc độ cao 300 Mbps trong nước",
      "Bao gồm 1 Modem chính + 1 bộ phát phụ Mesh",
      "Mở rộng vùng phủ sóng cho nhà 2 tầng hoặc căn hộ 70-90m²",
      "Tự động chuyển vùng roaming mượt mà khi di chuyển",
    ],
  },
  {
    id: "pkg-sky-f1",
    name: "Internet Sky F1",
    speedDownload: "1 Gbps",
    speedUpload: "300 Mbps",
    price: 210000,
    originalPrice: 270000,
    badge: "Khuyên dùng",
    highlight: true,
    devices: ["1 Modem Wi-Fi 6", "1 Thiết bị Mesh Wi-Fi 6"],
    features: [
      "Tốc độ Download lên đến 1 Gbps cực nhanh",
      "Trang bị trọn bộ 1 Modem Wi-Fi 6 + 1 Mesh Wi-Fi 6",
      "Phủ sóng xuyên sàn, phủ kín diện tích 80-120m²",
      "Kết nối đồng thời hơn 40 thiết bị điện thoại, laptop, tivi",
    ],
  },
  {
    id: "pkg-sky-f2",
    name: "Internet Sky F2",
    speedDownload: "1 Gbps",
    speedUpload: "300 Mbps",
    price: 230000,
    originalPrice: 300000,
    devices: ["1 Modem Wi-Fi 6", "2 Thiết bị Mesh Wi-Fi 6"],
    features: [
      "Tốc độ Download 1 Gbps siêu tốc",
      "Bộ 3 thiết bị: 1 Modem Wi-Fi 6 + 2 Thiết bị Mesh Wi-Fi 6",
      "Phủ sóng trọn vẹn nhà phố 3-4 tầng không góc chết",
      "Loại bỏ hoàn toàn hiện tượng sóng yếu hoặc mất kết nối",
    ],
  },
  {
    id: "pkg-meta-f1",
    name: "Internet Meta F1",
    speedDownload: "1 Gbps",
    speedUpload: "1 Gbps",
    price: 315000,
    originalPrice: 390000,
    devices: ["1 Modem Wi-Fi 6", "1 Thiết bị Mesh Wi-Fi 6"],
    features: [
      "Tốc độ Đối Xứng 1 Gbps cả 2 chiều Upload & Download",
      "1 Modem chính + 1 Access Point Mesh Wi-Fi 6",
      "Phù hợp gia đình làm việc từ xa, họp trực tuyến, tải file nặng",
      "Đường truyền ổn định, thông suốt 24/7",
    ],
  },
];

export const HOUSING_NEEDS: HousingNeedItem[] = [
  {
    type: "apartment",
    title: "Căn Hộ Chung Cư",
    desc: "Không gian nhiều phòng ngủ, tường bê tông ngăn sóng. Đề xuất gói trang bị thêm thiết bị phụ Mesh đặt tại phòng ngủ master.",
    area: "Diện tích: 60m² – 100m²",
    recommendedPkg: "Gói Giga F1 hoặc Sky F1",
    image: "/images/gia-dinh/feature_giadinh_1.jpg",
  },
  {
    type: "townhouse",
    title: "Nhà Phố Nhiều Tầng",
    desc: "Cần phủ sóng xuyên sàn giữa các tầng. Hệ thống Wi-Fi 6 Mesh giúp bạn di chuyển giữa các tầng mà mạng không bị gián đoạn.",
    area: "Nhà 2 – 4 tầng (120m² – 250m²)",
    recommendedPkg: "Gói Sky F1 hoặc Sky F2",
    image: "/images/gia-dinh/feature_giadinh_2.jpg",
  },
  {
    type: "villa",
    title: "Biệt Thự & Sân Vườn Rộng",
    desc: "Diện tích lớn, nhiều thiết bị thông minh Smart Home. Yêu cầu hệ thống Ultra Wi-Fi 6 hoặc Wi-Fi 7 XGSPON công suất cao.",
    area: "Khuôn viên trên 250m²",
    recommendedPkg: "Gói Meta F1 hoặc Lux 800",
    image: "/images/gia-dinh/feature_giadinh_3.jpg",
  },
];

export const WHY_CHOOSE_GIA_DINH: WhyChooseFptItem[] = [
  {
    title: "Tốc độ cao không giới hạn",
    desc: "Hạ tầng cáp quang thế hệ mới với băng thông tải xuống lên đến 1 Gbps, đáp ứng nhu cầu xem phim 4K/8K, làm việc và giải trí cùng lúc.",
    icon: "/images/gia-dinh/exp_icon_1.png",
  },
  {
    title: "Trang bị Modem Wi-Fi 6 thế hệ mới",
    desc: "Chuẩn AX tiên tiến tăng tốc độ gấp 3 lần, giảm độ trễ 80%, công nghệ Mesh kết nối mượt mà cho toàn bộ thành viên trong gia đình.",
    icon: "/images/gia-dinh/exp_icon_home.png",
  },
  {
    title: "Tích hợp tính năng an toàn F-Safe",
    desc: "Tự động ngăn chặn các trang web độc hại, bảo vệ dữ liệu cá nhân của các thiết bị Smart Home và quản lý thời gian sử dụng của con nhỏ.",
    icon: "/images/gia-dinh/exp_icon_3.png",
  },
  {
    title: "Chăm sóc chu đáo & Bàn giao tận nơi",
    desc: "Đội ngũ chuyên viên FPT Telecom sẵn sàng tư vấn, bàn giao thiết bị tận nhà nhanh chóng và hướng dẫn quản lý mạng qua ứng dụng Hi FPT.",
    icon: "/images/gia-dinh/exp_icon_4.png",
  },
];

export const GIA_DINH_FAQS = [
  {
    question: "Gia đình tôi nên chọn gói cước nào để cả nhà dùng thoải mái?",
    answer: "Đối với gia đình từ 3 - 6 thành viên sử dụng từ 10 - 25 thiết bị (điện thoại, máy tính, Smart TV, Camera), gói Combo Sky V.VIP (1 Gbps) hoặc gói Internet Sky F1 (có sẵn 1 thiết bị Mesh mở rộng sóng) là lựa chọn tối ưu nhất về cả chi phí và tốc độ.",
  },
  {
    question: "Thiết bị Wi-Fi Mesh khác gì so với kích sóng Wi-Fi thông thường?",
    answer: "Thiết bị Mesh Wi-Fi 6 của FPT đồng bộ cùng 1 tên Wi-Fi và mật khẩu duy nhất với Modem chính. Khi bạn di chuyển giữa các phòng hoặc các tầng, điện thoại sẽ tự động kết nối vào điểm phát mạnh nhất mà không bị ngắt quãng cuộc gọi hay đứng hình video.",
  },
  {
    question: "Gói Combo VVIP FPT có bao gồm bản quyền giải bóng đá Ngoại Hạng Anh không?",
    answer: "Có. Toàn bộ các gói Combo VVIP đều được tích hợp tài khoản FPT Play gói VVIP, sở hữu bản quyền phát sóng trọn vẹn 380 trận đấu Ngoại Hạng Anh, Cúp C1 UEFA Champions League cùng hơn 170 kênh truyền hình trong nước và quốc tế.",
  },
  {
    question: "Thời gian đăng ký và bàn giao thiết bị mạng cho gia đình mất bao lâu?",
    answer: "Sau khi quý khách đăng ký qua website hoặc Hotline 0902.184.284, chuyên viên FPT sẽ liên hệ hoàn tất thủ tục online nhanh chóng. Đội ngũ kỹ thuật sẽ tiến hành bàn giao, kết nối và hướng dẫn sử dụng tận nhà trong vòng 24 giờ.",
  },
  {
    question: "Tôi có được miễn phí thiết bị Modem Wi-Fi 6 khi đăng ký không?",
    answer: "Có. Tất cả khách hàng đăng ký hòa mạng mới các gói cước gia đình FPT đều được trang bị miễn phí Modem Wi-Fi 6 thế hệ mới chuẩn AX 2 băng tần trong suốt quá trình sử dụng dịch vụ.",
  },
];
