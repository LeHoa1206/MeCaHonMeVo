# Hướng Dẫn Deploy Website Lên Render

## Bước 1: Chuẩn Bị

1. Tạo tài khoản GitHub (nếu chưa có): https://github.com
2. Tạo tài khoản Render (nếu chưa có): https://render.com
3. Cài đặt Git trên máy tính

## Bước 2: Thêm Video và Hình Ảnh

1. Thêm video cá Guppy vào thư mục `public/videos/`
   - Đặt tên: `guppy1.mp4`, `guppy2.mp4`, `guppy3.mp4`
   
2. Thêm hình ảnh cá Guppy vào thư mục `public/images/`
   - Đặt tên: `guppy1.jpg`, `guppy2.jpg`, `guppy3.jpg`, `guppy4.jpg`, `guppy5.jpg`, `guppy6.jpg`

## Bước 3: Cập Nhật Link Liên Hệ

Mở file `src/App.jsx` và thay đổi:

```javascript
// Thay YOUR_ZALO_NUMBER bằng số Zalo của bạn
href="https://zalo.me/YOUR_ZALO_NUMBER"

// Thay YOUR_FACEBOOK_PAGE bằng link Facebook của bạn
href="https://facebook.com/YOUR_FACEBOOK_PAGE"
```

## Bước 4: Push Code Lên GitHub

Mở Terminal/CMD trong thư mục `guppy-shop` và chạy:

```bash
git init
git add .
git commit -m "Initial commit - Guppy shop website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/guppy-shop.git
git push -u origin main
```

(Thay YOUR_USERNAME bằng username GitHub của bạn)

## Bước 5: Deploy Trên Render

1. Đăng nhập vào https://render.com
2. Click "New +" → "Static Site"
3. Connect GitHub repository của bạn
4. Chọn repository `guppy-shop`
5. Cấu hình:
   - **Name**: guppy-shop (hoặc tên bạn muốn)
   - **Branch**: main
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
6. Click "Create Static Site"
7. Đợi 3-5 phút để Render build và deploy
8. Website của bạn sẽ có địa chỉ: `https://guppy-shop.onrender.com`

## Bước 6: Cập Nhật Website

Mỗi khi bạn muốn cập nhật website:

1. Thay đổi code hoặc thêm ảnh/video mới
2. Chạy lệnh:
```bash
git add .
git commit -m "Update website"
git push
```
3. Render sẽ tự động build và deploy lại website

## Lưu Ý Quan Trọng

- Video và ảnh nên được nén để giảm dung lượng
- Tổng dung lượng không nên quá 500MB
- Render miễn phí có giới hạn bandwidth, nếu traffic cao cần nâng cấp
- Website sẽ sleep sau 15 phút không hoạt động (plan miễn phí)

## Tối Ưu Hiệu Suất

1. Nén video xuống dưới 10MB mỗi file
2. Nén ảnh xuống dưới 500KB mỗi file
3. Sử dụng format WebP cho ảnh (nếu có thể)
4. Lazy load video và ảnh

## Hỗ Trợ

Nếu gặp vấn đề, check:
- Build logs trên Render Dashboard
- Console trong trình duyệt (F12)
- Đảm bảo tất cả file video/ảnh đã được push lên GitHub
