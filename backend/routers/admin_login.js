const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const jwt = require('jsonwebtoken');

const router = express.Router(); // ✅ Change from `app = express()` to `router`

router.use(cors());
router.use(express.json());

admin.initializeApp({
    credential: admin.credential.cert(require('../config/serviceAccountKey.json')) // Firebase Admin SDK key
});

const SECRET_KEY = "your_secret_key"; // Change this

// Admin Login Route
router.post('/login', async (req, res) => {  // ✅ Use `router.post()` instead of `app.post()`
    try {
        const { email, password } = req.body;

        const snapshot = await admin.firestore().collection('admin_login')
            .where('email', '==', email).get();

        if (snapshot.empty) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        let adminData;
        snapshot.forEach(doc => adminData = { id: doc.id, ...doc.data() });

        // Compare password (Assuming plain text, replace with hashed password for security)
        if (adminData.password !== password) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: adminData.id, email: adminData.email },
            SECRET_KEY,
            { expiresIn: "1h" }
        );

        res.status(200).json({ token, admin: adminData });

    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router; // ✅ Export router instead of an Express app
