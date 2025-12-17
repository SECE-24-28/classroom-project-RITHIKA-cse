const { connect } = require('./db-connect/db');
const mongoose = require('mongoose');

async function testConnection() {
  try {
    await connect();

    // Display connection details
    console.log('\n📊 Connection Details:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`Database Name: ${mongoose.connection.name}`);
    console.log(`Host: ${mongoose.connection.host}`);
    console.log(`Port: ${mongoose.connection.port}`);
    console.log(`Ready State: ${mongoose.connection.readyState} (1 = connected)`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // List all collections in the database
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`📁 Collections in database (${collections.length}):`);
    if (collections.length > 0) {
      collections.forEach((col, index) => {
        console.log(`   ${index + 1}. ${col.name}`);
      });
    } else {
      console.log('   No collections found (database is empty)');
    }

    console.log('\n✅ Database connection test successful!\n');

    // Close the connection
    await mongoose.connection.close();
    console.log('Connection closed.');

  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);
  }
}

testConnection();