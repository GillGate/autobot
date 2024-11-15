const AWS = require("@aws-sdk/client-dynamodb");
const { marshall } = require("@aws-sdk/util-dynamodb");
require('dotenv').config();
const fs = require("fs");

// https://yandex.cloud/ru/docs/ydb/docapi/tools/aws-sdk/load-data

// Credentials should be defined via environment variables AWS_SECRET_ACCESS_KEY and AWS_ACCESS_KEY_ID
const dynamodb = new AWS.DynamoDBClient({
    region: "ru-central1",
    endpoint: process.env.YDB_DOC_ENDPOINT,
});

// создание таблицы
dynamodb.send(new AWS.CreateTableCommand({
    TableName : "Series",
    KeySchema: [
        { AttributeName: "series_id", KeyType: "HASH"},
        { AttributeName: "title", KeyType: "RANGE" }
    ],
    AttributeDefinitions: [
        { AttributeName: "series_id", AttributeType: "N" },
        { AttributeName: "title", AttributeType: "S" }
    ]
}))
    .then(data => {
        console.log("Таблица создана. Схема таблицы JSON:", JSON.stringify(data, null, 2));
    })
    .catch(err => {
        console.error("Не удалось создать таблицу. Ошибка JSON:", JSON.stringify(err, null, 2));
    })


console.log("Загрузка сериалов в YDB. Пожалуйста, подождите...");

// добавление массива данных
const allSeries = JSON.parse(fs.readFileSync('seriesdata.json', 'utf8'));

allSeries.forEach((series) => {
    dynamodb.send(new AWS.PutItemCommand({
        TableName: "Series",
        Item: {
            "series_id": series.series_id,
            "title": series.title,
            "info": series.info
        }
    }))
        .then(() => {
            console.log("Добавлен сериал:", series.title);
        })
        .catch(err => {
            console.error("Невозможно добавить сериал", series.title, ". Error JSON:", JSON.stringify(err, null, 2));
        })
});


// добавление отдельной записи в конкретную таблицу
const table = "Series";
const series_id = 3;
const title = "Supernatural";

const params = {
    TableName: table,
    Item: marshall({
        "series_id": series_id,
        "title": title,
        "info":{
            "release_date": "2015-09-13",
            "series_info": "Supernatural is an American television series created by Eric Kripke"
        }
    })
};

console.log("Добавление новой записи...");

dynamodb.send(new AWS.PutItemCommand(params))
    .then(data => {
        console.log("Сериал успешно добавлен:", JSON.stringify(data, null, 2));
    })
    .catch(err => {
        console.error("Не удалось добавить запись. Ошибка JSON:", JSON.stringify(err, null, 2));
    })