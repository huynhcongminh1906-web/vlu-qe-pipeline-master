/**
 * Hàm kiểm tra đăng nhập.
 * Tài khoản hợp lệ:
 * Username: admin
 * Password: 123
 *
 * Tham số locked mô phỏng trạng thái tài khoản bị khóa.
 */
function login(username, password, locked = false) {

    // Tài khoản bị khóa thì không được đăng nhập
    if (locked) {
        return false;
    }

    // Username hoặc password rỗng
    if (!username || !password) {
        return false;
    }

    // Kiểm tra tài khoản hợp lệ
    return username === 'admin' && password === '123';
}

module.exports = { login };
