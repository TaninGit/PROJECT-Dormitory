# PROJECT2-SEC-1-GooseBomb

## รายชื่อสมาชิก

| ลำดับ | รหัสนักศึกษา   | ชื่อ-นามสกุล                 | GitHub Username | สัดส่วนเปอร์เซ็นต์การทำงาน |
|-------|-----------------|---------------------|-----------------|-----------------|
| 1     | 66130500018     | ชนันธร ศรีวรชัย         |   mook2005      | 20% |
| 2     | 66130500021     | ชัญญา นิ่มถาวร         |    CNProud       | 20% |
| 3     | 66130500034     | ทนิน เก้าเอี้ยน          |    TaninGit      | 20% |
| 4     | 66130500054     | เบญญาพร เมธาวิวรรธน์กุล  |    Benyaporn54   | 20% |
| 5     | 66130500061     | ปัณณพร อโนทัยสินทวี     |    Butt3rPann    | 20% |

-------------

## Weekly Progress

| ลำดับ | รหัสนักศึกษา   |      สัปดาห์ที่ 1     |     สัปดาห์ที่ 2   |    สัปดาห์ที่ 3    |    สัปดาห์ที่ 4    |    สัปดาห์ที่ 5    |
|------|--------------|-----------------|-----------------|-----------------|-----------------|-----------------|
| 1     | 66130500018     |    Figma Design  | Component Structure , Navbar.vue (setUnderline, resetUnderline, openDropdown, closeDropdown function), Room.vue, Roomtype.vue | RepairForm.vue (onMounted, validateSubmit, submitAction function), AddRepairForm.vue (onMounted, addNewRepair, handleNewRepair function), update Dropdown.vue (watch) | central index.js, localStorage currentUser handling, Rule.vue, integrate all components with index.js and localStorage (useRouter), update main.js, Navbar.vue (computed, goToProfileOrLogin function), RoomType.vue (defineProps), Profile.vue (logout function) | update Profile.vue (deleteUser, deleteRepair function), Payment.vue,  RepairForm.vue, SignUp.vue (validateRoomID function) |
| 2     | 66130500021     |    Design System, Figma Design  | Component Structure , Banner.vue, Reason.vue | Dropdown.vue (toggleDropdown, selectItem function), Input.vue, Button.vue, RepairList.vue (deleteReport, confirmDelete function) | SignUp.vue (onMounted, isNullOrEmpty, validateStudentId, validateConfirmPasswd, validatePhone, validateEmail, validateStep1, validateStep2,  validateSubmit, nextStep, finish, addUser), update Dropdown.vue | update Component Structure, Payment.vue, Profile.vue |
| 3     | 66130500034     |    Figma Design  | Component Structure , Slider.vue (next, prev, imageSlider function)| RepairList.vue (onMounted, getStatusColor, getProgressIcon, toggleDetails, handleEdit function), Slider.vue (onMounted), update Slider.vue | Payment.vue (onMounted, costFormat function) | AboutUs.vue, update RepairList.vue (sortedReports function), RepairForm.vue, SignUp.vue (validateStudentIdExist, addRepair function) |
| 4     | 66130500054     |    Figma Design  | Component Structure , Announcement.vue, News.vue, Footer.vue | Profile.vue (onMounted), UpdateRepairForm.vue (onMounted, updateRepair, handleRepairEdit function), update Announcement.vue (onMounted) | RoomDetail.vue (onMounted) | NewList.vue (onMounted), update News.vue, Announcement.vue, RepairForm.vue (edit layouts), Input.vue (watch), Payment.vue, Profile.vue |
| 5     | 66130500061     |    Figma Design  | Component Structure , Review.vue, ReviewCard.vue | Login.vue (login, hashPassword, validateInput function), update Review.vue (onMounted, prevReview, nextReview, selectReview function) | RegistrationSuccess.vue, SignUp.vue (onMounted, watchEffect), update Review.vue, Input.vue (watch) | ContactUs.vue, ContactBox.vue, update Login.vue |

--------------


# การแบ่งงาน

✅ **018** - Figma Design, Component Structure , Navbar.vue (setUnderline, resetUnderline, openDropdown, closeDropdown function), Room.vue, Roomtype.vue, RepairForm.vue (onMounted, validateSubmit, submitAction function), AddRepairForm.vue (onMounted, addNewRepair, handleNewRepair function), Rule.vue, central index.js, localStorage currentUser handling, integrate all components with index.js and localStorage (useRouter), update Profile.vue (logout, deleteUser, deleteRepair function), update SignUp.vue (validateRoomID function)

✅ **021** - Design System , Figma Design, Component Structure , Banner.vue, Reason.vue, Dropdown.vue (toggleDropdown, selectItem function), Input.vue, Button.vue, RepairList.vue (deleteReport, confirmDelete function), SignUp.vue (onMounted, isNullOrEmpty, validateStudentId, validateConfirmPasswd, validatePhone, validateEmail, validateStep1, validateStep2,  validateSubmit, nextStep, finish, addUser), update Component Structure

