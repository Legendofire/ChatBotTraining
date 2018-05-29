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
            res.json({
                response: response.output.text,
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
    }, (err, response) => {
        if (err) {
            next(err);
        } else {
            res.json(response);
        }
    });
};
