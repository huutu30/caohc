export interface AccessPointProduct {
  id: string;
  name: string;
  badge?: string;
  speed: string;
  price: number;
  originalPrice?: number;
  highlight?: boolean;
  image: string;
  desc: string;
  specs: { label: string; value: string }[];
  features: string[];
}

export interface AccessPointPillar {
  title: string;
  desc: string;
  icon: string;
}

export const AP_PILLARS: AccessPointPillar[] = [
  {
    title: "Thương hiệu đảm bảo",
    desc: "Nhập khẩu bảo hành chính hãng FPT Telecom trên toàn quốc",
    icon: "/images/access-point/pillar_1.png",
  },
  {
    title: "Đổi trả dễ dàng",
    desc: "Theo chính sách bảo hành và đổi trả chuẩn của FPT Telecom",
    icon: "/images/access-point/pillar_2.png",
  },
  {
    title: "Giao hàng tận nơi",
    desc: "Bàn giao thiết bị và hỗ trợ hướng dẫn kết nối tận nơi chu đáo",
    icon: "/images/access-point/pillar_3.png",
  },
  {
    title: "Sản phẩm chất lượng",
    desc: "Đảm bảo tương thích 100% hệ sinh thái mạng và độ bền cao",
    icon: "/images/access-point/pillar_4.png",
  },
];

export const ACCESS_POINT_PRODUCTS: AccessPointProduct[] = [
  {
    id: "ap-ax3000cv2",
    name: "Thiết bị Access Point AX3000CV2",
    badge: "Bán chạy nhất",
    speed: "Chuẩn Wi-Fi 6 AX3000",
    price: 880000,
    originalPrice: 1150000,
    highlight: true,
    image: "/images/access-point/ax3000cv2.png",
    desc: "Access Point Wi-Fi 6 tốc độ cao chuẩn AX3000, hỗ trợ độ rộng kênh 160MHz cho hiệu suất vượt trội. Tích hợp công nghệ Easy Mesh R4 giúp dễ dàng mở rộng vùng phủ sóng liền mạch, không điểm chết.",
    specs: [
      { label: "Chuẩn Wi-Fi", value: "IEEE 802.11 b/g/n/ac/ax - 20/40/80/160MHz" },
      { label: "Băng tần 2.4GHz", value: "2x2 MIMO (tốc độ lên đến 574 Mbps)" },
      { label: "Băng tần 5GHz", value: "2x2 MU-MIMO (tốc độ lên đến 2.402 Mbps)" },
      { label: "Công nghệ Mesh", value: "Giao thức Easy Mesh R4 đồng bộ thông minh" },
      { label: "Độ lợi Anten", value: "5dBi công suất phát mạnh mẽ xuyên tường" },
      { label: "Công suất phát", value: "EIRP 2.4GHz ≤ 30dBm, EIRP 5GHz ≤ 33dBm" },
      { label: "Cổng kết nối", value: "Gigabit Ethernet (IGMP snooping v2)" },
      { label: "Kiểu sử dụng", value: "Để bàn hoặc gắn tường linh hoạt" },
      { label: "Kích thước", value: "178mm x 105mm x 36.7mm" },
      { label: "Nguồn cung cấp", value: "12V – 1A (Công suất tiêu thụ < 9W)" },
    ],
    features: [
      "Tốc độ cực cao 3.000 Mbps phủ sóng xuyên tường mượt mà",
      "Độ rộng kênh 160MHz gấp đôi băng thông so với chuẩn thường",
      "Công nghệ Easy Mesh R4 chuyển vùng Seamless Roaming không gián đoạn",
      "Hỗ trợ MU-MIMO kết nối ổn định đồng thời 30 - 60 thiết bị",
    ],
  },
  {
    id: "ap-ax1800az",
    name: "Thiết bị Access Point AX1800AZ",
    badge: "Phổ biến cho căn hộ",
    speed: "Chuẩn Wi-Fi 6 AX1800",
    price: 750000,
    originalPrice: 950000,
    image: "/images/sky-f1.webp",
    desc: "Bộ mở rộng sóng chuẩn Wi-Fi 6 băng tần kép AX1800, tối ưu cho căn hộ 2-3 phòng ngủ cần mở rộng sóng không dây liền mạch.",
    specs: [
      { label: "Chuẩn Wi-Fi", value: "IEEE 802.11 a/b/g/n/ac/ax" },
      { label: "Tốc độ băng tần kép", value: "1.800 Mbps (574 Mbps + 1.201 Mbps)" },
      { label: "Công nghệ Mesh", value: "Easy Mesh kết nối 1 chạm" },
      { label: "Số lượng thiết bị", value: "Chịu tải 20 - 40 thiết bị" },
      { label: "Cổng kết nối", value: "Cổng LAN Gigabit 1.000 Mbps" },
    ],
    features: [
      "Phủ sóng đa phòng loại bỏ hoàn toàn góc chết Wi-Fi",
      "Tự động đồng bộ tên mạng (SSID) và mật khẩu",
      "Chuyển vùng thông minh khi di chuyển giữa các phòng",
      "Tiết kiệm điện năng và vận hành mát mẻ",
    ],
  },
  {
    id: "ap-ac1200z",
    name: "Thiết bị Access Point AC1200Z",
    badge: "Tiết kiệm chi phí",
    speed: "Chuẩn Wi-Fi 5 AC1200",
    price: 550000,
    originalPrice: 700000,
    image: "/images/giga-f1.webp",
    desc: "Giải pháp mở rộng sóng cơ bản chuẩn AC1200 băng tần kép cho phòng ngủ xa modem hoặc tầng lầu.",
    specs: [
      { label: "Chuẩn Wi-Fi", value: "IEEE 802.11 a/b/g/n/ac" },
      { label: "Tốc độ tối đa", value: "1.167 Mbps (300 Mbps + 867 Mbps)" },
      { label: "Băng tần kép", value: "2.4GHz & 5GHz" },
      { label: "Số lượng thiết bị", value: "15 - 25 thiết bị" },
    ],
    features: [
      "Chi phí tiết kiệm, mở rộng sóng nhanh chóng",
      "Băng tần kép 2.4GHz & 5GHz ổn định",
      "Thiết kế nhỏ gọn, cắm nguồn là dùng",
      "Tương thích với mọi modem cáp quang FPT",
    ],
  },
];

