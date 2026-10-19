export interface PackageItem {
  id: string;
  name: string;
  category: "personal" | "family" | "gaming" | "enterprise";
  categoryLabel: string;
  speed: string;
  uploadSpeed?: string;
  priceMonthly: number;
  price6Months: number; // Tổng giá khi trả 6 tháng (tặng 1 tháng)
  price12Months: number; // Tổng giá khi trả 12 tháng (tặng 2 tháng)
  gift6Months: string;
  gift12Months: string;
  badge?: string;
  isPopular?: boolean;
  image: string;
  devicesRecommended: string;
  equipment: string;
  features: string[];
  description: string;
}

export interface ComboItem {
  id: string;
  name: string;
  category: "personal" | "family" | "sports";
  categoryLabel: string;
  speed: string;
  channels: string;
  priceMonthly: number;
  price6Months: number;
  price12Months: number;
  gift6Months: string;
  gift12Months: string;
  badge?: string;
  isPopular?: boolean;
  image: string;
  features: string[];
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  content: string;
  packageUsed: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  image: string;
  author: string;
  readTime: string;
}

// 6 GÓI CƯỚC INTERNET BĂNG THÔNG RỘNG
export const INTERNET_PACKAGES: PackageItem[] = [
  {
    id: "giga-150",
    name: "Giga 150",
    category: "personal",
    categoryLabel: "Cá nhân",
    speed: "150 Mbps",
    uploadSpeed: "150 Mbps",
    priceMonthly: 180000,
    price6Months: 1080000,
    price12Months: 2160000,
    gift6Months: "Tặng 01 tháng cước",
    gift12Months: "Tặng 02 tháng cước",
    image: "/images/giga.webp",
    devicesRecommended: "1 - 4 thiết bị",
    equipment: "Modem WiFi 6 băng tần kép AX1800",
    description: "Phù hợp học sinh, sinh viên và cá nhân có nhu cầu lướt web, làm việc online, xem video Full HD mượt mà.",
    features: [
      "Tốc độ Download/Upload đối xứng 150 Mbps",
      "Trang bị Modem WiFi 6 chuẩn AX thế hệ mới",
      "Triển khai hòa mạng nhanh chóng trong 24 giờ",
      "Đường truyền ổn định, không giới hạn dung lượng",
      "Đội ngũ chăm sóc kỹ thuật tận tâm 24/7"
    ]
  },
  {
    id: "sky-300",
    name: "Sky 300",
    category: "family",
    categoryLabel: "Gia đình",
    speed: "300 Mbps",
    uploadSpeed: "150 Mbps",
    priceMonthly: 225000,
    price6Months: 1350000,
    price12Months: 2700000,
    gift6Months: "Tặng 01 tháng cước + Miễn phí hòa mạng",
    gift12Months: "Tặng 02 tháng cước + Quà tặng gia đình",
    badge: "Bán Chạy Nhất",
    isPopular: true,
    image: "/images/sky.webp",
    devicesRecommended: "4 - 10 thiết bị",
    equipment: "Modem WiFi 6 chuẩn công nghệ 2 băng tần",
    description: "Gói cước quốc dân cho gia đình xem phim 4K đa màn hình, camera an ninh và học tập trực tuyến cùng lúc.",
    features: [
      "Tốc độ Download siêu tốc lên đến 300 Mbps",
      "Tối ưu băng thông cho Smart TV, Camera và Laptop",
      "Miễn phí modem WiFi 6 phủ sóng rộng xuyên tường",
      "Đảm bảo kết nối không giật lag vào giờ cao điểm",
      "Ưu đãi đặc biệt khi thanh toán trước 6 hoặc 12 tháng"
    ]
  },
  {
    id: "f-game",
    name: "F-Game 1Gbps",
    category: "gaming",
    categoryLabel: "Gaming / Streamer",
    speed: "1 Gbps",
    uploadSpeed: "300 Mbps",
    priceMonthly: 280000,
    price6Months: 1680000,
    price12Months: 3360000,
    gift6Months: "Tặng 01 tháng cước + Code game độc quyền",
    gift12Months: "Tặng 02 tháng cước + Ưu tiên đường truyền VIP",
    badge: "Độc Quyền Game Thủ",
    image: "/images/f-game.webp",
    devicesRecommended: "5 - 15 thiết bị",
    equipment: "Modem Gaming WiFi 6 tối ưu chống trễ",
    description: "Tích hợp công nghệ Ultra Fast tự động nhận diện và định tuyến tối ưu tới hơn 50+ tựa game phổ biến.",
    features: [
      "Băng thông 1 Gbps với tính năng Ultra Fast ưu tiên gói tin",
      "Giảm ping cực đại tới máy chủ Riot, Steam, Garena",
      "Không lo nhảy ping, rớt gói khi đang combat căng thẳng",
      "Modem WiFi 6 độ trễ siêu thấp chuyên biệt cho Gamer",
      "Hỗ trợ cấu hình đường truyền riêng cho Streamer"
    ]
  },
  {
    id: "meta-1gbps",
    name: "Meta 1Gbps",
    category: "family",
    categoryLabel: "Gia đình cao cấp",
    speed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    priceMonthly: 330000,
    price6Months: 1980000,
    price12Months: 3960000,
    gift6Months: "Tặng 01 tháng cước + Thiết bị Mesh WiFi",
    gift12Months: "Tặng 02 tháng cước + 01 Mesh WiFi 6 cao cấp",
    badge: "Băng Thông Không Giới Hạn",
    image: "/images/meta.webp",
    devicesRecommended: "10 - 25 thiết bị",
    equipment: "Modem WiFi 6 AX3000 + Thiết bị Mesh phụ trợ",
    description: "Đột phá tốc độ 1Gbps Download & Upload, phù hợp căn hộ rộng, nhà nhiều tầng, người sáng tạo nội dung số.",
    features: [
      "Tốc độ Download/Upload đối xứng lên đến 1 Gbps (1024 Mbps)",
      "Tải video 4K/8K, tài liệu dung lượng lớn chỉ trong vài giây",
      "Hỗ trợ hệ sinh thái Smart Home kết nối hàng chục thiết bị",
      "Trang bị thiết bị Mesh WiFi 6 tăng cường phạm vi phủ sóng",
      "Bảo đảm băng thông không bao giờ bị nghẽn"
    ]
  },
  {
    id: "super-300-biz",
    name: "Super 300 Biz",
    category: "enterprise",
    categoryLabel: "Doanh nghiệp vừa & nhỏ",
    speed: "300 Mbps",
    uploadSpeed: "300 Mbps",
    priceMonthly: 545000,
    price6Months: 3270000,
    price12Months: 6540000,
    gift6Months: "Tặng 01 tháng cước + Miễn phí 01 IP Tĩnh",
    gift12Months: "Tặng 02 tháng cước + IP Tĩnh + Thiết bị cân bằng tải",
    image: "/images/s300-biz.webp",
    devicesRecommended: "20 - 40 nhân viên",
    equipment: "Router Doanh nghiệp chuyên dụng DrayTek / MikroTik",
    description: "Giải pháp kết nối tin cậy cho văn phòng công ty, nhà hàng, quán cà phê với cam kết băng thông quốc tế.",
    features: [
      "Băng thông trong nước 300 Mbps, cam kết quốc tế tối thiểu 10.8 Mbps",
      "Miễn phí 01 địa chỉ IP Tĩnh giúp vận hành server & VPN mượt mà",
      "Thiết bị cân bằng tải chịu tải cao nhiều người dùng đồng thời",
      "Kênh giám sát hạ tầng kỹ thuật ưu tiên 24/7/365",
      "Hợp đồng pháp nhân xuất hóa đơn VAT điện tử nhanh chóng"
    ]
  },
  {
    id: "super-500-biz",
    name: "Super 500 Biz",
    category: "enterprise",
    categoryLabel: "Doanh nghiệp lớn",
    speed: "500 Mbps",
    uploadSpeed: "500 Mbps",
    priceMonthly: 990000,
    price6Months: 5940000,
    price12Months: 11880000,
    gift6Months: "Tặng 01 tháng cước + 01 IP Tĩnh cao cấp",
    gift12Months: "Tặng 02 tháng cước + 02 IP Tĩnh + Hỗ trợ kỹ thuật VIP",
    badge: "Doanh Nghiệp Đỉnh Cao",
    image: "/images/s500-biz.webp",
    devicesRecommended: "40 - 80 nhân viên",
    equipment: "Hệ thống Router Gateway Doanh nghiệp MikroTik / Cisco",
    description: "Đường truyền cao cấp đáp ứng lưu lượng truy cập lớn liên tục cho tòa nhà, công ty công nghệ và chuỗi bán lẻ.",
    features: [
      "Băng thông trong nước 500 Mbps, cam kết quốc tế 18 Mbps",
      "Hỗ trợ hệ thống VPN đa điểm và máy chủ nội bộ an toàn",
      "Thiết bị Gateway công nghiệp chịu tải hàng trăm kết nối",
      "Cam kết chất lượng dịch vụ SLA 99.9% thông suốt",
      "Nhân sự chăm sóc kỹ thuật chuyên biệt hỗ trợ trực tiếp"
    ]
  }
];

