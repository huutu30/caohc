export interface CameraBanner {
  id: string;
  title: string;
  desc: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
}

export interface CameraDevice {
  id: string;
  name: string;
  type: "indoor" | "outdoor" | "combo";
  typeLabel: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  specs: {
    resolution: string;
    viewAngle: string;
    storage: string;
    nightVision: string;
    weatherProof?: string;
    audio: string;
  };
  features: string[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
}

export interface TechFeature {
  id: string;
  title: string;
  icon: string;
  bullets: string[];
}

export interface CloudStoragePlan {
  id: string;
  name: string;
  days: number;
  price: number;
  badge?: string;
  features: string[];
  recommended?: boolean;
}

export interface AwardItem {
  id: string;
  title: string;
  desc: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// 1. BANNER CAROUSEL
export const CAMERA_BANNERS: CameraBanner[] = [
  {
    id: "banner-mon-qua-an-tam",
    title: "Camera FPT - Món Quà An Tâm Cho Mọi Gia Đình",
    desc: "Giám sát thông minh với công nghệ AI nhận diện người, độ trễ bằng 0, lưu trữ đám mây bảo mật tuyệt đối.",
    desktopImage: "/images/camera/banner_mon_qua_an_tam_desktop.jpg",
    mobileImage: "/images/camera/banner_mon_qua_an_tam_mobile.jpg",
    alt: "Camera 2 - Món quà An Tâm",
  },
  {
    id: "banner-cloud-an-tam",
    title: "Gói Lưu Trữ Cloud An Tâm - Bảo Mật Đỉnh Cao",
    desc: "Dữ liệu được lưu trữ trực tiếp tại Data Center FPT chuẩn quốc tế Tier III, không lo mất mát dữ liệu.",
    desktopImage: "/images/camera/banner_cloud_an_tam_desktop.jpg",
    mobileImage: "/images/camera/banner_cloud_an_tam_mobile.jpg",
    alt: "Camera 1 - Cloud An Tâm",
  },
  {
    id: "banner-nang-cap-200k",
    title: "Ưu Đãi Trang Bị Camera AI FPT",
    desc: "Trang bị Camera AI thế hệ mới với chi phí cực kỳ ưu đãi, bàn giao và hướng dẫn tận nơi chu đáo.",
    desktopImage: "/images/camera/banner_nang_cap_200k_desktop.jpg",
    mobileImage: "/images/camera/banner_nang_cap_200k_mobile.jpg",
    alt: "Nâng cấp camera AI - Danh mục Camera",
  },
  {
    id: "banner-ai-awards",
    title: "Bình Chọn FPT Camera AI - Đẳng Cấp Công Nghệ",
    desc: "Tự hào sản phẩm an ninh công nghệ số Make in Vietnam đạt nhiều giải thưởng danh giá trong và ngoài nước.",
    desktopImage: "/images/camera/banner_ai_awards_desktop.jpg",
    mobileImage: "/images/camera/banner_ai_awards_mobile.jpg",
    alt: "Bình chọn FPT Camera AI",
  },
];

// 2. THIẾT BỊ BÁN CHẠY NHẤT (CAMERA HARDWARE & COMBOS)
export const CAMERA_DEVICES: CameraDevice[] = [
  {
    id: "cam-play4",
    name: "Camera Play 4",
    type: "indoor",
    typeLabel: "Camera Trong Nhà",
    price: 500000,
    originalPrice: 800000,
    image: "/images/camera_play4.webp",
    badge: "Bán chạy nhất",
    specs: {
      resolution: "2K+ Siêu Nét (3MP)",
      viewAngle: "Xoay ngang 315°, dọc 35°",
      storage: "Cloud FPT / Bộ nhớ an toàn",
      nightVision: "Hồng ngoại thông minh, không chói",
      audio: "Đàm thoại 2 chiều trực tiếp",
    },
    features: [
      "Độ phân giải 3MP (2K+) hình ảnh sắc nét, trung thực",
      "Xoay linh hoạt 360°, bao quát toàn bộ không gian phòng",
      "AI nhận diện khuôn mặt và phân biệt chuyển động con người",
      "Đàm thoại 2 chiều to rõ, tích hợp nút gọi nhanh trên thân cam",
      "Lưu trữ đám mây Cloud chuẩn Tier III bảo mật tuyệt đối",
    ],
  },
  {
    id: "cam-iq4s",
    name: "Camera IQ4S",
    type: "outdoor",
    typeLabel: "Camera Ngoài Trời",
    price: 500000,
    originalPrice: 900000,
    image: "/images/camera_iq4s.webp",
    badge: "Chống nước IP67",
    specs: {
      resolution: "2K+ Cao Cấp (3MP)",
      viewAngle: "Góc rộng 107° bao quát",
      storage: "Cloud FPT / Bộ nhớ an toàn",
      nightVision: "Có màu ban đêm (Color Night Vision)",
      weatherProof: "Chuẩn chống nước chống bụi IP67",
      audio: "Còi hú & Đèn rọi cảnh báo chủ động",
    },
    features: [
      "Chuẩn kháng nước kháng bụi IP67 bền bỉ trước mọi thời tiết",
      "Quan sát ban đêm có màu rực rỡ và hồng ngoại tầm xa 30m",
      "Khoanh vùng cảnh báo thông minh, phát hiện người chuẩn xác",
      "Đèn rọi Spotlight và còi hú cảnh báo xua đuổi kẻ lạ tự động",
      "Vỏ hợp kim bền bỉ, tản nhiệt tốt, hoạt động bền bỉ",
    ],
  },
  {
    id: "combo-2-cam",
    name: "Combo 2 Camera (Trong - Ngoài)",
    type: "combo",
    typeLabel: "Bộ 2 Camera",
    price: 1000000,
    originalPrice: 1600000,
    image: "/images/combo_2cam_trong_ngoai.webp",
    badge: "Tiết kiệm 600K",
    specs: {
      resolution: "2K+ Toàn diện",
      viewAngle: "Bao quát trong & ngoài",
      storage: "Cloud FPT bảo mật",
      nightVision: "Hồng ngoại & Có màu ban đêm",
      weatherProof: "1 Cam chuẩn IP67 ngoài trời",
      audio: "Đàm thoại 2 chiều & Cảnh báo",
    },
    features: [
      "Bộ gồm: 1 Camera Play 4 (trong nhà) + 1 Camera IQ4S (ngoài trời)",
      "Giải pháp bảo vệ toàn diện từ cổng nhà đến phòng khách",
      "Quản lý đồng thời 2 mắt cam trên cùng một ứng dụng FPT Camera",
      "Lưu trữ đám mây máy chủ đặt tại Việt Nam an toàn",
    ],
  },
  {
    id: "combo-3-play4",
    name: "Combo 3 Camera Play 4",
    type: "combo",
    typeLabel: "Bộ 3 Camera Trong Nhà",
    price: 1500000,
    originalPrice: 2200000,
    image: "/images/combo_3cam_trong_nha.webp",
    badge: "Ưa chuộng",
    specs: {
      resolution: "2K+ Chuẩn 3MP",
      viewAngle: "Xoay linh hoạt từng phòng",
      storage: "Cloud FPT đa luồng",
      nightVision: "Hồng ngoại rõ nét",
      audio: "Đàm thoại 2 chiều từng phòng",
    },
    features: [
      "Bộ 3 Camera Play 4 phù hợp nhà phố nhiều tầng hoặc căn hộ nhiều phòng",
      "Giám sát phòng khách, phòng ngủ trẻ em và khu vực sinh hoạt chung",
      "Tính năng đàm thoại 2 chiều trò chuyện nhanh với con nhỏ và người lớn tuổi",
      "Xem đồng thời 3 camera trên cùng một màn hình điện thoại mượt mà",
    ],
  },
  {
    id: "combo-3-iq4s",
    name: "Combo 3 Camera IQ4S",
    type: "combo",
    typeLabel: "Bộ 3 Camera Ngoài Trời",
    price: 1500000,
    originalPrice: 2400000,
    image: "/images/combo_3cam_ngoai_troi.webp",
    badge: "Chống nước toàn diện",
    specs: {
      resolution: "2K+ Sắc nét",
      viewAngle: "Góc rộng bao quát sân vườn",
      storage: "Cloud an tâm Tier III",
      nightVision: "Quan sát có màu ban đêm",
      weatherProof: "Chống nước IP67 cả 3 cam",
      audio: "Còi hú cảnh báo xua đuổi",
    },
    features: [
      "Bộ 3 Camera IQ4S chống chịu mưa nắng khắc nghiệt chuẩn IP67",
      "Bao quát cổng chính, sân trước, ban công, sân thượng và hành lang",
      "Tính năng cảnh báo xâm nhập đèn rọi và còi báo động thông minh",
      "Lưu trữ đám mây an toàn, không lo bị tháo trộm hoặc phá hoại thẻ nhớ",
    ],
  },
  {
    id: "combo-3-mix",
    name: "Combo 3 Camera (1 Play 4 + 2 IQ4S)",
    type: "combo",
    typeLabel: "Bộ 3 Camera Hỗn Hợp",
    price: 1150000,
    originalPrice: 1900000,
    image: "/images/combo_3cam_1trong_2ngoai.webp",
    badge: "Giá siêu sốc",
    specs: {
      resolution: "2K+ Đỉnh cao",
      viewAngle: "Trong nhà xoay & Ngoài trời rộng",
      storage: "Cloud FPT",
      nightVision: "Đêm sắc nét cả 3 mắt cam",
      weatherProof: "2 Cam ngoài trời IP67",
      audio: "Đàm thoại & Còi cảnh báo",
    },
    features: [
      "Cấu hình tối ưu: 1 camera trong phòng khách + 2 camera ngoài cổng và sân sau",
      "Giải pháp an ninh cân bằng hoàn hảo cho gia đình nhà phố và biệt thự liền kề",
      "Độ phân giải 2K+ hiển thị chi tiết khuôn mặt và biển số xe rõ nét",
      "Ứng dụng FPT Camera hỗ trợ xem đa khung hình cùng lúc không giật lag",
    ],
  },
  {
    id: "combo-5-cam",
    name: "Combo 5 Camera (2 Play 4 + 3 IQ4S)",
    type: "combo",
    typeLabel: "Hệ Thống 5 Camera Toàn Diện",
    price: 2500000,
    originalPrice: 3800000,
    image: "/images/combo_5cam_2trong_3ngoai.webp",
    badge: "Trọn gói biệt thự / Cửa hàng",
    specs: {
      resolution: "2K+ Đồng bộ 5 thiết bị",
      viewAngle: "Không góc chết toàn khuôn viên",
      storage: "Hạ tầng Cloud không giới hạn",
      nightVision: "Hồng ngoại & LED đêm",
      weatherProof: "3 Cam chuẩn IP67 cao cấp",
      audio: "Đàm thoại & Báo động đa vùng",
    },
    features: [
      "Giải pháp an ninh trọn gói cho nhà phố lớn, biệt thự sân vườn, chuỗi cửa hàng, văn phòng",
      "2 camera trong nhà xoay 360° + 3 camera ngoài trời chống nước IP67 phủ kín mọi góc quan sát",
      "Hệ thống phân quyền truy cập đa tài khoản cho các thành viên trong gia đình hoặc quản lý",
      "Đường truyền ổn định, lưu trữ máy chủ Cloud tại Việt Nam không lo đứt cáp quang biển",
    ],
  },
];

// 3. VÌ SAO NÊN CHỌN FPT CAMERA (4 TRỤ CỘT GIÁ TRỊ)
export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: "made-in-vietnam",
    title: "Giải pháp Camera AI - Made in Vietnam",
    desc: "FPT Telecom tự hào tiên phong phát triển các dòng camera AI với giải pháp an ninh toàn diện. Nhờ hệ thống Server đặt trực tiếp tại Việt Nam, luồng dữ liệu hình ảnh được truyền tải với độ trễ gần như bằng 0, đảm bảo tính bảo mật tuyệt đối cho gia đình và doanh nghiệp.",
    image: "/images/camera/fpt_camera_make_in_vietnam.jpg",
    alt: "Made by FPT, Made in Vietnam",
  },
  {
    id: "ai-smart-alerts",
    title: "Camera AI thông minh - Cảnh báo chuẩn xác",
    desc: "Sở hữu khả năng nhận diện khuôn mặt và phát hiện chuyển động chuẩn xác. Dữ liệu được lưu trữ an toàn trên hệ thống Cloud Server chuẩn Data Center Tier III, loại bỏ hoàn toàn rủi ro mất mát dữ liệu do hỏng thẻ nhớ hoặc kẻ gian tháo trộm.",
    image: "/images/camera/why_image_02.png",
    alt: "Ứng dụng công nghệ AI tiên tiến",
  },
  {
    id: "fpt-camera-agent",
    title: "FPT Camera Agent (FCA)",
    desc: "FPT Camera Agent (FCA) là giải pháp phần mềm thông minh độc quyền giúp nâng cấp các dòng camera cơ bản thành hệ thống Camera an ninh AI với các thuật toán phân tích hành vi và cảnh báo chủ động vượt trội.",
    image: "/images/camera/why_image_03.png",
    alt: "FPT Camera Agent",
  },
  {
    id: "professional-service",
    title: "Đồng hành tận tâm & Bảo hành chu đáo",
    desc: "An tâm tuyệt đối với đội ngũ kỹ thuật FPT chuyên nghiệp bàn giao thiết bị tận nhà, hỗ trợ đồng hành chu đáo và chính sách bảo hành chính hãng đổi mới thiết bị trong vòng 24 tháng.",
    image: "/images/camera/why_image_04.png",
    alt: "Dịch vụ CSKH FPT Telecom",
  },
];