export const ACCESS_POINT_FAQS = [
  {
    question: "Thiết bị Access Point AX3000CV2 khác gì so với cục phát Wi-Fi thông thường?",
    answer: "AX3000CV2 sử dụng chuẩn Wi-Fi 6 tiên tiến với tốc độ lên đến 3.000 Mbps và kênh truyền rộng 160MHz. Đặc biệt, thiết bị tích hợp công nghệ Easy Mesh R4 giúp kết hợp với Modem chính tạo thành một mạng Wi-Fi duy nhất (1 tên SSID), tự động chuyển vùng khi bạn di chuyển trong nhà mà không hề bị ngắt kết nối.",
  },
  {
    question: "Nhà tôi nhiều tầng hoặc căn hộ nhiều phòng thì cần bao nhiêu thiết bị Access Point?",
    answer: "Thông thường mỗi tầng nhà hoặc mỗi khu vực cách 2-3 bức tường dày nên bố trí 1 thiết bị Access Point Mesh. Căn hộ 2-3 phòng ngủ hoặc nhà 2-3 tầng chỉ cần 1 đến 2 bộ AX3000CV2 là phủ kín toàn bộ không gian sống với tốc độ Gigabit.",
  },
  {
    question: "Tôi có thể đăng ký gói cước kèm miễn phí thiết bị Mesh không?",
    answer: "Có! Quý khách có thể lựa chọn các gói cước F1 như Giga F1, Sky F1, Meta F1 hoặc F-Game F1. Các gói này đã bao gồm trọn bộ 1 Modem chính + 1 Access Point Mesh Wi-Fi 6 chính hãng với chi phí cước hàng tháng cực kỳ ưu đãi chỉ chênh lệch khoảng 30.000đ/tháng.",
  },
  {
    question: "Bàn giao và kết nối thiết bị Access Point như thế nào?",
    answer: "Sau khi đăng ký, đội ngũ triển khai dịch vụ của FPT sẽ mang thiết bị đến tận nhà, khảo sát vị trí bắt sóng tối ưu nhất và kết nối hoàn chỉnh vào hệ thống mạng của quý khách, hướng dẫn quản lý qua ứng dụng điện thoại tiện lợi.",
  },
  {
    question: "Chính sách bảo hành thiết bị Access Point FPT ra sao?",
    answer: "Toàn bộ thiết bị Access Point do FPT Telecom cung cấp đều được bảo hành chính hãng 1 đổi 1 trong suốt thời gian quý khách sử dụng dịch vụ mạng FPT, đảm bảo an tâm tuyệt đối.",
  },
];