// 4 GÓI COMBO INTERNET + TRUYỀN HÌNH
export const COMBO_PACKAGES: ComboItem[] = [
  {
    id: "combo-giga",
    name: "Combo Giga Play",
    category: "personal",
    categoryLabel: "Tiết kiệm",
    speed: "150 Mbps",
    channels: "Gần 170 kênh truyền hình trong & ngoài nước",
    priceMonthly: 220000,
    price6Months: 1320000,
    price12Months: 2640000,
    gift6Months: "Tặng 01 tháng cước + Đầu thu 4K",
    gift12Months: "Tặng 02 tháng cước + Miễn phí trọn bộ thiết bị",
    image: "/images/combo-giga.webp",
    description: "Sự kết hợp hoàn hảo giữa Internet 150Mbps và truyền hình thông minh cho cả gia đình giải trí mỗi tối.",
    features: [
      "Internet tốc độ cao 150 Mbps Download/Upload",
      "Kho truyền hình 170+ kênh đặc sắc chuẩn HD/4K",
      "Trang bị miễn phí đầu thu TV Box điều khiển giọng nói",
      "Kho phim điện ảnh, thiếu nhi, anime cập nhật hàng tuần",
      "Xem mượt mà trên cùng lúc 2 thiết bị (TV, Điện thoại, Tablet)"
    ]
  },
  {
    id: "combo-sky",
    name: "Combo Sky Thể Thao",
    category: "sports",
    categoryLabel: "Gia đình & Thể thao",
    speed: "300 Mbps",
    channels: "170+ kênh + Trọn vẹn Ngoại Hạng Anh & Cúp C1",
    priceMonthly: 275000,
    price6Months: 1650000,
    price12Months: 3300000,
    gift6Months: "Tặng 01 tháng cước + Box FPT Play Voice",
    gift12Months: "Tặng 02 tháng cước + Quà tặng thể thao đặc biệt",
    badge: "Ưa Chuộng Nhất",
    isPopular: true,
    image: "/images/combo-sky.webp",
    description: "Đỉnh cao giải trí với gói bản quyền Ngoại Hạng Anh, UEFA Champions League và tốc độ mạng 300Mbps không độ trễ.",
    features: [
      "Internet 300 Mbps tải phim, xem bóng đá trực tiếp siêu nét",
      "Bản quyền phát sóng trọn mùa giải Ngoại Hạng Anh & C1 UEFA",
      "Đầu thu thông minh điều khiển giọng nói tiếng Việt bằng Remote",
      "Kho phim bom tấn chiếu rạp chuẩn 4K Dolby Audio",
      "Đồng thời đăng nhập và xem trên 3 thiết bị không gián đoạn"
    ]
  },
  {
    id: "combo-meta",
    name: "Combo Meta VIP",
    category: "family",
    categoryLabel: "Giải trí đỉnh cao",
    speed: "1 Gbps",
    channels: "Toàn bộ gói kênh VIP + Kho phim chuẩn 4K",
    priceMonthly: 380000,
    price6Months: 2280000,
    price12Months: 4560000,
    gift6Months: "Tặng 01 tháng + 01 Mesh WiFi 6",
    gift12Months: "Tặng 02 tháng + 01 Mesh WiFi 6 + Tài khoản VIP",
    badge: "Trọn Gói Thượng Lưu",
    image: "/images/combo-meta.webp",
    description: "Trải nghiệm không giới hạn với tốc độ 1Gbps đối xứng và đặc quyền xem kho phim VIP cao cấp nhất hiện nay.",
    features: [
      "Băng thông 1 Gbps cân mọi nhu cầu streaming 4K/8K đồng thời",
      "Gói kênh truyền hình VIP không chèn quảng cáo khó chịu",
      "Trang bị Modem WiFi 6 kép + Mesh mở rộng không gian sống",
      "Tích hợp các giải đấu Golf PGA, Võ thuật UFC, NBA đỉnh cao",
      "Đặc quyền hỗ trợ kỹ thuật tận nhà ưu tiên số 1"
    ]
  },
  {
    id: "combo-fgame",
    name: "Combo F-Game Entertainment",
    category: "sports",
    categoryLabel: "Gaming & Giải trí",
    speed: "1 Gbps",
    channels: "170+ kênh thể thao, eSports và phim hành động",
    priceMonthly: 330000,
    price6Months: 1980000,
    price12Months: 3960000,
    gift6Months: "Tặng 01 tháng cước + Box Voice",
    gift12Months: "Tặng 02 tháng cước + Bộ phụ kiện Gaming",
    image: "/images/combo-fgame.webp",
    description: "Bộ đôi hoàn hảo cho bạn trẻ đam mê leo rank eSports và thưởng thức các trận cầu bóng đá rực lửa.",
    features: [
      "Công nghệ Ultra Fast triệt tiêu hiện tượng lag giật khi chơi game",
      "Kênh thể thao quốc tế và các giải đấu eSports toàn cầu",
      "Băng thông tải game và cập nhật bản vá game siêu tốc",
      "Thiết bị WiFi 6 băng tần kép tối ưu đa luồng dữ liệu",
      "Cài đặt nhanh chóng chỉ trong một lần hẹn"
    ]
  }
];

