# 概要
slack招待メール自動送信

## 詳細
slack招待メール送信をGASで自動化する

## ワークフロー
email入力画面(GoogleForm)<br>
　↓<br>
GAS実行（招待メール送信）<br>
　↓<br>
slackへ参加

### 準備物
- email入力画面
　GoogleForm:https://forms.gle/S6zBaA95GAWNhHkj9
- メール送信プログラム
　code.gs
- Slack Token生成
　https://api.slack.com > custom-integrations > legacy-tokens
- Slack メッセージングBot　Incoming Webhook
