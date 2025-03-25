# PROJECT2-SEC-1-GooseBomb

## รายชื่อสมาชิก

| ลำดับ | รหัสนักศึกษา   | ชื่อ-นามสกุล                 | GitHub Username | สัดส่วนเปอร์เซ็นต์การทำงาน |
|-------|-----------------|---------------------|-----------------|-----------------|
| 1     | 66130500018     | ชนันธร ศรีวรชัย         |   mook2005      | |
| 2     | 66130500021     | ชัญญา นิ่มถาวร         |    CNProud       | |
| 3     | 66130500034     | ทนิน เก้าเอี้ยน          |    TaninGit      | |
| 4     | 66130500054     | เบญญาพร เมธาวิวรรธน์กุล  |    Benyaporn54   | |
| 5     | 66130500061     | ปัณณพร อโนทัยสินทวี     |    Butt3rPann    | |

-------------

## Weekly Progress

| ลำดับ | รหัสนักศึกษา   |      สัปดาห์ที่ 1     |     สัปดาห์ที่ 2   |    สัปดาห์ที่ 3    |    สัปดาห์ที่ 4    |    สัปดาห์ที่ 5    |
|------|--------------|-----------------|-----------------|-----------------|-----------------|-----------------|
| 1     | 66130500018     |    Figma Design  | Component Structure , Navbar.vue (setUnderline, resetUnderline, openDropdown, closeDropdown function), Room.vue, Roomtype.vue | RepairForm.vue (onMounted, validateSubmit, submitAction function), AddRepairForm.vue (onMounted, addNewRepair, handleNewRepair function), update Dropdown.vue (watch) | central index.js, localStorage currentUser handling, Rule.vue, integrate all components with index.js and localStorage (useRouter), update main.js, Navbar.vue (computed, goToProfileOrLogin function), RoomType.vue (defineProps), Profile.vue (logout function) |
| 2     | 66130500021     |    Design System, Figma Design  | Component Structure , Banner.vue, Reason.vue | Dropdown.vue (toggleDropdown, selectItem function), Input.vue, Button.vue, RepairList.vue (deleteReport, confirmDelete function) | SignUp.vue(onMounted, isNullOrEmpty, validateStudentId, validateConfirmPasswd, validatePhone, validateEmail, validateStep1, validateStep2,  validateSubmit, nextStep, finish, addUser), update Dropdown.vue |
| 3     | 66130500034     |    Figma Design  | Component Structure , Slider.vue (next, prev, imageSlider function)| RepairList.vue (onMounted, getStatusColor, getProgressIcon, toggleDetails, handleEdit function), Slider.vue (onMounted), update Slider.vue | Payment.vue (onMounted, costFormat function) |
| 4     | 66130500054     |    Figma Design  | Component Structure , Announcement.vue, News.vue, Footer.vue | Profile.vue (onMounted), UpdateRepairForm.vue (onMounted, updateRepair, handleRepairEdit function), update Announcement.vue (onMounted) | RoomDetail.vue (onMounted) |
| 5     | 66130500061     |    Figma Design  | Component Structure , Review.vue, ReviewCard.vue | Login.vue (login, hashPassword, validateInput function), update Review.vue (onMounted, prevReview, nextReview, selectReview function) | RegistrationSuccess.vue, SignUp.vue (onMounted, watchEffect), update Review.vue

--------------


# การแบ่งงาน

✅ **018** - Figma Design, Component Structure , Navbar.vue (setUnderline, resetUnderline, openDropdown, closeDropdown function), Room.vue, Roomtype.vue, RepairForm.vue (onMounted, validateSubmit, submitAction function), AddRepairForm.vue (onMounted, addNewRepair, handleNewRepair function), Rule.vue, central index.js, localStorage currentUser handling, integrate all components with index.js and localStorage (useRouter), update Profile.vue (logout, deleteUser function)

✅ **021** - Design System , Figma Design, Component Structure , Banner.vue, Reason.vue, Dropdown.vue (toggleDropdown, selectItem function), Input.vue, Button.vue, RepairList.vue (deleteReport, confirmDelete function), SignUp.vue(onMounted, isNullOrEmpty, validateStudentId, validateConfirmPasswd, validatePhone, validateEmail, validateStep1, validateStep2,  validateSubmit, nextStep, finish, addUser)

