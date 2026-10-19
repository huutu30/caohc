// Cố gắng tự động tối ưu SEO bằng cách thêm alt cho hình ảnh
const autoOptimizeSEO = (products) => {
  return products.map((item) => {
    let opt = { ...item };
    if (!opt.alt && opt.name) opt.alt = `${opt.name} - Internet FPT`;
    if (!opt.path) {
      opt.path = `/${(opt.name || "")
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^a-z0-9-]/g, "")}`;
    }
    opt.btnTitle = `Đăng ký gói ${opt.name} ngay hôm nay`;
    return opt;
  });
};

export const wifi7Data = {
  wifi_7: [
    {
      id: "speedx2",
      name: "FPT SpeedX2",
      dl: "2 Gbps",
      ul: "2 Gbps",
      price: { "hcm": 999000, "tinh": 999000 },
      image: "/images/699d755f5b2a9_Combo__2b610630.webp",
      hardware: "Modem Wifi 7 + 1 Mesh Wifi 7",
      features: [
        "Wifi 7 tăng khả năng tải gấp 4 lần",
        "Công nghệ XGS-PON tốc độ 2 Gbps",
        "Kết nối ổn định 100 thiết bị",
        "Tặng 1 Mesh Wifi 7 mở rộng vùng phủ",
        "Tích hợp gói giải trí FPT Play",
        "Phủ sóng xuyên mọi vật cản",
      ],
      devices: [
        { src: '/images/hardware/modem-wifi-7.webp', label: 'Modem Wi-Fi 7 kết nối đến 100 thiết bị' },
        { src: '/images/hardware/mesh-wifi-7.webp', label: '01 Thiết bị Mesh Wi-Fi 7' },
        { src: '/images/hardware/zplay.webp', label: 'Gói giải trí ZPlay' },
      ],
    },
    {
      id: "speedx2-pro",
      name: "FPT SpeedX2 Pro",
      dl: "2 Gbps",
      ul: "2 Gbps",
      price: { "hcm": 1099000, "tinh": 1099000 },
      image: "/images/1765095073_Combothet_8aa7eb1a.webp",
      hardware: "Modem Wifi 7 Pro (XGS-PON)",
      features: [
        "Wi-Fi 7 tăng khả năng tải gấp 4 lần",
        "Công nghệ XGS-PON tốc độ 2 Gbps",
        "Kết nối đến 100 thiết bị",
        "Tặng 01 Mesh Wi-Fi 7 mở rộng vùng phủ",
        "Tích hợp FPT Play Box & Gói FPT Play VIP",
        "Phủ sóng xuyên mọi vật cản",
      ],
      devices: [
        { src: '/images/hardware/modem-wifi-7.webp', label: 'Modem Wi-Fi 7 kết nối đến 100 thiết bị' },
        { src: '/images/hardware/mesh-wifi-7.webp', label: '01 Thiết bị Mesh Wi-Fi 7' },
        { src: '/images/hardware/fpt-play-box.webp', label: 'FPT Play Box + Gói FPT Play VIP' },
      ],
    },
    {
      id: "speedx10",
      name: "FPT SpeedX10",
      dl: "10 Gbps",
      ul: "10 Gbps",
      price: { "hcm": 1599000, "tinh": 1599000 },
      image: "/images/combo-the-thao-speedx10-pro.webp",
      hardware: "Modem Wifi 7 + 1 Mesh Wifi 7",
      features: [
        "Wi-Fi 7 tăng khả năng tải gấp 4 lần",
        "Công nghệ XGS-PON tốc độ 10 Gbps",
        "Kết nối đến 100 thiết bị",
        "01 Mesh Wi-Fi 7 mở rộng vùng phủ",
        "Tích hợp gói giải trí FPT Play",
        "Phủ sóng xuyên mọi vật cản",
      ],
      devices: [
        { src: '/images/hardware/modem-wifi-7.webp', label: 'Modem Wi-Fi 7 kết nối đến 100 thiết bị' },
        { src: '/images/hardware/mesh-wifi-7.webp', label: '01 Thiết bị Mesh Wi-Fi 7' },
        { src: '/images/hardware/zplay.webp', label: 'Gói giải trí ZPlay' },
      ],
    },
    {
      id: "speedx10-pro",
      name: "FPT SpeedX10 Pro",
      dl: "10 Gbps",
      ul: "10 Gbps",
      price: { "hcm": 1599000, "tinh": 1599000 },
      image: "/images/1765095073_Combothet_8aa7eb1a.webp",
      hardware: "Wifi 7 Ultimate (XGS-PON)",
      details: ["Tốc độ 10Gbps nhanh nhất Việt Nam", "Wifi 7 tăng khả năng tải gấp 4 lần", "Đẳng cấp kết nối cho tương lai", "Phục vụ triển khai ưu tiên trong 2 giờ"],
      devices: [
        { src: '/images/hardware/modem-wifi-7.webp', label: 'Modem Wi-Fi 7 kết nối đến 100 thiết bị' },
        { src: '/images/hardware/mesh-wifi-7.webp', label: '01 Thiết bị Mesh Wi-Fi 7' },
        { src: '/images/hardware/fpt-play-box.webp', label: 'FPT Play Box + Gói FPT Play VIP' },
      ],
    },
    {
      id: "super-800-biz-plus",
      name: "SUPER 800 BIZ PLUS",
      image: "/images/Super800_Biz_Plus_FP_6ba22628.webp",
      features: [
        "Trang bị thiết bị cân bằng tải và 1 thiết bị access point",
        "Gói cước mạnh mẽ nhất",
        "IP Tĩnh & Băng thông ưu tiên quốc tế",
        "Giải pháp cho data center/hosting",
      ],
      devices: [
        { src: '/images/hardware/thiet-bi-can-bang-tai.webp', label: 'Thiết bị cân bằng tải' },
        { src: '/images/hardware/access-point.webp', label: 'Thiết bị Access Point' },
      ],
      price: 3800000,
      dl: "800 Mbps",
      ul: "800 Mbps",
    },
  ],
  wifi7_plans: autoOptimizeSEO([
    {
      id: "speedx2",
      name: "FPT SpeedX2",
      dl: "2 Gbps",
      ul: "2 Gbps",
      price: { "hcm": 999000, "tinh": 999000 },
      image: "/images/optimized/speedx2.webp",
      features: [
        "Wifi 7 tăng khả năng tải gấp 4 lần",
        "Công nghệ XGS-PON tốc độ 2Gbps",
        "Kết nối đến 100 thiết bị",
        "Tặng 1 Mesh wifi 7 mở rộng vùng phủ",
        "Tặng gói giải trí ZPlay",
        "Phủ sóng xuyên mọi vật cản",
      ],
      devices: [
        { src: '/images/hardware/modem-wifi-7.webp', label: 'Modem Wi-Fi 7 kết nối đến 100 thiết bị' },
        { src: '/images/hardware/mesh-wifi-7.webp', label: '01 Thiết bị Mesh Wi-Fi 7' },
        { src: '/images/hardware/zplay.webp', label: 'Gói giải trí ZPlay' },
      ],
      alt: "Đăng ký FPT SpeedX2 FPT giá rẻ",
      path: "/dang-ky?product=FPT%20SpeedX2",
      btnTitle: "đăng ký dịch vụ FPT SpeedX2 ngay",
    },
    {
      id: "speedx2-pro",
      name: "FPT SpeedX2 Pro",
      dl: "2 Gbps",
      ul: "2 Gbps",
      price: { "hcm": 1099000, "tinh": 1099000 },
      image: "/images/optimized/speedx2-pro.webp",
      features: [
        "Wifi 7 tăng khả năng tải gấp 4 lần",
        "Công nghệ XGS-PON tốc độ 2 Gbps",
        "Kết nối đến 100 thiết bị",
        "Tặng 1 Mesh wifi 7 mở rộng vùng phủ",
        "Tích hợp FPT Play Box & Gói FPT Play VIP",
        "Phủ sóng xuyên mọi vật cản",
      ],
      devices: [
        { src: '/images/hardware/modem-wifi-7.webp', label: 'Modem Wi-Fi 7 kết nối đến 100 thiết bị' },
        { src: '/images/hardware/mesh-wifi-7.webp', label: '01 Thiết bị Mesh Wi-Fi 7' },
        { src: '/images/hardware/fpt-play-box.webp', label: 'FPT Play Box + Gói FPT Play VIP' },
      ],
      alt: "Đăng ký FPT SpeedX2 Pro FPT giá rẻ",
      path: "/dang-ky?product=FPT%20SpeedX2%20Pro",
      btnTitle: "đăng ký dịch vụ FPT SpeedX2 Pro ngay",
    },
    {
      id: "speedx10",
      name: "FPT SpeedX10",
      dl: "10 Gbps",
      ul: "10 Gbps",
      price: { "hcm": 1599000, "tinh": 1599000 },
      image: "/images/optimized/speedx10.webp",
      features: [
        "Wifi 7 tăng khả năng tải gấp 4 lần",
        "Công nghệ XGS-PON tốc độ 10Gbps",
        "Kết nối đến 100 thiết bị",
        "Tặng 1 Mesh wifi 7 mở rộng vùng phủ",
        "Tặng gói giải trí ZPlay",
        "Phủ sóng xuyên mọi vật cản",
      ],
      devices: [
        { src: '/images/hardware/modem-wifi-7.webp', label: 'Modem Wi-Fi 7 kết nối đến 100 thiết bị' },
        { src: '/images/hardware/mesh-wifi-7.webp', label: '01 Thiết bị Mesh Wi-Fi 7' },
        { src: '/images/hardware/zplay.webp', label: 'Gói giải trí ZPlay' },
      ],
      alt: "Đăng ký FPT SpeedX10 FPT giá rẻ",
      path: "/dang-ky?product=FPT%20SpeedX10",
      btnTitle: "đăng ký dịch vụ FPT SpeedX10 ngay",
    },
    {
      id: "speedx10-pro",
      name: "FPT SpeedX10 Pro",
      dl: "10 Gbps",
      ul: "10 Gbps",
      price: { "hcm": 1699000, "tinh": 1699000 },
      image: "/images/optimized/speedx10-pro.webp",
      features: [
        "Wifi 7 tăng khả năng tải gấp 4 lần",
        "Công nghệ XGS-PON tốc độ 10 Gbps",
        "Kết nối đến 100 thiết bị",
        "Tặng 1 Mesh wifi 7 mở rộng vùng phủ",
        "Tích hợp FPT Play Box & Gói FPT Play VIP",
        "Phủ sóng xuyên mọi vật cản",
      ],
      devices: [
        { src: '/images/hardware/modem-wifi-7.webp', label: 'Modem Wi-Fi 7 kết nối đến 100 thiết bị' },
        { src: '/images/hardware/mesh-wifi-7.webp', label: '01 Thiết bị Mesh Wi-Fi 7' },
        { src: '/images/hardware/fpt-play-box.webp', label: 'FPT Play Box + Gói FPT Play VIP' },
      ],
      alt: "Đăng ký FPT SpeedX10 Pro FPT giá rẻ",
      path: "/dang-ky?product=FPT%20SpeedX10%20Pro",
      btnTitle: "đăng ký dịch vụ FPT SpeedX10 Pro ngay",
    }
  ]),
};
