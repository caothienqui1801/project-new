import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setUser(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <h2>Đang tải...</h2>
    }
    if (!user) {
        return <p>Không tìm thấy người dùng!!</p>
    }

    return (
        <div>
            <h2>Thông tin người dùng</h2>
            <p><strong>Tên: </strong>{user.name}</p>
            <p><strong>Email: </strong>{user.email}</p>
            <p><strong>Số điện thoại: </strong>{user.phone}</p>
            <p><strong>Website: </strong>{user.website}</p>

            <Link to="/users"> *Quay lại trang Web ban đầu*</Link>
        </div>
    )

}