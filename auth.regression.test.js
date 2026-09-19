const { login } = require('./auth');

describe('Regression Test - Login', () => {

    test('Đăng nhập thành công với tài khoản hợp lệ', () => {
        expect(login('admin', '123')).toBe(true);
    });

    test('Đăng nhập thất bại khi mật khẩu sai', () => {
        expect(login('admin', '1234')).toBe(false);
    });

    test('Đăng nhập thất bại khi username sai', () => {
        expect(login('user', '123')).toBe(false);
    });

    test('Đăng nhập thất bại khi username rỗng', () => {
        expect(login('', '123')).toBe(false);
    });

    test('Đăng nhập thất bại khi password rỗng', () => {
        expect(login('admin', '')).toBe(false);
    });

    test('Đăng nhập thất bại khi username và password đều rỗng', () => {
        expect(login('', '')).toBe(false);
    });

    test('Đăng nhập thất bại khi mật khẩu chứa ký tự đặc biệt', () => {
        expect(login('admin', '123@')).toBe(false);
    });

    test('Đăng nhập thất bại khi tài khoản bị khóa', () => {
        expect(login('admin', '123', true)).toBe(false);
    });

});
