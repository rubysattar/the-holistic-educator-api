#!/bin/bash

API="http://localhost:4741"
URL_PATH="/students/:id/checkins"

curl "${API}/students/${ID}/checkins" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "checkIn": {
      "hadCheckIn": "'"${HADCHECKIN}"'",
      "note": "'"${NOTE}"'",
      "checkInDate": "'"${DATE}"'"
    }
  }'

echo
