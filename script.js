document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("updateProgressBtn").addEventListener("click", () => {
        const value = parseFloat(prompt("Enter progress (0-100):"));
        if (value >= 0 && value <= 100) {
            document.getElementById("progressBar").value = value;
        } else {
            alert("Enter a valid number between 0 and 100.");
        }
    });
});