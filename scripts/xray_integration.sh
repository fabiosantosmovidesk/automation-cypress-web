#!/bin/sh

client_id=$1
client_secret=$2
testPlanId=$3
testExecKey=$4

echo client_id $1
echo client_secret $2
echo testplan $3
echo testexec $4

# CURL_ADDITIONAL_ARGUMENTS=
# if [[ "$CURL_INSECURE_ENABLED" = "true" ]]; then
#   CURL_ADDITIONAL_ARGUMENTS=" -k"
# fi

token_xray=$(curl -H "Content-Type: application/json" -X POST --data "{ \"client_id\": \"$client_id\",\"client_secret\": \"$client_secret\" }" -k https://xray.cloud.xpand-it.com/api/v1/authenticate| tr -d '"')

# shellcheck disable=SC2045
# shellcheck disable=SC2006

for i in `ls cypress/mocha-xml/*.xml*`;
do
  curl -H "Content-Type: text/xml" -X POST -H "Authorization: Bearer $token_xray" --data "@$i"  -k "https://xray.cloud.xpand-it.com/api/v1/import/execution/junit?projectKey=AQT&testPlanKey=$testPlanId&testExecKey=$testExecKey";
done
