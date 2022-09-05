#!/bin/bash

if [ "$STATUS" = "ERROR" ]; then curl -H "Content-Type:application/json" -X POST --data "{
  \"attachments\": [
    {
      \"color\": \"#FF0000\",
      \"blocks\": [	
        {
          \"type\": \"section\",
          \"text\": {
            \"type\": \"mrkdwn\",
            \"text\": \"You can access the link on Gitlab:\n*<caminho github/-/jobs/$CI_JOB_ID|Access the job link>*\"
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
                \"text\": \"Artifact Error\"
              },
              \"style\": \"danger\",
              \"value\": \"click_me_123\",
              \"url\": \"caminho github/-/jobs/$CI_JOB_ID/artifacts/download\"
            },
          ]
        },
        {
					\"type\": \"header\",
					\"text\": {
						\"type\": \"plain_text\",
						\"text\": \"Please analyze the test artifact with errors!!!\",
						\"emoji\": true
					}
				},
      ]
    },
  ]
}" $SLACK_WEBHOOK ; fi
