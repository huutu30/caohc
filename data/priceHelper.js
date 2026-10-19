import { PROVINCE_PRICES } from './provincePrices.js';

/**
 * Lấy giá sản phẩm theo tỉnh/thành đang được chọn từ dự án fptwebsite.
 *
 * Logic:
 * 1. Tra cứu bảng giá chính xác của tỉnh PROVINCE_PRICES[activeCity][item.id]
 * 2. Nếu không có trong bảng tỉnh, kiểm tra item.price:
 *    - Nếu item.price là object {hcm, tinh} -> fallback về item.price[region]
 *    - Nếu item.price là số (camera, giá cố định) -> trả về số đó
 *
 * @param {object} item - Đối tượng sản phẩm (cần có id, price)
 * @param {string} activeCity - Slug tỉnh thành hiện tại (vd: 'ha-noi', 'hcm', 'da-nang', 'toan-quoc')
 * @param {string} region - Vùng miền ('hcm' hoặc 'tinh') - dùng làm fallback
 * @returns {number} Giá hiển thị (VNĐ)
 */
export function getProductPrice(item, activeCity, region = 'tinh') {
  if (!item) return 0;

  // 1. Thử tra bảng giá theo tỉnh thành đang chọn (ha-noi, hcm, da-nang, toan-quoc...)
  if (activeCity && PROVINCE_PRICES[activeCity] && item.id) {
    const table = PROVINCE_PRICES[activeCity];
    const candidateKeys = [
      item.id,
      item.id.replace(/-vvip(-lite)?$/, ""),
      item.id.replace(/^combo-/, "c-the-thao-").replace(/-vvip(-lite)?$/, ""),
      item.id.replace(/-lite$/, ""),
      `c-the-thao-${item.id.replace(/^combo-/, "").replace(/-vvip(-lite)?$/, "")}`,
      `combo-${item.id.replace(/-vvip(-lite)?$/, "")}`,
      item.id.replace(/^combo-/, ""),
    ];

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
