import express from "express";

const app = express();
const port = 3000;
const routes = "/users";

//post với put cần để đọc dược dữ liệu json !!
app.use(express.json());

const users = [
    { "id": 1, "name": "Cao Thien Qui", "email": "caothienqui1801@gmail.com" },
    { "id": 2, "name": "Nguyen Duy Phuoc", "email": "nguyenduyphuoc25082006@gmail.com" },
    { "id": 3, "name": "Duong Thuy Kieu", "email": "duongthuykieu100306@gmail.com" },
    { "id": 4, "name": "Nguyen MinH Toan", "email": "Tonchuppy@gmail.com" },
    { "id": 5, "name": "Tran Thanh Phu", "email": "PhuNgao@gmail.com" },

]

app.post(`${routes}`, (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ err: "Hãy nhập đầy đủ thông tin !!" });

    } else {

        let newId;

        if (users.length > 0) {
            newId = users[users.length - 1].id + 1;
        } else {
            newId = 1;
        }
        const newUser = { "id": newId, "name": name, "email": email };

        users.push(newUser);
        res.json({ newUser });

        return res.json({ "Thông báo": "Đã thêm thành công!" });

    };
})

app.listen(port, () => {
    console.log(`Server chạy thành công tại:http://localhost:${port}${routes}`);
})

