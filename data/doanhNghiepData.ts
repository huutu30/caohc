export interface DoanhNghiepPackage {
  id: string;
  name: string;
  type: "wifi6" | "super_biz";
  badge?: string;
  speed: string;
  speedDownload: string;
  speedUpload: string;
  internationalSpeed?: string;
  price: number;
  originalPrice?: number;
  highlight?: boolean;
  devices: string[];
  features: string[];
  recommendedScale: string;
  ipStatic: string;
}

export interface DoanhNghiepValuePillar {
  title: string;
  desc: string;
  icon: string;
}

export interface DoanhNghiepFeature {
  title: string;
  desc: string;
  image: string;
  tag: string;
}

export interface DoanhNghiepSolution {
  title: string;
  desc: string;
  badge: string;
  recommendedPkg: string;
  benefits: string[];
}

export const DOANH_NGHIEP_PACKAGES: DoanhNghiepPackage[] = [
  // 1. Phân khúc Wi-Fi 6 Doanh Nghiệp (LUX)
  {
    id: "pkg-lux500",
    name: "LUX 500",
    type: "wifi6",
    badge: "Wi-Fi 6 Doanh Nghiệp",
    speed: "500 Mbps",
    speedDownload: "500 Mbps",
    speedUpload: "500 Mbps",
    internationalSpeed: "10.8 Mbps",
    price: 800000,
    originalPrice: 1000000,
    highlight: true,
    devices: ["01 Router Wi-Fi 6 Doanh nghiệp", "01 Access Point Mesh Wi-Fi 6"],
    recommendedScale: "30 - 60 thiết bị",
    ipStatic: "Miễn phí 01 IP Tĩnh",
    features: [
      "Băng thông 500 Mbps đối xứng trong nước",
      "Cam kết băng thông quốc tế tối thiểu 10.8 Mbps",
      "Trang bị 01 Router Wi-Fi 6 + 01 Mesh Wi-Fi 6 công nghệ mới",
      "Tặng 01 địa chỉ IP Tĩnh độc quyền cho máy chủ, camera",
      "Ưu tiên hỗ trợ kỹ thuật chuyên trách doanh nghiệp",
    ],
  },
  {
    id: "pkg-lux800",
    name: "LUX 800",
    type: "wifi6",
    badge: "Wi-Fi 6 Cao Cấp Nhất",
    speed: "800 Mbps",
    speedDownload: "800 Mbps",
    speedUpload: "800 Mbps",
    internationalSpeed: "15 Mbps",
    price: 1030000,
    originalPrice: 1350000,
    highlight: false,
    devices: ["01 Router Wi-Fi 6 Doanh nghiệp", "01 Access Point Mesh Wi-Fi 6"],
    recommendedScale: "60 - 160 thiết bị",
    ipStatic: "Miễn phí 01 IP Tĩnh",
    features: [
      "Tốc độ 800 Mbps Download/Upload đối xứng cực đại",
      "Cam kết băng thông quốc tế tối thiểu 15 Mbps",
      "Bộ đôi Router Wi-Fi 6 + Mesh Wi-Fi 6 chịu tải đa thiết bị",
      "Tặng 01 địa chỉ IP Tĩnh định tuyến bảo mật cao",
      "Quy trình triển khai dịch vụ siêu tốc trong ngày",
    ],
  },

  // 2. Phân khúc Cáp Quang Doanh Nghiệp (Super Biz)
  {
    id: "pkg-s300-biz",
    name: "Super 300 Biz",
    type: "super_biz",
    badge: "Doanh Nghiệp Vừa & Nhỏ",
    speed: "300 Mbps",
    speedDownload: "300 Mbps",
    speedUpload: "300 Mbps",
    price: 450000,
    originalPrice: 550000,
    devices: ["Router DrayTek / MikroTik chuyên dụng"],
    recommendedScale: "20 - 40 nhân sự",
    ipStatic: "Miễn phí 01 IP Tĩnh",
    features: [
      "Tốc độ 300 Mbps Download/Upload đối xứng ổn định",
      "Trang bị Gateway công nghiệp chịu tải lớn liên tục",
      "Miễn phí 01 địa chỉ IP Tĩnh cố định độc quyền",
      "Hợp đồng pháp nhân, xuất hóa đơn VAT điện tử nhanh chóng",
      "Đội ngũ triển khai chuyên biệt hỗ trợ tận nơi",
    ],
  },
  {
    id: "pkg-s300-biz-plus",
    name: "Super 300 Biz Plus",
    type: "super_biz",
    badge: "Kèm Cân Bằng Tải",
    speed: "300 Mbps",
    speedDownload: "300 Mbps",
    speedUpload: "300 Mbps",
    price: 750000,
    originalPrice: 950000,
    devices: ["Router Cân bằng tải DrayTek / MikroTik"],
    recommendedScale: "30 - 50 nhân sự",
    ipStatic: "Miễn phí 01 IP Tĩnh",
    features: [
      "Băng thông 300 Mbps đối xứng trong nước",
      "Trang bị Router Cân bằng tải chuyên dụng doanh nghiệp",
      "Tặng 01 IP Tĩnh định tuyến bảo mật cao cho máy chủ",
      "Chống nghẽn mạng giờ cao điểm, duy trì kết nối thông suốt",
      "Chăm sóc kỹ thuật doanh nghiệp ưu tiên",
    ],
  },
  {
    id: "pkg-s500-biz",
    name: "Super 500 Biz",
    type: "super_biz",
    badge: "Doanh Nghiệp Lớn",
    speed: "500 Mbps",
    speedDownload: "500 Mbps",
    speedUpload: "500 Mbps",
    internationalSpeed: "18.9 Mbps",
    price: 1400000,
    originalPrice: 1750000,
    devices: ["Router Gateway DrayTek / Vigor"],
    recommendedScale: "50 - 100 nhân sự",
    ipStatic: "Miễn phí 01 IP Tĩnh",
    features: [
      "Tốc độ 500 Mbps đối xứng Download/Upload",
      "Cam kết băng thông quốc tế tối thiểu 18.9 Mbps",
      "Tặng 01 địa chỉ IP Tĩnh cố định độc quyền",
      "Thiết bị Gateway công nghiệp vận hành bền bỉ",
      "Chăm sóc kỹ thuật chuyên trách doanh nghiệp",
    ],
  },
  {
    id: "pkg-s500-biz-plus",
    name: "Super 500 Biz Plus",
    type: "super_biz",
    badge: "Cân Bằng Tải Công Nghiệp",
    speed: "500 Mbps",
    speedDownload: "500 Mbps",
    speedUpload: "500 Mbps",
    internationalSpeed: "18.9 Mbps",
    price: 1700000,
    originalPrice: 2100000,
    devices: ["Router Cân bằng tải công nghiệp cao cấp"],
    recommendedScale: "60 - 120 nhân sự",
    ipStatic: "Miễn phí 01 IP Tĩnh",
    features: [
      "Tốc độ 500 Mbps đối xứng cực đại không suy hao",
      "Trang bị bộ cân bằng tải công nghiệp mạnh mẽ",
      "Cam kết quốc tế vượt trội 18.9 Mbps, tặng IP Tĩnh",
      "Khả năng mở rộng nhiều dải IP và phân luồng VLAN",
      "Cam kết chất lượng dịch vụ SLA doanh nghiệp",
    ],
  },
  {
    id: "pkg-s600-biz",
    name: "Super 600 Biz",
    type: "super_biz",
    badge: "Băng Thông 600Mbps",
    speed: "600 Mbps",
    speedDownload: "600 Mbps",
    speedUpload: "600 Mbps",
    price: 2500000,
    originalPrice: 3000000,
    devices: ["Thiết bị định tuyến EdgeRouter / MikroTik"],
    recommendedScale: "80 - 150 nhân sự",
    ipStatic: "Miễn phí 01 IP Tĩnh",
    features: [
      "Băng thông 600 Mbps đối xứng trong nước",
      "Cam kết băng thông quốc tế cao",
      "Miễn phí 01 IP Tĩnh cố định chuẩn doanh nghiệp",
      "Thiết bị Gateway định tuyến cao cấp chuyên nghiệp",
      "Đội ngũ kỹ thuật hỗ trợ riêng sẵn sàng phục vụ",
    ],
  },
  {
    id: "pkg-s800-biz",
    name: "Super 800 Biz",
    type: "super_biz",
    badge: "Siêu Tải 800Mbps",
    speed: "800 Mbps",
    speedDownload: "800 Mbps",
    speedUpload: "800 Mbps",
    price: 3400000,
    originalPrice: 4200000,
    devices: ["Router Gateway công nghiệp chịu tải lớn"],
    recommendedScale: "120 - 250 nhân sự",
    ipStatic: "Miễn phí 01 IP Tĩnh",
    features: [
      "Tốc độ 800 Mbps Download/Upload đối xứng",
      "Cam kết băng thông quốc tế cực đại",
      "Tặng IP Tĩnh cố định độc quyền",
      "Thiết bị công nghiệp chạy bền bỉ 365 ngày/năm",
      "Ưu tiên luồng kết nối doanh nghiệp cấp cao",
    ],
  },
];

