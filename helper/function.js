import CryptoJS from 'crypto-js'



// ------------------------
//          Modal
// ------------------------

export function openModal() {
    if (typeof window !== 'undefined') {
        const modal = document.getElementById('my_modal_3');
        if (modal) {
            modal.showModal();
        }
    }
}

export function closeModal() {
    if (typeof window !== 'undefined') {
        const modal = document.getElementById('my_modal_3');
        if (modal) {
            modal.close();
        }
    }
}


// ------------------------
//      Camera Access
// ------------------------
export function cameraAccessControl(allowed) {
    // Check if the browser supports WebRTC
    if (allowed) {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Request permission to access the camera
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    // User has granted permission to use the camera
                    // You can now use the camera stream for your application
                    // For example, display it in a video element
                    console.log("Allowed")
                    const videoElement = document.getElementById('camera-preview');
                    if (videoElement) {
                        videoElement.srcObject = stream;
                    }
                })
                .catch(function (error) {
                    // User has denied or the browser does not support camera access
                    console.error('Error accessing the camera:', error);
                });
        } else {
            // Browser does not support WebRTC
            console.error('WebRTC is not supported in this browser.');
        }
    }

}


// ------------------------------------
//      Encryption and Decryption
// ------------------------------------
export function encryptDecryptString(inputString) {
    let key = "12345"; // use .env 
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        result += String.fromCharCode(inputString.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}
export function encryptQrCode(input) {
    let key = "12345"; // use .env 
    let inputString = JSON.stringify(input);
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        result += String.fromCharCode(inputString.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}



const secretKey = '1234567890123456';

// export const handleEncrypt = (inputObject) => {
//     let key = CryptoJS.enc.Utf8.parse('1234567890123456'); // Should be abstracted to your .env file
//     let iv = CryptoJS.enc.Utf8.parse('1234567890123456'); // Should be abstracted to your .env file

//     try {
//         // Convert the object to a JSON string
//         const jsonString = JSON.stringify(inputObject);

//         // Encrypt the JSON string
//         let encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(jsonString), key, {
//             keySize: 128 / 8,
//             iv: iv,
//             mode: CryptoJS.mode.CBC,
//             padding: CryptoJS.pad.Pkcs7
//         });

//         return encrypted.toString();
//     } catch (error) {
//         console.error('Encryption error:', error);
//         return null;
//     }
// };



// export const handleDecrypt = (encryptedText) => {
//     let key = CryptoJS.enc.Utf8.parse('1234567890123456'); // Should be the same key used for encryption
//     let iv = CryptoJS.enc.Utf8.parse('1234567890123456'); // Should be the same IV used for encryption

//     try {
//         let decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
//             keySize: 128 / 8,
//             iv: iv,
//             mode: CryptoJS.mode.CBC,
//             padding: CryptoJS.pad.Pkcs7
//         });

//         // Ensure that the decrypted result is a string
//         if (decrypted && decrypted.hasOwnProperty('words')) {
//             const jsonString = CryptoJS.enc.Utf8.stringify(decrypted);

//             // Parse the JSON string back to an object
//             const decryptedObject = JSON.parse(jsonString);
//             return decryptedObject;
//         } else {
//             console.error('Invalid decryption result:', decrypted);
//             return null;
//         }
//     } catch (error) {
//         console.error('Decryption error:', error);
//         return null;
//     }
// };



export const handleEncrypt = (inputObject) => {
    try {
        // Convert the object to a JSON string
        const jsonString = JSON.stringify(inputObject);

        // Compress the JSON string
        const compressedString = LZString.compress(jsonString);

        // Use WordArray directly for key
        const key = CryptoJS.lib.WordArray.create(CryptoJS.enc.Utf8.parse(secretKey));

        // Encrypt the compressed JSON string using AES
        const encrypted = CryptoJS.AES.encrypt(compressedString, key, {
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        // Convert the encrypted result to URL-safe Base64
        return encrypted.toString(CryptoJS.enc.Base64).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    } catch (error) {
        console.error('Encryption error:', error);
        return null;
    }
};




export const handleDecrypt = (encryptedText) => {
    try {
        // Use WordArray directly for key
        const key = CryptoJS.lib.WordArray.create(CryptoJS.enc.Utf8.parse(secretKey));
        const iv = CryptoJS.lib.WordArray.create(CryptoJS.enc.Utf8.parse('1234567890123456'));

        // Decrypt the Base64-encoded string
        const decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        // Ensure that the decrypted result is a string
        const jsonString = decrypted.toString(CryptoJS.enc.Utf8);

        // Hash the decrypted result using SHA-256
        const decryptedHash = CryptoJS.SHA256(jsonString).toString(CryptoJS.enc.Hex);
        console.log(decryptedHash)
        if (decryptedHash) {
            const decryptedObject = JSON.parse(jsonString);
            return decryptedObject;
        } else {
            console.error('Hash verification failed. Data may be tampered.');
            return null;
        }
    } catch (error) {
        console.error('Decryption and hash verification error:', error);
        return null;
    }
};











export function decryptQrCode(inputString) {
    let key = "12345"; // use .env 
    let result = '';
    // let inputString = JSON.stringify(input);
    for (let i = 0; i < inputString.length; i++) {
        result += String.fromCharCode(inputString.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    try {
        return JSON.parse(result);
    } catch (e) {
        alert("Invalid QR Code")
        return result
    }
}

// ------------------------
//      Cookies
// ------------------------
export function getCookieTheme() {
    let currentTheme = "";
    if (typeof document === "undefined") return "light";
    let cookie = document.cookie;
    if (cookie) {
        cookie.split(";").find((item) => item.includes("theme"));
        currentTheme = cookie.split("=")[1];
    }

    return currentTheme;
}

// --------------------------------
//     Get Qr Code into Data URL
// -------------------------------