// BẢNG SO SÁNH GÓI CƯỚC CHI TIẾT
export const COMPARISON_DATA = [
  {
    criteria: "Tốc độ Download",
    giga: "150 Mbps",
    sky: "300 Mbps",
    fgame: "1 Gbps (1024 Mbps)",
    meta: "1 Gbps (1024 Mbps)"
  },
  {
    criteria: "Tốc độ Upload",
    giga: "150 Mbps",
    sky: "150 Mbps",
    fgame: "300 Mbps",
    meta: "1 Gbps (Đối xứng)"
  },
  {
    criteria: "Giá cước niêm yết",
    giga: "180.000đ / tháng",
    sky: "225.000đ / tháng",
    fgame: "280.000đ / tháng",
    meta: "330.000đ / tháng"
  },
  {
    criteria: "Thiết bị modem bàn giao",
    giga: "Modem WiFi 6 AX1800",
    sky: "Modem WiFi 6 Băng tần kép",
    fgame: "Modem WiFi 6 Gaming Ultra",
    meta: "Modem WiFi 6 AX3000 + Mesh"
  },
  {
    criteria: "Số thiết bị tối ưu",
    giga: "1 - 4 thiết bị",
    sky: "4 - 10 thiết bị",
    fgame: "5 - 15 thiết bị",
    meta: "10 - 25 thiết bị"
  },
  {
    criteria: "Công nghệ tối ưu đường truyền",
    giga: "Cáp quang AON/GPON",
    sky: "Ưu tiên luồng gia đình",
    fgame: "Ultra Fast chống lag Ping",
    meta: "Băng thông mở rộng đối xứng"
  },
  {
    criteria: "Thời gian cam kết triển khai",
    giga: "Trong 24 giờ",
    sky: "Trong 24 giờ",
    fgame: "Trong 12 - 24 giờ",
    meta: "Ưu tiên trong 12 giờ"
  },
  {
    criteria: "Ưu đãi trả trước 6 tháng",
    giga: "Tặng 1 tháng",
    sky: "Tặng 1 tháng + Miễn phí",
    fgame: "Tặng 1 tháng + Quà game",
    meta: "Tặng 1 tháng + Mesh WiFi"
  }
];