export const DOANH_NGHIEP_PILLARS: DoanhNghiepValuePillar[] = [
  {
    title: "Tốc Độ Vượt Trội & Quốc Tế Cam Kết",
    desc: "Băng thông đối xứng lên đến 800 Mbps, cam kết lưu lượng quốc tế tối thiểu bằng văn bản SLA rõ ràng.",
    icon: "/images/doanh-nghiep/icon_speed.png",
  },
  {
    title: "Địa Chỉ IP Tĩnh Bảo Mật Cao",
    desc: "Miễn phí địa chỉ IP Tĩnh định tuyến độc quyền cho hệ thống Server nội bộ, máy chủ dữ liệu và hệ thống camera.",
    icon: "/images/doanh-nghiep/icon_security.png",
  },
  {
    title: "Thiết Bị Cân Bằng Tải Chuyên Dụng",
    desc: "Trang bị Router DrayTek, MikroTik hoặc Wi-Fi 6 Gateway công nghiệp, chịu tải từ 50 đến hàng trăm kết nối đồng thời.",
    icon: "/images/doanh-nghiep/icon_sla.png",
  },
  {
    title: "Chăm Sóc Kỹ Thuật Chuyên Trách",
    desc: "Đội ngũ chuyên viên doanh nghiệp riêng biệt tiếp nhận xử lý nhanh chóng, đảm bảo hoạt động liên tục.",
    icon: "/images/doanh-nghiep/icon_support.png",
  },
];

