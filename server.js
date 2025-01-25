const express = require('express');
const multer = require('multer');
const app = express();

app.use(express.static('public'));
app.use(express.json());

// ذخیره فایل‌ها
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ message: 'فایل آپلود شد', file: req.file });
});

// شروع سرور
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});