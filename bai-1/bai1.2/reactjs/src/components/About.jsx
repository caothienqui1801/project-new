import { useState, useEffect } from "react";

export default function About() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) {
        return <h3>Loading...</h3>;
    }

    return (
        <div>
            <h2>Giới Thiệu</h2>
            <p>Đây là trang giới thiệu đơn giản của ứng dụng React !!</p>
        </div>
    );
}