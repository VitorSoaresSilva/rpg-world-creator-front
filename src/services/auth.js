export const TOKEN_KEY = 'baseToken';
export const isAuthenticated = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    return token;
};
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};