// 4. TRẢI NGHIỆM ỨNG DỤNG FPT CAMERA (APP FEATURES)
export const CAMERA_APP_FEATURES = [
  {
    title: "Đàm thoại 2 chiều trực tiếp",
    desc: "Trò chuyện trực tiếp với người thân ở nhà hoặc nhắc nhở từ xa thông qua micro và loa tích hợp trên ứng dụng.",
  },
  {
    title: "Cảnh báo tức thì kèm hình ảnh",
    desc: "Nhận thông báo đẩy (push notification) trên điện thoại ngay khi phát hiện chuyển động có người xuất hiện.",
  },
  {
    title: "Tìm kiếm sự kiện thông minh",
    desc: "Phân loại các đoạn video theo sự kiện có người hoặc chuyển động, giúp bạn tìm lại khoảnh khắc quan trọng trong vài giây.",
  },
  {
    title: "Phân quyền chia sẻ linh hoạt",
    desc: "Dễ dàng phân quyền cho từng thành viên trong gia đình theo dõi camera theo mức độ cho phép hoặc giới hạn.",
  },
];

// 5. CÔNG NGHỆ NỔI BẬT (4 CARDS GRID)
export const CAMERA_TECH_FEATURES: TechFeature[] = [
  {
    id: "tech-ai",
    title: "Nhận diện thông minh (AI)",
    icon: "/images/camera_icon_01.svg",
    bullets: [
      "Nhận diện <strong>khuôn mặt</strong> (người quen, người lạ)",
      "Phân biệt chuẩn xác giữa người và vật nuôi, giảm tối đa báo động giả",
      "Khoanh vùng cảnh báo chuyển động theo khu vực mong muốn",
      "Hàng rào ảo thông minh cảnh báo xâm nhập chủ động",
    ],
  },
  {
    id: "tech-audio",
    title: "Giao tiếp 2 chiều – Cảnh báo chủ động",
    icon: "/images/camera_icon_02.svg",
    bullets: [
      "Nút bấm đa năng trên thân cam, trò chuyện trực tiếp <strong>2 chiều</strong>",
      "Âm thanh to rõ, khử nhiễu và lọc tiếng ồn xung quanh",
      "Đèn rọi Spotlight trợ sáng và xua đuổi kẻ gian",
      "Loa còi báo động kích hoạt tự động khi có xâm nhập trái phép",
    ],
  },
  {
    id: "tech-sharp",
    title: "Hình ảnh sắc nét – Quan sát toàn cảnh 360°",
    icon: "/images/camera_icon_03.svg",
    bullets: [
      "Độ phân giải <strong>3MP (2K+)</strong> siêu sắc nét từng chi tiết",
      "Ống kính góc rộng 4.0mm bao quát tối đa",
      "Xoay linh hoạt: 315° ngang – 35° dọc không góc chết",
      "Chế độ ban đêm hồng ngoại, LED không màu, không gây chói mắt",
    ],
  },
  {
    id: "tech-cloud",
    title: "Lưu trữ kép – An tâm xuyên suốt, xem mọi lúc",
    icon: "/images/camera_icon_04.svg",
    bullets: [
      "Lưu trữ đám mây Cloud hoặc bộ nhớ an toàn liên tục",
      "Không lo hỏng thẻ nhớ, cháy nổ hay bị đánh cắp thiết bị",
      "Mã hóa dữ liệu đầu cuối bảo mật tuyệt đối",
      "Xem trực tiếp và xem lại mọi lúc, mọi nơi trên đa thiết bị",
    ],
  },
];

