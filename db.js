const mysql = require('mysql');
const express = require('express');

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Q1w2e3r4;",
    authPlugin: 'mysql_native_password'
});

connection.connect((err) => {
    if(err) {
        console.log('Error connection to MySQL server', err);
        return;
    }
    console.log('Connected to MySQL server!');

    // Create a new database

    const databaseName = 'testDB';
    connection.query(`CREATE DATABASE IF NOT EXISTS ${databaseName}`, (err) => {
        if(err) {
            console.error('Error creating database: ', err);
            return;
        }
        console.log(`Databse '${databaseName}' created or already exists.`);

        // Use the new database
        connection.query(`USE ${databaseName}`, (err) => {
            if(err) {
                console.error('Error using databases: ', err);
                return;
            }
            console.log(`Using database '${databaseName}'`);
            
            // Create a new table
            const tableName = 'personalDetailsTB';
            connection.query(`
                CREATE TABLE IF NOT EXISTS ${tableName} (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    firstName VARCHAR(255)
                )
                `, (err) => {
                    if(err) {
                        console.error('Error creating table: ', err);
                        return;
                    }
                    console.log(`Table '${tableName}' created or already exists`);
                });
        });
    });
});

const saveFirstName = (firstName) => {
    return new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO personalDetailsTB(firstName) VALUES (?)', 
            [firstName], 
            (err, result) => {
                if(err){
                    PromiseRejectionEvent(err);
                } else {
                    resolve(result);
                }
            }
        );
    });
};

const getAllNames = () => {
    return new Promise((resolve, reject) => {
        connection.query(
            'SELECT firstName FROM personalDetailsTB',
            (err, results) => {
                if(err) {
                    reject(err);
                } else {
                    const names = results.map(row => row.firstName);
                    resolve(names);
                }
            }
        );
    });
};

module.exports = {
    saveFirstName, 
    getAllNames
}