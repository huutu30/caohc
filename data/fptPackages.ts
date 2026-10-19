export interface FptPackage {
  id: string;
  name: string;
  category: "ca_nhan" | "gia_dinh" | "game_thu" | "wifi_7" | "doanh_nghiep";
  categoryName: string;
  badge?: string;
  isHot?: boolean;
  downloadSpeed: string;
  uploadSpeed: string;
  price: number | { hcm: number; tinh: number }; // VNĐ / tháng đã gồm VAT
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
  badge?: string;
  isPopular?: boolean;
  description?: string;
}

// DANH SÁCH GÓI CƯỚC CHUẨN FPT TELECOM
export const FPT_PACKAGES: FptPackage[] = [
  // ================= CÁ NHÂN =================
  {
    id: "giga",
    name: "Giga",
    category: "ca_nhan",
    categoryName: "Cá nhân",
    downloadSpeed: "150 Mbps",
    uploadSpeed: "150 Mbps",
    price: { hcm: 235000, tinh: 195000 },
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
    price: { hcm: 245000, tinh: 205000 },
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
    price: { hcm: 325000, tinh: 300000 },
    pricePrepaid6M: 1980000,
    pricePrepaid12M: 3960000,
    gift6M: "Tặng 01 tháng cước",
    gift12M: "Tặng 02 tháng cước + Quà tặng FPT",
    image: "/images/meta.webp",
    modem: "Modem Wi-Fi 6 AX3000 cao cấp",
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

  // ================= GIA ĐÌNH =================
  {
    id: "sky-f1",
    name: "Sky F1 (Kèm Mesh)",
    category: "gia_dinh",
    categoryName: "Gia đình",
    badge: "Gia đình khuyên dùng",
    isHot: true,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "150 Mbps",
    price: { hcm: 265000, tinh: 225000 },
    pricePrepaid6M: 1530000,
    pricePrepaid12M: 3060000,
    gift6M: "Tặng 01 tháng cước + Bàn giao thiết bị miễn phí",
    gift12M: "Tặng 02 tháng cước + Ưu đãi thiết bị",
    image: "/images/sky-f1.webp",
    modem: "01 Modem Wi-Fi 6 + 01 Cục phát Mesh Wi-Fi 6",
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
    id: "giga-f1",
    name: "Giga F1 (Kèm Mesh)",
    category: "gia_dinh",
    categoryName: "Gia đình",
    downloadSpeed: "150 Mbps",
    uploadSpeed: "150 Mbps",
    price: { hcm: 255000, tinh: 215000 },
    pricePrepaid6M: 1260000,
    pricePrepaid12M: 2520000,
    gift6M: "Tặng 01 tháng cước",
    gift12M: "Tặng 02 tháng cước",
    image: "/images/giga-f1.webp",
    modem: "01 Modem Wi-Fi 6 + 01 Cục phát Mesh Wi-Fi 6",
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
    id: "sky-f2",
    name: "Sky F2 (2 Mesh)",
    category: "gia_dinh",
    categoryName: "Gia đình",
    badge: "Nhà 3 - 4 Tầng",
    downloadSpeed: "1 Gbps",
    uploadSpeed: "150 Mbps",
    price: { hcm: 285000, tinh: 255000 },
    pricePrepaid6M: 1710000,
    pricePrepaid12M: 3420000,
    gift6M: "Tặng 01 tháng cước + 2 Thiết bị Mesh",
    gift12M: "Tặng 02 tháng cước + Miễn phí triển khai",
    image: "/images/sky-f2.webp",
    modem: "01 Modem Wi-Fi 6 + 02 Cục phát Mesh Wi-Fi 6",
    recommendedDevices: "15 - 30 thiết bị",
    description: "Đột phá độ phủ sóng với 2 thiết bị Mesh Wi-Fi 6 chuyên dụng cho nhà phố từ 3-4 tầng hoặc căn hộ trên 120m2.",
    features: [
      "Download không giới hạn 1 Gbps, Upload 150 Mbps",
      "Trang bị 01 Modem Wi-Fi 6 + 02 Thiết bị Mesh phụ trợ",
      "Phủ sóng liên tục không góc chết trong toàn bộ căn nhà",
      "Chuyển vùng thông minh không lo rớt mạng khi di chuyển",
      "Đáp ứng trọn vẹn 15-30 thiết bị kết nối đồng thời"
    ]
  },
  {
    id: "meta-f1",
    name: "Meta F1 (Kèm Mesh)",
    category: "gia_dinh",
    categoryName: "Gia đình",
    badge: "1Gbps Đối Xứng",
    downloadSpeed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    price: { hcm: 345000, tinh: 320000 },
    pricePrepaid6M: 2160000,
    pricePrepaid12M: 4320000,
    gift6M: "Tặng 01 tháng + 01 Mesh Wi-Fi",
    gift12M: "Tặng 02 tháng + 02 Mesh Wi-Fi",
    image: "/images/meta-f1.webp",
    modem: "01 Modem Wi-Fi 6 AX3000 + 01 Mesh Wi-Fi 6",
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

  // ================= GAME THỦ =================
  {
    id: "f-game",
    name: "F-Game",
    category: "game_thu",
    categoryName: "Game thủ",
    badge: "Độc quyền Ultra Fast",
    isHot: true,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "300 Mbps",
    price: { hcm: 300000, tinh: 265000 },
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
  {
    id: "fgame-f1",
    name: "F-Game F1 (Kèm Mesh)",
    category: "game_thu",
    categoryName: "Game thủ",
    badge: "Phòng Game Tại Gia",
    downloadSpeed: "1 Gbps",
    uploadSpeed: "300 Mbps",
    price: { hcm: 330000, tinh: 295000 },
    pricePrepaid6M: 1980000,
    pricePrepaid12M: 3960000,
    gift6M: "Tặng 01 tháng + 01 Mesh Gaming",
    gift12M: "Tặng 02 tháng + 01 Mesh Gaming",
    image: "/images/f-game-f1.webp",
    modem: "Modem Gaming Wi-Fi 6 + 01 Mesh Wi-Fi 6",
    recommendedDevices: "10 - 25 thiết bị",
    description: "Combo game thủ toàn năng: Băng thông 1Gbps, công nghệ Ultra Fast kèm 01 Mesh Wi-Fi 6 phủ sóng mọi góc chơi game.",
    features: [
      "Download 1 Gbps, Upload 300 Mbps",
      "Trang bị 01 Modem Gaming + 01 Cục phát Mesh Wi-Fi 6",
      "Tính năng Ultra Fast tự động nhận diện luồng game eSports",
      "Ping ổn định < 10ms tới các cụm máy chủ Đông Nam Á",
      "Chuyên biệt cho streamer và gamer thi đấu online"
    ]
  },

  // ================= WI-FI 7 =================
  {
    id: "speedx2",
    name: "FPT SpeedX2",
    category: "wifi_7",
    categoryName: "Wi-Fi 7",
    badge: "Chuẩn Wi-Fi 7",
    isHot: true,
    downloadSpeed: "2 Gbps",
    uploadSpeed: "2 Gbps",
    price: 999000,
    image: "/images/speedx2.webp",
    modem: "Modem Wi-Fi 7 (XGS-PON) + 01 Mesh Wi-Fi 7",
    recommendedDevices: "Đến 100 thiết bị",
    description: "Đột phá tốc độ thế hệ mới với chuẩn Wi-Fi 7 và hạ tầng XGS-PON 2Gbps đối xứng siêu tốc.",
    features: [
      "Tốc độ Download & Upload đối xứng 2 Gbps (2000 Mbps)",
      "Chuẩn Wi-Fi 7 tăng khả năng tải gấp 4 lần thế hệ cũ",
      "Hạ tầng quang XGS-PON tân tiến nhất Việt Nam",
      "Trang bị Modem Wi-Fi 7 + Tặng 01 Mesh Wi-Fi 7",
      "Tích hợp gói giải trí ZPlay trên FPT Play"
    ]
  },
  {
    id: "speedx2-pro",
    name: "FPT SpeedX2 Pro",
    category: "wifi_7",
    categoryName: "Wi-Fi 7",
    badge: "Wi-Fi 7 + TV Box",
    downloadSpeed: "2 Gbps",
    uploadSpeed: "2 Gbps",
    price: 1099000,
    image: "/images/speedx2-pro.webp",
    modem: "Modem Wi-Fi 7 + 01 Mesh Wi-Fi 7 + Box FPT Play",
    recommendedDevices: "Đến 100 thiết bị",
    description: "Trọn bộ giải trí và kết nối tương lai: Tốc độ 2Gbps đối xứng, thiết bị Wi-Fi 7 cùng gói FPT Play VIP đặc sắc.",
    features: [
      "Băng thông 2 Gbps Download/Upload cực đại",
      "01 Modem Wi-Fi 7 + 01 Mesh Wi-Fi 7 phủ sóng toàn diện",
      "Đầu thu thông minh FPT Play Box 4K điều khiển giọng nói",
      "Trọn gói thể thao Ngoại Hạng Anh & Kênh truyền hình VIP",
      "Dịch vụ chăm sóc và xử lý đường truyền ưu tiên hàng đầu"
    ]
  },
  {
    id: "speedx10",
    name: "FPT SpeedX10",
    category: "wifi_7",
    categoryName: "Wi-Fi 7",
    badge: "10 Gbps Kỷ Lục",
    downloadSpeed: "10 Gbps",
    uploadSpeed: "10 Gbps",
    price: 1599000,
    image: "/images/speedx10.webp",
    modem: "Modem Wi-Fi 7 10G Gateway chuyên dụng",
    recommendedDevices: "Đến 200 thiết bị",
    description: "Kỷ lục tốc độ Internet băng thông rộng tại Việt Nam: 10 Gbps đối xứng, kiến tạo kỷ nguyên số tương lai.",
    features: [
      "Tốc độ Download/Upload 10 Gbps (10.000 Mbps) kỷ lục",
      "Thiết bị Gateway Wi-Fi 7 cao cấp hàng đầu thế giới",
      "Xử lý dữ liệu lớn, render 8K, máy chủ AI tại chỗ",
      "Băng thông không giới hạn xuyên suốt 24/7",
      "Đội ngũ chuyên gia kỹ thuật hỗ trợ riêng biệt"
    ]
  },
  {
    id: "speedx10-pro",
    name: "FPT SpeedX10 Pro",
    category: "wifi_7",
    categoryName: "Wi-Fi 7",
    badge: "Siêu Phẩm VVIP",
    downloadSpeed: "10 Gbps",
    uploadSpeed: "10 Gbps",
    price: 1699000,
    image: "/images/speedx10-pro.webp",
    modem: "Modem Wi-Fi 7 10G Gateway + Box FPT Play VIP",
    recommendedDevices: "Đến 200 thiết bị",
    description: "Siêu phẩm công nghệ tối thượng kết hợp đường truyền 10Gbps và hệ sinh thái giải trí đỉnh cao FPT Play.",
    features: [
      "Đường truyền đối xứng 10 Gbps không giới hạn",
      "Thiết bị Wi-Fi 7 10G cao cấp nhất thị trường",
      "Tặng kèm trọn bộ thiết bị giải trí Box FPT Play 4K",
      "Đặc quyền bản quyền thể thao & kênh quốc tế trọn đời",
      "Cam kết hỗ trợ kỹ thuật viên cấp cao tận nơi"
    ]
  },

  // ================= DOANH NGHIỆP =================
  {
    id: "s300-biz",
    name: "Super 300 Biz",
    category: "doanh_nghiep",
    categoryName: "Doanh nghiệp",
    badge: "Doanh nghiệp vừa",
    downloadSpeed: "300 Mbps",
    uploadSpeed: "300 Mbps",
    price: { hcm: 545000, tinh: 450000 },
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
  },
  {
    id: "s500-biz",
    name: "Super 500 Biz",
    category: "doanh_nghiep",
    categoryName: "Doanh nghiệp",
    badge: "Doanh nghiệp lớn",
    downloadSpeed: "500 Mbps",
    uploadSpeed: "500 Mbps",
    price: 1400000,
    pricePrepaid6M: 8400000,
    pricePrepaid12M: 16800000,
    gift6M: "Tặng 01 tháng + 01 IP Tĩnh",
    gift12M: "Tặng 02 tháng + 01 IP Tĩnh",
    image: "/images/s500-biz.webp",
    modem: "Router DrayTek / Vigor chuyên dụng",
    recommendedDevices: "50 - 100 nhân sự",
    description: "Băng thông cực lớn 500 Mbps đối xứng, cam kết quốc tế cao, dành cho doanh nghiệp nhiều chi nhánh và văn phòng lớn.",
    features: [
      "Tốc độ 500 Mbps đối xứng Download/Upload",
      "Cam kết băng thông quốc tế tối thiểu 18.9 Mbps",
      "Tặng 01 địa chỉ IP Tĩnh độc quyền",
      "Cân bằng tải nhiều đường truyền, chống gián đoạn",
      "Hỗ trợ kỹ thuật viên chuyên trách doanh nghiệp"
    ]
  },
  {
    id: "lux500",
    name: "LUX 500",
    category: "doanh_nghiep",
    categoryName: "Doanh nghiệp",
    badge: "Chuẩn Wi-Fi 6 Doanh Nghiệp",
    isHot: true,
    downloadSpeed: "500 Mbps",
    uploadSpeed: "500 Mbps",
    price: 800000,
    pricePrepaid6M: 4800000,
    pricePrepaid12M: 9600000,
    gift6M: "Tặng 01 tháng cước + 01 IP Tĩnh",
    gift12M: "Tặng 02 tháng cước + IP Tĩnh + Thiết bị cân bằng tải",
    image: "/images/lux500.webp",
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
    id: "lux800",
    name: "LUX 800",
    category: "doanh_nghiep",
    categoryName: "Doanh nghiệp",
    badge: "Wi-Fi 6 Cao Cấp Nhất",
    downloadSpeed: "800 Mbps",
    uploadSpeed: "800 Mbps",
    price: 1000000,
    pricePrepaid6M: 6000000,
    pricePrepaid12M: 12000000,
    gift6M: "Tặng 01 tháng + 01 IP Tĩnh + 01 Mesh Wi-Fi 6",
    gift12M: "Tặng 02 tháng + 01 IP Tĩnh + 01 Mesh Wi-Fi 6",
    image: "/images/lux800.webp",
    modem: "01 Router Wi-Fi 6 Doanh Nghiệp + 01 Mesh Wi-Fi 6",
    recommendedDevices: "60 - 100 thiết bị",
    description: "Gói cước LUX Wi-Fi 6 đỉnh cao tốc độ 800 Mbps đối xứng, chịu tải cùng lúc hàng trăm khách hàng cho chuỗi nhà hàng, khách sạn.",
    features: [
      "Băng thông 800 Mbps đối xứng Download/Upload",
      "Cam kết băng thông quốc tế tối thiểu 12.6 Mbps",
      "Trang bị hệ thống Router Wi-Fi 6 doanh nghiệp + Mesh",
      "Tặng 01 IP Tĩnh chuẩn doanh nghiệp",
      "Đặc quyền kiểm tra định kỳ và hỗ trợ ưu tiên"
    ]
  }
];

// GÓI COMBO THỂ THAO VVIP NGOẠI HẠNG ANH
export const VVIP_SPORTS_PACKAGES: FptVvipSportsCombo[] = [
  {
    id: "combo-giga-vvip",
    name: "Combo Giga - V.VIP",
    image: "/images/giga-vvip.webp",
    priceNgoaiThanh: 220000,
    priceNoiThanh: 240000,
    downloadSpeed: "150 Mbps",
    uploadSpeed: "150 Mbps",
    badge: "Xem Ngoại Hạng Anh",
    description: "Trọn bộ Internet Wi-Fi 6 và bản quyền trọn vẹn 380 trận Ngoại Hạng Anh, phù hợp cho cá nhân & gia đình trẻ.",
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
    image: "/images/sky-vvip.webp",
    priceNgoaiThanh: 239000,
    priceNoiThanh: 269000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "150 Mbps",
    badge: "Gói Xem Nhiều Nhất",
    isPopular: true,
    description: "Gói combo giải trí đỉnh cao: Tải 1Gbps, bản quyền Ngoại Hạng Anh & Cúp C1 UEFA, xem đồng thời trên nhiều màn hình.",
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
    image: "/images/meta-vvip.webp",
    priceNgoaiThanh: 345000,
    priceNoiThanh: 375000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    badge: "1Gbps Đối Xứng",
    description: "Đường truyền 1Gbps đối xứng kết hợp trọn vẹn gói kênh V.VIP & thể thao Ngoại Hạng Anh chuẩn 4K siêu nét.",
    features: [
      "Download/Upload đối xứng 1 Gbps cực đại",
      "Gói kênh truyền hình VIP & Thể thao đỉnh cao",
      "Trang bị Modem Wi-Fi 6 AX3000 + Box FPT Play",
      "Xem mượt mà đồng thời trên 5 thiết bị",
      "Đặc quyền chăm sóc và phục vụ ưu tiên số 1"
    ]
  },
  {
    id: "combo-lux500-vvip",
    name: "Combo LUX 500 - V.VIP",
    image: "/images/lux500-vvip.webp",
    priceNgoaiThanh: 885000,
    priceNoiThanh: 925000,
    downloadSpeed: "500 Mbps",
    uploadSpeed: "500 Mbps",
    badge: "Quán Cafe / Nhà Hàng",
    description: "Dành riêng cho quán cafe, nhà hàng, quán pub trình chiếu các trận cầu đỉnh cao Ngoại Hạng Anh cho hàng trăm khách hàng.",
    features: [
      "Băng thông 500 Mbps đối xứng chịu tải cực lớn",
      "Bản quyền phát sóng công cộng Ngoại Hạng Anh & C1",
      "Trang bị thiết bị Wi-Fi 6 doanh nghiệp + Box FPT Play 4K",
      "Kèm 01 địa chỉ IP Tĩnh ổn định tuyệt đối",
      "Đội ngũ kỹ thuật trực ca hỗ trợ tận nơi"
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

export function getPackagesByCategory(category: string): FptPackage[] {
  return FPT_PACKAGES.filter((p) => p.category === category);
}

