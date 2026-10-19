import { PROVINCE_PRICES } from './provincePrices.js';

/**
 * Lấy giá sản phẩm theo tỉnh/thành đang được chọn từ dự án fptwebsite.
 *
 * Logic chuẩn 100%:
 * 1. Tra cứu bảng giá chính xác của tỉnh PROVINCE_PRICES[activeCity][item.id]
 *    (hỗ trợ tự động khớp ID gói đơn, gói combo, c-the-thao-..., vvip, lite)
 * 2. Nếu tìm thấy giá trong bảng tỉnh -> trả về giá chính xác đó
 * 3. Nếu không có trong bảng tỉnh, kiểm tra item.price:
 *    - Nếu item.price là object {hcm, tinh} -> trả về theo region ('hcm' cho nội thành, 'tinh' cho ngoại thành/tỉnh)
 *    - Nếu item.price là số cố định -> trả về số đó
 *
 * @param {object} item - Đối tượng sản phẩm (cần có id, price)
 * @param {string} activeCity - Slug tỉnh thành hiện tại (vd: 'ha-noi', 'hcm', 'hcm-ngoai-thanh', 'ha-noi-ngoai-thanh', 'toan-quoc', 'da-nang')
 * @param {string} region - Vùng miền ('hcm' hoặc 'tinh') - dùng làm fallback
 * @returns {number} Giá hiển thị (VNĐ)
 */
export function getProductPrice(item, activeCity, region = 'tinh') {
  if (!item) return 0;

  // 1. Thử tra bảng giá theo tỉnh thành đang chọn
  if (activeCity && PROVINCE_PRICES[activeCity] && item.id) {
    const table = PROVINCE_PRICES[activeCity];
    const candidateKeys = [item.id];

    if (item.id.startsWith("combo-") || item.id.includes("vvip") || item.id.includes("the-thao")) {
      const clean = item.id.replace(/-vvip(-lite)?$/, "").replace(/^combo-/, "");
      candidateKeys.push(`c-the-thao-${clean}`);
      candidateKeys.push(`combo-${clean}`);
      candidateKeys.push(clean);
    } else {
      candidateKeys.push(item.id.replace(/^goi-/, ""));
    }

    for (const key of candidateKeys) {
      if (table[key] !== undefined && table[key] !== null && table[key] > 0) {
        return table[key];
      }
    }
  }

  const rawPrice = item?.price;
  if (!rawPrice && rawPrice !== 0) return 0;

  // 2. Giá theo vùng miền - object {hcm, tinh, ...}
  if (typeof rawPrice === 'object') {
    return rawPrice[region] ?? rawPrice['tinh'] ?? rawPrice['hcm'] ?? 0;
  }

  // 3. Giá cố định toàn quốc - số nguyên
  if (typeof rawPrice === 'number') {
    return rawPrice;
  }

  return 0;
}