// 4 ƯU ĐIỂM DỊCH VỤ CỐT LÕI
export const ADVANTAGES = [
  {
    id: "adv-1",
    title: "Triển khai trong 24h",
    description: "Đội ngũ chuyên nghiệp hòa mạng nhanh chóng trong ngày, bàn giao nghiệm thu thiết bị chuẩn chỉnh.",
    icon: "Clock"
  },
  {
    id: "adv-2",
    title: "Miễn phí Modem WiFi 6",
    description: "Trang bị thế hệ Modem WiFi 6 chuẩn AX tân tiến nhất, sóng khỏe xuyên tường và kết nối ổn định.",
    icon: "Wifi"
  },
  {
    id: "adv-3",
    title: "Chăm sóc & Đồng hành 24/7",
    description: "Kênh tổng đài tư vấn trực tuyến mọi lúc mọi nơi, giải quyết mọi thắc mắc của khách hàng trong tích tắc.",
    icon: "Headphones"
  },
  {
    id: "adv-4",
    title: "Không giới hạn Data",
    description: "Lướt web thả ga, tải dữ liệu tốc độ cực đại không lo cạn dung lượng hay bóp băng thông giờ cao điểm.",
    icon: "Zap"
  }
];

// 3 CHƯƠNG TRÌNH KHUYẾN MÃI NỔI BẬT
export const PROMOTIONS = [
  {
    id: "promo-1",
    title: "Tặng Thêm 1 - 2 Tháng Cước",
    tag: "Khuyến mãi HOT",
    description: "Thanh toán trước 6 tháng nhận ngay 1 tháng miễn phí; thanh toán trước 12 tháng tặng thêm tới 2 tháng cước sử dụng.",
    buttonText: "Nhận ưu đãi ngay",
    badgeColor: "bg-red-500",
    gradient: "from-blue-900 to-blue-700"
  },
  {
    id: "promo-2",
    title: "Giảm 50% Phí Hòa Mạng Ban Đầu",
    tag: "Số lượng có hạn",
    description: "Đăng ký trực tuyến trên website ngay hôm nay để nhận voucher giảm 50% chi phí bàn giao thiết bị ban đầu.",
    buttonText: "Đăng ký nhận mã",
    badgeColor: "bg-amber-500",
    gradient: "from-orange-600 to-amber-600"
  },
  {
    id: "promo-3",
    title: "Giới Thiệu Bạn Bè - Nhận Quà Khủng",
    tag: "Chương trình tri ân",
    description: "Nhận ngay 100.000đ tiền mặt trừ trực tiếp vào cước hàng tháng cho mỗi khách hàng mới bạn giới thiệu thành công.",
    buttonText: "Xem thể lệ chi tiết",
    badgeColor: "bg-emerald-500",
    gradient: "from-slate-900 to-blue-950"
  }
];

