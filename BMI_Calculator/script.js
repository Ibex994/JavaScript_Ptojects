document.getElementById("bmiform").addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form submit (default behavior)
  
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height_feet = parseFloat(document.getElementById('feet').value);
    const height_inches = parseFloat(document.getElementById('inches').value);
    const weight = parseFloat(document.getElementById('weight').value);
  
    if (gender && age && height_feet && height_inches && weight) {
      const height_meter = (height_feet * 12 + height_inches) * 0.0254;
      const bmi = weight / Math.pow(height_meter, 2);
  
      let result = '';
  
      if (bmi < 18.5) {
        result = `You are underweight, your IMC is ${bmi.toFixed(2)}`;
      } else if (bmi >= 18.5 && bmi < 24.9) {
        result = `Your weight is normal, your IMC is ${bmi.toFixed(2)}`;
      } else if (bmi >= 24.9 && bmi < 29.9) {
        result = `You are classified as overweight, your IMC is ${bmi.toFixed(2)}`;
      } else if (bmi >= 29.9) {
        result = `You are classified as obese, your IMC is ${bmi.toFixed(2)}`;
      } else {
        alert('Please enter all the details');
      }
      
      document.getElementById('result').textContent = result;
    }
  });