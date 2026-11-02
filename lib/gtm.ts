/**
 * Tiện ích hỗ trợ bắn sự kiện vào Google Tag Manager (dataLayer)
 */
export const pushGTMEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined") {
    const win = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
};
