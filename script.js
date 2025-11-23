function convertLength() {
    // 1. รับค่าจาก HTML Elements
    const inputValue = document.getElementById('inputValue').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const resultDisplay = document.getElementById('resultDisplay');

    // ตรวจสอบว่ามีการกรอกค่าหรือไม่ (และเป็นตัวเลขบวก)
    const value = parseFloat(inputValue);
    if (isNaN(value) || value < 0) {
        resultDisplay.textContent = 'กรุณาป้อนตัวเลขที่เป็นบวกที่ถูกต้อง';
        return;
    }

    let resultFeet;

    // 2. ตรรกะการแปลง (ใช้ Switch เพื่อจัดการแต่ละกรณี)
    switch (fromUnit) {
        case 'mm':
            // mm -> ft: คูณด้วย 0.00328084
            resultFeet = value * 0.00328084;
            break;
        case 'cm':
            // cm -> ft: คูณด้วย 0.0328084
            resultFeet = value * 0.0328084;
            break;
        case 'm':
            // m -> ft: คูณด้วย 3.28084
            resultFeet = value * 3.28084;
            break;
        default:
            // กรณีที่ไม่รู้จักหน่วย (ไม่ควรเกิดขึ้นหากเลือกจาก Dropdown)
            resultFeet = 'ไม่สามารถคำนวณได้';
    }

    // 3. แสดงผลลัพธ์
    if (typeof resultFeet === 'number') {
        // จำกัดทศนิยม 5 ตำแหน่งเพื่อให้ดูสะอาดตา
        resultDisplay.textContent = resultFeet.toFixed(5) + ' ft';
    } else {
        resultDisplay.textContent = resultFeet;
    }
}

// เรียกใช้ฟังก์ชันครั้งแรกเมื่อโหลดหน้า เพื่อแสดงผลลัพธ์เริ่มต้น
document.addEventListener('DOMContentLoaded', convertLength);