# Lambretta Time Attendance

ระบบบันทึกเวลาเข้า–ออกงานด้วยการจดจำใบหน้าและตรวจสอบตำแหน่ง GPS สำหรับ 3 สาขา:

- Lambretta Salaya
- Lambretta Kanchana
- Lambretta Ekkachai

แต่ละสาขาใช้เว็บไซต์ ฐานข้อมูลใบหน้า ตารางเวลา และการตั้งค่า GPS แยกจากกัน แม้จะอยู่ใน Google Spreadsheet และ Google Apps Script ชุดเดียวกัน

## วิธีทำงาน

1. ลงทะเบียนใบหน้าพนักงานจาก URL ของสาขาที่ต้องการ
2. การสแกนครั้งแรกของวันจะบันทึกเวลาเข้า
3. การสแกนครั้งถัดไปของวันจะบันทึกเวลาออก โดยการสแกนออกซ้ำจะอัปเดตเวลาออกล่าสุด
4. หน้าแรกแสดงรายชื่อ เวลาเข้า เวลาออก แผนที่ และหมายเหตุของวันปัจจุบัน

## แท็บใน Google Sheet

| สาขา | ใบหน้า | เวลาเข้า–ออก |
| --- | --- | --- |
| Salaya | `Faces_Salaya` | `Salaya` |
| Kanchana | `Faces_Kanchana` | `Kanchana` |
| Ekkachai | `Faces_Ekkachai` | `Ekkachai` |

แท็บ `Config` เก็บค่าพิกัดและรัศมี GPS แยกตามสาขา ส่วนแท็บ `Engineer_*` เดิมจะไม่ถูกใช้งานโดยเว็บไซต์เวอร์ชันนี้ แต่ข้อมูลเดิมยังคงอยู่

## ไฟล์หลัก

- `index.html` — หน้าหลักและตารางเวลาประจำวัน
- `register.html` — ลงทะเบียนใบหน้า
- `scan.html` — สแกนเวลาเข้า–ออกงาน
- `config.html` — ตั้งค่า API และตำแหน่ง GPS
- `js/api-config.js` — ระบุสาขาและ Google Apps Script URL
- `apps-script/Code.gs` — Backend ที่เชื่อมกับ Google Sheet
