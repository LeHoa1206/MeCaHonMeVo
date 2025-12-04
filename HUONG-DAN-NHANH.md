# 🚀 HƯỚNG DẪN NHANH - WEBSITE BÁN CÁ GUPPY

## ⚡ 3 BƯỚC ĐƠN GIẢN

### BƯỚC 1: THÊM VIDEO VÀ HÌNH ẢNH CỦA BẠN

📹 **Thêm Video:**
- Mở thư mục `public/videos/`
- Copy 3 video cá Guppy của bạn vào đây
- Đổi tên thành: `guppy1.mp4`, `guppy2.mp4`, `guppy3.mp4`
- Video nên quay dọc (như video TikTok/Instagram)

📸 **Thêm Hình Ảnh:**
- Mở thư mục `public/images/`
- Copy 6 ảnh cá Guppy của bạn vào đây
- Đổi tên thành: `guppy1.jpg`, `guppy2.jpg`, `guppy3.jpg`, `guppy4.jpg`, `guppy5.jpg`, `guppy6.jpg`

### BƯỚC 2: CẬP NHẬT LINK LIÊN HỆ

1. Mở file `src/App.jsx` bằng Notepad hoặc editor bất kỳ
2. Tìm và thay đổi 2 chỗ này:

```javascript
// Dòng 16: Thay YOUR_ZALO_NUMBER bằng số Zalo của bạn
href="https://zalo.me/0123456789"  // Ví dụ: số điện thoại của bạn

// Dòng 29: Thay YOUR_FACEBOOK_PAGE bằng tên Facebook của bạn
href="https://facebook.com/tenshopguppy"  // Ví dụ: tên page Facebook
```

3. Tìm thêm 2 chỗ nữa ở phần CTA (khoảng dòng 180 và 193) và thay đổi tương tự

4. Lưu file lại (Ctrl + S)

### BƯỚC 3: CHẠY WEBSITE

**Cách 1: Chạy trên máy tính (Local)**

Mở CMD/Terminal trong thư mục `guppy-shop` và chạy:

```bash
npm run dev
```

Mở trình duyệt và vào: http://localhost:5173

**Cách 2: Deploy lên Internet (Render)**

Xem hướng dẫn chi tiết trong file `DEPLOY.md`

## 🎨 TÙY CHỈNH THÊM (TÙY CHỌN)

### Đổi Tiêu Đề Website

Mở file `index.html`, tìm dòng:
```html
<title>Mê Cá Hơn Mê Vợ - Cá Guppy 7 Màu Đỉnh Cao</title>
```
Đổi thành tiêu đề bạn muốn.

### Đổi Màu Sắc

Mở file `src/App.css`, tìm phần `:root` ở đầu file và thay đổi màu:

```css
:root {
  --primary: #667eea;     /* Màu chính */
  --secondary: #764ba2;   /* Màu phụ */
  --accent: #f093fb;      /* Màu nhấn */
}
```

### Thay Đổi Nội Dung

Mở file `src/App.jsx` và tìm các đoạn text để thay đổi:
- Dòng 47-49: Tiêu đề Hero
- Dòng 50: Phụ đề
- Dòng 52-54: Các badge
- Dòng 68-70: Tiêu đề section
- Và nhiều chỗ khác...

## 🔧 LỖI THƯỜNG GẶP

### Lỗi: Video không hiển thị
- ✅ Kiểm tra tên file video đúng chưa: `guppy1.mp4`, `guppy2.mp4`, `guppy3.mp4`
- ✅ Kiểm tra video có trong thư mục `public/videos/` chưa
- ✅ Thử refresh lại trang (Ctrl + F5)

### Lỗi: Ảnh không hiển thị
- ✅ Kiểm tra tên file ảnh đúng chưa: `guppy1.jpg` đến `guppy6.jpg`
- ✅ Kiểm tra ảnh có trong thư mục `public/images/` chưa
- ✅ Thử đổi đuôi file từ `.png` sang `.jpg` nếu cần

### Lỗi: npm run dev không chạy
- ✅ Chạy lệnh `npm install` trước
- ✅ Kiểm tra đã cài Node.js chưa (tải tại: https://nodejs.org)

## 📞 CHECKLIST TRƯỚC KHI DEPLOY

- [ ] Đã thêm đủ 3 video vào `public/videos/`
- [ ] Đã thêm đủ 6 ảnh vào `public/images/`
- [ ] Đã đổi link Zalo (4 chỗ trong `App.jsx`)
- [ ] Đã đổi link Facebook (4 chỗ trong `App.jsx`)
- [ ] Đã test website chạy OK trên local (`npm run dev`)
- [ ] Video và ảnh đã được nén để giảm dung lượng

## 🎯 TIPS ĐỂ WEBSITE ĐẸP HƠN

1. **Video chất lượng cao**: Quay ở nơi sáng, camera ổn định
2. **Ảnh sắc nét**: Chụp cận cảnh cá, background đơn giản
3. **Nén file**: Video < 10MB, ảnh < 500KB
4. **Màu sắc**: Chọn cá có màu đẹp, rực rỡ để chụp
5. **Đa dạng**: Chụp nhiều góc độ, nhiều loại cá khác nhau

## 🌟 NÂNG CAP (SAU NÀY)

- Thêm giỏ hàng
- Thêm giá cả
- Thêm form đặt hàng
- Thêm blog về cách nuôi cá
- Thêm testimonials từ khách hàng
- Tích hợp thanh toán online

---

💡 **Lưu ý**: File này chỉ là hướng dẫn nhanh. Xem `README.md` và `DEPLOY.md` để biết thêm chi tiết!

🐠 **Chúc bạn bán được nhiều cá Guppy!** 🐠
