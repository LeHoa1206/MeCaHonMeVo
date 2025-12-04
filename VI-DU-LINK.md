# 🔗 VÍ DỤ VỀ LINK LIÊN HỆ

## 📱 LINK ZALO

### Format Chuẩn
```
https://zalo.me/SỐ_ĐIỆN_THOẠI
```

### Ví Dụ Cụ Thể

**Nếu số điện thoại của bạn là: 0912345678**
```
https://zalo.me/0912345678
```

**Nếu số điện thoại có mã vùng +84:**
```
https://zalo.me/84912345678
```
(Bỏ số 0 đầu tiên, thêm 84)

### Cách Lấy Link Zalo Của Bạn

#### Cách 1: Từ App Zalo
1. Mở app Zalo
2. Vào "Cá nhân" (tab cuối cùng)
3. Click vào avatar/tên của bạn
4. Kéo xuống tìm "Số điện thoại"
5. Copy số điện thoại
6. Tạo link: `https://zalo.me/SỐ_CỦA_BẠN`

#### Cách 2: Từ Zalo OA (Official Account)
Nếu bạn có Zalo OA (trang doanh nghiệp):
1. Vào https://oa.zalo.me/
2. Đăng nhập
3. Vào "Cài đặt" → "Thông tin OA"
4. Copy "Link OA"
5. Link sẽ có dạng: `https://zalo.me/XXXXXXXXXXXX`

### Test Link Zalo
1. Copy link của bạn
2. Paste vào trình duyệt
3. Nếu mở được Zalo → Link đúng ✅
4. Nếu báo lỗi → Kiểm tra lại số điện thoại ❌

---

## 👥 LINK FACEBOOK

### Format Chuẩn

**Facebook Page (Trang):**
```
https://facebook.com/TÊN_TRANG
```

**Facebook Profile (Cá nhân):**
```
https://facebook.com/TÊN_PROFILE
```

### Ví Dụ Cụ Thể

**Ví dụ 1: Trang Facebook**
```
https://facebook.com/guppyshop
https://facebook.com/caguppy7mau
https://facebook.com/mecahonmevo
```

**Ví dụ 2: Profile cá nhân**
```
https://facebook.com/nguyen.van.a
https://facebook.com/john.doe
```

**Ví dụ 3: Dùng ID số**
```
https://facebook.com/100012345678901
```

### Cách Lấy Link Facebook Của Bạn

#### Cách 1: Từ Facebook Page (Trang)
1. Vào trang Facebook của bạn
2. Nhìn vào URL trên thanh địa chỉ
3. Copy phần sau `facebook.com/`
4. Ví dụ: `https://facebook.com/guppyshop` → lấy `guppyshop`

#### Cách 2: Từ Profile (Cá nhân)
1. Vào trang cá nhân của bạn
2. Click vào URL trên thanh địa chỉ
3. Copy toàn bộ link
4. Hoặc chỉ lấy phần username

#### Cách 3: Tạo Username Mới
Nếu chưa có username đẹp:
1. Vào https://www.facebook.com/settings?tab=profile
2. Phần "Username"
3. Click "Edit"
4. Nhập username mới (ví dụ: guppyshop)
5. Save
6. Link của bạn: `https://facebook.com/guppyshop`

### Test Link Facebook
1. Copy link của bạn
2. Paste vào trình duyệt (chế độ ẩn danh)
3. Nếu mở được trang → Link đúng ✅
4. Nếu báo lỗi → Kiểm tra lại ❌

---

## 🔧 CÁCH THAY ĐỔI TRONG CODE

### Mở File
Mở file: `guppy-shop/src/App.jsx`

### Tìm và Thay Đổi

Có **4 chỗ** cần thay đổi trong file:

#### Chỗ 1: Contact Bar - Zalo (Dòng ~16)
**Tìm:**
```javascript
href="https://zalo.me/YOUR_ZALO_NUMBER"
```

**Thay bằng:**
```javascript
href="https://zalo.me/0912345678"
```
(Thay 0912345678 bằng số của bạn)

#### Chỗ 2: Contact Bar - Facebook (Dòng ~29)
**Tìm:**
```javascript
href="https://facebook.com/YOUR_FACEBOOK_PAGE"
```

**Thay bằng:**
```javascript
href="https://facebook.com/guppyshop"
```
(Thay guppyshop bằng tên page của bạn)

#### Chỗ 3: CTA Section - Zalo (Dòng ~180)
**Tìm:**
```javascript
href="https://zalo.me/YOUR_ZALO_NUMBER"
```

**Thay bằng:**
```javascript
href="https://zalo.me/0912345678"
```

#### Chỗ 4: CTA Section - Facebook (Dòng ~193)
**Tìm:**
```javascript
href="https://facebook.com/YOUR_FACEBOOK_PAGE"
```

**Thay bằng:**
```javascript
href="https://facebook.com/guppyshop"
```

