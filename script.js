async function analyzeWallet() {
    const walletAddress = document.getElementById('wallet').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Analyzing...";

    try {
        const response = await fetch("https://degen-oracle-backend.onrender.com/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ wallet_address: walletAddress })
        });

        const data = await response.json();
        resultDiv.innerHTML = `
            <b>Verdict:</b> ${data.verdict}<br>
            <b>Synopsis:</b> ${data.synopsis}
        `;
    } catch (error) {
        resultDiv.innerHTML = "Error analyzing wallet.";
    }
}
