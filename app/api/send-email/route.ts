import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      phoneNumber,
      province,
      address,
      packageName,
      price,
      notes,
    } = body;

    if (!fullName || !phoneNumber) {
      return NextResponse.json(
        { error: "Vui lòng cung cấp họ tên và số điện thoại." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS?.replace(/\s+/g, ""); // strip any whitespace
    const receiver = process.env.RECEIVER_EMAIL || user;

    if (!user || !pass) {
      console.warn("SMTP chưa được cấu hình đầy đủ trong biến môi trường.");
      return NextResponse.json(
        { error: "Hệ thống email chưa được cấu hình." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const formattedPrice = price
      ? typeof price === "number"
        ? price.toLocaleString("vi-VN") + " đ/tháng"
        : price
      : "Liên hệ tư vấn";

    const currentTime = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #0A3D91 0%, #1557bf 100%); padding: 24px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">🔔 ĐĂNG KÝ HÒA MẠNG MỚI FPT TELECOM</h2>
          <p style="margin: 6px 0 0; font-size: 13px; color: #dbeafe;">Thời gian tiếp nhận: ${currentTime}</p>
        </div>

        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 8px; font-weight: bold; color: #475569; width: 35%;">Họ và tên:</td>
              <td style="padding: 12px 8px; color: #0f172a; font-weight: bold; font-size: 16px;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
              <td style="padding: 12px 8px; font-weight: bold; color: #475569;">Số điện thoại:</td>
              <td style="padding: 12px 8px;">
                <a href="tel:${phoneNumber}" style="color: #ea580c; font-weight: bold; font-size: 16px; text-decoration: none;">📞 ${phoneNumber} (Bấm gọi ngay)</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 8px; font-weight: bold; color: #475569;">Khu vực / Tỉnh thành:</td>
              <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${province || "Chưa xác định"}</td>
            </tr>
            ${
              address
                ? `
            <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
              <td style="padding: 12px 8px; font-weight: bold; color: #475569;">Địa chỉ triển khai:</td>
              <td style="padding: 12px 8px; color: #0f172a;">${address}</td>
            </tr>`
                : ""
            }
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 8px; font-weight: bold; color: #475569;">Gói cước quan tâm:</td>
              <td style="padding: 12px 8px; color: #004a9c; font-weight: bold;">${packageName || "Tư vấn gói cước chung"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
              <td style="padding: 12px 8px; font-weight: bold; color: #475569;">Giá cước tham khảo:</td>
              <td style="padding: 12px 8px; color: #e11d48; font-weight: bold;">${formattedPrice}</td>
            </tr>
            ${
              notes
                ? `
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 8px; font-weight: bold; color: #475569;">Ghi chú:</td>
              <td style="padding: 12px 8px; color: #334155;">${notes}</td>
            </tr>`
                : ""
            }
          </table>

          <div style="margin-top: 24px; padding: 14px; background: #fff7ed; border-left: 4px solid #ea580c; border-radius: 6px; font-size: 13px; color: #9a3412;">
            ⚡ <strong>Lưu ý:</strong> Vui lòng liên hệ lại khách hàng sớm nhất có thể (trong vòng 5–15 phút) để tư vấn và hoàn tất thủ tục hòa mạng.
          </div>
        </div>

        <div style="background: #f8fafc; padding: 14px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
          Email tự động gửi từ hệ thống tiếp nhận đăng ký trực tuyến FPT Telecom.
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"FPT Telecom Online" <${user}>`,
      to: receiver,
      subject: `🔥 [Khách mới] ${fullName} - ${phoneNumber} đăng ký ${packageName || "Internet FPT"}`,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Không thể gửi email lúc này.";
    console.error("Lỗi gửi email SMTP:", error);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
