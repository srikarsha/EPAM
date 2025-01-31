document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const employeeData = {
            empId: document.getElementById('empId').value,
            empName: document.getElementById('empName').value,
            designation: document.getElementById('designation').value,
            joinDate: document.getElementById('joinDate').value,
            uanNo: document.getElementById('uanNo').value,
            pfNo: document.getElementById('pfNo').value,
            esiNo: document.getElementById('esiNo').value,
            bank: document.getElementById('bank').value,
            accountNo: document.getElementById('accountNo').value,
            birth: document.getElementById('birth').value,
            age: calculateAge(document.getElementById('birth').value)
        };
        
        localStorage.setItem('employeeData', JSON.stringify(employeeData));
        
        window.location.href = 'index2.html';
    });
});

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}