### Lưu File
- Nhấn `Ctrl + S` (Windows) hoặc `Cmd + S` (Mac)
- Hoặc File → Save

---

## ✅ CHECKLIST

Sau khi thay đổi, kiểm tra:

- [ ] Đã thay 4 chỗ (2 Zalo + 2 Facebook)
- [ ] Link Zalo đúng format: `https://zalo.me/SỐ`
- [ ] Link Facebook đúng format: `https://facebook.com/TÊN`
- [ ] Đã lưu file (Ctrl + S)
- [ ] Test link trên trình duyệt
- [ ] Chạy `npm run dev` để xem kết quả

---

## 🎯 VÍ DỤ HOÀN CHỈNH

### Trước (Mặc định):
```javascript
// Contact Bar
<a href="https://zalo.me/YOUR_ZALO_NUMBER" ...>
<a href="https://facebook.com/YOUR_FACEBOOK_PAGE" ...>

// CTA Section  
<a href="https://zalo.me/YOUR_ZALO_NUMBER" ...>
<a href="https://facebook.com/YOUR_FACEBOOK_PAGE" ...>
```

### Sau (Đã thay đổi):
```javascript
// Contact Bar
<a href="https://zalo.me/0912345678" ...>
<a href="https://facebook.com/guppyshop" ...>

// CTA Section
<a href="https://zalo.me/0912345678" ...>
<a href="https://facebook.com/guppyshop" ...>
```

---

## 🔍 TÌM NHANH TRONG FILE

### Dùng Notepad++, VS Code, hoặc editor khác:

1. Mở file `App.jsx`
2. Nhấn `Ctrl + F` (Find)
3. Tìm: `YOUR_ZALO_NUMBER`
4. Thay tất cả bằng số Zalo của bạn
5. Tìm: `YOUR_FACEBOOK_PAGE`
6. Thay tất cả bằng tên Facebook của bạn

### Dùng Find & Replace:

**Trong VS Code:**
1. `Ctrl + H` (Replace)
2. Find: `YOUR_ZALO_NUMBER`
3. Replace: `0912345678`
4. Click "Replace All"
5. Lặp lại cho `YOUR_FACEBOOK_PAGE`

---

## ⚠️ LƯU Ý

### Zalo
- ✅ Đúng: `https://zalo.me/0912345678`
- ❌ Sai: `zalo.me/0912345678` (thiếu https://)
- ❌ Sai: `https://zalo.me/091-234-5678` (có dấu gạch)
- ❌ Sai: `https://zalo.me/091 234 5678` (có khoảng trắng)

### Facebook
- ✅ Đúng: `https://facebook.com/guppyshop`
- ✅ Đúng: `https://www.facebook.com/guppyshop`
- ❌ Sai: `facebook.com/guppyshop` (thiếu https://)
- ❌ Sai: `https://facebook.com/guppy shop` (có khoảng trắng)
- ❌ Sai: `https://fb.com/guppyshop` (dùng fb.com thay vì facebook.com)

---

## 🧪 TEST LINKS

### Test Zalo:
1. Mở trình duyệt
2. Paste link: `https://zalo.me/0912345678`
3. Nếu có Zalo trên máy → Mở app Zalo
4. Nếu không có Zalo → Hiện trang web Zalo
5. Cả 2 trường hợp đều OK ✅

### Test Facebook:
1. Mở trình duyệt (chế độ ẩn danh)
2. Paste link: `https://facebook.com/guppyshop`
3. Nếu mở được trang → OK ✅
4. Nếu báo "Page not found" → Sai tên page ❌

---

## 💡 TIPS

1. **Dùng link ngắn**: `facebook.com/guppyshop` thay vì `facebook.com/pages/guppy-shop/123456789`
2. **Tạo username đẹp**: Dễ nhớ, liên quan đến cá Guppy
3. **Test trước khi deploy**: Đảm bảo link hoạt động
4. **Dùng số Zalo chính**: Số bạn thường xuyên check
5. **Tạo Facebook Page**: Chuyên nghiệp hơn profile cá nhân

---

## 📞 VÍ DỤ THỰC TẾ

### Shop Cá Guppy ABC
```javascript
// Zalo: 0901234567
// Facebook Page: caguppyabc

href="https://zalo.me/0901234567"
href="https://facebook.com/caguppyabc"
```

### Guppy 7 Màu XYZ
```javascript
// Zalo: 0912345678
// Facebook Page: guppy7mauxyz

href="https://zalo.me/0912345678"
href="https://facebook.com/guppy7mauxyz"
```

### Mê Cá Hơn Mê Vợ Shop
```javascript
// Zalo: 0923456789
// Facebook Page: mecahonmevoshop

href="https://zalo.me/0923456789"
href="https://facebook.com/mecahonmevoshop"
```

---

**🎯 Sau khi thay đổi xong, nhớ lưu file và chạy `npm run dev` để xem kết quả!**

🐠 Chúc bạn thành công! 🐠