// 5 ĐÁNH GIÁ TỪ KHÁCH HÀNG
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Nguyễn Minh Đức",
    role: "Gamer & Streamer eSports",
    location: "Cầu Giấy, Hà Nội",
    avatar: "/images/members.webp",
    rating: 5,
    packageUsed: "Gói F-Game 1Gbps",
    content: "Mình live stream game Liên Minh và CS:GO hàng đêm, từ ngày dùng gói F-Game ping cực ổn định ở mức 4-6ms, không hề gặp tình trạng giật giật hay rớt mạng lúc combat!"
  },
  {
    id: "test-2",
    name: "Trần Thị Mai Anh",
    role: "Chủ Quán Cafe The Morning",
    location: "Quận 1, TP. Hồ Chí Minh",
    avatar: "/images/introduction.webp",
    rating: 5,
    packageUsed: "Gói Super 300 Biz",
    content: "Quán mình có sức chứa hơn 50 khách cùng lúc giờ cao điểm. Modem WiFi 6 chịu tải rất khỏe, khách khen mạng mượt để làm việc từ xa, không ai phàn nàn chập chờn cả."
  },
  {
    id: "test-3",
    name: "Lê Hoàng Long",
    role: "Kỹ sư Công nghệ thông tin",
    location: "Hải Châu, Đà Nẵng",
    avatar: "/images/gioithieu_03.webp",
    rating: 5,
    packageUsed: "Gói Meta 1Gbps",
    content: "Tốc độ download/upload 1Gbps đối xứng thực sự rất ấn tượng. Mình thường xuyên đồng bộ source code và kéo file Docker image lớn chỉ mất vài giây. Rất đáng tiền!"
  },
  {
    id: "test-4",
    name: "Phạm Thu Hương",
    role: "Nội trợ & Bán hàng Online",
    location: "Thanh Xuân, Hà Nội",
    avatar: "/images/gioithieu_05.webp",
    rating: 5,
    packageUsed: "Combo Sky Thể Thao",
    content: "Chồng mình mê bóng đá Ngoại Hạng Anh, các con thì thích xem hoạt hình và học tiếng Anh. Đầu thu giọng nói rất dễ dùng cho cả người lớn tuổi, hình ảnh 4K sắc nét."
  },
  {
    id: "test-5",
    name: "Vũ Quang Huy",
    role: "Giám đốc Công ty Vận tải",
    location: "Ngô Quyền, Hải Phòng",
    avatar: "/images/gioithieu_07.webp",
    rating: 5,
    packageUsed: "Gói Super 500 Biz",
    content: "Đội ngũ kỹ thuật hỗ trợ rất nhanh nhẹn và chuyên nghiệp. Thủ tục xuất hóa đơn VAT điện tử rõ ràng, mạng chạy thông suốt liên tục 24/7 giúp công ty xử lý đơn hàng suôn sẻ."
  }
];

