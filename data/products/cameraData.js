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

export const cameraData = {
  fpt_camera: [
    {
      id: "cam-iq4s",
      name: "Camera IQ 4S",
      type: "outdoor",
      price: 400000,
      image: "/images/optimized/camera_iq4s.webp",
      features: [
        "Camera AI ngoài trời, chống nước IP67",
        "Độ phân giải 2K+ siêu sắc nét",
        "Nhận diện khuôn mặt & phát hiện người",
        "Hồng ngoại quay đêm rõ nét đến 30m",
        "Lưu trữ Cloud tiêu chuẩn Tier III",
      ],
    },
    {
      id: "cam-play4",
      name: "Camera Play 4",
      type: "indoor",
      price: 400000,
      image: "/images/optimized/camera_play4.webp",
      features: [
        "Camera AI trong nhà, xoay 360°",
        "Độ phân giải 2K+ siêu sắc nét",
        "Đàm thoại 2 chiều, theo dõi chuyển động",
        "Nhận diện khuôn mặt & phát hiện người",
        "Lưu trữ Cloud tiêu chuẩn Tier III",
      ],
    },
  ],
  camera_combos: [
    {
      id: "c2-tn-nt",
      name: "Combo 2 Camera (Trong - Ngoài)",
      price: 800000,
      image: "/images/optimized/combo_2cam_trong_ngoai.webp",
      features: [
        "1 Camera Play 4 (trong nhà) + 1 Camera IQ4S (ngoài trời)",
        "Giám sát toàn diện trong nhà và ngoài trời",
        "Lưu trữ Cloud 1 ngày miễn phí",
      ],
    },
    {
      id: "c2-tn",
      name: "Combo 2 Camera Trong Nhà",
      price: 800000,
      image: "/images/optimized/combo_2cam_trong_nha.webp",
      features: [
        "2 Camera Play 4 giám sát trong nhà",
        "Xoay 360° phủ hết mọi góc",
        "Lưu trữ Cloud 1 ngày miễn phí",
      ],
    },
    {
      id: "c2-nt",
      name: "Combo 2 Camera Ngoài Trời",
      price: 800000,
      image: "/images/optimized/combo_2cam_ngoai_troi.webp",
      features: [
        "2 Camera IQ4S giám sát ngoài trời",
        "Chống nước IP67, quay đêm rõ nét",
        "Lưu trữ Cloud 1 ngày miễn phí",
      ],
    },
    {
      id: "c3-tn",
      name: "Combo 3 Camera Trong Nhà",
      price: 1000000,
      image: "/images/optimized/combo_3cam_trong_nha.webp",
      features: [
        "3 Camera Play 4 giám sát trong nhà",
        "Xoay 360°, đàm thoại 2 chiều",
        "Lưu trữ Cloud 1 ngày miễn phí",
      ],
    },
    {
      id: "c3-nt",
      name: "Combo 3 Camera Ngoài Trời",
      price: 1000000,
      image: "/images/optimized/combo_3cam_ngoai_troi.webp",
      features: [
        "3 Camera IQ4S giám sát ngoài trời",
        "Chống nước IP67, phù hợp mọi thời tiết",
        "Lưu trữ Cloud 1 ngày miễn phí",
      ],
    },
    {
      id: "c3-2t1n",
      name: "Combo 3 Camera (2 Trong - 1 Ngoài)",
      price: 1000000,
      image: "/images/optimized/combo_3cam_2trong_1ngoai.webp",
      features: [
        "2 Play 4 (trong nhà) + 1 IQ4S (ngoài trời)",
        "Tối ưu giám sát không gian trong nhà",
        "Lưu trữ Cloud 1 ngày miễn phí",
      ],
    },
    {
      id: "c3-1t2n",
      name: "Combo 3 Camera (1 Trong - 2 Ngoài)",
      price: 1000000,
      image: "/images/optimized/combo_3cam_1trong_2ngoai.webp",
      features: [
        "1 Play 4 (trong nhà) + 2 IQ4S (ngoài trời)",
        "Phủ sóng toàn diện cả trong lẫn ngoài",
        "Lưu trữ Cloud 1 ngày miễn phí",
      ],
    },
    {
      id: "c5-2t3n",
      name: "Combo 5 Camera (2 Trong - 3 Ngoài)",
      price: 1800000,
      image: "/images/optimized/combo_5cam_2trong_3ngoai.webp",
      features: [
        "2 Play 4 (trong nhà) + 3 IQ4S (ngoài trời)",
        "Giải pháp giám sát toàn diện nhất",
        "Lưu trữ Cloud 1 ngày miễn phí",
      ],
    },
  ],
};
