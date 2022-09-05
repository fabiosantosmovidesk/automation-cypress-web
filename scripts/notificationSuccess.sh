#!/bin/bash

if [ "$STATUS" = "OK" ]; then curl -H "Content-Type:application/json" -X POST --data "{
  \"attachments\": [
    {
      \"color\": \"#007a5a\",
      \"blocks\": [	
        {
          \"type\": \"section\",
          \"text\": {
            \"type\": \"mrkdwn\",
            \"text\": \"You can access the link on Gitlab:\n*<caminho github/jobs/$CI_JOB_ID|Access the job link>*\"
          },
        },
        {
          \"type\": \"section\",
          \"fields\": [
            {
              \"type\": \"mrkdwn\",
              \"text\": \"*Environment:*\n$ENV\"
            },
            {
              \"type\": \"mrkdwn\",
              \"text\": \"*Tags:*\n$TAGS\"
            },
          ]
        },
        {
          \"type\": \"actions\",
          \"elements\": [
            {
              \"type\": \"button\",
              \"text\": {
                \"type\": \"plain_text\",
                \"emoji\": true,
                \"text\": \"Artifact Approve\"
              },
              \"style\": \"primary\",
              \"value\": \"click_me_123\",
              \"url\": \"caminho github/jobs/$CI_JOB_ID/artifacts/download\"
            },
          ]
        },
        {
					\"type\": \"header\",
					\"text\": {
						\"type\": \"plain_text\",
						\"text\": \"All tests succeeded!!!\",
						\"emoji\": true
					}
				},
      ]
    },
  ]
}" $SLACK_WEBHOOK ; fi