// 8 CÂU HỎI THƯỜNG GẶP (FAQ)
export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Thủ tục đăng ký hòa mạng mới cần những giấy tờ gì?",
    answer: "Khách hàng cá nhân chỉ cần cung cấp ảnh chụp Căn cước công dân (CCCD) gắn chip còn hiệu lực. Đối với doanh nghiệp, cần có Giấy phép đăng ký kinh doanh và CCCD của người đại diện pháp luật. Toàn bộ thủ tục được nhân viên hướng dẫn trực tuyến rất nhanh chóng."
  },
  {
    id: "faq-2",
    question: "Sau khi gửi yêu cầu đăng ký thì bao lâu sẽ được triển khai?",
    answer: "Thời gian triển khai thông thường là trong vòng 24 giờ kể từ thời điểm tiếp nhận thông tin và ký kết hợp đồng điện tử. Đội ngũ kỹ thuật viên sẽ liên hệ hẹn giờ thuận tiện nhất với quý khách để bàn giao thiết bị."
  },
  {
    id: "faq-3",
    question: "Tôi có được miễn phí thiết bị Modem WiFi 6 không?",
    answer: "Có. Tất cả khách hàng đăng ký mới gói cước Internet hoặc Combo đều được trang bị miễn phí 100% Modem WiFi 6 chuẩn AX hiện đại trong suốt thời gian sử dụng dịch vụ."
  },
  {
    id: "faq-4",
    question: "Khi đóng trước 6 hoặc 12 tháng, tôi nhận được ưu đãi gì?",
    answer: "Khi thanh toán trước 6 tháng cước, quý khách được tặng thêm 01 tháng cước sử dụng miễn phí. Khi đóng trước 12 tháng, quý khách được tặng thêm lên đến 02 tháng cước và ưu tiên trang bị thêm thiết bị phụ trợ (tuỳ theo từng gói cước cụ thể)."
  },
  {
    id: "faq-5",
    question: "Tôi muốn đổi địa chỉ sử dụng mạng khi chuyển nhà thì làm thế nào?",
    answer: "Quý khách chỉ cần liên hệ hotline tư vấn hoặc đến điểm giao dịch gần nhất để yêu cầu chuyển địa điểm. Nhà mạng hỗ trợ di dời đường truyền đến địa chỉ mới hoàn toàn miễn phí hoặc với chi phí hỗ trợ tối thiểu."
  },
  {
    id: "faq-6",
    question: "Hình thức thanh toán cước hàng tháng như thế nào?",
    answer: "Quý khách có thể thanh toán linh hoạt qua ứng dụng ngân hàng (quét mã VietQR), ví điện tử (MoMo, ZaloPay, VNPay), chuyển khoản ngân hàng hoặc đăng ký thanh toán tự động (Auto-debit) vô cùng tiện lợi."
  },
  {
    id: "faq-7",
    question: "Gói cước Combo có xem được trên Smart TV cũ không?",
    answer: "Được. Đi kèm gói Combo là đầu thu thông minh thế hệ mới kết nối qua cổng HDMI hoặc AV, giúp biến ngay chiếc tivi thường của bạn thành Smart TV có YouTube, điều khiển giọng nói và kho giải trí 4K."
  },
  {
    id: "faq-8",
    question: "Nếu đường truyền nhà tôi tạm thời chập chờn thì xử lý ra sao?",
    answer: "Quý khách có thể khởi động lại Modem bằng cách tắt nguồn trong 1 phút rồi bật lại. Nếu tình trạng vẫn tiếp diễn, vui lòng gọi ngay đường dây chăm sóc khách hàng để đội ngũ kỹ thuật kiểm tra và tối ưu tín hiệu từ xa trong vài phút."
  }
];

