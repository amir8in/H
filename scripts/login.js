function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "all" && password === "1399") {
        document.querySelector("main").style.display = "none";
        document.getElementById("mainApp").classList.remove("hidden");
    } else {
        document.getElementById("loginError").innerText = "نام کاربری یا رمز اشتباه است!";
    }
}

// رمزگذاری/رمزگشایی (مثل قبل)
const dict = {
    "ا": "@1",
    "ب": "B#",
    "پ": "P*",
    "ت": "^7",
    "ث": "&4",
    "ج": "J1",
    "چ": "C+",
    "ح": "H-",
    "خ": "X!",
    "د": "D0",
    "ذ": "Z%",
    "ر": "R&",
    "ز": "Z*",
    "ژ": "ZH$",
    "س": "S~",
    "ش": "SH@",
    "ص": "S!",
    "ض": "Z!",
    "ط": "T=",
    "ظ": "Z=",
    "ع": "E^",
    "غ": "GH#",
    "ف": "F*",
    "ق": "Q@",
    "ک": "K+",
    "گ": "G~",
    "ل": "L_",
    "م": "M3",
    "ن": "F2",
    "و": "V0",
    "ه": "H0",
    "ی": "Y1",
    " ": " "
};

const reverseDict = {};
for (let key in dict) reverseDict[dict[key]] = key;
const encodedKeys = Object.keys(reverseDict).sort((a, b) => b.length - a.length);

function encodeText() {
    const input = document.getElementById("textInput").value;
    let output = "";
    for (let char of input) output += dict[char] || char;
    document.getElementById("resultBox").innerText = output || "هیچی وارد نکردی!";
}

function decodeText() {
    const input = document.getElementById("textInput").value;
    let result = "",
        i = 0;
    while (i < input.length) {
        let matched = false;
        for (let key of encodedKeys) {
            if (input.substr(i, key.length) === key) {
                result += reverseDict[key];
                i += key.length;
                matched = true;
                break;
            }
        }
        if (!matched) {
            result += input[i];
            i++;
        }
    }
    document.getElementById("resultBox").innerText = result || "هیچی وارد نکردی!";
}

function copyToClipboard() {
    const text = document.getElementById("resultBox").innerText;
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    const btn = document.querySelector('.copy-btn:not(.small-btn)');
    const original = btn.innerText;
    btn.innerText = "✅ کپی شد";
    setTimeout(() => { btn.innerText = original; }, 1500);
}

function clearText() {
    document.getElementById("textInput").value = "";
}

async function pasteText() {
    try {
        const text = await navigator.clipboard.readText();
        document.getElementById("textInput").value = text;
    } catch (err) {
        alert("دسترسی به کلیپ‌بورد ممکن نیست.");
    }
}