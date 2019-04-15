function sendToSlack(body, channel) {
  // Incoming Webhookで生成されたWebhook URL
  var url = "<Webhook URL>";
  var data = { "channel" : channel, "username" : "invitation bot", "text" : body, "icon_emoji" : ":gohst:" };
  var payload = JSON.stringify(data);
  var options = {
    "method" : "POST",
    "contentType" : "application/json",
    "payload" : payload
  };
  var response = UrlFetchApp.fetch(url, options);
}

function test() {
  sendToSlack("It's a test message", "#general")
}

function onFormSubmit(e){

  var body = "公開版申請が来たよ\n";
  var introducer = ""; 
  var applicant = "";
  var plusUrl = "";
  var response = "";
  var channel = "<channel名>";
  var itemResponse = e.response.getItemResponses();
  
  for (var j = 0; j < itemResponse.length; j++){    
    response = itemResponse[j].getResponse();
  }
  sendToSlack(response, channel);
  slack_api(response);
}

function slack_api(response){
  // ワークスペース名を指定する
  var slack_team = "<workspace>"
  // legacy_tokenを指定する
  var slack_token = "<legacy_token>"
  var url = "https://"+ slack_team +".slack.com/api/users.admin.invite";
  var query = "email="+response+"&token="+slack_token+"&set_active=true";

  var parameters = {
    method : "post",
    payload : query
  };
  var response = UrlFetchApp.fetch(url, parameters);
}