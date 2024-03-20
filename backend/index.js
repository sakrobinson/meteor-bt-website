const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'], // Contabo VPS 172.17.0.2
  localDataCenter: 'datacenter1', // docker exec -it 1588fce95164 nodetool status
  keyspace: 'weather_data' // replace with your keyspace
});

client.connect()
  .then(() => console.log('Connected to Cassandra'))
  .catch(e => console.error(e));