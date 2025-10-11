import express from "express";

const app = express();
const port = 3000;
const routes = "/users"

const users = [
    { "id": 1, "name": "Cao Thien Qui", "email": "caothienqui1801@gmail.com" },
    { "id": 2, "name": "Nguyen Duy Phuoc", "email": "nguyenduyphuoc25082006@gmail.com" },
    { "id": 3, "name": "Duong Thuy Kieu", "email": "duongthuykieu100306@gmail.com" },
    { "id": 4, "name": "Nguen MinH Toan", "email": "Tonchuppy@gmail.com" },
    { "id": 5, "name": "Tran Thanh Phu", "email": "PhuNgao@gmail.com" },

]

app.get(`${routes}/:id`, (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (user) {
        res.json({ "Nó đây nè: ": user });
    } else {
        res.status(404).send("không có thằng này");
    }
})

app.listen(port, () => {
    console.log(`Server chạy thành công tại:http://localhost:${port}${routes}`);
})