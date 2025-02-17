const { User } = require('./db/models'); // Adjust the path to your models folder

(async () => {
  try {
    const user = await User.unscoped().findOne({ where: { username: 'Demo-lition' } });
    console.log('User found:', user);
  } catch (error) {
    console.error('Error fetching user:', error);
  } finally {
    process.exit(); // Exit the Node.js process
  }
})();
