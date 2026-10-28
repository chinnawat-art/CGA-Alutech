// เว็บนี้เป็นเวอร์ชันเก่า (ก.ค. 2569) — ย้ายไปแล้วที่ https://chinnawat-art.github.io/CCGA/
// ไม่มีกุญแจฐานข้อมูลในไฟล์นี้แล้ว หน้าเก่าที่ค้างอยู่จะต่อฐานข้อมูลไม่ได้และถูกพาไปเว็บใหม่
window.SUPABASE_CONFIG = null;
(function(){ var p = location.pathname.split('/').pop() || 'index.html';
  var live = ["backup_stock.html","damage_report.html","dashboard.html","executive_dashboard.html","executive_dashboard_money.html","index.html","login.html","material_prep.html","production.html","production_history.html","shipping_labels.html","sku_manage.html","stock_bom_manage.html","stock_count.html","stock_management.html","user_management.html"];
  location.replace('https://chinnawat-art.github.io/CCGA/' + (live.indexOf(p) >= 0 ? p : 'index.html')); })();