✅ **034** - Figma Design, Component Structure , Slider.vue (next, prev, imageSlider function), RepairList.vue (onMounted, getStatusColor, getProgressIcon, toggleDetails, handleEdit function), Slider.vue (onMounted), Reserve.vue, Payment.vue (onMounted, costFormat function)

✅ **054** - Figma Design, Component Structure , Announcement.vue, News.vue, Footer.vue, Profile.vue (onMounted), UpdateRepairForm.vue (onMounted, updateRepair, handleRepairEdit function), RoomDetail.vue (onMounted)

✅ **061** - Figma Design, Component Structure , Review.vue (onMounted, prevReview, nextReview, selectReview function), ReviewCard.vue, Login.vue (login, hashPassword, validateInput function), RegistrationSuccess.vue, SignUp.vue (onMounted, watchEffect)

--------------

# รายละเอียด Project

# 📌 **ระบบบริหารจัดการหอพัก**

## 📖 **ภาพรวม Project**

**ระบบบริหารจัดการหอพัก** เป็นเว็บแอปพลิเคชันที่ออกแบบมาเพื่อช่วยให้นักศึกษามหาวิทยาลัยสามารถ **จัดการบัญชีผู้ใช้ การชำระเงิน และการแจ้งซ่อมแซม** ได้อย่างสะดวกสบาย ระบบนี้มี interface ที่ใช้งานง่าย ทำให้นักศึกษาสามารถติดตามข่าวสารหอพัก เข้าสู่ระบบเพื่อดูข้อมูลส่วนตัว ชำระค่าเช่าผ่าน QR Code และติดตามสถานะแจ้งซ่อมได้อย่างมีประสิทธิภาพ

---

## ✨ **Main Features**

### 🏠 **Homepage**
- แสดงข้อมูลทั่วไปเกี่ยวกับหอพัก
- นำทางไปยังหน้าล็อกอินเพื่อเข้าถึงบริการอื่น ๆ

### 🔐 **Login Page**
- นักศึกษาสามารถเข้าสู่ระบบโดยใช้ **รหัสนักศึกษา** และ **รหัสผ่าน**
- เฉพาะผู้ที่เป็นผู้เช่าหอพักเท่านั้นที่สามารถเข้าถึงบริการของหอพักได้

### 👤 **Profile Page**
- แสดงรายละเอียดส่วนตัวและข้อมูลเกี่ยวกับหอพัก
- สามารถเข้าถึงบริการของหอพัก ได้แก่ **การจ่ายบิล** และ **การแจ้งซ่อมแซม**

### 👤 **Signup Page**
- นักศึกษาสามารถลงทะเบียนบัญชีใหม่ได้ โดยต้องกรอกข้อมูลส่วนตัว รวมถึงรายละเอียดการเช่าให้ครบถ้วน

### 💰 **Payment Page**
- แสดง **ข้อมูลผู้เช่า** และ **รายละเอียดห้องพัก**
- แสดง **ใบเสร็จค่าใช้จ่าย** พร้อมรายละเอียด **ค่าเช่าห้อง** และ **ค่าไฟฟ้า** (ค่าน้ำฟรี ไม่รวมในบิล)
- มี **QR Code** สำหรับการชำระเงินผ่านแอปพลิเคชันธนาคาร

### 🔧 **Repair Page**
- แสดง **รายการแจ้งซ่อมแซม** ที่ผู้เช่าเคยแจ้งไป
- แสดง **สถานะการดำเนินการ** ("กำลังดำเนินการ" หรือ "เสร็จสมบูรณ์")
- สามารถ **ดูรายละเอียดของการแจ้งซ่อมแต่ละรายการ** ได้
- มี **แบบฟอร์มแจ้งซ่อม** เพื่อให้ผู้เช่าสามารถแจ้งปัญหาเพิ่มเติม

---

## 🔄 **การทำงานของ CRUD ในระบบ**

### ✅ การสร้างข้อมูล (Create)
- **การสร้างบัญชี**: ผู้เช่าสามารถสร้างบัญชีใหม่ได้

### 🔍 การอ่านข้อมูล (Read)
- **ดูข้อมูลส่วนตัว**: ผู้เช่าสามารถดูรายละเอียดบัญชีของตนเองได้
- **ดูบิลค่าใช้จ่าย**: ผู้เช่าสามารถเข้าดูรายละเอียดค่าเช่าหอพักและค่าไฟ
- **ดูรายการแจ้งซ่อม**: ผู้เช่าสามารถดูประวัติการแจ้งซ่อมและสถานะปัจจุบัน

