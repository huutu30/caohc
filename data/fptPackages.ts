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
  priceNoiThanh: number | null;
  downloadSpeed: string;
  uploadSpeed: string;
  features: string[];
  badge?: string;
  isPopular?: boolean;
  description?: string;
}

export interface FptPlayOnlyPackage {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  badge?: string;
}

export interface FptAddonService {
  id: string;
  name: string;
  price: number;
  billing: string;
  image: string;
  description: string;
  features: string[];
}

// =========================================================================
// DANH SÁCH TẤT CẢ GÓI CƯỚC CHUẨN CÀO TỪ API CHÍNH THỨC FPT TELECOM (fpt.vn)
// LOẠI TRỪ HOÀN TOÀN CÁC GÓI COMBO CAMERA AN TÂM THEO YÊU CẦU CỦA USER
// =========================================================================

export const FPT_PACKAGES: FptPackage[] = [
  // ================= 1. INTERNET CÁ NHÂN =================
  {
    id: "giga",
    name: "Giga",
    category: "ca_nhan",
    categoryName: "Cá nhân",
    downloadSpeed: "300 Mbps",
    uploadSpeed: "300 Mbps",
    price: { hcm: 235000, tinh: 195000 },
    pricePrepaid6M: 1170000,
    pricePrepaid12M: 2340000,
    gift6M: "Tặng 01 tháng cước thứ 7",
    gift12M: "Tặng 02 tháng cước thứ 13, 14",
    image: "/images/giga.webp",
    modem: "Modem Wi-Fi 6 Băng tần kép AX1800",
    recommendedDevices: "1 - 10 thiết bị",
    description: "Tốc độ 300 Mbps đối xứng, đường truyền ổn định tối ưu cho làm việc, học tập và giải trí cá nhân.",
    features: [
      "Tốc độ Download/Upload đối xứng 300 Mbps",
      "Trang bị miễn phí Modem Wi-Fi 6 chuẩn AX thế hệ mới",
      "Kết nối đồng thời mượt mà 1 - 10 thiết bị",
      "Không giới hạn dung lượng truy cập (Unlimited Data)",
      "Bàn giao thiết bị và hoàn tất triển khai trong 24 giờ"
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
    uploadSpeed: "300 Mbps",
    price: { hcm: 245000, tinh: 205000 },
    pricePrepaid6M: 1290000,
    pricePrepaid12M: 2580000,
    gift6M: "Tặng 01 tháng cước + Bàn giao thiết bị miễn phí",
    gift12M: "Tặng 02 tháng cước + Quà tặng FPT",
    image: "/images/sky.webp",
    modem: "Modem Wi-Fi 6 Băng tần kép chuẩn AX",
    recommendedDevices: "5 - 15 thiết bị",
    description: "Bứt phá tốc độ tải 1 Gbps, lướt web, xem phim 4K, livestream và tải tài liệu lớn trong nháy mắt.",
    features: [
      "Tốc độ Download không giới hạn lên đến 1 Gbps (1024 Mbps)",
      "Tốc độ Upload cực nhanh 300 Mbps",
      "Trang bị Modem Wi-Fi 6 phủ sóng rộng xuyên tường",
      "Đáp ứng tốt Smart TV, máy tính, điện thoại cùng lúc",
      "Đồng hành và chăm sóc khách hàng tận tâm, chu đáo"
    ]
  },
  {
    id: "meta",
    name: "Meta",
    category: "ca_nhan",
    categoryName: "Cá nhân",
    badge: "1Gbps Đối Xứng",
    downloadSpeed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    price: { hcm: 325000, tinh: 295000 },
    pricePrepaid6M: 1770000,
    pricePrepaid12M: 3540000,
    gift6M: "Tặng 01 tháng cước",
    gift12M: "Tặng 02 tháng cước + Quà tặng FPT",
    image: "/images/meta.webp",
    modem: "Modem Wi-Fi 6 AX3000 cao cấp",
    recommendedDevices: "10 - 25 thiết bị",
    description: "Băng thông đối xứng 1 Gbps đỉnh cao, tải lên và tải xuống cực đại cho Content Creator và nhà nhiều tầng.",
    features: [
      "Download & Upload đối xứng 1 Gbps (1024 Mbps)",
      "Băng thông không giới hạn mở rộng trải nghiệm số",
      "Trang bị Modem Wi-Fi 6 AX3000 thế hệ mới nhất",
      "Tối ưu cho nhà phố nhiều tầng, căn hộ cao cấp",
      "Ưu tiên luồng kết nối mượt mà vào giờ cao điểm"
    ]
  },

  // ================= 2. INTERNET GIA ĐÌNH (KÈM MESH WI-FI 6) =================
  {
    id: "giga-f1",
    name: "Giga F1 (Kèm Mesh)",
    category: "gia_dinh",
    categoryName: "Gia đình",
    downloadSpeed: "300 Mbps",
    uploadSpeed: "300 Mbps",
    price: { hcm: 255000, tinh: 215000 },
    pricePrepaid6M: 1230000,
    pricePrepaid12M: 2460000,
    gift6M: "Tặng 01 tháng cước",
    gift12M: "Tặng 02 tháng cước",
    image: "/images/giga-f1.webp",
    modem: "01 Modem Wi-Fi 6 + 01 Cục phát Mesh Wi-Fi 6",
    recommendedDevices: "5 - 15 thiết bị",
    description: "Giải pháp mở rộng vùng phủ sóng WiFi cho căn hộ 2-3 phòng ngủ, triệt tiêu mọi điểm chết sóng.",
    features: [
      "Tốc độ Download/Upload 300 Mbps đối xứng",
      "Trang bị 01 Modem Wi-Fi 6 + 01 Thiết bị Mesh mở rộng",
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
    uploadSpeed: "300 Mbps",
    price: { hcm: 265000, tinh: 225000 },
    pricePrepaid6M: 1260000,
    pricePrepaid12M: 2520000,
    gift6M: "Tặng 01 tháng cước + Bàn giao thiết bị miễn phí",
    gift12M: "Tặng 02 tháng cước + Ưu đãi thiết bị",
    image: "/images/sky-f1.webp",
    modem: "01 Modem Wi-Fi 6 + 01 Cục phát Mesh Wi-Fi 6",
    recommendedDevices: "8 - 20 thiết bị",
    description: "Gói cước gia đình hoàn hảo: Tải 1 Gbps, kèm thiết bị Mesh phủ sóng rộng khắp nhà phố nhiều tầng.",
    features: [
      "Download 1 Gbps cực đại + Upload 300 Mbps",
      "Trang bị 01 Modem Wi-Fi 6 + 01 Mesh Wi-Fi 6",
      "Hệ sinh thái Mesh phủ sóng từ tầng 1 đến tầng thượng",
      "Cân mọi thiết bị Smart TV 4K, thiết bị thông minh",
      "Cam kết đồng hành và chăm sóc khách hàng nhanh trong ngày"
    ]
  },
  {
    id: "sky-f2",
    name: "Sky F2 (2 Mesh)",
    category: "gia_dinh",
    categoryName: "Gia đình",
    badge: "Nhà 3 - 4 Tầng",
    downloadSpeed: "1 Gbps",
    uploadSpeed: "300 Mbps",
    price: { hcm: 285000, tinh: 245000 },
    pricePrepaid6M: 1380000,
    pricePrepaid12M: 2760000,
    gift6M: "Tặng 01 tháng cước + 2 Thiết bị Mesh",
    gift12M: "Tặng 02 tháng cước + Miễn phí triển khai",
    image: "/images/sky-f2.webp",
    modem: "01 Modem Wi-Fi 6 + 02 Cục phát Mesh Wi-Fi 6",
    recommendedDevices: "15 - 25 thiết bị",
    description: "Đột phá độ phủ sóng với 2 thiết bị Mesh Wi-Fi 6 chuyên dụng cho nhà phố từ 3-4 tầng hoặc căn hộ trên 120m2.",
    features: [
      "Download không giới hạn 1 Gbps, Upload 300 Mbps",
      "Trang bị 01 Modem Wi-Fi 6 + 02 Thiết bị Mesh phụ trợ",
      "Phủ sóng liên tục không góc chết trong toàn bộ căn nhà",
      "Chuyển vùng thông minh không lo gián đoạn khi di chuyển",
      "Đáp ứng trọn vẹn 15 - 25 thiết bị kết nối đồng thời"
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
    price: { hcm: 345000, tinh: 315000 },
    pricePrepaid6M: 1890000,
    pricePrepaid12M: 3780000,
    gift6M: "Tặng 01 tháng + 01 Mesh Wi-Fi 6",
    gift12M: "Tặng 02 tháng + 02 Mesh Wi-Fi 6",
    image: "/images/meta-f1.webp",
    modem: "01 Modem Wi-Fi 6 AX3000 + 01 Mesh Wi-Fi 6",
    recommendedDevices: "15 - 35 thiết bị",
    description: "Đỉnh cao kết nối gia đình với băng thông 1 Gbps đối xứng và hệ thống Mesh WiFi cao cấp.",
    features: [
      "Băng thông đối xứng 1 Gbps Download/Upload",
      "Trang bị trọn bộ Modem Wi-Fi 6 và thiết bị Mesh mở rộng",
      "Hỗ trợ kết nối đồng thời trên 35 thiết bị thông minh",
      "Tối ưu cho Smart Home, phòng chiếu phim, stream 4K",
      "Chăm sóc kỹ thuật ưu tiên riêng cho thuê bao VIP"
    ]
  },

  // ================= 3. INTERNET GAME THỦ =================
  {
    id: "f-game",
    name: "F-Game",
    category: "game_thu",
    categoryName: "Game thủ",
    badge: "Độc quyền Ultra Fast",
    isHot: true,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "300 Mbps",
    price: { hcm: 295000, tinh: 265000 },
    pricePrepaid6M: 1350000,
    pricePrepaid12M: 2700000,
    gift6M: "Tặng 01 tháng + Code Game độc quyền",
    gift12M: "Tặng 02 tháng + Quà tặng Game thủ",
    image: "/images/f-game.webp",
    modem: "Modem Gaming Wi-Fi 6 chuyên dụng",
    recommendedDevices: "5 - 15 thiết bị",
    description: "Tích hợp công nghệ Ultra Fast ứng dụng AI tự động tối ưu tuyến cáp, giảm Ping tới 50+ tựa game eSports hot.",
    features: [
      "Băng thông tải 1 Gbps + Tải lên 300 Mbps siêu tốc",
      "Tích hợp sẵn tính năng Ultra Fast chống lag, giảm Ping xuống tới 16ms",
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
    price: { hcm: 315000, tinh: 285000 },
    pricePrepaid6M: 1530000,
    pricePrepaid12M: 3060000,
    gift6M: "Tặng 01 tháng + 01 Mesh Gaming",
    gift12M: "Tặng 02 tháng + 01 Mesh Gaming",
    image: "/images/f-game-f1.webp",
    modem: "Modem Gaming Wi-Fi 6 + 01 Mesh Wi-Fi 6",
    recommendedDevices: "10 - 25 thiết bị",
    description: "Combo game thủ toàn năng: Băng thông 1 Gbps, công nghệ Ultra Fast kèm 01 Mesh Wi-Fi 6 phủ sóng mọi góc chơi game.",
    features: [
      "Download 1 Gbps, Upload 300 Mbps",
      "Trang bị 01 Modem Gaming + 01 Cục phát Mesh Wi-Fi 6",
      "Tính năng Ultra Fast tự động nhận diện luồng game eSports",
      "Ping ổn định < 10ms tới các cụm máy chủ Đông Nam Á",
      "Chuyên biệt cho streamer và gamer thi đấu online"
    ]
  },

  // ================= 4. WI-FI 7 & TỐC ĐỘ CAO (XGS-PON) =================
  {
    id: "speedx1",
    name: "SpeedX1",
    category: "wifi_7",
    categoryName: "Wi-Fi 7",
    badge: "Chuẩn Wi-Fi 7",
    downloadSpeed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    price: 350000,
    image: "/images/speedx1.webp",
    modem: "Modem Wi-Fi 7 Chuẩn BE",
    recommendedDevices: "Đến 50 thiết bị",
    description: "Trải nghiệm chuẩn Wi-Fi 7 thế hệ mới nhất với tốc độ 1 Gbps đối xứng, tăng tốc độ truyền tải gấp 4 lần.",
    features: [
      "Download & Upload đối xứng 1 Gbps chuẩn Wi-Fi 7",
      "Công nghệ Multi-Link Operation (MLO) giảm độ trễ cực thấp",
      "Modem Wi-Fi 7 chính hãng phủ sóng xuyên mọi vật cản",
      "Kết nối đồng thời lên đến 50 thiết bị không lo nghẽn",
      "Đội ngũ triển khai chuyên biệt công nghệ cao"
    ]
  },
  {
    id: "speedx1-f1",
    name: "SpeedX1 F1 (Kèm Mesh Wi-Fi 7)",
    category: "wifi_7",
    categoryName: "Wi-Fi 7",
    badge: "Wi-Fi 7 Toàn Diện",
    downloadSpeed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    price: 380000,
    image: "/images/speedx1-f1.webp",
    modem: "01 Modem Wi-Fi 7 + 01 Mesh Wi-Fi 7",
    recommendedDevices: "Đến 100 thiết bị",
    description: "Hệ thống Wi-Fi 7 Mesh toàn diện cho biệt thự, nhà phố nhiều tầng với tốc độ 1 Gbps đối xứng không góc chết.",
    features: [
      "Băng thông 1 Gbps đối xứng trên nền tảng Wi-Fi 7",
      "01 Modem Wi-Fi 7 Gateway + 01 Mesh Wi-Fi 7 phụ trợ",
      "Seamless Roaming chuẩn 802.11be mượt mà tuyệt đối",
      "Kết nối đồng thời lên đến 100 thiết bị thông minh",
      "Đặc quyền bảo hành và chăm sóc khách hàng VIP"
    ]
  },
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
    description: "Đột phá tốc độ thế hệ mới với chuẩn Wi-Fi 7 và hạ tầng XGS-PON 2 Gbps đối xứng siêu tốc.",
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
    description: "Trọn bộ giải trí và kết nối tương lai: Tốc độ 2 Gbps đối xứng, thiết bị Wi-Fi 7 cùng gói FPT Play VIP đặc sắc.",
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
      "Băng thông không giới hạn thông suốt",
      "Đội ngũ chuyên gia kỹ thuật phục vụ riêng biệt"
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
    description: "Siêu phẩm công nghệ tối thượng kết hợp đường truyền 10 Gbps và hệ sinh thái giải trí đỉnh cao FPT Play.",
    features: [
      "Đường truyền đối xứng 10 Gbps không giới hạn",
      "Thiết bị Wi-Fi 7 10G cao cấp nhất thị trường",
      "Tặng kèm trọn bộ thiết bị giải trí Box FPT Play 4K",
      "Đặc quyền bản quyền thể thao & kênh quốc tế sắc nét",
      "Cam kết triển khai dịch vụ và đồng hành tận nơi"
    ]
  },

  // ================= 5. INTERNET DOANH NGHIỆP =================
  {
    id: "s300-biz",
    name: "Super 300 Biz",
    category: "doanh_nghiep",
    categoryName: "Doanh nghiệp",
    badge: "Doanh nghiệp vừa",
    downloadSpeed: "300 Mbps",
    uploadSpeed: "300 Mbps",
    price: 450000,
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
    id: "s300-biz-plus",
    name: "Super 300 Biz Plus",
    category: "doanh_nghiep",
    categoryName: "Doanh nghiệp",
    badge: "Kèm Cân Bằng Tải",
    downloadSpeed: "300 Mbps",
    uploadSpeed: "300 Mbps",
    price: 750000,
    image: "/images/s300-biz-plus.webp",
    modem: "Router Cân bằng tải chuyên dụng DrayTek/MikroTik",
    recommendedDevices: "30 - 50 nhân sự",
    description: "Nâng cấp bộ cân bằng tải chuyên dụng chịu tải cao, tối ưu cho văn phòng giao dịch, quán cafe vừa.",
    features: [
      "Băng thông 300 Mbps đối xứng trong nước",
      "Tặng 01 IP Tĩnh định tuyến bảo mật cao",
      "Trang bị thiết bị cân bằng tải doanh nghiệp",
      "Chống nghẽn mạng giờ cao điểm, duy trì kết nối liên tục",
      "Hỗ trợ kỹ thuật doanh nghiệp ưu tiên"
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
    image: "/images/s500-biz.webp",
    modem: "Router DrayTek / Vigor chuyên dụng",
    recommendedDevices: "50 - 100 nhân sự",
    description: "Băng thông cực lớn 500 Mbps đối xứng, cam kết quốc tế cao, dành cho doanh nghiệp nhiều chi nhánh.",
    features: [
      "Tốc độ 500 Mbps đối xứng Download/Upload",
      "Cam kết băng thông quốc tế tối thiểu 18.9 Mbps",
      "Tặng 01 địa chỉ IP Tĩnh độc quyền",
      "Cân bằng tải nhiều đường truyền, chống gián đoạn",
      "Chăm sóc kỹ thuật chuyên trách doanh nghiệp"
    ]
  },
  {
    id: "s500-biz-plus",
    name: "Super 500 Biz Plus",
    category: "doanh_nghiep",
    categoryName: "Doanh nghiệp",
    badge: "Cân Bằng Tải Lớn",
    downloadSpeed: "500 Mbps",
    uploadSpeed: "500 Mbps",
    price: 1700000,
    image: "/images/s500-biz-plus.webp",
    modem: "Router Cân bằng tải công nghiệp cao cấp",
    recommendedDevices: "60 - 120 nhân sự",
    description: "Trang bị Router cân bằng tải công nghiệp thế hệ mới cho tòa nhà, trung tâm đào tạo, công ty công nghệ.",
    features: [
      "Tốc độ 500 Mbps đối xứng cực đại",
      "Cam kết quốc tế vượt trội, tặng IP Tĩnh",
      "Trang bị bộ cân bằng tải công nghiệp mạnh mẽ",
      "Khả năng mở rộng nhiều dải IP và phân luồng VLAN",
      "Cam kết chất lượng dịch vụ SLA doanh nghiệp"
    ]
  },
  {
    id: "s600-biz",
    name: "Super 600 Biz",
    category: "doanh_nghiep",
    categoryName: "Doanh nghiệp",
    badge: "Băng Thông 600Mbps",
    downloadSpeed: "600 Mbps",
    uploadSpeed: "600 Mbps",
    price: 2500000,
    image: "/images/s600-biz.webp",
    modem: "Thiết bị định tuyến EdgeRouter/MikroTik",
    recommendedDevices: "80 - 150 nhân sự",
    description: "Đường truyền băng thông siêu lớn 600 Mbps đối xứng cho văn phòng đa quốc gia, xưởng sản xuất lớn.",
    features: [
      "Băng thông 600 Mbps đối xứng trong nước",
      "Cam kết băng thông quốc tế cao",
      "Miễn phí 01 IP Tĩnh cố định chuẩn doanh nghiệp",
      "Thiết bị Gateway định tuyến cao cấp chuyên nghiệp",
      "Đội ngũ kỹ thuật hỗ trợ riêng chu đáo và tận tâm"
    ]
  },
  {
    id: "s600-biz-plus",
    name: "Super 600 Biz Plus",
    category: "doanh_nghiep",
    categoryName: "Doanh nghiệp",
    badge: "Chịu Tải Doanh Nghiệp",
    downloadSpeed: "600 Mbps",
    uploadSpeed: "600 Mbps",
    price: 2800000,
    image: "/images/s600-biz-plus.webp",
    modem: "Trọn bộ cân bằng tải công nghiệp cao cấp",
    recommendedDevices: "100 - 180 nhân sự",
    description: "Giải pháp 600 Mbps tích hợp router cân bằng tải doanh nghiệp hàng đầu, bảo đảm tính sẵn sàng cao.",
    features: [
      "Tốc độ 600 Mbps đối xứng không suy hao",
      "Bộ định tuyến cân bằng tải đa đường kết nối",
      "Tặng IP Tĩnh, cam kết quốc tế ổn định",
      "Phục vụ hội nghị trực tuyến, máy chủ VPN nội bộ",
      "Bảo hành và chăm sóc thiết bị toàn diện"
    ]
  },
  {
    id: "s800-biz",
    name: "Super 800 Biz",
    category: "doanh_nghiep",
    categoryName: "Doanh nghiệp",
    badge: "Siêu Tải 800Mbps",
    downloadSpeed: "800 Mbps",
    uploadSpeed: "800 Mbps",
    price: 3400000,
    image: "/images/s800-biz.webp",
    modem: "Router Gateway công nghiệp chịu tải lớn",
    recommendedDevices: "120 - 250 nhân sự",
    description: "Băng thông siêu khủng 800 Mbps đáp ứng trọn vẹn lưu lượng khổng lồ cho tập đoàn, tòa nhà tài chính.",
    features: [
      "Tốc độ 800 Mbps Download/Upload đối xứng",
      "Cam kết băng thông quốc tế cực đại",
      "Tặng IP Tĩnh cố định độc quyền",
      "Thiết bị công nghiệp chạy bền bỉ 365 ngày/năm",
      "Ưu tiên luồng kết nối doanh nghiệp cấp cao"
    ]
  },
  {
    id: "s800-biz-plus",
    name: "Super 800 Biz Plus",
    category: "doanh_nghiep",
    categoryName: "Doanh nghiệp",
    badge: "Tối Thượng Doanh Nghiệp",
    downloadSpeed: "800 Mbps",
    uploadSpeed: "800 Mbps",
    price: 3800000,
    image: "/images/s800-biz-plus.webp",
    modem: "Hệ thống Router Gateway Cân bằng tải cao cấp nhất",
    recommendedDevices: "150 - 300+ nhân sự",
    description: "Giải pháp mạng doanh nghiệp hoàn hảo nhất của FPT với 800 Mbps kèm thiết bị cân bằng tải tối tân.",
    features: [
      "Tốc độ 800 Mbps đối xứng trong nước",
      "Băng thông quốc tế cam kết cao nhất phân khúc",
      "Trang bị trọn bộ thiết bị mạng công nghiệp cao cấp",
      "Tặng IP Tĩnh và hỗ trợ cấu hình hệ thống chuyên sâu",
      "Quy trình xử lý ưu tiên số 1"
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
    recommendedDevices: "60 - 160 thiết bị",
    description: "Gói cước LUX Wi-Fi 6 đỉnh cao tốc độ 800 Mbps đối xứng, chịu tải cùng lúc hàng trăm khách hàng cho chuỗi nhà hàng, khách sạn.",
    features: [
      "Băng thông 800 Mbps đối xứng Download/Upload",
      "Cam kết băng thông quốc tế tối thiểu 12.6 Mbps",
      "Trang bị hệ thống Router Wi-Fi 6 doanh nghiệp + Mesh",
      "Tặng 01 IP Tĩnh chuẩn doanh nghiệp",
      "Kết nối lên đến 160 thiết bị cùng lúc mượt mà"
    ]
  }
];

// =========================================================================
// DANH SÁCH COMBO THỂ THAO V.VIP NGOẠI HẠNG ANH CHUẨN CÀO TỪ API FPT TELECOM
// =========================================================================

export const VVIP_SPORTS_PACKAGES: FptVvipSportsCombo[] = [
  {
    id: "combo-giga-lite",
    name: "Combo Giga Lite",
    image: "/images/combo-giga-lite.webp",
    priceNgoaiThanh: 209000,
    priceNoiThanh: 229000,
    downloadSpeed: "300 Mbps",
    uploadSpeed: "300 Mbps",
    badge: "Tiết Kiệm",
    description: "Combo Internet 300 Mbps và truyền hình FPT Play giải trí cơ bản, mức giá tốt nhất cho gia đình.",
    features: [
      "Modem Wi-Fi 6 thế hệ mới tốc độ 300 Mbps",
      "Gần 120 kênh truyền hình đặc sắc trong và ngoài nước",
      "Xem mượt mà trên Smart TV và điện thoại thông minh",
      "Không giới hạn dung lượng truy cập tốc độ cao",
      "Hòa mạng và triển khai bàn giao nhanh chóng"
    ]
  },
  {
    id: "combo-giga-vvip",
    name: "Combo Giga - V.VIP",
    image: "/images/giga-vvip.webp",
    priceNgoaiThanh: 220000,
    priceNoiThanh: null, // Không bán tại khu vực nội thành (HCM/HN)
    downloadSpeed: "300 Mbps",
    uploadSpeed: "300 Mbps",
    badge: "Xem Ngoại Hạng Anh",
    description: "Trọn bộ Internet Wi-Fi 6 300 Mbps và bản quyền trọn vẹn 380 trận Ngoại Hạng Anh trên FPT Play.",
    features: [
      "Modem Wi-Fi 6 thế hệ mới tốc độ 300 Mbps đối xứng",
      "Kết nối mượt mà trên 15 thiết bị cùng lúc",
      "Trọn vẹn 380 trận Ngoại Hạng Anh chất lượng Full HD, 4K",
      "Gần 120 kênh truyền hình thể thao & giải trí tổng hợp",
      "Theo dõi FA Cup, LPBank V.League và giải thể thao đỉnh cao"
    ]
  },
  {
    id: "combo-sky-vvip",
    name: "Combo Sky - V.VIP",
    image: "/images/sky-vvip.webp",
    priceNgoaiThanh: 239000,
    priceNoiThanh: 269000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "300 Mbps",
    badge: "Gói Xem Nhiều Nhất",
    isPopular: true,
    description: "Gói combo giải trí đỉnh cao: Tải 1 Gbps, bản quyền Ngoại Hạng Anh & Cúp C1 UEFA, xem đồng thời trên nhiều màn hình.",
    features: [
      "Băng thông Download không giới hạn 1 Gbps (1024 Mbps)",
      "Bản quyền trọn vẹn Ngoại Hạng Anh, FA Cup & Cúp C1 UEFA",
      "Trang bị Modem Wi-Fi 6 chuẩn AX + App/Box FPT Play 4K",
      "Đăng nhập và xem đồng thời trên 3 thiết bị",
      "Kho phim điện ảnh chiếu rạp không quảng cáo"
    ]
  },
  {
    id: "combo-sky-f1-vvip",
    name: "Combo Sky F1 - V.VIP (Kèm Mesh)",
    image: "/images/c-the-thao-sky-f1.webp",
    priceNgoaiThanh: 259000,
    priceNoiThanh: 289000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "300 Mbps",
    badge: "Kèm Mesh Wi-Fi 6",
    description: "Internet 1 Gbps kèm thiết bị Mesh Wi-Fi 6 mở rộng sóng và trọn gói Ngoại Hạng Anh cho nhà nhiều tầng.",
    features: [
      "Tốc độ Download 1 Gbps, Upload 300 Mbps",
      "Trang bị 01 Modem Wi-Fi 6 + 01 Mesh Wi-Fi 6 phụ trợ",
      "Trọn vẹn bản quyền 380 trận Ngoại Hạng Anh trên FPT Play",
      "Kết nối đồng thời lên đến 25 thiết bị trong nhà",
      "Phủ sóng ổn định khắp căn nhà không lo góc chết"
    ]
  },
  {
    id: "combo-the-thao-sky-f2",
    name: "Combo Thể Thao Sky F2 (2 Mesh)",
    image: "/images/combo-sky-f2-vvip.webp",
    priceNgoaiThanh: 279000,
    priceNoiThanh: 309000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "300 Mbps",
    badge: "Nhà 3 - 4 Tầng",
    description: "Độ phủ sóng tối đa với 2 thiết bị Mesh Wi-Fi 6 cùng gói thể thao V.VIP chất lượng 4K sắc nét.",
    features: [
      "Download 1 Gbps, Upload 300 Mbps",
      "Trang bị 01 Modem Wi-Fi 6 + 02 Thiết bị Mesh phụ trợ",
      "Bản quyền trọn vẹn Ngoại Hạng Anh, C1, FA Cup",
      "Sử dụng cùng lúc đến 25 thiết bị khắp 3-4 tầng lầu",
      "Chuyển vùng thông minh không lo gián đoạn luồng phát"
    ]
  },
  {
    id: "combo-meta-vvip",
    name: "Combo Meta - V.VIP",
    image: "/images/meta-vvip.webp",
    priceNgoaiThanh: 339000,
    priceNoiThanh: 369000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    badge: "1Gbps Đối Xứng",
    description: "Đường truyền 1 Gbps đối xứng kết hợp trọn vẹn gói kênh V.VIP & thể thao Ngoại Hạng Anh chuẩn 4K siêu nét.",
    features: [
      "Download/Upload đối xứng 1 Gbps cực đại",
      "Gói kênh truyền hình V.VIP & Thể thao đỉnh cao",
      "Trang bị Modem Wi-Fi 6 AX3000 + FPT Play Box 4K",
      "Xem mượt mà đồng thời trên 5 thiết bị",
      "Đặc quyền chăm sóc và phục vụ ưu tiên số 1"
    ]
  },
  {
    id: "combo-meta-f1-vvip",
    name: "Combo Meta F1 V.VIP (Có Box)",
    image: "/images/c-the-thao-meta-f1.webp",
    priceNgoaiThanh: 389000,
    priceNoiThanh: 419000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    badge: "Có FPT Play Box",
    description: "Trang bị Modem Wi-Fi 6, thiết bị Mesh và FPT Play Box Voice điều khiển giọng nói tiếng Việt.",
    features: [
      "Download/Upload đối xứng 1 Gbps",
      "Trọn bộ Modem Wi-Fi 6 + Mesh Wi-Fi 6 + FPT Play Box",
      "Trọn vẹn Ngoại Hạng Anh, Cup C1 và 120 kênh truyền hình",
      "Sử dụng cùng lúc đến 25 thiết bị mượt mà",
      "Bảo hành thiết bị trọn đời trong quá trình sử dụng"
    ]
  },
  {
    id: "combo-meta-f2-vvip",
    name: "Combo Meta F2 V.VIP (Có Box)",
    image: "/images/c-the-thao-meta-f2.webp",
    priceNgoaiThanh: 409000,
    priceNoiThanh: 439000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    badge: "2 Mesh + Box Voice",
    description: "Combo giải trí và kết nối toàn năng: 1 Gbps đối xứng, 2 thiết bị Mesh và Box FPT Play Voice 4K.",
    features: [
      "Băng thông đối xứng 1 Gbps không giới hạn",
      "01 Modem Wi-Fi 6 + 02 Mesh Wi-Fi 6 + FPT Play Box Voice 4K",
      "Xem Ngoại Hạng Anh và Cúp Châu Âu sắc nét",
      "Phủ sóng liên tục không góc chết cho biệt thự, nhà nhiều tầng",
      "Dịch vụ chăm sóc khách hàng VIP chu đáo"
    ]
  },
  {
    id: "combo-speedx1-vvip",
    name: "Combo SpeedX1 - V.VIP",
    image: "/images/combo-speedx1-vvip.webp",
    priceNgoaiThanh: 369000,
    priceNoiThanh: 369000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    badge: "Wi-Fi 7 + Ngoại Hạng Anh",
    description: "Công nghệ Wi-Fi 7 thế hệ mới kết hợp bản quyền Ngoại Hạng Anh và 120 kênh truyền hình FPT Play.",
    features: [
      "Modem Wi-Fi 7 tăng khả năng tải gấp 4 lần",
      "Công nghệ XGS-PON tốc độ 1 Gbps đối xứng",
      "Xem Ngoại Hạng Anh & FA Cup trên 2 thiết bị cùng lúc",
      "FPT Play với gần 120 kênh truyền hình giải trí đa dạng",
      "Kết nối đồng thời lên đến 100 thiết bị"
    ]
  },
  {
    id: "combo-speedx1-f1-vvip",
    name: "Combo SpeedX1 F1 - V.VIP",
    image: "/images/combo-speedx1-f1-vvip.webp",
    priceNgoaiThanh: 399000,
    priceNoiThanh: 399000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    badge: "Wi-Fi 7 Mesh + Ngoại Hạng Anh",
    description: "Đột phá kết nối Wi-Fi 7 Mesh và bản quyền Ngoại Hạng Anh trọn vẹn khắp ngôi nhà.",
    features: [
      "Modem Wi-Fi 7 + Access Point Wi-Fi 7 mở rộng vùng phủ",
      "Tốc độ 1 Gbps đối xứng trên hạ tầng XGS-PON",
      "Trọn vẹn 380 trận Ngoại Hạng Anh chất lượng Full HD, 4K",
      "Phủ sóng xuyên mọi vật cản, kết nối 100 thiết bị",
      "Dịch vụ phục vụ tận tâm từ đội ngũ chuyên gia"
    ]
  },
  {
    id: "combo-speedx2-vvip",
    name: "Combo SpeedX2 - V.VIP",
    image: "/images/speedx2-vvip.webp",
    priceNgoaiThanh: 1029000,
    priceNoiThanh: 1029000,
    downloadSpeed: "2 Gbps",
    uploadSpeed: "2 Gbps",
    badge: "2Gbps Wi-Fi 7 VVIP",
    description: "Tốc độ 2 Gbps đối xứng chuẩn Wi-Fi 7 kết hợp bản quyền trọn đời thể thao Ngoại Hạng Anh 4K.",
    features: [
      "Modem Wi-Fi 7 XGS-PON tốc độ 2 Gbps đối xứng",
      "Xem trọn 380 trận Ngoại Hạng Anh 4K, Full HD cực sắc nét",
      "120 kênh truyền hình, kho phim đặc sắc trên FPT Play",
      "Sử dụng cùng lúc đến 100 thiết bị không gián đoạn",
      "Đội ngũ kỹ thuật hỗ trợ chuyên nghiệp tận nơi"
    ]
  },
  {
    id: "combo-speedx10-vvip",
    name: "Combo SpeedX10 - V.VIP",
    image: "/images/speedx10-vvip.webp",
    priceNgoaiThanh: 1629000,
    priceNoiThanh: 1629000,
    downloadSpeed: "10 Gbps",
    uploadSpeed: "10 Gbps",
    badge: "10Gbps Đỉnh Cao",
    description: "Kỷ lục tốc độ 10 Gbps đối xứng kết hợp trọn bộ giải trí cao cấp nhất FPT Play.",
    features: [
      "Modem Wi-Fi 7 XGS-PON tốc độ 10 Gbps (10.000 Mbps) kỷ lục",
      "Xem trọn 380 trận Ngoại Hạng Anh chất lượng Full HD, 4K",
      "120 kênh truyền hình, kho nội dung VIP trên FPT Play",
      "Chịu tải lên đến hàng trăm thiết bị cùng lúc",
      "Cam kết chất lượng đường truyền hoàn hảo"
    ]
  },
  {
    id: "combo-lux500-vvip",
    name: "Combo LUX 500 - V.VIP",
    image: "/images/lux500-vvip.webp",
    priceNgoaiThanh: 830000,
    priceNoiThanh: 830000,
    downloadSpeed: "500 Mbps",
    uploadSpeed: "500 Mbps",
    badge: "Quán Cafe / Nhà Hàng",
    description: "Dành riêng cho quán cafe, nhà hàng trình chiếu Ngoại Hạng Anh cho hàng trăm khách hàng.",
    features: [
      "Băng thông 500 Mbps đối xứng chịu tải cực lớn",
      "Bản quyền phát sóng công cộng Ngoại Hạng Anh & Cúp C1",
      "Trang bị thiết bị Wi-Fi 6 doanh nghiệp + Box FPT Play 4K",
      "Kèm 01 địa chỉ IP Tĩnh ổn định tuyệt đối",
      "Kết nối cùng lúc đến 125 thiết bị"
    ]
  },
  {
    id: "combo-lux800-vvip",
    name: "Combo LUX 800 - V.VIP",
    image: "/images/lux800-vvip.webp",
    priceNgoaiThanh: 1030000,
    priceNoiThanh: 1030000,
    downloadSpeed: "800 Mbps",
    uploadSpeed: "800 Mbps",
    badge: "Đẳng Cấp Doanh Nghiệp",
    description: "Gói cước 800 Mbps đối xứng đỉnh cao phục vụ chuỗi nhà hàng, khách sạn lớn chiếu bóng đá 4K.",
    features: [
      "Băng thông 800 Mbps đối xứng cực đại",
      "Bản quyền phát sóng trọn vẹn 380 trận Ngoại Hạng Anh 4K",
      "Hệ thống Router Wi-Fi 6 doanh nghiệp chịu tải lớn",
      "Kết nối lên đến 160 thiết bị đồng thời",
      "Tặng 01 địa chỉ IP Tĩnh và đội ngũ kỹ thuật riêng"
    ]
  }
];

export const FPT_VVIP_COMBOS = VVIP_SPORTS_PACKAGES;
export const FPT_VVIP_SPORTS_COMBOS = VVIP_SPORTS_PACKAGES;

// =========================================================================
// 3. GÓI DỊCH VỤ TRUYỀN HÌNH FPT PLAY ĐƠN LẺ
// =========================================================================
export const FPT_PLAY_PACKAGES: FptPlayOnlyPackage[] = [
  {
    id: "fptplay-premium",
    name: "Gói Premium FPT Play",
    price: 80000,
    image: "/images/fpt_play_premium.webp",
    badge: "Phổ biến",
    description: "Kho phim đặc sắc, gần 100 kênh truyền hình trong và ngoài nước, xem đồng thời 3 thiết bị không quảng cáo.",
    features: [
      "Gần 100 kênh truyền hình phong phú trong nước và quốc tế",
      "Kho phim điện ảnh bom tấn châu Á, Hollywood đặc sắc",
      "Xem đồng thời trên 3 thiết bị (Smart TV, Mobile, Box, Web)",
      "Không quảng cáo khi xem phim",
      "Chất lượng hình ảnh Full HD 1080p sắc nét"
    ]
  },
  {
    id: "fptplay-vvip1",
    name: "Gói V.VIP 1 (Ngoại Hạng Anh)",
    price: 120000,
    image: "/images/fpt_vvip_1.webp",
    badge: "Xem 1 Thiết Bị NHA",
    description: "Xem Ngoại Hạng Anh và FA Cup trên 1 thiết bị (nội dung khác 5 thiết bị), gần 100 kênh truyền hình Full HD & 4K.",
    features: [
      "Bản quyền trọn vẹn 380 trận Ngoại Hạng Anh và The Emirates FA Cup",
      "Xem bóng đá Anh trên 1 thiết bị chuyên dụng",
      "Các nội dung phim ảnh, giải trí khác xem đồng thời 5 thiết bị",
      "Hỗ trợ trên Smart TV, Box, Mobile, Web, Desktop App",
      "Chất lượng Full HD 1080p và hỗ trợ 4K"
    ]
  },
  {
    id: "fptplay-vvip2",
    name: "Gói V.VIP 2 (Ngoại Hạng Anh 2 Thiết Bị)",
    price: 140000,
    image: "/images/fpt_vvip_2.webp",
    badge: "Xem 2 Thiết Bị NHA",
    description: "Xem Ngoại Hạng Anh và FA Cup đồng thời trên 2 màn hình, phù hợp cho gia đình có nhiều tín đồ túc cầu.",
    features: [
      "Bản quyền Ngoại Hạng Anh & FA Cup xem đồng thời trên 2 thiết bị",
      "Nội dung phim truyện, truyền hình xem đồng thời trên 5 thiết bị",
      "Gần 100 kênh truyền hình, phim bom tấn Âu Mỹ đặc sắc",
      "Chất lượng chuẩn Full HD 1080p và 4K sắc nét",
      "Hỗ trợ đa nền tảng Smart TV, TV Box, điện thoại, máy tính bảng"
    ]
  }
];

// =========================================================================
// 4. DỊCH VỤ GIA TĂNG & THIẾT BỊ MẠNG CHÍNH HÃNG
// =========================================================================
export const FPT_ADDONS: FptAddonService[] = [
  {
    id: "ultra-fast",
    name: "Tính Năng Ultra Fast",
    price: 39900,
    billing: "tháng",
    image: "/images/f-game.webp",
    description: "Tích hợp trực tiếp vào đường truyền Internet FPT bằng trí tuệ nhân tạo AI, tối ưu Ping tới hơn 50 tựa game hot.",
    features: [
      "Hệ thống AI tự động chọn tuyến cáp quốc tế tối ưu nhất",
      "Giảm độ trễ Ping xuống tới 16ms, triệt tiêu Packet Loss",
      "Tương thích 100% PC, Mobile, PlayStation, Xbox, Nintendo Switch",
      "Không cần kết nối thêm thiết bị rườm rà hay cài đặt phức tạp",
      "Kích hoạt và quản lý trực tiếp qua ứng dụng Hi FPT"
    ]
  },
  {
    id: "hyper-fast",
    name: "Dịch Vụ Hyper Fast",
    price: 60000,
    billing: "tháng",
    image: "/images/f-game-f1.webp",
    description: "Tăng tốc đường truyền tức thì khi có nhu cầu tải tập tin lớn, họp trực tuyến quốc tế hoặc livestream.",
    features: [
      "Bứt phá tốc độ tức thì theo nhu cầu thực tế",
      "Giảm gián đoạn và tối ưu luồng dữ liệu quốc tế",
      "Hỗ trợ kết nối server toàn cầu mượt mà",
      "Bật tắt linh hoạt theo từng chu kỳ sử dụng",
      "Tương thích với mọi gói cước Internet FPT hiện hữu"
    ]
  },
  {
    id: "access-point-ax3000cv2",
    name: "Thiết Bị Access Point AX3000CV2 Wi-Fi 6",
    price: 880000,
    billing: "thiết bị",
    image: "/images/meta.webp",
    description: "Thiết bị mở rộng sóng Mesh Wi-Fi 6 AX3000 tốc độ cao, phủ sóng xuyên tường cực mạnh cho nhà nhiều tầng.",
    features: [
      "Chuẩn Wi-Fi 6 AX3000 băng tần kép 2.4GHz & 5GHz",
      "Tự động đồng bộ Mesh Roaming với Modem FPT",
      "Chịu tải lên đến 60 thiết bị kết nối đồng thời",
      "Cổng LAN Gigabit 1000 Mbps truyền tải tối đa",
      "Bảo hành chính hãng 12 tháng 1 đổi 1 từ FPT Telecom"
    ]
  }
];

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
    id: "thiet-bi",
    title: "Wi-Fi 7 Siêu Tốc",
    desc: "Băng thông tới 10Gbps",
    href: "/internet/wifi-7",
    icon: "Wifi"
  },
  {
    id: "doanh-nghiep",
    title: "Doanh Nghiệp",
    desc: "IP Tĩnh ổn định",
    href: "/internet/doanh-nghiep",
    icon: "Building"
  },
  {
    id: "mesh",
    title: "Mesh Wi-Fi 6",
    desc: "Phủ sóng xuyên tầng",
    href: "/thiet-bi/wifi-mesh",
    icon: "Cpu"
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
