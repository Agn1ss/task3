const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

function gcd(a, b) {
    a = BigInt(a);
    b = BigInt(b);
    return b === 0n ? a : gcd(b, a % b);
}

function getLCM(a, b) {
    a = BigInt(a);
    b = BigInt(b);
    return (a * b) / gcd(a, b);
}

function isNaturalNumber(str) {
    return /^[1-9]\d*$/.test(str);
}

app.get('/iggolnik_gmail_com', (req, res) => {
    const xStr = req.query.x;
    const yStr = req.query.y;
    
    if (!xStr || !yStr || !isNaturalNumber(xStr) || !isNaturalNumber(yStr)) {
        return res.send('NaN');
    }
    
    try {
        const result = getLCM(xStr, yStr);
        res.send(result.toString());
    } catch (error) {
        res.send('NaN');
    }
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});