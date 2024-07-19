function getValue() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  if (weight && height) {
    let H = height / 100;
    let BMI = weight / (H * H);
    display(BMI);
  } 
  else {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
  }
}

function BMIcalculator(value) {
  if (value > 35) {
    return "อ้วนมากผิดปกติ";
  } else if (value > 30) {
    return "อ้วน ";
  } else if (value > 25) {
    return "เริ่มอ้วน";
  } else if (value > 18.5) {
    return "น้ำหนักปกติ น้ำหนักเหมาะสม";
  } else {
    return "ผอมเกินไป - น้ำหนักน้อยกว่าปกติ";
  }
}

function BMIdetails(value) {
  if (value > 35) {
    return "อ้วนมากผิดปกติ - เป็นน้ำหนักที่อันตรายมากแล้ว มีความเสี่ยงสูงมากต่อการเกิดโรคร้ายแรงที่แฝงมากับความอ้วน ทั้งโรคเบาหวาน และความดันโลหิตสูง ควรไปตรวจสุขภาพและปรึกษาแพทย์ทันทีเพื่อหาวิธีแก้ไข";
  } else if (value > 30) {
    return "อ้วน - เป็นน้ำหนักที่ค่อนข้างอันตราย เสี่ยงต่อการเกิดโรคร้ายแรงที่แฝงมากับความอ้วน หากค่า BMI อยู่ในระดับนี้ จะต้องปรับพฤติกรรมการทานอาหาร ต้องออกกำลังกาย ควรไปตรวจสุขภาพและปรึกษาแพทย์";
  } else if (value > 25) {
    return "เริ่มอ้วน - เป็นน้ำหนักที่เริ่มอ้วนในระดับหนึ่ง ถึงแม้จะไม่ถึงเกณฑ์ที่ถือว่าอ้วนมาก แต่ก็เริ่มมีความเสี่ยงต่อการเกิดโรคที่มากับความอ้วนได้เช่นกัน ทั้งโรคเบาหวาน และความดันโลหิตสูง ควรปรับพฤติกรรมการทานอาหาร เริ่มออกกำลังกาย และตรวจสุขภาพ";
  } else if (value > 18.5) {
    return "น้ำหนักปกติ น้ำหนักเหมาะสม - เป็นน้ำหนักที่เหมาะสมสำหรับคนไทย คือค่า BMI ระหว่าง 18.5-25 จัดอยู่ในเกณฑ์ที่ดี ห่างไกลโรคที่เกิดจากความอ้วน และมีความเสี่ยงต่อการเกิดโรคต่างๆ น้อยที่สุด ควรพยายามรักษาระดับค่า BMI ให้อยู่ในระดับนี้ให้นานที่สุด และควรตรวจสุขภาพทุกปี";
  } else {
    return "ผอมเกินไป - น้ำหนักน้อยกว่าปกติ ซึ่งก็ไม่ค่อยดีนัก หากคุณมีน้ำหนักน้อยเกินไปอาจเสี่ยงต่อการได้รับสารอาหารไม่เพียงพอหรือได้รับพลังงานไม่เพียงพอ ส่งผลให้ร่างกายอ่อนเพลียง่าย หรือเป็นโรคขาดสารอาหาร การรับประทานอาหารให้เพียงพอครบ 5 หมู่ในสัดส่วนที่พอเหมาะและการออกกำลังกายเพื่อเสริมสร้างกล้ามเนื้อ สามารถช่วยเพิ่มค่า BMI ให้อยู่ในเกณฑ์ปกติได้";
  }
}

function display(value) {
  if (value > 0) {
    document.getElementById("BIM").innerHTML =
      "<hr>" + "ดัชนีมวลกาย (BMI) = " + value.toFixed(2);
    document.getElementById("result").innerHTML = BMIcalculator(value);
    document.getElementById("details").innerHTML = BMIdetails(value);
  }
}

function clearValues() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("BIM").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("details").innerHTML = "";
}