export const DOANH_NGHIEP_FEATURES: DoanhNghiepFeature[] = [
  {
    title: "Hạ Tầng Cáp Quang Rộng Khắp & Tuyến Quốc Tế Đa Hướng",
    desc: "Hệ thống cáp quang phủ khắp 63 tỉnh thành cùng các tuyến cáp quang biển quốc tế dự phòng đa hướng độc lập (APG, AAG, IA, SMW3), bảo đảm đường truyền luôn thông suốt ngay cả khi có biến động trên cáp quang biển.",
    image: "/images/doanh-nghiep/feature_1.webp",
    tag: "Hạ tầng vững chắc",
  },
  {
    title: "Thiết Bị Cân Bằng Tải Chịu Tải Cực Cao",
    desc: "Trang bị phần cứng chuyên nghiệp từ các thương hiệu dẫn đầu ngành mạng như DrayTek, MikroTik, Wi-Fi 6 Router. Hỗ trợ phân bổ băng thông thông minh (QoS), phân luồng VLAN và khả năng gộp nhiều đường truyền cùng lúc.",
    image: "/images/doanh-nghiep/feature_2.webp",
    tag: "Phần cứng đẳng cấp",
  },
  {
    title: "Giải Pháp IP Tĩnh Vận Hành Máy Chủ & Hệ Thống",
    desc: "Cung cấp dải địa chỉ IP Tĩnh cố định độc quyền, giúp doanh nghiệp dễ dàng cấu hình VPN làm việc từ xa, xây dựng Mail Server, Web Server nội bộ và quản trị hệ thống camera độ phân giải cao tập trung.",
    image: "/images/doanh-nghiep/feature_3.webp",
    tag: "Bảo mật & Định tuyến",
  },
];

