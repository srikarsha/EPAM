function validateForm() {
    let name = document.forms["studentForm"]["username"].value;
    let password = document.forms["studentForm"]["password"].value;
    let dob = document.forms["studentForm"]["dob"].value;
    let email = document.forms["studentForm"]["email"].value;
    let mobile = document.forms["studentForm"]["mobile"].value;
    let photo = document.forms["studentForm"]["photo"].value;

    if (/[^a-zA-Z0-9]/.test(name)) {
        alert("Username should not contain special characters.");
        return false;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }
    if (!email.includes("@")) {
        alert("Enter a valid email ID.");
        return false;
    }
    if (!/^\d{10}$/.test(mobile)) {
        alert("Enter a valid 10-digit mobile number.");
        return false;
    }
    if (!dob) {
        alert("Enter a valid date of birth.");
        return false;
    }
    if (!photo) {
        alert("Please upload your passport-size photo.");
        return false;
    }

    calculateAgeAndDisplay(name, dob, email, mobile);
    return false; // Prevent form submission to display data on the page.
}

function calculateAgeAndDisplay(name, dob, email, mobile) {
    let today = new Date();
    let birthDate = new Date(dob);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h2>Submitted Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Age:</strong> ${years} years, ${months} months, ${days} days</p>
    `;
}