✅ **034** - Figma Design, Component Structure , Slider.vue (next, prev, imageSlider function), RepairList.vue (onMounted, getStatusColor, getProgressIcon, toggleDetails, handleEdit function), Slider.vue (onMounted), Reserve.vue, Payment.vue (onMounted, costFormat function), AboutUs.vue, update RepairList.vue (sortedReports function), SignUp.vue (validateStudentIdExist, addRepair function)

✅ **054** - Figma Design, Component Structure , Announcement.vue, News.vue, Footer.vue, Profile.vue (onMounted), UpdateRepairForm.vue (onMounted, updateRepair, handleRepairEdit function), RoomDetail.vue (onMounted), NewList.vue (onMounted), update Input.vue (watch)

✅ **061** - Figma Design, Component Structure , Review.vue (onMounted, prevReview, nextReview, selectReview function), ReviewCard.vue, Login.vue (login, hashPassword, validateInput function), RegistrationSuccess.vue, SignUp.vue (onMounted, watchEffect), Input.vue (watch), ContactUs.vue, ContactBox.vue

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
![image](https://github.com/user-attachments/assets/63639f27-7964-40e9-8f50-cd9e019269d1)
![Screenshot 2025-04-09 105946](https://github.com/user-attachments/assets/7194e35e-7ed4-4d1e-82e5-bb8e6a3e65e6)
![Screenshot 2025-04-09 105958](https://github.com/user-attachments/assets/90f62d39-5fcc-4eb3-b7c6-a35012115149)
![Screenshot 2025-04-09 110011](https://github.com/user-attachments/assets/27856cde-a893-42e9-86f7-b3f2b72a7b0c)


---

# คู่มือการใช้งานแอปพลิเคชัน
## 📖 คู่มือการใช้งานระบบหอพักมหาวิทยาลัย

ระบบหอพักนักศึกษาเป็นระบบที่ช่วยให้นักศึกษาที่พักในหอสามารถจัดการข้อมูลส่วนตัว 💼 ชำระบิล 💰 แจ้งซ่อม 🛠️ และจัดการบัญชีได้อย่างสะดวก รวดเร็ว และปลอดภัย โดยคู่มือนี้จะอธิบายขั้นตอนการใช้งานระบบในแต่ละส่วน ดังนี้

---

## 1. 🔑 การเข้าสู่ระบบ (Login) และสมัครสมาชิก (Sign Up)

### 🔓 เข้าสู่ระบบ (Login)
1. กดที่ไอคอน **โปรไฟล์** 👤 บริเวณมุมขวาบนของหน้าจอ
2. กรอกข้อมูลดังนี้:
   - 📌 **รหัสนักศึกษา**
   - 🔑 **รหัสผ่าน**
3. คลิกที่ปุ่ม **"เข้าสู่ระบบ"** ✅
4. หากยังไม่มีบัญชี กดที่ข้อความ **"สมัครใช้งาน"** ➡️ เพื่อไปที่หน้าสมัครสมาชิก

### 📝 สมัครสมาชิก (Sign Up)
1. กรอกข้อมูลดังนี้:
   - 📌 **รหัสนักศึกษา**
   - 🔑 **รหัสผ่าน + ยืนยันรหัสผ่าน**
   - 🏷️ **ชื่อจริง**
   - 🏷️ **นามสกุล**
   - 🚻 **เพศ**
   - 📧 **อีเมล**
   - 📞 **เบอร์โทรศัพท์**
   - 🎓 **คณะ**
   - 📚 **สาขา**
   - 🏠 **เลขห้องพัก**
   - 🏡 **ประเภทห้องพัก**
2. คลิกที่ปุ่ม **"เสร็จสิ้น"** 🎉
3. ระบบจะแสดงข้อความยืนยันการลงทะเบียน เมื่อคุณกดปุ่ม **"ตกลง"** ✅ ระบบจะนำคุณกลับไปที่หน้าเข้าสู่ระบบ

---

## 2. 👤 หน้าโปรไฟล์ (Profile)

หลังจากเข้าสู่ระบบสำเร็จ ระบบจะแสดงหน้า **โปรไฟล์** ซึ่งมีรายละเอียดและบริการต่าง ๆ ดังนี้:

### 📌 ข้อมูลผู้ใช้
- 🏷️ **ชื่อ-นามสกุล**
- 📧 **อีเมล**
- 📞 **เบอร์โทรศัพท์**

### ⚙️ Service
ในหน้าโปรไฟล์จะมีบริการหลักให้เลือก 2 อย่าง คือ:
- 💳 **จ่ายบิลหอพัก**
- 🛠️ **แจ้งซ่อม**

### ❌ ลบบัญชี (Delete Account)
1. กดปุ่ม **"Delete Account"** ❌ (สีแดง)
2. ระบบจะแจ้งเตือนให้ยืนยันการลบ ⚠️
3. หากยืนยัน ระบบจะลบข้อมูลทั้งหมดถาวร รวมถึงข้อมูลการชำระเงินและประวัติการแจ้งซ่อม 🗑️

### 🔐 ออกจากระบบ (Log Out)
1. กดปุ่ม **"Log Out"** 🚪 (สีแดง) เพื่อออกจากระบบ
2. ระบบจะนำคุณกลับไปที่หน้า **Login** 🔄

---

## 3. 💳 บริการจ่ายบิลหอพัก

เมื่อเลือกบริการ **จ่ายบิลหอพัก** ระบบจะแสดงข้อมูลที่เกี่ยวข้องกับการชำระค่าบิลของคุณ:
- 📌 **ข้อมูลส่วนตัว**
- 🧾 **ใบเรียกเก็บเงิน** (ชำระค่าห้องพัก-ค่าสาธารณูปโภคภายในหอพัก)

---

## 4. 🛠️ บริการแจ้งซ่อมออนไลน์

### 📝 รายการการแจ้งซ่อม
1. เมื่อเข้าสู่หน้าการแจ้งซ่อม คุณจะเห็นรายการการแจ้งซ่อมทั้งหมดที่ได้ทำรายการไว้ โดยจะแสดงรายละเอียดดังนี้:
   - ⏰ **เวลา**
   - 🔄 **สถานะ** (⏳ รอดำเนินการ, 🏗️ กำลังดำเนินงาน, ✅ ดำเนินการเรียบร้อย)
   - 🛠️ **รายละเอียดการซ่อมแซม**
   - 🔧 **ประเภทงานซ่อม** (⚡ งานไฟฟ้า, 🚰 งานประปา, 🏠 อื่นๆ)
2. หากคลิกที่รายการใดรายการหนึ่ง ระบบจะแสดงรายละเอียดเพิ่มเติมของการแจ้งซ่อมนั้นๆ 

### ✏️ การแก้ไขหรือลบการแจ้งซ่อม (เมื่อสถานะเป็น "รอดำเนินการ")
หากสถานะการแจ้งซ่อมเป็น **"รอดำเนินการ"** ⏳ คุณสามารถทำการ **แก้ไข** หรือ **ลบ** การแจ้งซ่อมนั้นได้:
- ✏️ กดที่ปุ่ม **"แก้ไข"** หากต้องการแก้ไขรายละเอียด
- 🗑️ กดที่ปุ่ม **"ลบ"** หากต้องการยกเลิกการแจ้งซ่อม

### 📝 กรอกฟอร์มแจ้งซ่อม
1. คลิกที่ปุ่ม **"กรอกฟอร์มแจ้งซ่อม"** 📝 เพื่อเริ่มการแจ้งซ่อมใหม่
2. กรอกรายละเอียดการแจ้งซ่อมให้ครบถ้วน:
   - 🔧 **ประเภทงาน**
   - 🛠️ **รายละเอียดการชำรุดเสียหาย**
   - 📅 **วันนัดหมาย**
   - ⏰ **เวลานัดหมาย**
3. เมื่อกรอกข้อมูลเสร็จแล้ว คลิกที่ปุ่ม **"เสร็จสิ้น"** ✅ ระบบจะบันทึกการแจ้งซ่อมและกลับไปที่หน้า **รายการการแจ้งซ่อมทั้งหมด** 📜

---

## 👨‍🔧 ข้อมูลผู้ใช้งานและรายการแจ้งซ่อม
### สำหรับทดสอบการ Log in และตรวจสอบรายการแจ้งซ่อม

| 🎓 รหัสนักศึกษา | 🔑 รหัสผ่าน           | 🛠️ รอดำเนินการ | 🏗️ กำลังดำเนินการ | ✅ ดำเนินการเรียบร้อย |
|------------------|------------------------|------------------|---------------------|--------------------------|
| 66130500018      | 018_Chananthorn        | 1                | 1                   | 1                        |
| 66130500021      | 021_Chanya             | 2                | 0                   | 1                        |
| 66130500034      | 034_Tanin              | 0                | 1                   | 1                        |
| 66130500054      | 054_Benyaporn          | 5                | 2                   | 3                        |
| 66130500061      | 061_Pannaporn          | 0                | 0                   | 6                        |


---

# คลิปสาธิต features ของแอปพลิเคชัน
🎥 https://drive.google.com/file/d/1655l8M7gFblHXNPupWMzK-L3vtj6OdTq/view

# Web Demo
**[Web demo](https://project-dormitory.onrender.com/homepage)**

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