// 6. BẢNG GÓI CƯỚC LƯU TRỮ CLOUD
export const CAMERA_CLOUD_PLANS: CloudStoragePlan[] = [
  {
    id: "cloud-3d",
    name: "Gói Cloud 3 Ngày",
    days: 3,
    price: 22000,
    features: [
      "Lưu trữ và xem lại video 3 ngày gần nhất",
      "Độ phân giải Full HD / 2K sắc nét",
      "Tải video về điện thoại không giới hạn",
      "Bảo mật tại Data Center FPT chuẩn Tier III",
      "Độ trễ gần như bằng 0",
    ],
  },
  {
    id: "cloud-7d",
    name: "Gói Cloud 7 Ngày",
    days: 7,
    price: 44000,
    badge: "Phổ biến nhất",
    recommended: true,
    features: [
      "Lưu trữ và xem lại video 7 ngày gần nhất",
      "Độ phân giải Full HD / 2K sắc nét",
      "Tải video về điện thoại không giới hạn",
      "Bảo mật tại Data Center FPT chuẩn Tier III",
      "AI nhận diện người và lọc sự kiện thông minh",
      "Độ trễ gần như bằng 0",
    ],
  },
  {
    id: "cloud-14d",
    name: "Gói Cloud 14 Ngày",
    days: 14,
    price: 66000,
    features: [
      "Lưu trữ và xem lại video 14 ngày gần nhất",
      "Độ phân giải Full HD / 2K sắc nét",
      "Tải video về điện thoại không giới hạn",
      "Bảo mật tại Data Center FPT chuẩn Tier III",
      "AI nhận diện người và lọc sự kiện thông minh",
      "An tâm khi đi công tác, du lịch dài ngày",
    ],
  },
  {
    id: "cloud-30d",
    name: "Gói Cloud 30 Ngày",
    days: 30,
    price: 99000,
    badge: "Lưu trữ tối đa",
    features: [
      "Lưu trữ và xem lại trọn vẹn 30 ngày gần nhất",
      "Độ phân giải Full HD / 2K sắc nét",
      "Tải video về điện thoại không giới hạn",
      "Bảo mật tại Data Center FPT chuẩn Tier III",
      "AI nhận diện người và lọc sự kiện thông minh",
      "Phù hợp cho cửa hàng kinh doanh, văn phòng",
    ],
  },
];