### ✏️ การแก้ไขข้อมูล (Update)
- **การแจ้งซ่อม**: ผู้เช่าสามารถส่งคำร้องแจ้งซ่อมใหม่ หรือลบการแจ้งซ่อมได้ (เป็นการแก้ไขรายการการแจ้งซ่อมภายใต้ studentId ของ user ที่กำลัง login อยู่) **จะลบได้เฉพาะก่อนที่เจ้าหน้าที่จะเริ่มดำเนินการ**
- **การแก้ไขข้อมูลแจ้งซ่อม**: ผู้เช่าสามารถแก้ไขรายละเอียดการแจ้งซ่อมได้ **เฉพาะก่อนที่เจ้าหน้าที่จะเริ่มดำเนินการ**

### ❌ การลบข้อมูล (Delete)
- **การลบบัญชี**: ผู้เช่าสามารถลบบัญชีของตนเองได้

---

# Component Structure
![image](https://github.com/user-attachments/assets/9b9f1187-0fe3-4942-b7b9-5e0dad0bb785)
![image](https://github.com/user-attachments/assets/b15f5f6d-c617-485b-95de-50b8458f739b)
![image](https://github.com/user-attachments/assets/a8e43c64-4cf8-4c12-90ad-a9b7849f1b43)

---

# คู่มือการใช้งานแอปพลิเคชัน
📝

---

# คลิปสาธิต features ของแอปพลิเคชัน
🎥

---

# แรงบันดาลใจในการพัฒนาแอปพลิเคชัน และแหล่งข้อมูลอ้างอิง

## 🎨 แรงบันดาลใจในการพัฒนาแอปพลิเคชัน  

แอปพลิเคชันนี้ได้รับแรงบันดาลใจจาก **ระบบหอพักของมหาวิทยาลัยพระจอมเกล้าธนบุรี (KMUTT)** โดยใช้แนวทางจากเว็บไซต์หอพักที่มีอยู่แล้ว แต่ปรับปรุงให้ทันสมัยขึ้น โดยมุ่งเน้นการ **ทำให้กระบวนการจัดการบัญชีผู้ใช้ การชำระเงิน และการแจ้งซ่อมสะดวกขึ้น** ผ่านระบบออนไลน์

---

## 📚 แหล่งข้อมูลอ้างอิง  

- **ข้อมูลรายละเอียดหอพักที่เปิดให้จอง**  
  - อ้างอิงจากเว็บไซต์หอพักมหาวิทยาลัยพระจอมเกล้าธนบุรี  
    🔗 [KMUTT Residence Hall - Rooms](https://residencehall.kmutt.ac.th/ห้องพัก%2Frooms-bangmod/)  

- **กฎระเบียบและข้อบังคับเกี่ยวกับหอพัก**  
  - ใช้ข้อมูลจากหน้าเว็บของมหาวิทยาลัย  
    🔗 [KMUTT Residence Hall - Rules & Regulations](https://residencehall.kmutt.ac.th/กฎระเบียบ-ประกาศ/)  

- **รูปแบบบิลค่าใช้จ่าย (ค่าห้อง, ค่าน้ำ, ค่าไฟ)**  
  - ใช้ข้อมูลจาก **แอปพลิเคชัน Modlink** ที่มีตัวอย่างบิลค่าใช้จ่าย

- **ระบบแจ้งซ่อมออนไลน์**  
  - ศึกษาระบบแจ้งซ่อมจากเว็บไซต์ของมหาวิทยาลัยขอนแก่น (KKU)  
    🔗 [KKU Dorm Repair System](https://sites.google.com/kku.ac.th/dorm-repair-1)  

- **Dropdown รายชื่อคณะและสาขาในหน้าสมัครสมาชิก (Sign Up)**  
  - อ้างอิงจากเว็บไซต์รายชื่อคณะของมหาวิทยาลัย  
    🔗 [KMUTT Faculties & Departments](https://www.kmutt.ac.th/custom-contact/คณะและหน่วยงาน/)  

- **การเขียน CSS**  
  - ใช้ ChatGPT เป็นเครื่องมือช่วยแนะนำและแก้ไข code CSS ให้เหมาะสม
