const AssistantV1 = require('watson-developer-cloud/assistant/v1');

const Credentials = require('../../config/config');

let wastonAssistant = new AssistantV1({
    version: "2018-02-16",
    username: Credentials.WA_username,
    password: Credentials.WA_password
});

exports.sendMessage = function (req, res, next) {
    wastonAssistant.message({
        workspace_id: Credentials.WA_workspace_id,
        input: { text: req.body.message },
        context: req.body.context
    }, (err, response) => {
        if (err) {
            next(err);
        } else {
            let responseMsg = [response.output.text];
            response.intents.forEach((intent) => {
                if (intent.intent === "referenceNumber") {
                    responseMsg[0] = responseMsg[0] + response.context.conversation_id;
                }
            });
            res.json({
                response: responseMsg,
                context: response.context
            });
        }
    });
};

exports.getIntents = function (req, res, next) {
    wastonAssistant.listIntents({
        workspace_id: Credentials.WA_workspace_id,
        export: true
    }, (err, response) => {
        if (err) {
            next(err);
        } else {
            res.json(response);
        }
    });
};

exports.getEntities = function (req, res, next) {
    wastonAssistant.listEntities({
        workspace_id: Credentials.WA_workspace_id,
        export: true
    }, (err, response) => {
        if (err) {
            next(err);
        } else {
            res.json(response);
        }
    });
};

exports.updateIntents = function (req, res, next) {
    wastonAssistant.createExample({
        workspace_id: Credentials.WA_workspace_id,
        intent: req.body.intent,
        text: req.body.text
    }, (err, response) => {
        if (err) {
            next(err);
        } else {
            res.json(response);
        }
    });
};

exports.updateEntities = function (req, res, next) {
    wastonAssistant.createSynonym({
        workspace_id: Credentials.WA_workspace_id,
        entity: req.body.entity,
        value: req.body.type,
        synonym: req.body.value
    }, (err, response) => {
        if (err) {
            next(err);
        } else {
            res.json(response);
        }
    });
};

exports.getLogs = function (req, res, next) {
    wastonAssistant.listLogs({
        workspace_id: Credentials.WA_workspace_id,
        filter: `request.context.conversation_id::${req.body.conversation_id}`
        //filter: `request.context.conversation_id::a14aa746-8668-4633-94a3-07617ac2cda1`
    }, (err, response) => {
        if (err) {
            next(err);
        } else {
            let chatLog = [];
            response.logs.forEach((logItem) => {
                chatLog.push({
                    text: logItem.response.input.text,
                    isOwn: true
                });
                chatLog.push({
                    text: logItem.response.output.text,
                    isOwn: false
                });
            });
            res.json(chatLog);
        }
    });
};
