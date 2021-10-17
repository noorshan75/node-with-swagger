'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "testdbs", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "add_isActive",
    "created": "2021-10-17T10:37:25.282Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "testdbs",
        {
            "userId": {
                "type": Sequelize.UUID,
                "field": "userId",
                "primaryKey": true,
                "unique": true
            },
            "name": {
                "type": Sequelize.STRING,
                "field": "name"
            },
            "email": {
                "type": Sequelize.STRING,
                "field": "email",
                "unique": true,
                "defaultValue": "example@gmail.com"
            },
            "gender": {
                "type": Sequelize.STRING,
                "field": "gender"
            },
            "password": {
                "type": Sequelize.STRING,
                "field": "password"
            },
            "isDeleted": {
                "type": Sequelize.BOOLEAN,
                "field": "isDeleted",
                "defaultValue": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
