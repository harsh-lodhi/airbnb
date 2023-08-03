module.exports = {
    // ... other webpack configurations ...
    resolve: {
      alias: {
        // Your aliases go here
        '@src': path.resolve(__dirname, 'index'),
        // Add more aliases if needed
      },
    },
    // ... other webpack configurations ...
  };
  