// 6 BÀI VIẾT TIN TỨC CHUẨN NỘI DUNG
export const NEWS_LIST: NewsItem[] = [
  {
    id: "news-1",
    slug: "top-5-ly-do-nen-chon-modem-wifi-6-the-he-moi",
    title: "Top 5 lý do bạn nên chuyển sang sử dụng Modem WiFi 6 ngay hôm nay",
    excerpt: "Công nghệ WiFi 6 mang đến tốc độ gấp 3 lần, độ trễ giảm tới 75% và khả năng kết nối đồng thời hơn 30 thiết bị thông minh trong ngôi nhà bạn.",
    category: "Công nghệ",
    date: "18/10/2026",
    image: "/images/news/1757384628_internet-cho-game-thu.webp",
    author: "Ban Biên Tập FPT Telecom",
    readTime: "4 phút đọc",
    content: [
      "Trong kỷ nguyên của nhà thông minh (Smart Home) với hàng chục thiết bị như Smart TV, camera an ninh, robot hút bụi và điện thoại kết nối đồng thời, các chuẩn WiFi cũ đang dần bộc lộ nhiều hạn chế về khả năng chịu tải.",
      "WiFi 6 (chuẩn 802.11ax) ra đời như một cuộc cách mạng trong truyền tải dữ liệu không dây, giải quyết triệt để bài toán nghẽn mạng vào các khung giờ cao điểm trong gia đình.",
      "Nhờ tích hợp công nghệ OFDMA và MU-MIMO hai chiều, WiFi 6 cho phép phân chia kênh truyền thành các luồng dữ liệu nhỏ hơn, truyền tín hiệu song song tới nhiều thiết bị cùng lúc mà không gây ra hiện tượng hàng đợi.",
      "Hiện nay toàn bộ khách hàng hòa mạng mới tại FPT Telecom đều được trang bị miễn phí Modem WiFi 6 chuẩn AX, mang lại trải nghiệm số mượt mà vượt bậc."
    ]
  },
  {
    id: "news-2",
    slug: "huong-dan-toi-uu-duong-truyen-cho-game-thu-leo-rank",
    title: "Hướng dẫn tối ưu đường truyền mạng internet cho game thủ leo rank mượt mà",
    excerpt: "Bí quyết giảm độ trễ Ping, hạn chế rớt gói (Packet Loss) khi chơi các tựa game eSports hot nhất như LMHT, Valorant và FC Online.",
    category: "Hướng dẫn",
    date: "15/10/2026",
    image: "/images/news/1758162322_internet-doanh-nghiep.webp",
    author: "Chuyên Gia Kỹ Thuật",
    readTime: "5 phút đọc",
    content: [
      "Đối với một game thủ chuyên nghiệp hay người chơi leo rank, từng phần nghìn giây (ms) độ trễ đều có thể quyết định thắng bại của một trận đấu.",
      "Để giảm thiểu ping, điều đầu tiên là ưu tiên kết nối bằng dây mạng LAN Cat6 trực tiếp từ Modem vào máy tính để tránh nhiễu sóng không dây.",
      "Thứ hai, việc chọn một gói cước chuyên biệt như F-Game với tính năng Ultra Fast tích hợp AI tự động tìm đường đi ngắn nhất đến máy chủ game sẽ giúp đường truyền luôn được ưu tiên băng thông.",
      "Ngoài ra, người dùng nên kiểm tra định kỳ các ứng dụng chạy ngầm đang chiếm dụng băng thông tải về để có trải nghiệm chơi game trọn vẹn nhất."
    ]
  },
  {
    id: "news-3",
    slug: "bung-no-dai-tiec-the-thao-ngoai-hang-anh-tren-combo-truyen-hinh",
    title: "Bùng nổ đại tiệc thể thao Ngoại Hạng Anh trên gói cước Combo Truyền Hình",
    excerpt: "Thưởng thức trọn vẹn 380 trận cầu kịch tính của giải Ngoại Hạng Anh với chất lượng hình ảnh 4K Ultra HD và âm thanh vòm sống động.",
    category: "Khuyến mãi",
    date: "12/10/2026",
    image: "/images/news/1758178955_internet-truyen-hinh-01.webp",
    author: "Phòng Truyền Thông",
    readTime: "3 phút đọc",
    content: [
      "Mùa giải bóng đá sôi động đã chính thức bước vào giai đoạn hấp dẫn nhất. Để đáp ứng nhu cầu thưởng thức của các tín đồ túc cầu giáo, FPT Telecom chính thức triển khai gói cước Combo Sky Thể Thao với mức giá vô cùng ưu đãi.",
      "Chỉ từ 275.000đ/tháng, khách hàng sở hữu ngay đường truyền Internet 300Mbps cùng bản quyền phát sóng độc quyền trọn vẹn Ngoại Hạng Anh, Cúp C1 châu Âu và các chương trình bình luận chuyên sâu.",
      "Đặc biệt, khách hàng còn được trang bị miễn phí đầu thu TV Box điều khiển giọng nói thế hệ mới, biến mọi chiếc TV thường thành trung tâm giải trí đỉnh cao."
    ]
  },
  {
    id: "news-4",
    slug: "giai-phap-internet-doanh-nghiep-voi-dia-chi-ip-tinh",
    title: "Giải pháp Internet cáp quang doanh nghiệp: Vì sao địa chỉ IP Tĩnh lại quan trọng?",
    excerpt: "Tìm hiểu tầm quan trọng của IP Tĩnh đối với vận hành máy chủ, camera an ninh giám sát và mạng riêng ảo VPN của doanh nghiệp.",
    category: "Doanh nghiệp",
    date: "08/10/2026",
    image: "/images/news/1775808186_fptvn1100x6606.webp",
    author: "Ban Dự Án B2B",
    readTime: "6 phút đọc",
    content: [
      "Đối với các công ty, doanh nghiệp hay cửa hàng kinh doanh, mạng Internet không chỉ đơn thuần là công cụ lướt web mà là huyết mạch vận hành toàn bộ hệ thống số.",
      "Địa chỉ IP Tĩnh (Static IP) là một địa chỉ IP cố định được nhà mạng gán riêng cho doanh nghiệp, không bị thay đổi mỗi khi modem khởi động lại.",
      "Điều này đảm bảo cho hệ thống máy chủ nội bộ (Mail Server, Web Server), hệ thống camera giám sát từ xa và các kết nối VPN làm việc từ xa của nhân viên luôn hoạt động trơn tru không bị gián đoạn.",
      "Các gói cước Super Biz của FPT Telecom đều đi kèm sẵn IP Tĩnh miễn phí cùng cam kết băng thông quốc tế tiêu chuẩn cao nhất thị trường."
    ]
  },
  {
    id: "news-5",
    slug: "chia-se-kinh-nghiem-dat-vi-tri-modem-wifi-trong-nha-de-song-khoe-nhat",
    title: "Chia sẻ kinh nghiệm đặt vị trí modem wifi trong nhà để sóng khỏe nhất",
    excerpt: "Vị trí đặt modem ảnh hưởng đến hơn 60% chất lượng phủ sóng WiFi trong ngôi nhà của bạn. Xem ngay các mẹo đơn giản nhưng cực kỳ hữu ích.",
    category: "Mẹo công nghệ",
    date: "04/10/2026",
    image: "/images/news/1775808406_05.webp",
    author: "Đội Ngũ Triển Khai",
    readTime: "4 phút đọc",
    content: [
      "Nhiều người dùng thường thắc mắc vì sao gói cước đăng ký tốc độ cao nhưng khi sang phòng bên cạnh thì sóng lại yếu và chập chờn. Nguyên nhân chủ yếu nằm ở vị trí lắp đặt modem.",
      "Thứ nhất: Hãy đặt modem ở vị trí trung tâm của ngôi nhà và trên cao (khoảng 1.5m so với mặt đất) để sóng phân bổ đều hình cầu.",
      "Thứ hai: Tránh đặt modem trong hộc tủ kín, gần bể cá lớn hoặc cạnh lò vi sóng vì nước và kim loại là những vật cản sóng cực mạnh.",
      "Thứ ba: Với nhà nhiều tầng hoặc diện tích lớn trên 100m2, hãy cân nhắc sử dụng thêm các cục phát Mesh WiFi để tạo mạng lưới phủ sóng liền mạch không góc chết."
    ]
  },
  {
    id: "news-6",
    slug: "chinh-sach-tri-an-khach-hang-than-thiet-nam-2026",
    title: "Chính sách tri ân khách hàng thân thiết: Nâng cấp băng thông hoàn toàn miễn phí",
    excerpt: "Nhân dịp kỷ niệm thành lập, FPT Telecom triển khai chương trình nâng cấp băng thông tự động cho hơn 500.000 thuê bao đang hoạt động.",
    category: "Tin tức",
    date: "01/10/2026",
    image: "/images/news/1775808424_04.webp",
    author: "Chăm Sóc Khách Hàng",
    readTime: "3 phút đọc",
    content: [
      "Nhằm tri ân sự tin tưởng và đồng hành của quý khách hàng trong suốt thời gian qua, FPT Telecom trân trọng công bố chương trình 'Tốc Độ Mới - Trải Nghiệm Mới 2026'.",
      "Theo đó, toàn bộ khách hàng đang sử dụng các gói cước cá nhân và gia đình sẽ được tự động nâng cấp băng thông tối thiểu thêm 30% - 50% hoàn toàn miễn phí mà giá cước hàng tháng không đổi.",
      "Hệ thống sẽ tự động cấu hình lại cổng đường truyền từ xa trên hạ tầng máy chủ mà không cần khách hàng phải thao tác hay làm thủ tục gì thêm."
    ]
  }
];

// DANH SÁCH 63 TỈNH THÀNH VIỆT NAM (DÙNG CHO TRA CỨU VÙNG PHỦ SÓNG)
export const VIETNAM_PROVINCES = [
  "Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Cần Thơ",
  "An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu",
  "Bắc Ninh", "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước",
  "Bình Thuận", "Cà Mau", "Cao Bằng", "Đắk Lắk", "Đắk Nông",
  "Điện Biên", "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang",
  "Hà Nam", "Hà Tĩnh", "Hải Dương", "Hậu Giang", "Hòa Bình",
  "Hưng Yên", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu",
  "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định",
  "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên",
  "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị",
  "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên",
  "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang",
  "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
];