export const DOANH_NGHIEP_SOLUTIONS: DoanhNghiepSolution[] = [
  {
    title: "Cửa hàng, Quán Cafe, Nhà hàng F&B",
    badge: "Chịu tải đông người",
    desc: "Nhu cầu phục vụ lượng khách hàng đông đảo check-in, gọi món qua app và thanh toán QR code tức thì.",
    recommendedPkg: "Gói LUX 500 hoặc Super 300 Biz Plus",
    benefits: [
      "Chịu tải 50 - 100 khách kết nối Wi-Fi cùng lúc",
      "Tách biệt mạng Wi-Fi nội bộ thanh toán và mạng khách hàng",
      "Trang bị công nghệ Wi-Fi 6 phủ sóng xuyên phòng",
    ],
  },
  {
    title: "Doanh Nghiệp Vừa & Nhỏ (SME)",
    badge: "Làm việc số & Cloud",
    desc: "Phục vụ văn phòng từ 20 đến 80 nhân sự thao tác Cloud ERP, họp Zoom/Meet HD, tải file thiết kế và kế toán.",
    recommendedPkg: "Gói LUX 800 hoặc Super 500 Biz",
    benefits: [
      "Băng thông đối xứng tốc độ cao không suy hao",
      "Kèm 01 IP Tĩnh định tuyến máy chủ kế toán & phần mềm ERP",
      "Cam kết băng thông quốc tế ổn định gửi nhận email đối tác",
    ],
  },
  {
    title: "Tập Đoàn, Tòa Nhà & Chuỗi Văn Phòng",
    badge: "Hạ tầng phân luồng",
    desc: "Hệ thống mạng quy mô lớn cho hàng trăm người dùng, phòng máy chủ trung tâm và hệ thống camera toàn diện.",
    recommendedPkg: "Gói Super 600 Biz hoặc Super 800 Biz",
    benefits: [
      "Băng thông khổng lồ 800 Mbps đối xứng trong nước",
      "Hệ thống Router cân bằng tải công nghiệp gộp kênh dự phòng",
      "Cam kết dịch vụ SLA cao nhất cùng đội ngũ chăm sóc riêng",
    ],
  },
];

export const DOANH_NGHIEP_FAQS = [
  {
    question: "Internet doanh nghiệp FPT phù hợp với các đối tượng, mô hình kinh doanh nào?",
    answer: "Các gói cước Internet doanh nghiệp FPT phù hợp với văn phòng, cửa hàng, công ty vừa và lớn, hoặc doanh nghiệp cần đường truyền ổn định để làm việc, họp online và vận hành hệ thống máy chủ mỗi ngày.",
  },
  {
    question: "Các gói cước Internet doanh nghiệp FPT có tặng sẵn IP Tĩnh không?",
    answer: "Có. Toàn bộ các gói cước doanh nghiệp (từ Super 300 Biz, LUX 500 trở lên) đều được miễn phí 01 địa chỉ IP Tĩnh độc quyền, phục vụ cấu hình VPN, camera, máy chủ và truy cập nội bộ từ xa an toàn.",
  },
  {
    question: "Giải pháp Wi-Fi doanh nghiệp FPT đáp ứng cho văn phòng nhiều người như thế nào?",
    answer: "FPT tích hợp các dòng Router cân bằng tải chuyên dụng (DrayTek, MikroTik) hoặc bộ thiết bị Wi-Fi 6 doanh nghiệp cao cấp, cho phép kết nối ổn định đồng thời từ 50 đến hàng trăm thiết bị cùng lúc mà không xảy ra nghẽn mạng.",
  },
  {
    question: "FPT có đội ngũ chăm sóc riêng cho khách hàng doanh nghiệp không?",
    answer: "Có. Khách hàng doanh nghiệp được ưu tiên chăm sóc kỹ thuật với kênh tiếp nhận riêng biệt, phản hồi tức thì và có kỹ thuật viên đến tận nơi xử lý trong vòng 2 giờ khi nhận thông báo.",
  },
  {
    question: "Thời gian bàn giao và kết nối dịch vụ Internet doanh nghiệp FPT mất bao lâu?",
    answer: "Sau khi hoàn tất thủ tục đăng ký và khảo sát hạ tầng, đội ngũ kỹ thuật FPT sẽ tiến hành bàn giao thiết bị và hoàn tất kết nối đường truyền trong khoảng 1–2 ngày làm việc, đảm bảo đúng tiến độ vận hành của doanh nghiệp.",
  },
  {
    question: "Thủ tục đăng ký Internet cho doanh nghiệp cần những giấy tờ gì?",
    answer: "Thủ tục cực kỳ đơn giản: Quý doanh nghiệp chỉ cần chuẩn bị bản scan hoặc ảnh chụp Giấy phép đăng ký kinh doanh và Căn cước công dân của người đại diện pháp luật (hoặc giấy ủy quyền hợp lệ). Hợp đồng điện tử ký online tiện lợi và xuất hóa đơn VAT nhanh chóng.",
  },
  {
    question: "Doanh nghiệp có thể gộp nhiều đường truyền để tăng tính sẵn sàng (Failover) được không?",
    answer: "Hoàn toàn được. Với các gói cước kèm Router Cân bằng tải (Biz Plus), hệ thống hỗ trợ cấu hình gộp băng thông nhiều đường và tự động chuyển luồng dự phòng (Failover), đảm bảo mạng doanh nghiệp không bao giờ bị gián đoạn.",
  },
];
