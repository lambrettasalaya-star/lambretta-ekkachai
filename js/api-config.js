// ============================================================
//  ตั้งค่า Google Apps Script Web App URL
//  1) Deploy ไฟล์ apps-script/Code.gs เป็น Web App
//  2) นำ URL ที่ได้ (ลงท้ายด้วย /exec) มาวางแทนที่ค่าว่างด้านล่าง
//  หรือจะไปกรอกในหน้า config.html ของเว็บก็ได้ (เก็บใน localStorage)
// ============================================================
const GAS_API_URL = '';
const SITE_CODE = 'ekkachai';
const SITE_NAME = 'Lambretta Ekkachai';

// ============================================================
//  ลิงก์ตั้งค่าอัตโนมัติ (สำหรับส่งให้ช่าง/พนักงานครั้งแรก)
//  เปิดเว็บด้วยลิงก์รูปแบบ:
//    https://<โดเมน>/?apiurl=<URL ของ GAS>&appkey=<รหัสลับ>
//  ระบบจะบันทึกค่าลงเครื่องให้อัตโนมัติ แล้วใช้งานได้เลยทุกครั้งถัดไป
// ============================================================
(function () {
  try {
    var p = new URLSearchParams(location.search);
    var apiurl = p.get('apiurl');
    var appkey = p.get('appkey');
    if (apiurl) localStorage.setItem('gasApiUrl', apiurl.trim());
    if (appkey !== null) localStorage.setItem('appKey', appkey.trim());
    if (apiurl || appkey !== null) {
      p.delete('apiurl');
      p.delete('appkey');
      var rest = p.toString();
      history.replaceState(null, '', location.pathname + (rest ? '?' + rest : ''));
    }
  } catch (e) {}
})();