// 7. VINH DANH CHẤT LƯỢNG & CÔNG NGHỆ (8 GIẢI THƯỞNG)
export const CAMERA_AWARDS: AwardItem[] = [
  {
    id: "award-tech2024",
    title: "ASIAN TECHNOLOGY EXCELLENCE AWARDS 2024",
    desc: "Sản phẩm an ninh, an toàn ứng dụng AI xuất sắc khu vực Châu Á",
    image: "/images/cert_tech2024.webp",
  },
  {
    id: "award-saokhue2025",
    title: "GIẢI THƯỞNG SAO KHUÊ 2025",
    desc: "FPT Camera Agent (FCA) – Top 10 giải thưởng Sao Khuê danh giá",
    image: "/images/cert_saokhue2025.webp",
  },
  {
    id: "award-asian2024",
    title: "CHẤT LƯỢNG DỊCH VỤ HÀI LÒNG NHẤT",
    desc: "Giải thưởng quốc tế ghi nhận sự hài lòng của khách hàng 4 lần liên tiếp",
    image: "/images/cert_asian_2024.webp",
  },
  {
    id: "award-saokhue2024-retail",
    title: "GIẢI THƯỞNG SAO KHUÊ 2024",
    desc: "Giải pháp FPT Camera AI ứng dụng quản trị bán lẻ Retail thông minh",
    image: "/images/cert_saokhue2024.webp",
  },
  {
    id: "award-uptime",
    title: "ĐẠT CHUẨN QUỐC TẾ TIER 3 UPTIME INSTITUTE",
    desc: "Hạ tầng Trung tâm Dữ liệu (Data Center) vận hành trực tiếp bởi FPT Telecom",
    image: "/images/cert_uptime.webp",
  },
  {
    id: "award-tech2021",
    title: "SMART CITY AWARD 2021",
    desc: "Giải thưởng 5 sao giải pháp công nghệ an ninh cho Thành phố thông minh",
    image: "/images/cert_tech2021.webp",
  },
  {
    id: "award-tech2023",
    title: "TECH AWARDS 2023",
    desc: "Hệ thống Cloud Camera ứng dụng trí tuệ nhân tạo AI xuất sắc nhất",
    image: "/images/cert_tech2023.webp",
  },
  {
    id: "award-saokhue2024-cloud",
    title: "GIẢI THƯỞNG SAO KHUÊ 2024",
    desc: "Giải pháp nền tảng điện toán đám mây FPT Cloud Camera AI bảo mật cao",
    image: "/images/cert_cloudai.webp",
  },
];

