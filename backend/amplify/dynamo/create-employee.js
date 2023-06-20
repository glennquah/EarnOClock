const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-southeast-2' }); // Specify the AWS region

const dynamodb = new AWS.DynamoDB();

const tableName = 'Employees';

const params = {
  TableName: tableName,
  KeySchema: [
    { AttributeName: 'employeeId', KeyType: 'HASH' }, // Partition key
  ],
  AttributeDefinitions: [
    { AttributeName: 'employeeId', AttributeType: 'N' }, // N represents number data type
    { AttributeName: 'employeeName', AttributeType: 'S' }, 
    { AttributeName: 'numOfStars', AttributeType: 'N' }, 
    { AttributeName: 'tier', AttributeType: 'S' },
],
  ProvisionedThroughput: {
    ReadCapacityUnits: 4, // Adjust according to your app's needs
    WriteCapacityUnits: 4, // Adjust according to your app's needs
  },
};

dynamodb.createTable(params, function (err, data) {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created successfully:', data);

    // Insert employee records
    const docClient = new AWS.DynamoDB.DocumentClient();

    const employees = [
      { employeeId: 1, employeeName: 'Natasha', numOfStars: '100', tier:  'Wizard'},
      { employeeId: 2, employeeName: 'Glenn', numOfStars: '42', tier:  'Apprentice'},
      { employeeId: 3, employeeName: 'Zhi Wei', numOfStars: '10', tier:  'Rookie'},
      { employeeId: 4, employeeName: 'Jaylynn', numOfStars: '200', tier:  'Wizard'},
    ];

    employees.forEach((employee) => {
      const itemParams = {
        TableName: tableName,
        Item: employee,
      };

      docClient.put(itemParams, function (err, data) {
        if (err) {
          console.error('Error inserting employee:', err);
        } else {
          console.log('Employee inserted successfully:', employee);
        }
      });
    });
  }
});
