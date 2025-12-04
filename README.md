# 🐠 Mê Cá Hơn Mê Vợ - Website Bán Cá Guppy 7 Màu

Website bán cá Guppy 7 màu đẳng cấp thế giới, được xây dựng bằng ReactJS với thiết kế hiện đại, sinh động và đầy màu sắc.

## ✨ Tính Năng Nổi Bật

- 🎨 **Thiết kế đỉnh cao**: Gradient rực rỡ, animations mượt mà
- 📱 **Responsive**: Hoạt động hoàn hảo trên mọi thiết bị
- 🎬 **Video cá Guppy**: Hiển thị video định dạng điện thoại (9:16)
- 📸 **Gallery ảnh**: Bộ sưu tập cá Guppy đẹp mắt
- 💬 **Liên hệ nhanh**: Nút Zalo & Facebook fixed luôn hiển thị
- 🌈 **Hiệu ứng 7 màu**: Gradient rainbow animation
- ⚡ **Tốc độ cao**: Tối ưu hiệu suất với Vite

## 🚀 Cài Đặt và Chạy Local

```bash
# Di chuyển vào thư mục project
cd guppy-shop

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

Website sẽ chạy tại: http://localhost:5173

## 📁 Cấu Trúc Thư Mục

```
guppy-shop/
├── public/
│   ├── videos/          # Đặt video cá Guppy vào đây
│   │   ├── guppy1.mp4
│   │   ├── guppy2.mp4
│   │   └── guppy3.mp4
│   └── images/          # Đặt hình ảnh cá Guppy vào đây
│       ├── guppy1.jpg
│       ├── guppy2.jpg
│       ├── guppy3.jpg
│       ├── guppy4.jpg
│       ├── guppy5.jpg
│       └── guppy6.jpg
├── src/
│   ├── App.jsx          # Component chính
│   ├── App.css          # Styles chính
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
└── index.html           # HTML template
```

## 🎥 Thêm Video và Hình Ảnh

### Video:
1. Đặt video vào `public/videos/`
2. Đặt tên: `guppy1.mp4`, `guppy2.mp4`, `guppy3.mp4`
3. Format: MP4, định dạng dọc (9:16)
4. Kích thước đề xuất: 1080x1920 hoặc 720x1280
5. Dung lượng: Dưới 10MB mỗi video

### Hình ảnh:
1. Đặt ảnh vào `public/images/`
2. Đặt tên: `guppy1.jpg` đến `guppy6.jpg`
3. Format: JPG hoặc PNG
4. Tỷ lệ: 2:3 (ví dụ: 800x1200)
5. Dung lượng: Dưới 500KB mỗi ảnh

## 🔗 Cập Nhật Link Liên Hệ

Mở file `src/App.jsx` và tìm các dòng sau để thay đổi:

```javascript
// Thay YOUR_ZALO_NUMBER bằng số Zalo của bạn
href="https://zalo.me/YOUR_ZALO_NUMBER"

// Thay YOUR_FACEBOOK_PAGE bằng link Facebook của bạn  
href="https://facebook.com/YOUR_FACEBOOK_PAGE"
```

Ví dụ:
```javascript
href="https://zalo.me/0123456789"
href="https://facebook.com/guppyshop"
```

## 🌐 Deploy Lên Render

Xem hướng dẫn chi tiết trong file [DEPLOY.md](./DEPLOY.md)

Tóm tắt:
1. Push code lên GitHub
2. Tạo Static Site trên Render.com
3. Connect với GitHub repository
4. Build command: `npm install && npm run build`
5. Publish directory: `dist`

## 🛠️ Công Nghệ Sử Dụng

- **React 19** - UI Framework
- **Vite** - Build tool siêu nhanh
- **CSS3** - Animations & Gradients
- **Google Fonts** - Montserrat & Playfair Display

## 🎨 Tùy Chỉnh

### Thay đổi màu sắc:
Mở `src/App.css` và chỉnh sửa CSS variables:

```css
:root {
  --primary: #667eea;
  --secondary: #764ba2;
  --accent: #f093fb;
  --gold: #ffd700;
  --dark: #1a1a2e;
  --light: #ffffff;
}
```

### Thay đổi nội dung:
Mở `src/App.jsx` và chỉnh sửa text trong các component.

## 📱 Responsive Design

Website tự động điều chỉnh cho:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## ⚡ Tối Ưu Hiệu Suất

- Lazy loading cho video và ảnh
- Nén assets
- Minify CSS/JS khi build
- Tối ưu animations với GPU acceleration

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 🤝 Hỗ Trợ

Nếu gặp vấn đề, hãy check:
- Console trong browser (F12)
- Đảm bảo đã thêm video/ảnh vào đúng thư mục
- Đảm bảo đã cập nhật link Zalo/Facebook

---

Made with ❤️ for Guppy lovers | 🐠 Nuôi cá Guppy - Nuôi niềm đam mê 🐠