// 8. CÂU HỎI THƯỜNG GẶP (FAQS ACCORDION)
export const CAMERA_FAQS: FaqItem[] = [
  {
    question: "Camera FPT sử dụng lưu trữ đám mây (Cloud) có ưu điểm gì so với thẻ nhớ truyền thống?",
    answer: "Lưu trữ đám mây FPT Cloud lưu toàn bộ dữ liệu tại Trung tâm Dữ liệu (Data Center) chuẩn quốc tế Tier III của FPT Telecom tại Việt Nam. Ưu điểm vượt trội: không lo thẻ nhớ bị hỏng do nhiệt độ, kẻ gian không thể tháo trộm thẻ nhớ để xóa dữ liệu, đồng thời tốc độ xem lại video cực kỳ mượt mà với độ trễ bằng 0.",
  },
  {
    question: "Camera ngoài trời FPT IQ4S có chịu được mưa nắng không?",
    answer: "Camera FPT IQ4S đạt tiêu chuẩn kháng nước và kháng bụi IP67 cao cấp cùng vỏ hợp kim chịu nhiệt độ cao, hoạt động bền bỉ trong mọi điều kiện thời tiết khắc nghiệt tại Việt Nam từ mưa giông, gió bụi đến nắng nóng gay gắt.",
  },
  {
    question: "Tôi có thể xem đồng thời nhiều Camera FPT trên cùng một điện thoại không?",
    answer: "Hoàn toàn được. Ứng dụng FPT Camera trên cả hệ điều hành iOS và Android hỗ trợ tính năng xem đa luồng (multi-view), cho phép bạn theo dõi đồng thời 4 hoặc nhiều camera trên cùng một màn hình điện thoại rất tiện lợi.",
  },
  {
    question: "Nhà tôi dùng mạng Internet của nhà mạng khác thì có dùng được Camera FPT không?",
    answer: "Camera FPT hoạt động hoàn hảo trên mọi đường truyền Internet cáp quang hoặc Wi-Fi của tất cả các nhà mạng viễn thông tại Việt Nam. Bạn chỉ cần có kết nối mạng Wi-Fi hoặc cắm dây mạng LAN là có thể sử dụng bình thường.",
  },
  {
    question: "Quy trình đăng ký trang bị Camera FPT diễn ra như thế nào?",
    answer: "Quý khách chỉ cần để lại thông tin hoặc liên hệ Hotline đăng ký 0902.184.284. Chuyên viên tư vấn FPT sẽ liên hệ giải đáp chi tiết, tiếp nhận yêu cầu và đội ngũ triển khai thiết bị ban đầu sẽ bàn giao, kết nối và hướng dẫn quý khách cài đặt ứng dụng tận nơi chu đáo.",
  },
  {
    question: "Chính sách bảo hành thiết bị Camera FPT ra sao?",
    answer: "Mọi thiết bị Camera FPT chính hãng được áp dụng chính sách bảo hành đổi mới trong vòng 24 tháng đối với lỗi kỹ thuật từ nhà sản xuất. Đội ngũ kỹ thuật FPT luôn đồng hành chăm sóc khách hàng chu đáo trong suốt quá trình sử dụng.",
  },
];
