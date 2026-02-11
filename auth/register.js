export function register(username, password, email) {
// Registration implementation
console.log('User registered:', username);
return { success: true, userId: Date.now() };
}
